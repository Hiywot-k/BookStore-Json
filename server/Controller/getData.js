import express from 'express';

import myConnections from "../server.js";
let allData = (req,res,next)=>{
      let allData = "SELECT * FROM Books"

      myConnections.query(allData,(err,data)=>{
            if(err){
                  throw err
            }else{
                  console.log(data)
                  res.send(data)

            }
      })

}

export default allData