//importing express
const express = require(`express`);
//importing mongoose as a database
const mongoose = require(`mongoose`);

const app = express();
// app listening
app.listen(7777);

app.get((req , res)=>{
    res.send("Hello world!")
})

