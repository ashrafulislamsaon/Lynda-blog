import { useContext, useEffect, useState } from 'react';
import AllPost from '../../components/AllPost/AllPost';
import Navbar from '../../components/Navbar/Navbar';
import Topbar from '../../components/Topbar/Topbar';
import './Home.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {
    const [posts, setPosts ] = useState([]);
    const {search} = useLocation();
    const {user} = useContext(AuthContext)


    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get("/posts" + search);
            setPosts(res.data)
        }
        fetchPosts()
    },[search])
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <AllPost posts={posts} key={posts._id}/>
        </div>
    );
};

export default Home;