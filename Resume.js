import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pikachu from "../Videos/pikachu.png";
import Eevee from "../Videos/eevee.png";
import "./AllCode.css";


export default function Resume() {

  return (
        <div >       
          <h1>This is my Resume in a Nutshell</h1>
          <h6> Please &nbsp; <a href="/contact"> contact me </a> &nbsp; if you would like to discuss any of these points further</h6>
          <div className="resume">
            <img src={Pikachu} alt="Pikachu" className="w-25 mr-5"></img>
        <div>
            <h4> Employment History</h4>
            <ul>
              <li>2015  - Current</li><p>Service NSW - Trainee Developer</p>
              <li>2011  - 2015</li><p>Oasis Asset Management - Business Analyst</p>
              <li>2009  - 2011</li><p>Stellar International Group - Sales Consultant</p>
              <li>2008  - 2008</li><p>Reckon Ltd - Technical Support Representative</p>
              <li>Prior to 2008</li><p>Bi Lo - Customer Service</p>
              <li>Prior to 2008</li><p>Skate Escape</p>
            </ul>
          </div>
          <div>
            <h4>Qualifications</h4>
            <ul>
              <li>Batchelor of Criminology/Cyber Security</li>
              <ul>
                <li>SIT124 Exploring IT</li><p>Distinction</p>
                <li>SIT102 Introduction to Programming</li> <p>Credit</p>
                <li>ACR101 Introducing Crime and Criminology</li><p>Distinction</p>
              </ul>
              <li>Diploma of Information Technology (Networking)</li> <p>Credit Grade</p>
              <li>Certificate 3 in Information Technology</li>
            </ul>
            </div>
            <img src={Eevee} alt="Eeve" className="w-25 ml-3"></img>
            </div>
        </div>

  )}