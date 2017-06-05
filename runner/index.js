const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const fav = require('./fav');

router.use((res,req,next) => {
	console.log('/api before allowing acces /favourites');
	next();
});

router.use(function(req, res, next) {
	
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
router.use('/favourites', fav);

module.exports = router;