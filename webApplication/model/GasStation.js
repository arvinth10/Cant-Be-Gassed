'use strict';
module.exports.model  = function (sequelize, DataType) {  
    const GasStation = sequelize.define('GasStation', {
        address: {
          type: DataType.STRING,
          primaryKey: true
        },
        gasCompany: {
          type: DataType.STRING
        },
        postalCode: {
            type: DataType.STRING
        },
        city: {
            type: DataType.STRING
        },
        rate: {
            type: DataType.FLOAT
        },
    },{freezeTableName: true});
    
    return GasStation;
  };
