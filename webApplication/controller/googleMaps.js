
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBTZr09maIEUODABL_A0IKVILE_jnG9TkE'
});

module.exports.getClosestGasStations =  function(lat, lng, rad){

  return new Promise(function (resolve, reject){
    //Pass latitude and longitude double parameters
    //Gets the closest gas station to the given latitude and longitude in a 5km radius
    //Ex: localhost:3000/getStations?lat=43.8432600&lng=-79.2747010&rad=2

    googleMapsClient.placesNearby({
        location : { latitude : lat, longitude: lng},
        type: 'gas_station',
        radius: rad * 1000
      }, function(err, response) {
        if (!err) {
          var data = [];
          //res.setHeader('Content-Type', 'application/json');
          //console.log(response.json.results)
          var jsonResults = (response.json.results);
          for (var i in jsonResults){

            data[i] = {name: jsonResults[i].name,
              latitude: jsonResults[i].geometry.location.lat,
              longitude: jsonResults[i].geometry.location.lng,
              address: jsonResults[i].vicinity} ;
         }

          resolve(JSON.stringify(data));

        } else {
          console.log(err);
          reject(err);
        }
    });

  });

}


module.exports.getDistance = function (userLat, userLng, add2){
  //Pass address1 and address2 strings
  //Returns the distance between two locations (gas station and user location)
  //Test url: http://localhost:3000/getDistance/?add1=%2727%20king%27s%20cir,%20toronto%20ontario%27&add2=%276%20walford%20rd,%20markham%20ontario%27

  return new Promise(function (resolve, reject){
    googleMapsClient.distanceMatrix({
      origins: [{latitude : userLat, longitude: userLng}],
      destinations: [String(add2)],
      mode: 'driving',
      traffic_model: 'best_guess',
      departure_time: 'now'
    }, function(err, response){
      if (!err){
        var jsonOutput = JSON.parse(JSON.stringify(response)).json
        var result = {
          origin_address : jsonOutput.origin_addresses[0],
          dest_address: jsonOutput.destination_addresses[0],
          distance_info:{
            distance: jsonOutput.rows[0].elements[0].distance.value/1000, //returns kms
            duration: jsonOutput.rows[0].elements[0].duration.text,
            duration_in_traffic: jsonOutput.rows[0].elements[0].duration_in_traffic.text
          }
        }

        resolve(result);
      }else{
        console.log(err);
        reject(err);
      }
    });

  });
}

//get the Lat and lng given an address
module.exports.getLatLng = function(addres){
  return new Promise(function(resolve, reject){
  googleMapsClient.geocode({
    address: addres
  }, function(err,response){
    if(!err){
      resolve(response.json.results[0].geometry.location);
    }else{
      console.log(err);
      reject(err);
    }
  });
});
}

module.exports.getLitresNeeded = function (litres, km){
  var litresPerOne = litres/100;
  var totalKm = litresPerOne * km;

  return totalKm;
}

module.exports.sameLocation = function(add1, add2){
  return new Promise(function (resolve, reject){
    var data;
    var check = 1;
    googleMapsClient.geocode({
      address: add1
    }, function(err, response){
      if(!err){
        address1PlaceID = response.json.results[0].place_id;

            googleMapsClient.geocode({
              address: add2
            }, function(err, response){
              if(!err){
                address2PlaceID = response.json.results[0].place_id;
                if(address1PlaceID === address2PlaceID){
                  data = {sameAddress: true};
                }else{
                  data = {sameAddress: false};
                }
                resolve(JSON.stringify(data));
              }else{
                console.log(err);
                reject(err);
              }

            });

      }else{
        console.log(err);
        reject(err);
      }

    });

  });
}

module.exports.getPostalCode = function(lat, lng){
  return new Promise(function (resolve, reject){

    googleMapsClient.reverseGeocode({
      latlng: { latitude : lat, longitude: lng}
    }, function(err, response){
      if  (!err) {
        address_components = response.json.results[0].address_components;
        var postal_code;
        for (var i = 0; i < address_components.length; i++){
          if (address_components[i].types[0] == 'postal_code'){
            postal_code = address_components[i].long_name;
          }
        }
        postal_code = postal_code.replace(" ", "");

        resolve(postal_code);
      } else {
        console.log(err);
        reject(err);
      }
    });

  });
}
