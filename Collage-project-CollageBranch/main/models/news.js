
const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title:{type:String , required:true},
    body:{type:String , required:true}
}, 
{timestamps:true}
);

const News = mongoose.model(`news`, newsSchema)

module.exports = News;