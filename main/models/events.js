const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true }
},
    { timestamps: true }
);

const Events = mongoose.model(`event`, eventSchema)


module.exports = Events;