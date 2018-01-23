var database = require("../model/database.js");

module.exports.create = function (addr, company, posCode, city, rate){  
    var newStation = database.GasStation.create({
        address: addr,
        gasCompany: company,
        postalCode: posCode,
        city: city,
        rate: rate
    }).catch(function(err) {
        //there is error so we return null
        return null;
    });
    return newStation;
    // .then(newStation => {
    //     console.log('New Station, address:${newStation.address}, gascompany: ${newStation.gasCompany}');
    // });
};


module.exports.upgrade = function (addr, rate) {
    return database.GasStation.update({
        rate : rate
    }, {
        where: {address : addr}
    });
};