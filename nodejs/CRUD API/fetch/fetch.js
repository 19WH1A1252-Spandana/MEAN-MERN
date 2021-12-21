var express=require('express');
var bodyparser = require('body-parser');
let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;
let fetch = express.Router().get("/",(req,res) =>
{
    console.log('recieved request...');
    talentsprint.connect("mongodb://localhost:27017/crud",(err,db)=>
    {
        if(err)
        {
            throw err;
        }
        else{
            db.collection("employee").find({}).toArray((err,array)=>
            {
                if(err)
                {
                    throw err;
                }
                else{
                    if(array.length > 0)
                    {
                        res.send(array);
                    }
                    else{
                        res.send({message:"Record not found..."});
                    }
                }
            });
        }
    })
});

module.exports=fetch;