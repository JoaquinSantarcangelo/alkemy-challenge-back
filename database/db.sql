CREATE DATABASE api;
USE api;
CREATE TABLE users(
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(16) NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL
);
CREATE TABLE transactions(
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    description VARCHAR(50) NOT NULL,
    amount FLOAT(11) NOT NULL,
    type VARCHAR(12) NOT NULL,
    category VARCHAR(12) NOT NULL,
    date timestamp NOT NULL,
    user_id INT(11) NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
);
