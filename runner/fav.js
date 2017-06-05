const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');
const db = require('../db.json');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




router.route('/')
  .get((req, res)=> {
	fs.readFile('db.json', 'utf-8', (err, data) => {
  		if(err) throw err;
  		res.send(JSON.parse(data));
        res.end();
  		})
  	
    })
  .post((req, res) => {
  	fs.writeFile('db.json', JSON.stringify(db), (err, data) => {
  		if(err) throw err;
  		res.send('post works');
        res.end();
  	})
  });
  router.route('/:id')
  .put((req,res) => {
      console.log(req.body);
      db.forEach((obj, index) => {
               if(obj.id == req.params.id){
                db.splice(index, 1);
            }
       })
  	db.push(req.body);
  	fs.writeFile('db.json', JSON.stringify(db), (err, data) => {
  		if(err) throw err;
  		res.send('appended');
        res.end();
  	})
  })
  .delete((req, res) => {
  	db.forEach((obj, index) => {
               if(obj.id == req.params.id){
                db.splice(index, 1);
                   fs.writeFile('db.json', JSON.stringify(db), (err) => {
                    if (err) throw err;
                    });
                   res.send(db);
                   res.end();
            }
       })
  })
.get((req, res) => {

  	db.forEach((obj) => {
        if(obj.id == req.params.id){
            console.log(obj.id);
            res.send(true);
            res.end();
        }
    })
      res.send(false);
      res.end();
  });


  module.exports = router;

