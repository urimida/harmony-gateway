import React from "react";
import { useNavigate } from "react-router-dom";
import '../kind.css';
import logo from '../images/Logo.png';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("Hello. Welcome to Harmony-Gateway.");
        navigate("/home");
    };

    return (
        <div className="LoginPage">
            <img src={logo} alt="Logo" className="logo" />
            <div className="form">
                <div className="inputGroup">
                    <label htmlFor="id">ID</label>
                    <input
                        type="text"
                        id="id"
                        name="id"
                        placeholder="Please write your ID."
                        required
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">PW</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Please write your Password."
                        required
                    />
                </div>
                <div className="LinksAndLogin">
                    <button className="loginButton" onClick={() => navigate('/sign-up')}>Sign up</button>
                    <button className="loginButton" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
