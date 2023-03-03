const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const ShoppingList = require('./models/shoppingList')

const PORT = 3000

app.use(cors())
app.use(bodyParser.json())

// connect to the database
mongoose.connect('mongodb://localhost:27017/grocery', {useNewUrlParser: true}, (error) => {
    if(error) {
        console.log('Unable to connect to the database')
    } else {
        console.log('Connection to the database is succesfull')
    }
})

app.get('/api/shopping-lists', async (req,res) => {
    let shoppingLists = await ShoppingList.find({})
    res.json(shoppingLists)
})

app.post('/api/shopping-lists',async (req,res) => {
    const name = req.body.name
    const address = req.body.address

    let shoppingList = new ShoppingList({
        name: name,
        address: address
    })

    let savedShoppingList = await shoppingList.save()

    if(savedShoppingList) {
        res.json(savedShoppingList)
    }else {
        res.status(500).json({message: 'Error occured'})
    }
})

app.listen(PORT, () => {
    console.log('Server is running')
})
