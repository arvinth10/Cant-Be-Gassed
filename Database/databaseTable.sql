USE GasDatabase;

CREATE TABLE GasCompany (
    companyID int,
    gasCompany varchar(100),
    numStations int,
   
    PRIMARY KEY(companyID)
    );
CREATE TABLE GasStation(
    address varchar(255),
    gasCompany varchar(100),
    postalCode varchar(6),
    city varchar(20),
    rate float,
    
    PRIMARY KEY(address),
    FOREIGN KEY(gasCompany) REFERENCES GasCompany(gasCompany),
    ON DELETE CASCADE,
    ON UPDATE CASCADE
    );
    
CREATE TABLE GasPrice(
    address varchar(255),
    regular float,
    midgrade float,
    premium float,
    desiel float,
    
    PRIMARY KEY(address),
    FOREIGN KEY(address) REFERENCES GasStation(address),
    ON DELETE CASCADE,
    ON UPDATE CASCADE
    );
    
CREATE TABLE User(
	id varchar(45),
    postalCode varchar(10),
    preferDistance int,
    mileage int,
    password varchar(45)
    );