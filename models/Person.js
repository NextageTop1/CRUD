const mongoose = require('mongoose')

const Pessoa = mongoose.model('Person',{
    name : String,
    idade : Number,

})

module.exports =  Pessoa