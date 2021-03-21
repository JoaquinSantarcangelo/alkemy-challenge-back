CREATE DATABASE api;

CREATE TABLE users(
    name VARCHAR(30),
    email VARCHAR(40),
    password VARCHAR(10),
    transactions TEXT,
);

CREATE TABLE transactions(
    id SERIAL PRIMARY KEY,
    desc VARCHAR(24),
    category varchar(30),
    category varchar(30),
    amount FLOAT,
    type varchar(10),
    date TEXT
);