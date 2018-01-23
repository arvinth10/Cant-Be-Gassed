var database = require("../model/database.js");

module.exports.create = function (id, mileage, postalCode, preferDistance, password){  
    var newUser = database.User.create({
        id: id,
        mileage: mileage,
        postalCode: postalCode,
        preferDistance: preferDistance,
        password: password
    }).catch(function(err) {
        //there is error so we return null
        return null;
    });
    return newUser;
    // .then(newUser => {
    //     return console.log('#-- New User, id: ' + newUser.id + ', mileage: ' + newUser.mileage + ', postalCode: ' + newUser.postalCode
    // + ', preferDistance: ' + newUser.preferDistance + ', password: ' + newUser.password);
    // });
};

module.exports.upgrade = function (id, mileage, postalCode, preferDistance, password) {
    return database.User.update({
        mileage: mileage,
        postalCode: postalCode,
        preferDistance: preferDistance,
        password: password
    }, {
        where: {id : id}
    });
};

module.exports.find = function (userID) {
    var user = database.User.findById(userID);
    if(!user){
        return null;
    } else {
        return user;
    }
};
