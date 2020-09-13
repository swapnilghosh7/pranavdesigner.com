const express = require('express')
const app = express()
var http = require('http');
const port = 3000;
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var path = require('path');

const _app_folder = '/pranavdesignerapp/build/';
// Connection URL
const url = 'mongodb://localhost:27017/pranavdesigner';





app.get('/', (req, res) => {
   res.sendFile( __dirname +_app_folder + 'index.html')
});

app.get('/assets/images/*/*', function(req, res){
    var image_file = 'pranavdesignerapp/src' + req.path;
    res.sendFile(path.join(__dirname,image_file));
 });
 app.get('/assets/images/*', function(req, res){
    var image_file = 'pranavdesignerapp/src' + req.path;
    res.sendFile(path.join(__dirname,image_file));
 });

 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());
 
 app.use(express.static(__dirname + _app_folder));

 app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});


//  --------------------Post Request -------------------

// ----------Getting Social Icons ------------
app.post('/getSocialIcons', function(req, res){
   
   
   // Use connect method to connect to the server
   MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
      assert.equal(null, err);
      console.log("Connected successfully to server");
      var db = client.db("pranavdesigner");
      query = {};
      var element = db.collection('social_icons').aggregate([
         { $match: query },
         { $sort: { order: 1 } }
      ]);
      let resultArray = [];
      // console.log(element);
      element.forEach(function(result, err) {
         assert.equal(null, err); //checking for issue
         resultArray.push(result);
      }, function() {
         res.send(resultArray);
         res.end();
      
      });
   });
   
});
// ------------End Social Icons ------------

// ------------Getting banners ------------------

app.post('/getBanners', function(req, res){
   // console.log(req.body.page);
   
   // Use connect method to connect to the server
   MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
      assert.equal(null, err);
      console.log("Connected successfully to server");
      var db = client.db("pranavdesigner");
      query = {"page":req.body.page};
      var element = db.collection('banners').aggregate([
         { $match: query },
         { $project: { "_id": 0, "page": 0 } }
      ]);
      let resultArray = [];
      
      element.forEach(function(result, err) {
         assert.equal(null, err); //checking for issue
         resultArray.push(result);
      }, function() {
         // console.log(resultArray);
         res.send(resultArray);
         res.end();
      
      });
   });
   
});
// ------------End Banners ----------------------

// ------------Getting My Clients ------------------

app.post('/getMyClients', function(req, res){
   // console.log(req.body.page);
   
   // Use connect method to connect to the server
   MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
      assert.equal(null, err);
      console.log("Connected successfully to server");
      var db = client.db("pranavdesigner");
      query = {};
      var element = db.collection('brandIcons').aggregate([
         { $sort : { order : 1 } },
         { $match: query },
         { $project: { "_id": 0 } }
      ]);
      let resultArray = [];
      
      element.forEach(function(result, err) {
         assert.equal(null, err); //checking for issue
         resultArray.push(result);
      }, function() {
         // console.log(resultArray);
         res.send(resultArray);
         res.end();
      
      });
   });
   
});
// ------------End Getting My Clients ----------------------

// ------------Getting My Reviews ------------------

app.post('/getMyReviews', function(req, res){
   // console.log(req.body.page);
   
   // Use connect method to connect to the server
   MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
      assert.equal(null, err);
      console.log("Connected successfully to server");
      var db = client.db("pranavdesigner");
      query = {};
      var element = db.collection('myComments').aggregate([
         { $sort : { order : 1 } },
         { $match: query },
         { $project: { "_id": 0 } }
      ]);
      let resultArray = [];
      
      element.forEach(function(result, err) {
         assert.equal(null, err); //checking for issue
         resultArray.push(result);
      }, function() {
         // console.log(resultArray);
         res.send(resultArray);
         res.end();
      
      });
   });
   
});
// ------------End Getting My Reviews ----------------------

app.listen(port, () => console.log(`Listen to the:${port}`))