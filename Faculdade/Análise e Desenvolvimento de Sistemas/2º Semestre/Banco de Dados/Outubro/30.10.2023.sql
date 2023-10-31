USE sakila;

SELECT COUNT(customer_id) from customer;

SELECT * FROM customer;

SELECT CONCAT(first_name, ' ',  last_name) AS NOME FROM customer;

/* DECLARAR FUNÇÃO - FUNÇÃO PARA PEGAR O NOME COMPLETO DO CLIENTE */
DELIMITER $$
CREATE FUNCTION nome_completo(codigo INT)
RETURNS VARCHAR(70)
DETERMINISTIC
BEGIN
	DECLARE NOME VARCHAR(70);
	SELECT CONCAT(first_name, ' ',  last_name) INTO NOME FROM customer WHERE customer_id = codigo;
	RETURN NOME;
END $$

/* USAR FUNÇÃO */
SELECT nome_completo(1);
SELECT * FROM payment;
SELECT payment_id, nome_completo(customer_id), amount FROM payment

/* DECLARAR FUNÇÃO - FUNÇÃO PARA CALCULAR A COMISSÃO DE 7% SOBRE O VALOR PAGO PELO CLIENTE*/
DELIMITER $$
CREATE FUNCTION comissao1(codigo_pag INT)
RETURNS DECIMAL(9, 2)
DETERMINISTIC
BEGIN
	DECLARE VALOR DECIMAL(9, 2);
	SELECT amount * 0.07 INTO VALOR FROM payment WHERE payment_id = codigo_pag;
	RETURN VALOR;
END $$

/* DECLARAR FUNÇÃO - FUNÇÃO PARA CALCULAR A COMISSÃO DE 7% SOBRE O VALOR PAGO PELO CLIENTE*/
DELIMITER $$
CREATE FUNCTION comissao2(valor_pag DECIMAL(9, 2))
RETURNS DECIMAL(9, 2)
DETERMINISTIC
BEGIN
	DECLARE VALOR DECIMAL(9, 2);
	SET VALOR = valor_pag * 0.07;
	RETURN VALOR;
END $$

SELECT nome_completo(1), amount FROM payment;
SELECT amount FROM payment WHERE customer_id = 2;
SELECT comissao1(1);
SELECT comissao2(10);
SELECT * FROM payment;
SELECT payment_id, amount, comissao2(amount) FROM payment;

/* CRIAR PROCEDURE */
/* CRIE UMA PROCEDURE PARA LISTAR OS GÊNEROS DOS FILMES */