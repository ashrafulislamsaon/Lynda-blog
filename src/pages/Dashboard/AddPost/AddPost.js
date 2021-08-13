import './AddPost.css'
import Topbar from "../../../components/Topbar/Topbar";
import Navbar from '../../../components/Navbar/Navbar';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios'



const AddPost = () => {
    const [title, setTitle ]= useState("");
    const [ desc, setDesc] = useState("");
    const [file, setFile]= useState(null);
    const {user} = useContext(AuthContext);



    const handlePost = async(e)=>{
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
        }
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try{
                await axios.post("/upload", data)
            }catch(err){
    
            }
        }
        try{
           await axios.post("/posts", newPost); // const res =
           window.location.replace("/") //"/post/" + res.data._id
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className='dashboard'>
            <Topbar />
            <Navbar />
            <div className="container dash-container">
                <div className="addPost">
                    <div className="postImgShow">
                        {file && <img src={URL.createObjectURL(file)} alt="" className="addPostTopImg"/>}
                    </div>
                    <form className="addPostForm" onSubmit={handlePost}>
                        <label htmlFor="file">
                            <abbr title="Choose file/photo" style={{textDecoration:"none", cursor:"pointer"}}><i class="fas fa-plus-circle fileInput"></i></abbr>
                        </label>
                        <input type="file" name="file" id="file" className="addImage" style={{ display: "none" }} onChange={e=> setFile(e.target.files[0])}/>
                        <input type="text" name="post-title" className="addPostTitle" placeholder='Title goes here..'autoFocus={true} onChange={e=> setTitle(e.target.value)}/>
                        <div className='addPostText '>
                            <textarea name="addPostDetail" placeholder='Write Details of Post..' className="addPostTitle addPostDetail" rows="20" onChange={e=> setDesc(e.target.value)}></textarea> 
                        </div>
                        <button type="submit" name="" id="" className="publishPost" > Publish</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddPost;