const employeeRoutes = require("./employeeRoutes")
const taskRoutes = require("./taskRoutes")
const express = require("express")
const router = express.Router()




router.use("/employees" , employeeRoutes)
router.use("/tasks" , taskRoutes)

module.exports = router