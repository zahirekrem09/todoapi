

const { DataTypes } = require('sequelize');

module.exports.TaskModel = (sequelize) => {
	return sequelize.define(
		'Task',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			task: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			status: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
			due_date: { type: DataTypes.DATEONLY }
		},
		{
			// Other model options go here
			freezeTableName: true,
			//tableName: 'tablename',
			timestamps: true,
		}
	);
};

//  task name, description, status, due date