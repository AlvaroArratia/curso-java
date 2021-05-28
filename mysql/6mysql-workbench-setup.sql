SET SQL_SAFE_UPDATES = 0;

CREATE DATABASE IF NOT EXISTS db_pruebas;

USE db_pruebas;

CREATE TABLE IF NOT EXISTS users (
    dni VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255),
    age INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    pass VARCHAR(16) NOT NULL,
    CONSTRAINT pk_user PRIMARY KEY (dni),
    CONSTRAINT uq_email UNIQUE (email)
);

INSERT INTO users VALUES('11.111.111-1','Alvaro',null,26,'alvaro@email.com','1234');
INSERT INTO users VALUES('11.111.111-2','Carlos','Caszely',70,'carlos@email.com','5678');
INSERT INTO users VALUES('11.111.111-3','Alexa','Thanos',30,'alexa@email.com','9012');
INSERT INTO users VALUES('11.111.111-4','Carlos','Brando',25,'carlos_b@email.com','3456');

SELECT dni, first_name, last_name, age, email FROM users;

UPDATE users SET last_name='Arratia' WHERE dni='11.111.111-1';

SELECT * FROM users WHERE dni='11.111.111-1';

SELECT dni, first_name, last_name, age, email FROM users WHERE age>26;

DELETE FROM users WHERE first_name='Carlos' AND age>30;

SELECT * FROM users;

DROP DATABASE db_pruebas;