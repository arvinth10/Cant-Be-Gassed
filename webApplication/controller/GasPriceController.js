var database = require("../model/database.js");

module.exports.create = function (addr, r, m, p, d){
    var newPrice = database.GasPrice.create({
        address: addr,
        regular: r,
        midgrade: m,
        premium: p,
        desiel: d
    }).catch(function(err) {
        //there is error so we return null
        return null;
    });
    return newPrice;
    // .then(newPrice => {
    //     console.log('New Price, address:${newPrice.address}, regular: ${newPrice.regular}');
    // });
};


module.exports.upgrade = function (addr, r, m, p, d) {
    return database.GasPrice.update({
        regular: r,
        midgrade: m,
        premium: p,
        desiel: d
    }, {
        where: {address : addr}
    });  
};