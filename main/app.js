//importing express
const express = require(`express`);
//importing mongoose as a database
const mongoose = require(`mongoose`);

const api = `mongodb+srv://axd:axmed@collage-project.2reri7s.mongodb.net/?retryWrites=true&w=majority`;

const News = require(`./models/news`);
const Events = require(`./models/events`);
const app = express();

// using static files
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./static-files"));

// app listening
//this is connecting to the database

mongoose
  .connect(api)
  .then(() => {
    app.listen(22444);
    console.log(`Connected to database`);
  })

  .catch((err) => console.log(err));

//app.get(`/add`, (req, res) => {

//    const eventsarray = [{ title: "Match", body: " Monday" },
//    { title: "Lab event", body: "sunday" },
//    { title: "Break", body: "holiday" },
//    { title: "Visit", body: "Party" }];

//    eventsarray.forEach((i) => {

    
//    const event = Events(i)

//    event.save()
//        .then((data) => {
//            console.log(data)
//        })
//        .catch((error) => {
//            console.log(error)
//        })

//    })
//    res.send("ADDED TO DB ")

//});

//veiwing engine

app.get("/", (req, res) => {

    

    Events.find().limit(5)
        .then((result1) => {
            //console.log(newdata);
            News.find().limit(5)
                .then((result2) => {
                    //console.log(result);
                    //newdata = result;
                    res.render(`home`, { dbdata: [result2, result1] });

                })
                .catch((err) => console.log(err));

        })
        .catch((err) => console.log(err));
})



app.get('/allnews', (req, res) => {

    News.find().limit(5)
        .then((result) => {
            res.render('./NewsPages/news', { News: result })

        })
        .catch((err) => console.log(err));


});
app.get('/Admission', (req, res) => {
    // res.send("Admission")
    res.render("./Admission/Admission")

});
app.get('/Admission-Form', (req, res) => {
    // res.send("Admission")
    res.render("./Admission/AdmissionForm")

});

// app.get("/:id", (req, res) => {
//     let id = req.params.id;
//     console.log("id ... ",id);

//     Events.findById(id)
//         .then((ans) => {
//             console.log("ANSWER :: ", ans)
//             if (ans == null) {
//                 News.findById(id)
//                     .then((ans2) => {
//                         res.render("./NewsPages/newsdetail", { event: ans2 })
//                     })

//             }
//             else
//                 res.render("./EventsPages/eventdetail", { event: ans })
//         })
    
// })

//Hello ahmed