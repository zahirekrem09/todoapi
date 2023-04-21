const { Router } = require('express');
const router = Router();

// Import Middlewares
const {
	validationCreate,
	isTaskExistsCreate,
	validationUpdate,
	isTaskExistsUpdate,
	validationDelete,
} = require('../middlewares/taskMiddleware');

// Import Controllers
const tasksController = require('../controllers/tasksController');

router.get('/tasks', tasksController.getAll);
router.get('/tasks/:id', tasksController.getOne);
router.post(
	'/tasks',
	[validationCreate, isTaskExistsCreate],
	tasksController.create
);
router.put(
	'/tasks',
	[validationUpdate, isTaskExistsUpdate],
	tasksController.update
);
router.delete('/tasks', [validationDelete], tasksController.delete);

module.exports = router