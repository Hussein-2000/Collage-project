const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Admissionschema = new Schema({
    FirstName:{type:String, requried: true},
    LastName:{type:String, requried: true},
    MotherName:{type:String, requried: true},
    sex:{type:String, requried: true},
    placeOfBirth:{type:String, requried: true},
    DateOfBirth:{type:Date, requried: true},
    Deegaanka:{type:String, requried: true},
    Email:{type:String, requried: true},
    Phone:[{type:String}],
    Masuulka:[{type:String}],
    RollNumber:{type:Number},
    img_file_data:{type:Buffer, contentType:String},
    Birth_file_data:{type:Buffer, contentType:String},
    HighScl_file_data:{type:Buffer, contentType:String},
})

const AdmissionModel = mongoose.model("Admission", Admissionschema);
module.exports = AdmissionModel;