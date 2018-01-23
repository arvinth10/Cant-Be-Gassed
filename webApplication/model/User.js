'use strict';
module.exports.model = function (sequelize, DataType){  
    const User = sequelize.define('User', {
        id: {
          type: DataType.STRING,
          primaryKey: true
        },
        mileage: {
          type: DataType.INTEGER
        },
        postalCode: {
            type: DataType.STRING
        },
        preferDistance: {
            type: DataType.INTEGER
        },
        password: {
            type: DataType.STRING
        }
    }, {freezeTableName: true
    });
    return User;
};


  