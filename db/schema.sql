DROP DATABASE IF EXISTS crypto_db;
CREATE DATABASE crypto_db;

USE crypto_db;

CREATE TABLE Prices (
  exchange_name varchar(255) NOT NULL,
  coin_pair varchar(255) NOT NULL,
  price INTEGER NOT NULL,   
  lastDate varchar(255) NOT NULL,
    PRIMARY KEY (price)
);

