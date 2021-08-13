import './Login.css';
import {Link} from 'react-router-dom';
import { useContext, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const Login = () => {
    const emailRef = useRef();
    const passRef = useRef();
    const {isFetching, dispatch} = useContext(AuthContext);

    const handleLogin = async(e)=>{
        e.preventDefault();
        dispatch({type: "LOGIN_START"})
        try{
            const res = await axios.post("/auth/login",{
                email: emailRef.current.value,
                password: passRef.current.value,
            });
            dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        }catch(err){
            dispatch({type: "LOGIN_FAILURE"})
        }

    }
    return (
        <div className="login">
            <div >
                <form className="login-form" onSubmit={handleLogin}>
                    <label className="inputLabel" htmlFor="email">Email</label>
                    <input ref={emailRef} type="text" name='email' className="email" className="loginInput" placeholder="Enter Your Email"/>
                    <label className="inputLabel" htmlFor="password">Password</label>
                    <input ref={passRef} type="password" name='password'  className="password" className="loginInput" placeholder="Enter Your Password"/>
                    <input type="submit" value="Login" className="loginBtn" disabled={isFetching}/>
                    <span className="redirectRegister">Dont have an accaount? <Link to='/register' className='noStyling signUp'>Sign Up</Link></span>
                </form>
            </div>
        </div>
    );
};

export default Login;