import myConnections from "../server.js";
import createBooks from "../Schema/schema.js"

let createTable = (req,res)=>{
 
    myConnections.query(createBooks, (err, results, fields) => {
        if (err) console.log(err);
      });
      res.end("Tables created")
}

export default createTable;