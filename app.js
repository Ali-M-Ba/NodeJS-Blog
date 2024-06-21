import express from 'express';
import router from './routes/routes.js';

const app = express();
// process.env.PORT => if you want to deploy ur app to online server to use their default port
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

// is a middleware function that is used to parse JSON data sent in the request body.
app.use(express.json())

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})

// All routes in here starts with /route
app.use('/', router)