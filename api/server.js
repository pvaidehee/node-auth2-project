const express = require("express"); 
const helmet = require("helmet"); 
const cors = require("cors"); 

const server = express(); 


const usersRouter = require("../users/users-router"); 

server.use(express.json()); 
server.use(cors()); 
server.use(helmet()); 

server.use("/api/users", usersRouter); 

server.get("/", (req, res) => {
    res.send({ message: "Welcome to the api!" }); 
}); 

module.exports = server; 