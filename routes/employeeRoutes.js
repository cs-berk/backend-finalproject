const{Employee, Task} = require("../database/models")
const express = require("express")
const router = express.Router()
const ash = require("express-async-handler")




router.get('/', ash(async(req, res) => {
    let employees = await Employee.findAll({include: [Task]});
    res.status(200).json(employees);
  }));



module.exports = router