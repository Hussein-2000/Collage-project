const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Admissionschema = new Schema({
    FirstName:{type:String, requried: true},
    LastName:{type:String, requried: true},
    MotherName:{type:String, requried: true},
    sex:{type:String, requried: true},
    PlaceOfBirth:{type:String, requried: true},
    DateBirth:{type:Date, requried: true},
    Deegaanka:{type:String, requried: true},
    Email:{type:String, requried: true},
    Phone:[{type:Number, requried: true}],
    Masuulka:[{type:String, requried: true}],
    RollNumber:{type:Number, requried: true},
    faculty:[{type:String, required:true}],
    img_file_data:{type:Buffer, contentType:String,requried: true},
    Birth_file_data:{type:Buffer, contentType:String,requried: true},
    HighScl_file_data:{type:Buffer, contentType:String,requried: true},
})

const AdmissionModel = mongoose.model("Admission", Admissionschema);
module.exports = AdmissionModel;