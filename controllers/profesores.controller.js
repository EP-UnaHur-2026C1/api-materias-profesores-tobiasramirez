const {Profesor} = require("../models")
const getProfesores = async(req,res)=>{
    try{
        const profesores = await Profesor.findAll()
        res.status(200).json(profesores)
    } catch(e){
        res.status(500).json({message:"Error al buscar profesores"})
    } 
}
const getProfesorById = async(req,res)=>{
    try{
        const id = req.params.id
        const profe = await Profesor.findByPk(id)
        res.status(200).json(profe)
        } catch(e){
            res.status(500).json({message:"Error al buscar profesor"})
        }
}
const createProfesor = async(req,res)=>{
    try{
        const nuevoProfe = req.params.body
        const profe = await Profesor.create(nuevoProfe)
        res.status(201).json(profe)
    } catch(e){
        res.status(500).json({message: "Error al crear profesor"})
    }
}
const updateProfesor = async(req,res)=>{
    try{
        const id = req.params.id
        const actualizacion = req.body
        const profe = await Profesor.findByPk(id)
        await profe.update(actualizacion)
        res.status(200).json(profe)
    } catch(e){
        res.status(500).json({message: "Error al actualizar"})
    }
}
const deleteProfesor = async(req,res)=>{
    try{
        const id = req.params.id
        const profe = await Profesor.findByPk(id)
        await profe.destroy()
        res.status(200).json({message: "Profesor eliminado"})
    } catch(e){
        res.status(500).json({message:"Error al eliminar profesor"})
    }
}
module.exports = {getProfesores,getProfesorById,createProfesor,updateProfesor,deleteProfesor}