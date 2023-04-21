require('dotenv').config();
const express = require('express');
const cors = require('cors');



const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use(
	cors({
		//origin: process.env.CLIENT_URL
	})
);


// Routes
app.get('/', (req, res, next) => {
	try {
		res.json({
			status: true,
			message: 'Welcome 🙏',
		});
	} catch (err) {
		return next(err);
	}
});
const taskRoute = require('./routes/taskRoute');
app.use('/api', taskRoute
    );

// app.use([taskRoute]); // you can add more routes in this array

//404 error
app.get('*', function (req, res) {
	res.status(404).json({
		message: 'What?? 🙅',
	});
});

//An error handling middleware
app.use((err, req, res, next) => {
	console.log('🐞 Error Handler');

	err.statusCode = err.statusCode || 500;
	err.status = err.status || 'error';

	res.status(err.statusCode).json({
		status: err.status,
		message: err.message,
		err: err,
	});
});

// Run the server
const port = process.env.PORT || 3000;
app.listen(port, () =>
	
{
    console.log(`🐹 app listening on http://localhost:${port}`)
     app.use('/api', taskRoute);

}
    
);