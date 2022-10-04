import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    // if user is already signed up then he/she can not come to sign up page
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")
        }
    })


    // collect data from user using form  and set to database
    const collectData = async () => {
        console.log(name, email, password);

        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        result = await result.json();
        console.log(result);

        localStorage.setItem('user', JSON.stringify(result));
        navigate("/")
    }


    return (
        <div className='register'>
            <h1>Registration</h1>
            <input className='inputBox' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />
            <input className='inputBox' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
            <input className='inputBox' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
            <button onClick={collectData} className='appButton' type='button'>Sign Up</button>

        </div>
    );
};

export default SignUp;