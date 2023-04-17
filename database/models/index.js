const Employee = require("./employeemodel")
const Task = require("./taskmodel")

Task.belongsTo(Employee,{
    foreignKey:"employee_id",
    onDelete:"cascade"
})

Employee.hasMany(Task,{
    foreignKey:"employee_id",
    onDelete:"cascade"
})
module.exports = {Employee,Task}