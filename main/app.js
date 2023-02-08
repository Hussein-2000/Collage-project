//importing express
const express = require(`express`);
//importing mongoose as a database
const mongoose = require(`mongoose`);

const api = `mongodb+srv://axd:axmed@collage-project.2reri7s.mongodb.net/?retryWrites=true&w=majority`

const News = require(`./models/news`)



const app = express();
// app listening

mongoose.connect(api)
.then(() => 
{app.listen(2244)
  console.log(`Connected to database`)
})

.catch((err)=> console.log(err))

// using static files
app.set('view engine' , 'ejs')
app.use(express.static("./static-files"));

//veiwing engine

app.get('/'  , (req, res) =>{
  res.render("home");
});