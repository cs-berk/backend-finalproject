const{Employee, Task} = require("../database/models")
const express = require("express")
const router = express.Router()
const ash = require("express-async-handler")




router.get('/', ash(async(req, res) => {
    let tasks = await Task.findAll({include: [Employee]});
    res.status(200).json(tasks);
  }));
router.get('/:id', ash(async(req, res) => {
    let task = await Task.findByPk(req.params.id,{include: [Employee]});
    res.status(200).json(task);
  }));
router.post('/', ash(async(req, res) => {
    let task = await Task.create(req.body);
    res.status(200).json(task);
  }));
router.put('/:id', ash(async(req, res) => {
    let task = await Task.update(req.body, {where: {id:req.params.id}});
    res.status(200).json({message:"Task updated"});
  }));

router.delete('/:id', ash(async(req, res) => {
  let task = await Task.destroy({where: {id:req.params.id}});
  res.status(200).json({message:"Task deleted"});
}));




module.exports = router