const db = require("../db");
const {Model,DataTypes} = require("sequelize");
const Employee = require("./employeemodel");

class Task extends Model {}
Task.init({
    description:{
        type:DataTypes.STRING,
        allowNull:true
    },
    priority_level:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    completion_status:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue:false
    },
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    employee_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Employee,
            key:"id"
        }

    }

},{
    sequelize:db,
    timestamps:false,
    freezeTableName:true,
    modelName:"task"
    
})
module.exports = Task