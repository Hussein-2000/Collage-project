//importing express
const express = require(`express`);
//importing mongoose as a database
const mongoose = require(`mongoose`);

const app = express();
// app listening
app.listen(2244);

// using static files
app.set('view engine' , 'ejs')
app.use(express.static("./static-files"));

//veiwing engine

app.get('/'  , (req, res) =>{
  res.render("home");
});