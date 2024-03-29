const express = require("express")
const app = express()
const mongoose = require("mongoose")
require('dotenv').config

const db_user = (process.env.DB_USER)
const db_password = encodeURIComponent(process.env.DB_PASSORD)

// ler json/midlewes
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const db = "mongodb+srv://Nextage:bomba3199@fod.0hptics.mongodb.net/?retryWrites=true&w=majority&appName=FOD"

app.use(express.json())


app.get("/",  (req,res) =>{
    res.json({message: 'Oi kk'})
})

//rota da API
// Animais
const animalroutes = require('./routes/animalroutes')
app.use('/animal', animalroutes)

//Pessoas
const personroutes = require('./routes/personroutes')
app.use('/person', personroutes)

mongoose.connect(`mongodb+srv://Nextage:0X7SK6T2L6cLzF7S@api.bniibxm.mongodb.net/`)
.then( () => {
    console.log("Conectadu") 
    app.listen(3000)
})
.catch((err) => console.log(err))
