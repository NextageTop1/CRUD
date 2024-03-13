const mongoose = require('mongoose')

const Animal = mongoose.model('Animal',{
    name: String,
    raca: String,
    idade: Number,

})

module.exports = Animal