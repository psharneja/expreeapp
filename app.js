const express = require('express');
const app = express();
var morgan = require('morgan')
const bodyParser = require('body-parser');

const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000;

const index = require('./runner/index.js');

router.use(function(req, res, next) {
	
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req,res) => {
 res.send('hello ji!!');
});

app.use((res,req,next) => {
    console.log('at /')
	next();
});

app.use('/api', index);





app.listen(PORT, () => {
 console.log('illuminati');
});
