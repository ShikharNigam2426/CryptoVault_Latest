import React from 'react';
import './Styles/Login.css';

const LoginPage = ({setLogin}) => {
    const handleClick = () => {
        setLogin(false);
    }
    return (
        <div className="login-container">
            
            <div className="login-form">
                <h2 className='login-heading'>Login</h2>
                <form>
                    <div className="form-group">
                        <label className='title' htmlFor="username">Email</label>
                        <input type="text" id="username" name="username" placeholder='Enter Your Email'/>
                    </div>
                    <div className="form-group">
                        <label className='title' htmlFor="password">OTP</label>
                        <input type="number" id="password" name="password" placeholder='Enter OTP'/>
                    </div>
                    <div className='d-flex flex-row justify-content-center align-items-center'>
                    <button className='danger btn btn-danger login-button' onClick={() => {handleClick()}}>Back</button>
                    <button className='btn btn-primary login-button' type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
