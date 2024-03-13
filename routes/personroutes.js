const router = require('express').Router()
const Pessoa = require('../models/Person')

router.post('/', async (req,res)=>{

    const {name,idade}=req.body    
    const pessoa = {
        name,
        idade
    }
    try {
        await Pessoa.create(pessoa)
        console.log(pessoa)
        res.status(200).json({mensagem:'Foi'})
    } catch (error) {
        res.status(500).json({error:error})
        
    }
})

router.get('/', async (req,res)=>{

    try {
        const pessoas = await Pessoa.find()
        console.log(pessoas)
        res.status(200).json(pessoas)
    } catch (error) {
        
    }
})

module.exports = router     