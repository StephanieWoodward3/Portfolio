const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const storage = require("node-persist");
const { v4: uuidv4} = require("uuid")


async function initServer(){

    await storage.init({dir: './data'});

    const server = express();
    server.use(cors());
    server.use(express.json());
    server.use(bodyParser.json());
    const PORT = process.env.PORT || 4000;

    //home page
    server.get("/", (request, response)=>{
        response.send(`this is the home page`);
    });


     //storage of any contact me requests
    server.post("/contact", async (request, response) =>{

        let contactMessage = {
            id: uuidv4(),
            name: request.body.name,
            email: request.body.email,
            message: request.body.message,
            dateSubmitted: new Date().toISOString().slice(0, 10),
        }

        await storage.setItem(`id-${contactMessage.id}`, contactMessage);
        response.json({contactMessage, status: 200})

    });

    //server listening to any calls made to the web address
    server.listen(PORT, ()=>{
        console.log("the server is up and running and listening on port: " + PORT)
    })

}

initServer()
// initStorage().then(()=>initServer())


































