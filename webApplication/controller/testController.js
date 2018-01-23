/*
This is file used to test Controllers
*/
var database = require("../model/database.js");
var userController = require("./UserController.js");
var gasCompanyController = require("./GasCompanyController.js");
var gasPriceController = require("./GasPriceController.js");
var gasStationController = require("./GasStationController.js");
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var assert = require('assert');
// create a promise
function createTables(){
    return new Promise(function (fulfill, reject){
        database.createTable2(function(err, res){
            if(err == null) fulfill(res);
            else reject(err);
        });
    });
}

function printOutMessage(message){
    return console.log(message);
}
var testCreateNewUser = async (function(){
    var expected = '#-- New User, id: ' + 1 + ', mileage: ' + 100 + ', postalCode: ' + 'M5R2T1' 
    + ', preferDistance: ' + 50 + ', password: ' + 'abcdef';
    await (printOutMessage('#---------------------------------------- start testCreateNewUser'));
    await(database.User.destroy({
        where : {
            id : 1
        }
    }));
    var newUser = await (userController.create(1, 100, 'M5R2T1', 50, 'abcdef'));
    //await(console.log('#-- New User, id: ' + newUser.id + ', mileage: ' + newUser.mileage + ', postalCode: ' + newUser.postalCode 
    //+ ', preferDistance: ' + newUser.preferDistance + ', password: ' + newUser.password));
    var actual = await ('#-- New User, id: ' + newUser.id + ', mileage: ' + newUser.mileage + ', postalCode: ' + newUser.postalCode 
    + ', preferDistance: ' + newUser.preferDistance + ', password: ' + newUser.password);
    await(assert.equal(actual, expected, 'expected: ' + expected + ', actual: ' + actual));
    await(console.log('passed testCreateNewUser'));
    return;
})

var testUpdateUser = async(function(){
    var expected = '#-- User State, id: ' + 1 + ', mileage: ' + 100 + ', postalCode: ' + 'M5R2T1' 
    + ', preferDistance: ' + 50 + ', password: ' + 'ABCDEF';
    await (printOutMessage('#---------------------------------------- start testUpdateExistingUser'));
    await (userController.upgrade(1, 100, 'M5R2T1', 50, 'ABCDEF'));
    var newUser2 = await(database.User.findOne({
        where: {id : 1}
    }));
    var actual = await('#-- User State, id: ' + newUser2.id + ', mileage: ' + newUser2.mileage + ', postalCode: ' + newUser2.postalCode 
    + ', preferDistance: ' + newUser2.preferDistance + ', password: ' + newUser2.password);
    await(assert.equal(actual, expected, 'expected: ' + expected + ', actual: ' + actual));
    await(console.log('passed testUpdateUser'));
    return;
})

var testUpdateNotExistUser = async(function(){
    var expected = null;
    await(printOutMessage('#---------------------------------------- start testUpdateNotExistUser'));
    await(userController.upgrade(2, 100, 'M5R2T1', 50, 'ABCDEF'));
    var actual = await(database.User.findOne({
        where: {id : 2}
    }));
    await(assert.equal(actual, expected, 'actual value is not null: ' + actual));
    await(console.log('passed testUpdateNotExistUser'));
    return;
}) 

var testAddExistUser = async(function(){
    var expected = null;
    await(console.log('#---------------------------------------- start testAddExistUser'));
    var actual = await(userController.create(1, 100, 'M5R2T1', 50, 'abcdef'));
    await(assert.equal(actual, expected, 'There is already one row in the table but somehow added again'));
    await(console.log('passed testAddExistUser'));
    return;
})

var testAddNewGasCompany = async(function(){
    var expected = '#-- new Company = gasCompany: Cosco, numStations: 100';
    await(database.GasCompany.destroy({
        where : {
            gasCompany : 'Cosco'
        }
    }));
    await(console.log('#---------------------------------------- start testAddNewGasCompany'));
    var newCompany = await(gasCompanyController.create('Cosco', 100));
    var actual = await('#-- new Company = gasCompany: ' + newCompany.gasCompany + ', numStations: ' + newCompany.numStations);
    await(assert.equal(actual, expected, 'expected: ' + expected + ', actual: ' + actual));
    await(console.log('passed testAddNewGasCompany'));
    return;
})

var testAddExistGasCompany = async(function(){
    var expected = null;
    await(console.log('#---------------------------------------- start testAddExistGasCompany'));
    var actual = await(gasCompanyController.create('Cosco', 100));
    await(assert.equal(actual, expected, 'There is already one row in the table but somehow added again'));
    await(console.log('passed testAddExistGasCompany'));
    return;
})

var testAddNewPrice = async(function(){
    var expected = '#-- new Price = address: 83 Spadina Road Toronto Ontario, regular: 10.0, midgrade: 11.0, premium: 12.2' +
    ', desiel: 10.9';
    await(console.log('#---------------------------------------- start testAddNewPrice'));
    // await(database.GasCompany.destroy({
    //     where : {
    //         gasCompany: 'Cosco'
    //     }
    // }));
    // await(database.GasStation.destroy({
    //     where : {
    //         address : '83 Spadina Road Toronto Ontario'
    //     }
    // }));
    // await(database.GasPrice.destroy({
    //     where : {
    //         address : '83 Spadina Road Toronto Ontario'
    //     }
    // }));
    await(gasCompanyController.create('Cosco', 100));
    await(gasStationController.create('83 Spadina Road Toronto Ontario', 'Cosco', 'M5R2T1', 'Toronto', 5));
    var newPrice = await(gasPriceController.create('83 Spadina Road Toronto Ontario', 10.0, 11.0, 12.2, 10.9));
    var actual = await('#-- new Price = address: ' + newPrice.address + ', regular: ' + newPrice.regular + 
    ', midgrade: ' + newPrice.midgrade + ', premium: ' + newPrice.premium + ', desiel: ' + newPrice.desiel);
    await(assert(actual, expected, 'failed to create new Price'));
    await(console.log('passed testAddNewPrice'));
    return;
})

var UserControllerTests = async(function(){
    await (testCreateNewUser());
    await (testUpdateUser());
    await (testUpdateNotExistUser());
    await (testAddExistUser());
    return;
});

var GasCompanyControllerTests = async(function(){
    await(testAddNewGasCompany());
    await(testAddExistGasCompany());
    return;
});

var GasPriceControllerTests = async(function(){
    await(testAddNewPrice());
    return;
})

var GasStationControllerTests = async(function(){
    return;
})

// manage tests of all controllers
// after run these tests, process will exit.
var tests = async(function(){
   await(UserControllerTests());
   await(GasCompanyControllerTests());
   await(GasPriceControllerTests());
   await(GasStationControllerTests());
   await(process.exit());
})
createTables().then(() => {
    tests();
});
