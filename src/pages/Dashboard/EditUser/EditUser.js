import './EditUser.css';
import Topbar from '../../../components/Topbar/Topbar';
import Navbar from '../../../components/Navbar/Navbar';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';
// import { updateFailure, updateStart, updateSuccess } from '../../../context/AuthActions';



const EditUser = () => {

    const [username, setUsername ]= useState("");
    const [ password, setPassword] = useState("");
    const [file, setFile]= useState(null);
    const [updated, setUpdated ] = useState(false);

    const {user, dispatch} = useContext(AuthContext);

    const PF = "http://localhost:5000/images/";

    const handleUser = async(e)=>{
        e.preventDefault();
        dispatch({type: "UPDATE_START"})
        const updatedUser = {
            userId: user._id,
            username,
            password,
        }
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePicture = filename;
            try{
                await axios.post("/upload", data)
            }catch(err){
    
            }
        }
        try{
           const res = await axios.put("/users/" + user._id, updatedUser);
           setUpdated(true);
           dispatch({type: "UPDATE_SUCCESS", payload: res.data}) 
           console.log(res.data);
        }catch(err){
            dispatch({type: "UPDATE_FAILURE"})
        }
        
    }



    return (
        <div className="editUser">
            <Topbar />
            <Navbar />
            <div className="container">
                <div className="userImgEdit">
                    <img src={file ? URL.createObjectURL(file) : PF + user.profilePicture} alt="" className="userCurrentImg" />
                    <label htmlFor="userNewImg">
                        <i class="far fa-edit EditIcon"></i>
                    </label>
                    <input type="file" name="file" id="userNewImg" style={{ display: "none" }} onChange={e=> setFile(e.target.files[0])}/>
                </div>
                <form className="editUserForm" onSubmit={handleUser}>
                    <input type="text" name="username" id="" placeholder={user.username} onChange={e=> setUsername(e.target.value)}/>
                    <input type="password" name="password" id="" placeholder="New Password" onChange={e=> setPassword(e.target.value)} required/>
                    <input type="password" name="password" id="" placeholder="Confirm Password" onChange={e=> setPassword(e.target.value)} required/>
                    <button type="submit" className="updateUserBtn">Update</button>
                    {
                        updated && <span className="mt-2 text-success">User has been updated successfully</span>
                    }
                </form>
            </div>
        </div>
    );
};

export default EditUser;