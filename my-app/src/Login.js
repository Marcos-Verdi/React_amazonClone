import React, { useState } from 'react'
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
    }

    const register = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then( (auth) => {
                if (auth) {
                    navigate('/')
                };
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login-container'>

            <img 
                className='login-logo'
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                alt=''/>
        
            <div className='login-form-container'>
                <form className='login-form'>
                    <h3 className='login-form-title'>Sign in</h3>
                    <label className='login-form-label' for='login-email'>
                        E-mail
                    </label>
                    <input 
                        type='email' 
                        id='login-email'
                        onChange={e => setEmail(e.target.value)}
                        value={email} />
                    <label className='login-form-label' for='login-password'>
                        Password
                    </label>
                    <input 
                        type='password' 
                        id='login-password'
                        onChange={e => setPassword(e.target.value)}
                        value={password} />
                    <button 
                        className='login-form-button'
                        type='submit'
                        onClick={signIn}>
                        Sign in
                    </button>
                    <p className='login-agreement-text'>
                        By signing-in you agree to Amazon Conditions of Use &
                        Sale. Please see our Privacy Notice, our Cookies
                        Notice and our Interest-Based Ads Notice
                    </p>
                    <button 
                        className='create-account-button'
                        onClick={register}>
                        Create your Amazon Account
                    </button>
                </form>
            </div>
        
        </div>
  )
}
