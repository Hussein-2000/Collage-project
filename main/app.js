//importing express
const express = require(`express`);
//importing mongoose as a database
const mongoose = require(`mongoose`);
const app = express();

// modules 
const News = require(`./models/news`);
const Events = require(`./models/events`);
const admissionDb = require('./models/Admissiondb')

// handle file uploads 
const multer = require('multer');
// const storage = multer.memoryStorage();
// const upload = multer({ dest:"uploads/"})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now());
    }
  });
  
  const admissionUpload = multer({ storage });


const api = `mongodb+srv://axd:axmed@collage-project.2reri7s.mongodb.net/?retryWrites=true&w=majority`;
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
    console.log('Connected to database');
    console.log("PORT: 22444");
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

app.post('/Admission-Form', admissionUpload.array("file", 3) , (req, res) => {
    console.log("REQ BODY", req.body);
    const files = req.files;
    console.log(files);

    const form_submit = admissionDb({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        sex: req.body.sex,
        PlaceOfBirth: req.body.PlaceOfBirth,
        MotherName: req.body.MotherName,
        DateBirth: req.body.DateBirth,
        Deegaanka: req.body.Deegaanka,
        Masuulka: req.body.Masuulka,    
        Email: req.body.Email,
        Phone: req.body.Phone,
        RollNumber: req.body.RollNumber,
        faculty: req.body.faculty,

        // img_file_data: { data: files[0].buffer, contentType: files[0].mimetype },
        // Birth_file_data: { data: files[1].buffer, contentType: files[1].mimetype },
        // HighScl_file_data: { data: files[2].buffer, contentType: files[2].mimetype },

    })
    
    
    form_submit.save()
    .then((result) => {
        // console.log('userdate :>> ', userdate);
        console.log('result :>> ', result);
        res.send(result);
    })
    .catch((err) => {
        res.send(err)
    });
    // res.render("./Admission/AdmissionForm")

    // res.redirect('/')
});

app.get('/About', (req, res) => {
    // res.send("Admission")
    res.render("about")

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