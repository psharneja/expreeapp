const express = require('express');
const app = express();
var morgan = require('morgan')
const bodyParser = require('body-parser');

const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000;

const index = require('./runner/index.js');

app.get('/', (req,res) => {
 res.send('hello ji!!');
});

app.use((res,req,next) => {
	console.log('first single!');
	next();
});

app.use('/api', index);





app.listen(PORT, () => {
 console.log('illuminati');
});
