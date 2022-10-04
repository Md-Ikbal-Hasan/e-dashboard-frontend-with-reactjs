import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // if user is already signed up then he/she can not come to sign up page
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")
        }
    })





    const handleLogin = async () => {
        console.log(email, password);

        let result = await fetch("http://localhost:5000/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.log(result);
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result));
            navigate("/");

        }
        else {
            alert("Invalid username or password")
        }
    }
    return (
        <div className='login'>
            <input type="text"
                className='inputBox'
                placeholder='Enter Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email} />

            <input type="password"
                className='inputBox'
                placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password} />

            <button onClick={handleLogin} className='appButton' type='button'>Login</button>
        </div>
    );
};

export default Login;