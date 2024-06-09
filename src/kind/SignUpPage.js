import React from "react";
import { useNavigate } from "react-router-dom";
import '../kind.css'; 
import MakeYourAccount from '../images/MakeYourAccount.png';
import Information from '../images/Information.png';

const SignUpPage = () => {
    const navigate = useNavigate();

    const handleSignUp = () => {
        console.log("회원가입 버튼 클릭됨");
        navigate("/login");
    };

    return (
        <div className="SignUpPage">
            <h1 className="title">Sign up</h1>
            <div className="Information"  style={{ backgroundImage: `url(${Information})` }}></div>
                    <div className="inputGroup">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Please write your name."
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="dob">Date of Birth</label>
                        <input
                            type="text"
                            id="dob"
                            name="dob"
                            placeholder="ex. 030605"
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="ex. 010-0000-0000"
                            required
                        />
                    </div>
                    <div className="MakeYourAccount"  style={{ backgroundImage: `url(${MakeYourAccount})` }}></div>
                    <div className="inputGroup">
                        <label htmlFor="id">ID</label>
                        <input
                            type="text"
                            id="id"
                            name="id"
                            placeholder="lowercase letters and numbers"
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="password">PW</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Please write your name."
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="passwordCheck">PW-CHECK</label>
                        <input
                            type="password"
                            id="passwordCheck"
                            name="passwordCheck"
                            placeholder="Please write your name."
                            required
                        />
                </div>

                <button className="signUpButton" onClick={handleSignUp}>Sign up</button>
            </div >
    );
};

export default SignUpPage;
