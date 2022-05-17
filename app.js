//Install express
const express = require('express')
//Run express
const app = express()
//set port
const port = 3000

//import data
const catData = require("./cat-data.js");
const dogData = require("./dog-data.js");




//set get request and message at root
app.get('/', (req, res) => {
    res.send('Welcome. Add cats or dogs to path to see data')
})


//set another app.get route for /cats 
//have response send json with cats 
//hand object to res.json
app.get('/cats', (req, res) => {
    const catObject = {success: true, data: catData.cats}
    res.json(catObject)
})

//set another app.get route for /dogs 
//have response send json with dogs
//hand object to res.json
app.get('/dogs', (req, res) => {
    const dogObject = {success: true, data: dogData.dogs}
    res.json(dogObject)
})



app.listen(port, () => {
    console.log('app is working')
})