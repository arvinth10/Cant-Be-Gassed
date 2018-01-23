// Send an HTML GET request for gasbuddy.com with location indicator postalCode.
require('chromedriver');
var webdriver = require('selenium-webdriver');
var promise = webdriver.promise;
var chromeCapabilities = webdriver.Capabilities.chrome();

var chromeOptions = {
    'args': ['--headless']
};
chromeCapabilities.set('chromeOptions', chromeOptions);
var driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();

module.exports.getPrices = function (postalCode) {
    return new Promise(function (resolve, reject){
      postalCode = postalCode.replace(" ", "%20");
      var gasBuddy = 'https://www.gasbuddy.com/home?search=';
      driver.get(gasBuddy.concat(postalCode));


      getPriceArray().then(function(priceArray){
        getStationNames().then(function(stationNames) {
          getAddresses().then(function (addresses){
            var allInfo = [];

            for (var i = 0; i < priceArray.length; i ++){
              var gasStationInfo = {
                                    name: stationNames[i],
                                    address: addresses[i].replace('&amp;', '&'),
                                    price: priceArray[i]/100
                                   }

              allInfo.push(gasStationInfo);
            }
            resolve(allInfo);
          });
        });
      });

    });

}


//exports.getPrices('M5S2K9');


function getPriceArray() {
  return new Promise(function (resolve, reject){
    var pending_prices = driver.findElements(webdriver.By.className("gb-price"));

    pending_prices.then(function (elements) {
      var pendingHtml = elements.map(function (elem) {
          return elem.getAttribute("innerHTML");
      });

        promise.all(pendingHtml).then(function(all_html) {
          //All gas prices are printed
          resolve(all_html);
        });
    });
  });
}

function getStationNames(){
  return new Promise(function (resolve, reject){
    var pending_names = driver.findElements(webdriver.By.xpath('//*[@id="prices-table"]/tr/td/div/strong/a'));

    pending_names.then(function (elements) {
      var pendingHtml = elements.map(function (elem) {
          return elem.getAttribute("innerHTML");
      });

        promise.all(pendingHtml).then(function(all_html) {
                //All gas prices are printed
          resolve(all_html);
        });
    });
  });
}


function getAddresses() {
  //'//*[@id="prices-table"]/tr/td[2]/div[2]'

  return new Promise(function (resolve, reject){
    var pending_addrs = driver.findElements(webdriver.By.xpath('//*[@id="prices-table"]/tr/td[2]/div[2]'));

    pending_addrs.then(function (elements) {
      var pendingHtml = elements.map(function (elem) {
          return elem.getAttribute("innerHTML");
      });

        promise.all(pendingHtml).then(function(all_html) {
                //All gas prices are printed
          resolve(all_html);
        });
    });
  });
}
