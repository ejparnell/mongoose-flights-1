const Flight = require('../models/flight')

function addFlight(req, res){
    res.render('flights/add')
}

function create(req, res){
    Flight.create(req.body)
        .then(flightDoc => {
            res.redirect(`/flights/${flightDoc.id}`)
        })
        .catch(err => {
            console.log('===================================err')
            console.log(err)
            console.log('===================================')
            return res.send('err creating, check the terminal')
        })
}

function index(res, res){
    Flight.find({})
    .then(flightDocs => {
        res.render('flights/index', {flights: flightDocs})
    })
    .catch(err => {
        console.log('===================================err')
        console.log(err)
        console.log('===================================')
        return res.send('err creating, check the terminal')
    })
}

function show(req, res){
    Flight.findById(req.params.id)
        .then(flight => {
            res.render('flights/show', {flight: flight})
        })
        .catch(err => {
            console.log('===================================err')
            console.log(err)
            console.log('===================================')
            return res.send('err creating, check the terminal')
        })
}

module.exports = {
    add: addFlight,
    create,
    index,
    show
}