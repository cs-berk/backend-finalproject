const{Employee, Task} = require("../database/models")
const express = require("express")
const router = express.Router()
const ash = require("express-async-handler")




router.get('/', ash(async(req, res) => {
    let employees = await Employee.findAll({include: [Task]});
    res.status(200).json(employees);
  }));

router.get('/:id', ash(async(req, res) => {
    console.log(req.params)
    let employee = await Employee.findByPk(req.params.id,{include: [Task]});
    res.status(200).json(employee);
  }));
router.delete('/:id', ash(async(req, res) => {
    console.log(req.params)
    let employee = await Employee.destroy({where:{id:req.params.id}});
    res.status(200).json({message:"Employee deleted"});
  }));
router.put('/:id', ash(async(req, res) => {
    console.log(req.params)
    let employee = await Employee.update(req.body,{where:{id:req.params.id}});
    res.status(200).json({message:"Employee updated"});
  }));
router.post('/', ash(async(req, res) => {
    let newemployee = await Employee.create(req.body);
    res.status(201).json(newemployee);
  }));



module.exports = router