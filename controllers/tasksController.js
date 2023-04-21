require('dotenv').config();
// Load model
const { Task } = require('../db');
const { Op } = require('sequelize');



// Get All
module.exports.getAll = async (req, res, next) => {
	try {
		const tasks = await Task.findAll({});
		res.json({
			status: true,
			result: tasks,
		});
	} catch (err) {
		return next(err);
	}
};

// Get One
module.exports.getOne = async (req, res, next) => {
	try {
		const id = req.params.id;
		const task = await Task.findOne({
			where: {
				id: id,
			},
		});
		res.json({
			status: true,
			result: task,
		});
	} catch (err) {
		return next(err);
	}
};

// Create
module.exports.create = async (req, res, next) => {
	try {
		const task = req.body.task;
		const record = await Task.create({
			...req.body,
			task
		});

		res.json({
			status: true,
			result: {
				record: record,
			},
		});
	} catch (err) {
		return next(err);
	}
};

// Update
module.exports.update = async (req, res, next) => {
	try {
		const id = req.body.id;
		const task = req.body.task;
		const status = req.body.status;

		const record = await Task.update(
			{
				...req.body,
				task: task,
				status: status,
			},
			{
				where: {
					id: {
						[Op.eq]: id,
					},
				},
			}
		);

		const task_data = await Task.findOne({
			where: {
				id: id,
			},
		});

		res.json({
			status: true,
			result:task_data
		});
	} catch (err) {
		return next(err);
	}
};

// Delete
module.exports.delete = async (req, res, next) => {
	try {
		const id = req.body.id;

		const deleted = await Task.destroy({
			where: {
				id: {
					[Op.eq]: id,
				},
			},
		});

		res.json({
			status: true,
			result: {
				affectedRows: deleted,
			},
		});
	} catch (err) {
		return next(err);
	}
};



