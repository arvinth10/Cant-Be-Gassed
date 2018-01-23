'use strict';
module.exports.model = function (sequelize, DataType){  
    const GasCompany = sequelize.define('GasCompany', {
        companyID: {
          type: DataType.INTEGER,
          primaryKey: true
        },
        gasCompany: {
          type: DataType.STRING,
          unique: true
        },
        numStations: {
          type: DataType.INTEGER
        },
    }, {freezeTableName: true
    });
    return GasCompany;
};

  