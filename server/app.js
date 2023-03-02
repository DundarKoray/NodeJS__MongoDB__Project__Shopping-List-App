const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000

// connect to the database
mongoose.connect('mongodb://localhost:27017/grocery', {useNewUrlParcer: true}, (error) => {
    if(error) {
        console.log('Unable to connect to the database')
    } else {
        console.log('Connection to the database is succesfull')
    }
})

app.listen(PORT, () => {
    console.log('Server is running')
})
