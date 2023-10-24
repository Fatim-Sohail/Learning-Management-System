// import React, { useState } from "react";
import "./contact.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import { Button } from "react-bootstrap";
import backgroundImage from './bgImage.jpg';


const Contact = () => {
    // const [fullName, setFullName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");
    // const [message, setMessage] = useState("");

    // Inside the Contact component
    // const handleFullNameChange = (event) => {
    //     setFullName(event.target.value);
    // };

    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    // };

    // const handlePhoneNumberChange = (event) => {
    //     setPhoneNumber(event.target.value);
    // };

    // const handleMessageChange = (event) => {
    //     setMessage(event.target.value);
    // };


    return (
        <>
            <Navbar />
            <div className="contact-page" style={{
                backgroundImage: ` url(${backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: '1000px',
                bottom: '0px',
                paddingTop: '0px',
                paddingBottom: '0px'
            }}>
                <div className="form-main" >
                    <div className="main-wrapper">
                        <h2 className="form-head"><strong>C</strong>ONTACT US</h2>
                        <form className="form-wrapper">
                            <div className="form-card">
                                <input
                                    className="form-input"
                                    type="text"
                                    name="full_name"
                                    required="required"
                                />
                                <label className="form-label" for="full_name">
                                    Full Name
                                </label>
                            </div>

                            <div className="form-card">
                                <input
                                    className="form-input"
                                    type="email"
                                    name="email"
                                    required="required"
                                />
                                <label className="form-label" for="email">
                                    Email
                                </label>
                            </div>

                            <div className="form-card">
                                <input
                                    className="form-input"
                                    type="number"
                                    name="phone_number"
                                    required="required"
                                />
                                <label className="form-label" for="phone_number">
                                    Phone number
                                </label>
                            </div>

                            <div className="form-card">
                                <textarea
                                    className="form-textarea"
                                    maxlength="420"
                                    rows="3"
                                    name="phone_number"
                                    required="required"
                                ></textarea>
                                <label className="form-label" for="phone_number">
                                    Message
                                </label>
                            </div>
                            <div className="btn-wrap">
                                <button> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
};

export default Contact;
