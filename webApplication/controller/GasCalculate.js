var googleMaps = require("./googleMaps.js"); //Can get all the google maps functions from here

module.exports.calculateCost = function (stationInfo, userLat, userLng, gasMileage){
  //all stations is a dictionary with adress as the key and price as the value
  return new Promise(function (resolve, reject){
    var data = [];

    var costTrip;
    var costToPump;
    var totalCost;
    var litresTrip;
    var distance;
    var gasAddress;
    var gasPrice;
    var gasTank = 60; //default 60 litres tank
    var name;
    var coordinates;


  	gasAddress = stationInfo.address;
  	gasPrice = stationInfo.price;
  	name = stationInfo.name;

  	googleMaps.getDistance(userLat, userLng, gasAddress).then(function(response){


      distance = response.distance_info.distance;

      googleMaps.getLatLng(gasAddress).then(function(response){

        litresTrip = googleMaps.getLitresNeeded(gasMileage, distance) * 2;
        costTrip = litresTrip * gasPrice;
        costToPump = gasTank * gasPrice;
        totalCost = costTrip + costToPump;
        coordinates = response; 


        data = {
          name: name,
          address: gasAddress,
          cost: totalCost,
          location: coordinates
        };
        resolve(data);

      }, function(error){
      reject(error); 
      });

  	},function(error){
  		reject(error);
  	});

  });
}