import React, { useState } from 'react';
import "./AllCode.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LinkedIn from "../Videos/linkedIn.png"
import Facebook from "../Videos/facebook.png"
import Twitter from "../Videos/twitter.png"




export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function onSubmit(){
        let messageToSend={name, email, message};
        fetch("http://localhost:4000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(messageToSend)
        })
        .then(response => response.json())
        .then(json => {
            if(json.status !== 200){
                alert("Error posting data to the server")
            } else {
            alert("Contact Request Submitted")
            setName("");
            setEmail("");
            setMessage("");
        }
            })
    }



    
  return (
        <div className="contactMePage">
            <h1>How to Contact Me</h1>
            <div>
                <div className="title">If you would like to contact me, please fill out the below form and <br></br>I will endeavour to response to you as soon as I can</div>
                <form className="contactForm">
                    <input type="text" id="name" name="name" placeholder="Your Name"value={name} onChange={e => {setName(e.target.value)}}></input>
                    <br></br>
                    <input type="text" id="email" name="email" placeholder="Your email address"value={email} onChange={e => {setEmail(e.target.value)}}></input>
                    <br></br>
                    <textarea  id="message" name="message" rows="10" cols="30" value={message} placeholder="Write your message here..." onChange={e => {setMessage(e.target.value)}}></textarea>
                    <input type="submit" className="mt-4" onClick={onSubmit}></input>
                    <br></br>
                </form>
            </div>
            <div className="contactButtons">
                    <a href="http://www.linkedin.com/in/stephanie-woodward-5a59111b3" target="_blank" rel="noopener noreferrer"> <img src={LinkedIn} className="imgD" alt="LinkedIn logo"></img></a>
                    <img src={Facebook} className="imgE" alt="Facebook logo"></img>
                    <img src={Twitter} className="imgF" alt="Twitter logo"></img>
                </div>
        </div>

  )}