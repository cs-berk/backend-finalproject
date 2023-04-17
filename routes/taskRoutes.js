const{Employee, Task} = require("../database/models")
const express = require("express")
const router = express.Router()
const ash = require("express-async-handler")




router.get('/', ash(async(req, res) => {
    let tasks = await Task.findAll({include: [Employee]});
    res.status(200).json(tasks);
  }));



module.exports = router