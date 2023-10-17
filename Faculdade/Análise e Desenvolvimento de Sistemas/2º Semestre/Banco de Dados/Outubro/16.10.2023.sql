DROP DATABASE sakila;
USE sakila;

SELECT * FROM actor;
SELECT * FROM rental;
SELECT * FROM customer;
SELECT * FROM staff;

SELECT staff.first_name AS GERENTE, rental.rental_date AS DATA, customer.first_name AS CLIENTE
FROM rental, customer, staff 
WHERE rental.customer_id = customer.customer_id 
AND rental.staff_id = staff.staff_id 
ORDER BY staff.first_name, customer.first_name ASC;

/* USANDO WHERE */
SELECT * FROM rental, customer WHERE rental.customer_id = customer.customer_id;

/* USANDO INNER JOIN */
/* PODE-SE USAR O USING QUANDO O AS COLUNAS TEM O MESMO NOME */
SELECT * FROM rental INNER JOIN customer USING(customer_id);
/* OU */
SELECT * FROM rental INNER JOIN customer ON rental.customer_id = customer.customer_id INNER JOIN staff using(staff_id);
/* OU */
SELECT * FROM rental AS R INNER JOIN customer AS C ON R.customer_id = C.customer_id;

CREATE TABLE arquivo1 (
	codigo INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50)
);

CREATE TABLE arquivo2 (
	codigo INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50)
);

INSERT INTO arquivo1 (nome) VALUES ('Fernanda'), ('Josefa'), ('Luiz'), ('Fernando'), ('Nathan');
SELECT * FROM arquivo1;

INSERT INTO arquivo2 (nome) VALUES ('Carlos'), ('Manoel'), ('Luiz'), ('Fernando'), ('Nathan');
SELECT * FROM arquivo2;

SELECT * FROM arquivo1 AS A1 LEFT JOIN arquivo2 AS A2 ON A1.nome = A2.nome;
SELECT * FROM arquivo1 AS A1 LEFT JOIN arquivo2 AS A2 ON A1.nome = A2.nome WHERE A2.nome IS NULL;


/* GERE UMA LISTA DOS CLIENTES COM O NOME COMPLETO E SEU ENDEREÇO COMPLETO */
SELECT * FROM customer;
SELECT * FROM address;