import './SinglePostPage.css';
import TopBar from '../../components/Topbar/Topbar';
import Navbar from '../../components/Navbar/Navbar'
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios"
import { AuthContext } from '../../context/AuthContext';


const SinglePostPage = () => {
    const [post, setPost] = useState({})

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const PF = "http://localhost:5000/images/";
    const {user} = useContext(AuthContext);

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updatedMode, setUpdatedMode] = useState(false)

    useEffect(() => {
        const getPost = async () => {
            const res = await axios("/posts/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost()
    }, [path]);
    
    const handleDelete = async()=>{
        try{
            await axios.delete(`/posts/${post._id}`, {data:{username: user.username}})
            window.location.replace("/")
        }catch(err){
            console.log(err);
        }
    }
    const handleUpdatePost = async()=> {
        try{
            await axios.put(`/posts/${post._id}`,
            {
                username: user.username,
                title,
                desc,
            })
            setUpdatedMode(false)
            
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className="singlePostPage">
            <TopBar />
            <Navbar />
            <div className="container py-2">
                <div className="row">
                    <div className="col-md-9">
                        <div className="card">
                            {post.photo && <img className="card-img-top single-post-img" src={PF + post.photo} alt="Card image cap" />}
                            { post.username === user?.username && (<div className="EditPost d-flex justify-content-end align-items-center p-2">
                                <i className="fas fa-edit postEditIcon" onClick={()=> setUpdatedMode(true)}></i>
                                <i className="fas fa-trash-alt postDeleteIcon" onClick={handleDelete}></i>
                            </div>)}
                            <div className="authorInfo px-2">
                                <span className="authorName">{post.username}</span>
                                <span className="postTime">{new Date(post.createdAt).toDateString()}</span>
                            </div>
                            <div className="card-body postInfo">
                                {updatedMode ? <input type="text" className="updatePostTitleInput mb-2 p-2" value={title} onChange={e => setTitle(e.target.value)}/>:
                                <h2>{title}</h2>
                                }
                                {
                                    updatedMode ? <textarea className="updatePostDescInput p-2 " value={desc} rows="10" onChange={e => setDesc(e.target.value)}/> : <p className="card-text">{desc}</p>
                                }
                                { updatedMode && <button className="updatePostBtn mt-2 px-3 py-2" onClick={handleUpdatePost}>Update</button>}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h2>Latest </h2>
                        <hr />
                        <ul className="latest-list">
                            <li className="latest-list-item"> &#62; This is the era of ict</li>
                            <li className="latest-list-item"> &#62; World economy has been not so good for the last two years</li>
                            <li className="latest-list-item"> &#62; Python will be the next programming language to dominate</li>
                            <li className="latest-list-item"> &#62; Human being is in great loss of morality</li>
                            <li className="latest-list-item"> &#62; Bangladesh is becoming a developing country day by day</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SinglePostPage;