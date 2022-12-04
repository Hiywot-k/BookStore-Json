// import dependencies 
import express from "express"
import mysql from "mysql"
import cors from 'cors'

// import routes 
import createRoute from "./Routes/createRoute.js";
import insertRoute from "./Routes/insertRoute.js";
import AllData from "./Routes/getDataRoute.js";
import updateRoute from "./Routes/updateRoute.js"
import deleteRoute from "./Routes/deleteRoute.js";

// initiate express
const app = express()

// support middleware
app.use(express.json()); 
app.use(express.urlencoded( {extended: true }));
app.use(cors())

// middleware 
app.use('/user',AllData)
app.use('/user',createRoute)
app.use('/user',insertRoute)
app.use('/user',updateRoute)
app.use('/user',deleteRoute)

//  Creating a connection to the database 

let myConnections = mysql.createConnection({
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", //path to mysql sock in MAMP
     user: "groupThree",
     password: "groupThree",
     host: "127.0.0.1",
     database: "g3BookStore"
 });
 myConnections.connect((err) => {
     if (err) console.log(err);
     else console.log("Connected");
 });
 // server listener

 const port = 2022
 app.listen(port, ()=>{
     console.log(`listening to ${port}`);
 })
 export default myConnections