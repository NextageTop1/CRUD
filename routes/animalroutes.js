const router = require('express').Router()
const Animal = require('../models/Person')


//rota da API

//Cria
router.post('/', async (req,res) => {
    const {name,raca,idade} = req.body

    if(!name){
        res.status(42).json({error :'O nome Presisa ser Insirido'})
    }

    const animal ={
        name,
        raca,
        idade
    }

    try {

        await Animal.create(animal)

        res.status(201).json({message:'Animal Inserido'})
        
    } catch (error) {
        res.status(500).json({error:error})
        
    }
})

//Busca

router.get('/' , async (req,res) => {
    try {
        const animals = await Animal.find()

        console.log(animals[1].name)

        res.status(200).json(animals)
    } catch (error) {
        res.status(500).json({error : error})
    }
})

router.get('/:id', async (req , res )=>{
    //extarir o dado da requsiçao, pala url = req.params
    const id = req.params.id 
   

    try {
        const animal = await Animal.findOne({_id: id})

        if(!animal){
            res.status(422).json({message:'O animal não existe'})
        return
        }

        res.status(200).json(animal)
    } catch (error) {
        res.status(500).json({error:error})
    }

})


//updati(PUT,PATCH = Parcial)
router.patch('/:id', async(req,res)=>{
    const id = req.params.id

    const {name,raca,idade} = req.body

    const animal = {
        name,
        raca,
        idade,
    }

    try {
        
        const updateAnimal = await Animal.updateOne({_id : id}, animal)

        console.log(updateAnimal.matchedCount)

        if(updateAnimal.matchedCount === 0 ){
            res.status(422).json({mensagem:'Animal não encontrado'})
            return
        }

        res.status(200).json(animal)

    } catch (error) {

        res.status(500).json({error:error})        
    }
})

//Deletar 

router.delete('/:id',async(req,res)=>{

    const id = req.params.id

    const animal = await  Animal.findOne({_id : id})

    if(!animal){
        res.status(422).json({message:'O animal não existe'})
    return
    }

    try {

        await Animal.deleteOne({_id: id})
        res.status(200).json({message:'Animal Deletado'})
        
    } catch (error) {
        res.status(500).json({error:error}) 
        
    }


})


module.exports = router