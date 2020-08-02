import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import spiderCode from "./C++Code.png";
import Hulk from "../Videos/c++Hulk.jpg"
import IronMan from "../Videos/JS-IronMan.jpg"
import "./AllCode.css";


export default function Programming() {

  return (
    <div className="container-fluid">
      <h1 > My Programming Experience and Examples</h1>
      <div>
        <h2>My Programming History</h2>
        <ul>
            <li> In 2005 I started a Batchelor of Internet Science and Technology at Wollongong University where I was introduced to HTML and C++ for the first time. </li>
            Sady in my young and inexperienced age, I was unable to see where the course would take me and decided to swap University for TAFE. 
            <li>In 2006 I completed a Diploma of Information Technology (Networking) and soon after started working at Reckon Limited as Technical Support over the phone.</li>
            <li>In 2014 I had managed to work my way through Oasis Asset Management to start in the position of Buisness Analyst where I taught myself basic SQL as it was required for the role.</li> 
            <li>In 2018 I decided that I wanted to make my way back into the IT industry. With everything being online these days, I found that I had a growing interest in Cyber Security and
            decided to make another attempt at University by enrolling part time in a Batchelor of Cyber Security/Criminology online through Deakin University.
            Through Deakin University, I was reintroduced to C++ and pseudocode. </li>
            <li>In 2020 I was fortunate enough to be able to undertake a special "Programming Bootcamp" designed by Service NSW and TAFE NSW to teach Service NSW staff the technologies needed to become an 
            Engineer within Service NSW. Below are a couple of examples of what I have worked on in the Programming Bootcamp and with Deakin University.</li>

        </ul>
      </div>
        <div>
            <h2 className="d-flex justify-content-center mt-5">Javascript Example</h2>
            <h3>Tic Tac Toe</h3>
            <div className="d-flex flex-nowrap">
                <iframe src="https://youtube.com/embed/gQ_5WsaDTKI"
                            title="naughtsAndCrossesVideo"
                            width="45%" 
                            height="500px"/>
                <div className="w-25 h-500px mx-1 border border-info">
                        <h5>About this Javascript Example</h5>
                        <p>During the first 5 weeks of the Service NSW "Programming Bootcamp" we were immersed in JavaScript. It felt like during this time we lived and breathed JavaSript. 
                        I found that I was enjoying programming with JavaScript and was inpired to create a side project for fun. I felt that Tic Tac Toe would be an easy console application 
                        to program in my spare time.
                        </p>
                        <h5>If Javascript was a Superhero</h5>
                        <img src={IronMan} alt="ironman" height="250px" width="500px"></img>
                </div>
                <iframe src="//jsfiddle.net/SWoodward/79ktoL4y/3/embedded/js/dark/"
                            title="naughtsAndCrossesCode"
                            width="50%" 
                            height="500px"/>
            </div>
        </div>
        <div >
        <h2 className="d-flex justify-content-center mt-5">HTML Examples</h2>
                <h3>HTML Project Snowman</h3>
                    <div className="d-flex flex-nowrap">
                        <iframe src='https://www.youtube.com/embed/ScHlNQ5wDvY' 
                                title="snowmanVideo"
                                width="45%"
                                height="500px"/>
                        <div className="w-25 h-500 mx-1 border border-info">
                                <h5>About this HTML Example</h5>
                                <p>Whilst learning HTML in the "SNSW Bootcamp" this was the first project that I worked on.
                                This project is made out of pure HTML and CSS. I did have quite a lot of fun creating this game with HTML. Even though I have now moved on to more complex webpages, I am 
                                still very proud of this site.
                                </p>
                        </div>
                        <iframe src="//jsfiddle.net/SWoodward/vxr54fst/2/embedded/js,html,css/dark/"
                                title="snowmanCode" 
                                width="50%"
                                height="500px"/>
                    </div>
                <h3 className="mt-3">HTML Project Light Puzzle</h3>
                    <div className="d-flex flex-nowrap">
                        <iframe src='https://www.youtube.com/embed/5C1u9lqv6FY'
                                title="lightPuzzleVideo" 
                                width="45%"
                                height="500px"/>
                        <div className="w-25 h-500 mx-1 border border-info">
                                <h5>About this second HTML Example</h5>
                                <p>This HTML page was incorporated into the first "SNSW Bootcamp" project along side the snowman game. I was inspired to create a second page as I had so much
                                fun creating the first page. This HTML page doesnt have quite the polished feel to it, as I find CSS very fiddly and I ran out of time to complete the overall
                                project.
                                </p>
                        </div>
                        <iframe src="//jsfiddle.net/SWoodward/vxr54fst/3/embedded/js,html,css/dark/"
                                title="lightPuzzleCode" 
                                width="50%" 
                                height="500px"/>
                    </div>
        </div>
        <div>
        <h2 className="d-flex justify-content-center mt-5">React Examples</h2>
                <h3>Contractor Licence Application</h3>
                    <div className="d-flex flex-nowrap">
                        <iframe src='https://www.youtube.com/embed/30sNCshl9LA'
                                title="contractorLicenceVideo"
                                width="45%" 
                                height="500px"/>
                        <div className="w-25 h-500 mx-1 border border-info">
                                <h5>About this React Example</h5>
                                <p>This is the first React project that I worked on as part of the "SNSW Bootcamp". 
                                As the whole concept of React had just been introduced to me, I was struggling to understand how everything works and as such this project was never completed.</p>
                        </div>
                        <iframe src="//jsfiddle.net/SWoodward/6ysxLc1r/embedded/js/dark/" 
                                title="contractorLicenceCode" 
                                width="50%"
                                height="500px"/>
                    </div>
                <h3 className="mt-3">Opal Card Website</h3>
                    <div className="d-flex flex-nowrap">
                        <iframe src='https://www.youtube.com/embed/DnpjZsKWwIw'
                                title="opalCardVideo"
                                width="45%" 
                                height="500px"/>
                        <div className="w-25 h-500 mx-1 border border-info">
                                <h5>About this second React Example</h5>
                                <p>With this React example, I had just been introduced to the React Routing concept. As the "SNSW Bootcamp" has spent more time going over and practicing React Routing,
                                I have been able to finish this project. This project is able to follow the basic CRUD functions of persistent storage. C=Create R=Read U=Update D=Delete
                                </p>
                        </div>
                        <iframe src="//jsfiddle.net/SWoodward/6ysxLc1r/6/embedded/js/dark/"
                                title="opalCardCode" 
                                width="50%" 
                                height="500px"/>
                    </div>
        </div>
        <div >
        <h2 className="d-flex justify-content-center mt-5" >C++ Example</h2>
        <h3>Incy Wincy Spider</h3>
            <div className="d-flex flex-nowrap">
                <iframe src='https://www.youtube.com/embed/tjb7OJIp4XY' 
                        title="spiderVideo"
                        height="500px"
                        width="45%" />
                <div className="w-25 h-500 mx-1 border border-info">
                        <h5>About this C++ Example</h5>
                        <p>This project was completed in 2018 as part of the Batchelor of Cyber Security/Criminology degree at Deakin University using C++ language.</p>
                        <h5>If C++ was a Superhero</h5>
                        <img src={Hulk} alt="hulk" height="300px" width="500px"></img>
                </div>
                <iframe src={spiderCode} 
                        title="SpiderCode"
                        alt="spiderCode"
                        width="50%" 
                        height="500px"/>
            </div>
        </div>
      
    </div>
  );
}


// https://www.quora.com/If-programming-languages-were-superheroes-who-would-each-language-be