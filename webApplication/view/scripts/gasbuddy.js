
$("#myModal").hide(); //default not shown

function getInfo() {
  $("#myModal").show();
  var postalCode = "";
  var gasMileage = "";
  var searchDistance = "";

  postalCode = $("#postalCode").val();
  gasMileage = $("#gas").val();
  searchDistance = $("#maxDist").val();

  sendInfo(postalCode, gasMileage, searchDistance);

}

function sendInfo(postalCode, gasMileage, searchDistance){

  // Make a post request to do the required calculations
  var url = "/doCalculations"
  //?lat=" + lat + "&lng=" + lng + "&postalCode=" + postalCode + "&gasMileage=" + gasMileage + "&searchDistance=" + searchDistance;
  lat = localStorage.getItem("userLat");
  lng = localStorage.getItem("userLng");

  $.post(url,
    {
      lat: lat,
      lng: lng,
      postalCode: postalCode,
      gasMileage: gasMileage,
      searchDistance: searchDistance
    },
    function(data){
      //Storing the given gas costs to local storage
      console.log("DATA:::")
      console.log(JSON.stringify(data));
      localStorage.setItem("gasCosts", JSON.stringify(data));
      $("#myModal").hide();
      window.location.href = "/results"
      //console.log(data);
    }
);



   //make post of gas stations with dummy prices
   // $.ajax({
   //      url: "/gasStations",
   //      type: 'POST',
   //      data: postData,
   //      dataType: 'json'
   // });

}

$(document).ready(function(){

    $("#submit").click(function(){

      getInfo();
      //getPrices(postalCode);
    });

    //To sumbit on enter while in any text box
    $("#postalCode").keypress(function(key) {
    if(key.which == 13) {
        getInfo();
    }
    });
    $("#gas").keypress(function(key) {
    if(key.which == 13) {
        getInfo();
    }
    });

    $("#maxDist").keypress(function(key) {
    if(key.which == 13) {
        getInfo();
    }
    });
});

//This will be part of the front end code as the parsing requires browser's environment

// Send an HTML GET request for gasbuddy.com with location indicator postalCode.
// Return an array containing gas stations near postalCode with names, addresses,
// and prices.
function getPrices(postalCode) {
    var xhr = new XMLHttpRequest();
    postalCode = postalCode.replace(" ", "%20");
    var gasBuddy = "https://cors-anywhere.herokuapp.com/https://www.gasbuddy.com/home?search=";

    // When the response is ready, return an array containing station prices and info for stations near postalCode.
    // Each element in the array is an array containing information for a gas station.
    // The order of the inner arrays is {stationName, stationAddress, gasPrice}.
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var xmlhttp = xhr.responseText;
            var parser = new DOMParser();
            var xmlDocument = parser.parseFromString(xhr.responseText, "text/html");

            // Get the prices table. The cells in the prices table contain information about
            // individual gas stations.
            var pricesTable = xmlDocument.getElementsByTagName("table")[0].rows;
            //console.log(pricesTable);

            // There is an empty cell in the prices table, so to check whether or not a cell contains
            // useful information for a station, check that it has a minimum number of elements in it.
            function isStation(station) {
                if (station.childElementCount < 4) {
                    return false;
                }
                return true;
            }

            var stations = [];
            var station;
            var name;
            var address;
            var price;
            var stationInfo;
            var i;
            var element;
            for (i = 0; i < pricesTable.length; i++) {
                element = pricesTable[i];
                if (isStation(element)) {
                    if (element.contains(element.children[1])) {
                        station = element.children[1];
                    }
                    if (station.contains(station.children[0].children[0])) {
                        name = station.children[0].children[0].innerText;
                    }
                    if (station.contains(station.children[1])) {
                        address = station.children[1].innerText;
                    }
                    if (element.contains(element.children[0])) {
                        price = element.children[0].innerText;
                        console.log(element.children[0].innerText);
                    }
                    stationInfo = [name, address, price];
                    stations.push(stationInfo);
                }
            }
            console.log(stations);
            return stations;
        }
    }
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open("GET", gasBuddy.concat(postalCode), true);
        } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open("GET", gasBuddy.concat(postalCode));
        } else {
        // CORS not supported.
        xhr = null;
    }
    xhr.send();
}
