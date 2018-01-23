
$("#myModal").hide(); //default not shown

function getInfo() {
    $("#myModal").show();
    var postalCode = "";
    var gasMileage = "";
    var searchDistance = "";

    postalCode = $("#postalCode").val();
    gasMileage = $("#gas").val();
    searchDistance = $("#maxDist").val();

    //Gets the user's current location
    //dummy gas station prices
    console.log("ENTERS getINfo");
    var postData = [];
    postData[0] = {name: "Shell",
        address: "38 Spadina Avenue, Toronto",
    price: 1 + Math.random()};

    postData[1] = {name: "7-Eleven",
        address: "883 Dundas Street West, Toronto",
    price: 1 + Math.random()};


    postData[2] = {name: "Esso",
        address: "55 Spadina Avenue, Toronto",
    price: 1 + Math.random()};


    postData[3] = {name: "PetroCanada",
        address: "873 Queen Street West, Toronto",
    price: 1 + Math.random()};


    postData[4] = {name: "PetroCanada",
        address: "131 Coppard Ave, Markham",
    price: 1 + Math.random()};

    postData = JSON.stringify(postData);

    var lat;
    var lng;

    lat = 43.6556887;
    lng = -79.3914936;
    sendInfo(lat, lng, postalCode, gasMileage, searchDistance, postData);

    //will not use geolocation for testing as it is very slow

    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(
    //       function (position){
    //         lat = position.coords.latitude
    //         lng = position.coords.longitude
    //         sendInfo(lat, lng, postalCode, gasMileage, searchDistance, postData);
    //       },
    //       function (error){
    //         alert(error);
    //       });
    // } else {
    //     alert("Geolocation is not supported by this browser.");
    // }

}

function sendInfo(lat, lng, postalCode, gasMileage, searchDistance, postData){

    // Make a post request to do the required calculations
    var url = "/doCalculations"
    //?lat=" + lat + "&lng=" + lng + "&postalCode=" + postalCode + "&gasMileage=" + gasMileage + "&searchDistance=" + searchDistance;
    $.post(url,
    {
        lat: lat,
        lng: lng,
        postalCode: postalCode,
        gasMileage: gasMileage,
        searchDistance: searchDistance,
        postData: postData
    },
    function(data){
        //Storing the given gas costs to local storage
        localStorage.setItem("gasCosts", JSON.stringify(data));
        $("#myModal").hide();
        window.location.href = "/results"
        console.log(data);
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

        //getInfo();
        getPrices(postalCode);
    });

    //To submit on enter while in any text box
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
module.exports = {
    getPrices: function(postalCode) {
        var webdriver = require('selenium-webdriver');
        var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
        postalCode = postalCode.replace(" ", "%20");
        var gasBuddy = "https://cors-anywhere.herokuapp.com/https://www.gasbuddy.com/home?search=";
        driver.get(gasBuddy.concat(postalCode));

        var element = driver.findElement(webdriver.By.name('q'));

        var pricesTable = driver.findElement(webdriver.By.tagName("table"))[0].rows;

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

                driver.wait(function(element) {
                    if (element.contains(element.children[0])) {
                        price = element.children[0].innerText;
                    }
                }, 1000);

                stationInfo = [name, address, price];
                stations.push(stationInfo);
            }
        }

        driver.quit();
    }}
