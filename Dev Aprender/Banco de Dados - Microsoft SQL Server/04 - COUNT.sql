/*
COUNT

SERVE PARA RETORNAR O NÚMERO DE LINHAS QUE BATE COM A CONDIÇÃO QUE FOI DEFINIDA

SELECT COUNT(<nome da coluna> ou *) FROM <nome da tabela>


CASO QUEIRA A CONTAGEM DE UMA COLUNA ESPECÍFICA

SELECT COUNT(DISTINCT Title) FROM <nome da tabela>
*/


SELECT COUNT(*) FROM Person.Person

SELECT COUNT(DISTINCT title) FROM Person.Person

-- Desafio 1
SELECT COUNT(*) FROM Production.Product

-- Desafio 2
SELECT COUNT(Size) FROM Production.Product

-- Desafio 3
SELECT COUNT(DISTINCT Size) FROM Production.Product