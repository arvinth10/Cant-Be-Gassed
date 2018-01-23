var express = require('./controller/node_modules/express');
var bodyParser = require('./controller/node_modules/body-parser');
const replace = require('./controller/node_modules/replace-in-file');
var async = require('./controller/node_modules/asyncawait/async');
var await = require('./controller/node_modules/asyncawait/await');
var Regex = require("./controller/node_modules/regex");
var app = express();




//Basic Setup
app.listen(process.env.PORT || 3000);
console.log('Listening on port 3000');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var viewDest = String(__dirname) + '/view';
app.use(express.static(viewDest + '/'));
app.use(express.static(viewDest + '/styles'));
app.use(express.static(viewDest + '/scripts'));

app.set('view engine', 'pug');
app.set('views', viewDest);

//Connecting the front-end to simple end-points
app.get("/", function(req, res){
  res.sendFile(viewDest + '/GetStarted.html');
});

var check = require("./controller/CheckCredintial.js");
var user = require("./controller/UserController.js");


app.post("/login", function(req, res){
  check.checkID(req.body.uname, req.body.psw).then(x=>{
    if(x == true){
      check.findExistUserInfo(req.body.uname).then(userInfo=>{
        if(req.body.newPWD != undefined && req.body.newPWD != ''){
          check.saveInfo(req.body.uname, undefined, undefined, undefined, req.body.newPWD).then(x=>{
            res.render('registered', {userName: userInfo.id, gasMileage: userInfo.mileage, postalCode: userInfo.postalCode, 
              preferDist: userInfo.preferDistance});
          });
        }else{
          res.render('registered', {userName: userInfo.id, gasMileage: userInfo.mileage, postalCode: userInfo.postalCode, 
            preferDist: userInfo.preferDistance});
        } 
      });
    } else {
      res.sendFile(viewDest + '/LoginPage.html');
    }
  });

});

app.post("/save", function(req, res){
  check.saveInfo(req.body.userID, req.body.postalCode, req.body.gasMileage, req.body.preferDist).then(x=>{
    if(x == false){
      res.render('registered', { userName: req.body.userID, error: 'we did not find you in database'});
    }else{
      res.render('registered', {userName: req.body.userID, gasMileage: req.body.gasMileage, postalCode: req.body.postalCode,
      preferDist: req.body.preferDist, error: 'your information is updated'});
    }
  });
})

app.post("/logout", function(req, res){
  res.sendFile(viewDest + '/GetStarted.html');
});

app.post("/registration", function(req, res){
  var userID = req.body.uname;
  var password = req.body.psw;

  //res.send(userID + password);
  check.findExistUserInfo(userID).then(x=>{
    if(x == false){
      var userInst = user.create(userID, null, null, null, password);
      if(userInst != null){
        res.render('registered', { userName: userID});
      } else {
        res.sendFile(viewDest + '/RegistrationPage.html');
      }
    }else{
      check.checkID(userID, password).then(result=>{
        if(result == true){
          res.render('registered', {userName: userID, gasMileage: x.mileage, postalCode: x.postalCode,
            preferDist: x.preferDistance});
        }else{
          res.sendFile(viewDest + '/RegistrationPage.html');
        }
      });
    }
  });

});

app.post("/searchAgain", function(req, res){
  // not perfect yet.
  // wish can be used to let user stay in their account
  res.sendFile(viewDest + '/LoginPage.html');
})

app.get("/info", function(req, res){
  res.sendFile(viewDest + '/UserInfo.html');
});


app.get("/results", function(req, res){
  res.sendFile(viewDest + '/Results.html');
});

app.get("/load", function(req, res){
  res.sendFile(viewDest + '/LoadingPage.html');
});


var gasCalcu = require ("./controller/GasCalculate.js");

app.post("/doCalculations", function(req, res){
  //Set the current lattitude and longitude of the userLat
  var scraper = require("./controller/scraper.js");
  var maps = require("./controller/googleMaps");

  var userLat = req.body.lat;
  var userLng = req.body.lng;
  var postalCode = req.body.postalCode;
  var gasMileage = req.body.gasMileage;
  var searchDistance = req.body.searchDistance;

  maps.getPostalCode(userLat, userLng).then(function(postal_code){

    scraper.getPrices(postal_code).then(function(allStations){

      var prices = [];
      for (i in allStations){
      var station = allStations[i]
          gasCalcu.calculateCost(station, userLat, userLng, gasMileage).then(function(response){
          prices.push(response);
          if (prices.length == allStations.length){
            res.send(prices);
          }
        }, function(error){
          console.log(error);
          res.sendStatus(404);
        });
      }


    });

  });



});

module.exports.app = app;
