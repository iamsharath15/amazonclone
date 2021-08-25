import React from 'react';
import { useState } from 'react';
import { auth } from '../../firebase';
import './Login.css';
import {Link, useHistory} from "react-router-dom";
const Login = () => {
    const history = useHistory();
    const [email,setemail] = useState("");
        const [password, setpassword] = useState("");
        const logi =(event)=>{
            event.preventDefault();
            auth.signInWithEmailAndPassword(email,password).then((_)=>{
                history.push("/")
            }).catch((err)=>console.log(err))
        }
        const register=(event)=>{
            event.preventDefault();
            auth.createUserWithEmailAndPassword(email,password).then((authuser)=>{
            console.log(authuser);
            alert("user account created");
        }).catch((err)=>console.log(err))
        };
    return (
       <div className="login">
         <Link to="/">
         <img className="login_logo" alt="" src="https://pngimg.com/uploads/amazon/amazon_PNG1.png" />
         </Link>
            <div className="login_container">
            <h1>sign in</h1>
          
            <form>
                <h5>Email</h5>
                <input type="email" className="login_input" value={email} onChange={(e)=>setemail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" className="login_input" value={password} onChange={(e)=>setpassword(e.target.value)} />
                <button type="submit" className="login_sign" onClick={logi}>Sign In</button>
            </form>
            <p>
                By signing-in you to Amazon's Condition of Use & Sale. Please
                see our Privacy Noticy, Our Cookies Notice and our Internet-Based Ads Notice.
            </p>
            <button className="login_create" onClick={register}>
                Create your Amazon Account
            </button>
        </div>
       </div>
    );
};

export default Login;
