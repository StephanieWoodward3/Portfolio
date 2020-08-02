import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ZeldaPic from "../Videos/Zelda.png";
import ZeldaName from "../Videos/ZeldaName.png";
import OliverPic from "../Videos/Oliver.png";
import OliverName from "../Videos/OliverName.png";
import ChloePic from "../Videos/Chloe.png";
import ChloeName from "../Videos/ChloeName.png";
import Warrawong from "../Videos/Warrawong.png";
import GoldenTicket from "../Videos/GoldenTicket.png";
import Oasis from "../Videos/Oasis.webp";
import ServiceNSW from "../Videos/servicensw-logo.png";
import Reckon from "../Videos/reckon-logo.png"
import Diablo3 from "../Videos/diablo3.png";
import Mythology from "../Videos/ageofmythology.jpg";
import Orcs from "../Videos/orcsmustdie.jpg";
import Overwatch from "../Videos/overwatch.jpg";
import PokemonSS from "../Videos/pokemonswordandshield.jpg";
import Starcraft from "../Videos/starcraft2.jpg";
import WoW from "../Videos/worldofwarcraft.jpg";
import PokemonOnline from "../Videos/pokemononline.png";
import "./AllCode.css";

export default function About() {

    const[zelda, setZelda] = useState(ZeldaName)
    const[oliver, setOliver] = useState(OliverName);
    const[chloe, setChloe] = useState(ChloeName)

    function switchPic(value){
        if(value === "zelda"){
            setZelda(ZeldaPic)
        } else if(value === "oliver"){
            setOliver(OliverPic)
        } else if(value === "chloe"){
            setChloe(ChloePic)
        }
    }


  return (
    <div className="AboutMe">
        <h1>All About Me</h1>

        <div className="quote">
            <p><i>If you cant explain it simply, you dont understand it well enough</i></p>
            <p>- Albert Einstein</p>
        </div>
       <h4>Work History</h4>
       <div className="aboutContent">
       <div className="aboutWording">
           <h5>Current</h5>
            <p>
                Since 2015 I have been employed at <img src={ServiceNSW} alt="Service NSW Logo" height="40px" width="100px"></img> 
                 in Warrawong. I started off as a Digital Service Representative(DSR), whos role is to greet customers at the door and encourage all transactions to be completed digitally where possible.
                After 2 years as a DSR I was successful in obtaining a highly sought after position of Customer Service Representative(CSR), working behind the counters to serve the customers
                whilst learning and retaining the knowledge and skills required to use the many complex systems of the individual government departments.

                Reciently I was fortunate enough to secure a <img src={GoldenTicket} alt="Golden Ticket" height="50px" width="100px"></img> position in the new <img src={ServiceNSW} alt="Service NSW Logo" height="40px" width="100px"></img> Digital Bootcamp to be trained as a Trainee Engineer to work on <img src={ServiceNSW} alt="Service NSW Logo" height="40px" width="100px"></img>'s webpages.
                The Bootcamp has been tough, but so very rewarding, and I am looking forward to the practical experience that I will gain over the next 6 months to compliment the theory training that I have undertaken over
                the last 3 months.     

                Although I have only been programming webpages for the last 3 months, I am proud of some of the projects that I have created and would love to share them with you on my <a href="/programming-experience">Programming Page</a>       
            </p>

            <h5>Previous</h5>
            <p>
                Prior to working at <img src={ServiceNSW} alt="Service NSW Logo" height="40px" width="100px"></img>  I was employed at <img src={Oasis} height="40px" width="80px" alt="Oasis Asset Management Logo"></img> Asset Managent (Superannuation Fund Manager)  
                as a Buiness Analyst. As part of my role as a Buisness Analyst I was required to learn SQL in order to obtain client information from the database, format it in Microsoft Excel and email it to our internal customers. 
                <br />
                I have also spent time working at <img src={Reckon} alt="Reckon Logo" height="70px" width="70px"></img>, an account keeping software provider, providing technical support over the phone to their customers.
            </p>
        </div>
        
            <img src={Warrawong} alt="Map of where Warrawong is in relation to Sydney" className="justify-content-end" width="20%" height="20%"></img>
        </div>    
        
        <h4>My Life Outside Of Work</h4>
        
        <div>
            <h5 className="gamesHeading"> Parent </h5>
            <h6>Please click the name to see pictures of my beautiful babies</h6>
            <div className="familyPics">
                <img src={zelda} alt="Pic of Cat Zelda" className="imgC" onClick={() => switchPic("zelda")}></img>
                <img src={oliver} alt="Pic of Dog Oliver" className="imgC" value="oliver" onClick={ () => switchPic("oliver")}></img>
                <img src={chloe} alt="Pic of Dog Chloe" className="imgC" value="chloe" onClick={() => switchPic("chloe")}></img>
            </div>
        </div>
        <h5 className="gamesHeading"> Avid Video Game Player </h5>
        <div className="quote">
            <p><i>If I have learned anything from video games, <br></br>it is that when you meet enemies, <br></br>it means you're going in the right direction</i></p>
            <p>- Unknown</p>
        </div>
        <div className="gamesPics">
            <div >
                <a href="https://worldofwarcraft.com/en-gb/" target="_blank" rel="noopener noreferrer"> <img src={WoW} alt="World of Warcraft logo" className="imgA"></img></a>
                <a href="https://eu.diablo3.com/en/" target="_blank" rel="noopener noreferrer"><img src={Diablo3} alt="Diablo 3 logo" className="imgA"></img></a>
                <a href="https://www.ageofempires.com/games/aom/" target="_blank" rel="noopener noreferrer"><img src={Mythology} alt="Age of Mythology logo" className="imgA"></img></a>
                <a href="https://playoverwatch.com/en-gb/" target="_blank" rel="noopener noreferrer"><img src={Overwatch} alt="Overwatch logo" className="imgA"></img></a>
                
                
            </div>
            <div className="gamesPics">
            <a href="https://swordshield.pokemon.com/en-au/" target="_blank" rel="noopener noreferrer"><img src={PokemonSS} alt="Pokemon Sword and Shield logo" className="imgB"></img></a>
            <a href="https://starcraft2.com/en-gb/" target="_blank" rel="noopener noreferrer"><img src={Starcraft} alt="Starcraft 2 logo" className="imgB"></img></a>
            <a href="https://www.pokemon.com/us/pokemon-tcg/play-online/" target="_blank" rel="noopener noreferrer"><img src={PokemonOnline} alt="Pokemon Trading Card Online logo" className="imgB"></img></a>
            <a href="https://robotentertainment.com/omd2-details" target="_blank" rel="noopener noreferrer"><img src={Orcs} alt="Orcs Must Die logo" className="imgB"></img></a>
            </div>
        
        </div>
    </div>
  )}