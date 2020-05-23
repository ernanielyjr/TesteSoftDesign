CREATE DATABASE livros;

USE livros;

CREATE TABLE livros (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180),
    type VARCHAR(50),
    description VARCHAR(300),
    image VARCHAR(200),
    year INT() NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


DESCRIBE livros;