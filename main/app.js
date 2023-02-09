//importing express
const express = require(`express`);
//importing mongoose as a database
const mongoose = require(`mongoose`);

const api = `mongodb+srv://axd:axmed@collage-project.2reri7s.mongodb.net/?retryWrites=true&w=majority`;

const News = require(`./models/news`);
const app = express();

// using static files
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./static-files"));

// app listening

mongoose
  .connect(api)
  .then(() => {
    app.listen(22444);
    console.log(`Connected to database`);
  })

  .catch((err) => console.log(err));

app.get(`/add`, (req, res) => {});

//veiwing engine

app.get("/", (req, res) => {
  News.find()
    .then((result) => {
        console.log(result);
        res.render(`home`, { dbdata: result });

    })
    .catch((err) => console.log(err));
});
// hello this is Axmed
