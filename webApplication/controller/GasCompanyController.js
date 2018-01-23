var database = require("../model/database.js");

module.exports.create = function (id, name, num){  
    var newCompany = database.GasCompany.create({
        companyID : id,
        gasCompany: name,
        numStations: num
    }).catch(function(err) {
        //there is error so we return null
        return null;
    });
    return newCompany;
    // .then(newCompany => {
    //     console.log('New Company, ${newCompany.gasCompany}, ${newCompany.numStations} stations');
    // });
};

module.exports.upgrade = function (id, name, num) {
    return database.GasCompany.update({
        gasCompany : name,
        numStations : num
    }, {
        where: {companyID : id}
    });
};



