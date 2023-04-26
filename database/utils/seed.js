const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee1 = await Employee.create({
		first_name: "Berk",
		last_name: "Gulay",
		department: "Engineering"
	});
	const dummyEmployee2 = await Employee.create({
		first_name: "Kris",
		last_name: "Jenner",
        department: "Design"
	});
    const dummyEmployee3 = await Employee.create({
        first_name: "Ezgi",
        last_name : "Kiyici",
        department : "Product"
    });

	const dummyTask = await Task.create({
		description : "Dosomething",
        priority_level : 3,
        employee_id : 1
	});

	
	
}

module.exports = seedDB;