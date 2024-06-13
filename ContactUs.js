

import React, { useState } from "react";
import './contact-us.css';
import $ from "jquery"; // dependency

const ContactUs = () =>  {  
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [state, setState] = useState('');      
    const [data, setData] = useState([]);
    const handleEmail = (e) => {
        let userEmail = e.target.value;
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if( userEmail !== '' && emailRegex.test(userEmail) === true) {
            setEmail(userEmail);
           $("#emailError").addClass("emailSuccess"); // hiding error span
           $("#btnSubmit").prop('disabled', false); // enabling signIn button
        } else {            
            setEmail('');
            $("#emailError").removeClass("emailSuccess"); // show error span
            $("#btnSubmit").prop('disabled', true); // disable button
        }
    }

    const handlePassword = (e) => {
        let userPassword = e.target.value;
        if(userPassword !== '' && userPassword.length > 5) {
            setPassword(userPassword);
            $("#passwordError").addClass("passwordSuccess"); // hiding error span
            $("#btnSubmit").prop('disabled', false); // enabling sign In button

        } else {
            setPassword('');
            $("#passwordError").removeClass("passwordSuccess"); // showing error span
            $("#btnSubmit").prop('disabled', true); // disabling sing In button
        }
    }
    const handleStates= (e) => {
        let userState = e.target.value;
        if(userState === 'Choose') {
           setState('');
            $("#stateError").removeClass("stateSuccess"); // showing error span
            $("#btnSubmit").prop('disabled', true); // disabling sing In button    
        } else {
            setState(userState);
            $("#stateError").addClass("stateSuccess"); // showing error span
            $("#btnSubmit").prop('disabled', false); // disabling sing In button 
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('==', state)
        setData([email, pass, state]);
    }
    
    return (
        <>
            <form className="row g-3" onSubmit={(e) => handleSubmit(e)}>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" onChange={(e) => handleEmail(e)}/>
                    <span id="emailError" className="errorField emailSuccess">Please Enter a valid Email</span>
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" onChange={(e) => handlePassword(e)}/>
                    <span id="passwordError" className="errorField passwordSuccess">Please Enter a password with Minium 6 Character.</span>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select" onChange={(e) => handleStates(e)}>
                        <option selected>Choose</option>
                        <option>MP</option>
                        <option>Maharastra</option>
                    </select>
                    <span id="stateError" className="errorField stateSuccess">Please Select a State.</span>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" id="btnSubmit">Sign in</button>
                </div>
            </form>
            <div>
                {
                    data.map( values => (
                        <p>{values}</p>
                    ))
                }
            </div>
        </>
    )
}

export default ContactUs;