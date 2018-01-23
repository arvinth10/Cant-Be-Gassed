'use strict';
const mysql = require('../controller/node_modules/mysql2');
const Sequelize = require('../controller/node_modules/sequelize');
const sequelize = new Sequelize('GasDatabase', 'gasadmin', 'csc3012017', {
     host: 'gasdatabase.cnmmii20ccez.us-east-2.rds.amazonaws.com',
     port: 3306,
     dialect: 'mysql' ,
     operatorsAliases: false,
     createTable: true,
     define: {
        timestamps: false
    },
    logging: false
});

const GasCompany = require('./GasCompany.js').model(sequelize, Sequelize);
const GasPrice = require('./GasPrice.js').model(sequelize, Sequelize);
const GasStation = require('./GasStation.js').model(sequelize, Sequelize);
const User = require('./User.js').model(sequelize, Sequelize);

module.exports.testConnection = function (){
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
            return true;
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
            return false;
        });
}

module.exports.createTable = function(callback){
    GasCompany.sync().then(() => {
        console.log('created GasCompany table')
    });
    GasPrice.sync().then(() => {
        console.log('created GasPrice table')
    });
    GasStation.sync().then(() => {
        console.log('created GasStation table')
    });
    User.sync().then(() => {
        console.log('created User table')
    });
    GasPrice.belongsTo(GasStation);
    return callback;
}

// created for using test cases in controller
module.exports.createTable2 =  function(checker){
    try{
        sequelize.sync().then(function() {
            GasCompany;
            GasPrice;
            GasStation;
            User;
            return 'finsihed to create all tables';
        }).then(function(driver) {
            GasPrice.belongsTo(GasStation, {foreignKey: "address", targetKey: "address"});
            GasStation.belongsTo(GasCompany, {foreignKey: "gasCompany", targetKey: "gasCompany"});
            checker(null, driver);
            return;
        });
    }catch(err){
        checker(err, null);
        return;
    }
    
}


//this.createTable();

module.exports.GasCompany = GasCompany;
module.exports.GasPrice = GasPrice;
module.exports.GasStation = GasStation;
module.exports.User = User;

