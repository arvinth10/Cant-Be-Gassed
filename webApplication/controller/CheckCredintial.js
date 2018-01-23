var async = require('asyncawait/async');
var await = require('asyncawait/await');
var userController = require("./UserController");
var database = require("../model/database.js");

module.exports.checkID = async(function(userID, password){
    var val = await(userController.find(userID));
    
    if(val == null)
        return false;

    var user = JSON.parse(JSON.stringify(val));
    if(user.password == password)
        return true;
    return false;
});

module.exports.saveInfo = async(function(userID, postalCode, gasMileage, preferDist, password){
    var val = await(userController.find(userID))

    if(val == null){
        return false;
    }

    await(userController.upgrade(userID, gasMileage, postalCode, preferDist, password));
    return true;
})

module.exports.findExistUserInfo = async(function(userID){
    var val = await(userController.find(userID));
    if(val == null){
        return false;
    }
    var user = await(JSON.parse(JSON.stringify(val)));
    return user;
})