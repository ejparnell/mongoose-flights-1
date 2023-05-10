const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/
    },
    price: {
        type: Number,
        min: 0,
    }
}, {
    timestamps: true,
})

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ["LAX", "DEN", "AUS", "DFW", "SAN", "RDU", "BWI", "ORL"]
    },
    arrival: Date,
}, {
    timestamps: true
})

const flightSchema = new Schema({
    airline: String,
    airport: {
        type: String,
        enum: ["LAX", "DEN", "AUS", "DFW", "SAN", "RDU", "BWI", "ORL"]
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        default: 9999
    },
    departs: Date,
    destinations: [destinationSchema],
    tickets: [ticketSchema],
}, {
    timestamps: true
})


module.exports = mongoose.model('Flight', flightSchema)