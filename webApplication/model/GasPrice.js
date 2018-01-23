'use strict';

module.exports.model = function (sequelize, DataType){  
    const GasPrice = sequelize.define('GasPrice', {
        address: {
          type: DataType.STRING,
          primaryKey: true
        },
        regular: {
            type: DataType.FLOAT
        },
        midgrade: {
            type: DataType.FLOAT
        },
        premium: {
            type: DataType.FLOAT
        },
        desiel: {
            type: DataType.FLOAT
        } 
    }, {
        freezeTableName: true
    });
    
    return GasPrice;
};
