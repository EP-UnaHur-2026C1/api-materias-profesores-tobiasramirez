const {Materia} = require('../models')

const getMaterias = async (req, res)=>{
  const materias = await Materia.findAll({}) 
  console.log(materias)
    res.status(200).json(materias)
}
const getMateriaById = async(req, res)=>{
    try { const id = await req.params.id
    res.status(200).json({id})  }
    catch(e){
      req.status(400).json({message: "Error"})
    }
}
const createMateria = async(req,res)=>{
  try {
    const nuevaMateria =  req.body
    const materia = await Materia.create(nuevaMateria)
    res.status(200).json(materia)
 }catch(e){
  res.status(500).json({message:"Error"})
 }
}
const updateMateria = async(req,res)=>{
  try {
    const id = req.params.id
    const actualizacion = req.body
    const materia = await Materia.findByPK(id)
    await materia.update(actualizacion)
    res.status(200).json(materia)
  } catch(e){
    req.status(400).json({message: "Error"})
  }
}


module.exports = {getMaterias, getMateriaById, createMateria, updateMateria}
