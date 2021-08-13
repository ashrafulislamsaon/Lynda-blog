import './Registration.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';

const Registration = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleRegister = async(e)=>{
        setError(false)
        e.preventDefault();
        try{
            const res = await axios.post("/auth/register", {
                username,
                email,
                password
            })
            res.data && window.location.replace("/login")
        }catch(err){
            setError(true)
        }
    }

    return (
        <>
        <Navbar/>
        <div className="login">
            
            <div >
                <form className="login-form" onSubmit={handleRegister}>
                    <label className="inputLabel" htmlFor="email">Username</label>
                    <input onChange={e => setUsername(e.target.value)} type="text" name='username' className="username" className="loginInput" placeholder='Enter Your Name'/>
                    <label className="inputLabel" htmlFor="email">Email</label>
                    <input onChange={e => setEmail(e.target.value)} type="text" name='email' className="email" className="loginInput" placeholder='Enter Your Email'/>
                    <label className="inputLabel" htmlFor="password" >Password</label>
                    <input onChange={e => setPassword(e.target.value)} type="password" name='password' className="password" className="loginInput" placeholder='Select Password'/>
                    <label className="inputLabel" htmlFor="password" >Confirm Password</label>
                    <input onChange={e =>setPassword(e.target.value)} type="password" name='password' className="password" className="loginInput" placeholder='Confirm Password'/>
                    <input type="submit" value="Register" className="loginBtn" />
                    {error && <span className="errmsg">Something went wrong!</span>}
                    <span className="redirectRegister">Already have an accaount? <Link to='/login' className='noStyling signUp'>Login</Link></span>
                </form>
            </div>
        </div>
        </>
    );
};

export default Registration;