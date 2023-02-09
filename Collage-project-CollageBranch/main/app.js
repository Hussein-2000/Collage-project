//importing express
const express = require(`express`);
//importing mongoose as a database
const mongoose = require(`mongoose`);

const api = `mongodb+srv://axd:axmed@collage-project.2reri7s.mongodb.net/?retryWrites=true&w=majority`

const News = require(`./models/news`)
// using static files
app.set('view engine' , 'ejs')
app.use(express.static("./static-files"));
app.use(express.urlencoded({extended:true}));



const app = express();
// app listening

mongoose.connect(api)
.then(() => 
{app.listen(2244)
  console.log(`Connected to databaseS`)
})

.catch((err)=> console.log(err))



//veiwing engine

app.get('/'  , (req, res) =>{
  res.render("home");
});