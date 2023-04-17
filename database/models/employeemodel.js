const db = require("../db");
const {Model,DataTypes} = require("sequelize")

class Employee extends Model {}
Employee.init({
    first_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    department:{
        type:DataTypes.STRING,
        allowNull:false
    },
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

},{
    sequelize:db,
    timestamps:false,
    freezeTableName:true,
    modelName:"employee"
})
module.exports = Employee