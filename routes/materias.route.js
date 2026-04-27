const {Router} = require('express')
const {getMaterias, getMateriaById, createMateria} = require('../controllers/materias.controller')

const route = Router()

route.get('/materias', getMaterias)
route.get('/materias/:id', getMateriaById)
route.post("/materias", createMateria)

module.exports = route