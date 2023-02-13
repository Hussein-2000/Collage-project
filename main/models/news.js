
const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title:{type:String , required:true},
    body:{type:String , required:true}
}, 
{timestamps:true}
);

const News = mongoose.model(`news`, newsSchema)

<<<<<<< HEAD

=======
>>>>>>> 8c8f1b8abaf14f28ba6a035fc0c438cd972df8ee
module.exports = News;