const { Router } = require('express')

const controller = require("../controllers/profesores.controller")


const route = Router()

route.get("/profesores",controller. getProfesores)
route.get("/profesores/:id", controller.getProfesorById)
route.post("/profesores",controller.createProfesor)
route.put("/profesores/:id",controller.updateProfesor)
route.delete("/profesores:id",controller.deleteProfesor)

module.exports = route