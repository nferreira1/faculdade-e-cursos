/*
AS

SERVE PARA RENOMEAR OU APELIDAR AS COLUNAS

SELECT <nome da coluna> AS <nome que deseja colocar na coluna> FROM <nome da tabela> 
*/

SELECT TOP 10 ListPrice AS 'LISTA DE PREÇO' FROM Production.Product

SELECT TOP 10 AVG(ListPrice) AS 'PREÇO MÉDIO' FROM Production.Product

-- Desafio 1
SELECT * FROM Person.Person
SELECT FirstName AS 'PRIMEIRO NOME', LastName AS 'ÚLITMO SOBRENOME' FROM Person.Person

-- Desafio 2
SELECT * FROM Production.Product
SELECT ProductNumber AS 'NÚMERO DO PRODUTO' FROM Production.Product

-- Desafio 3
SELECT * FROM Sales.SalesOrderDetail
SELECT UnitPrice AS 'PREÇO UNITÁRIO' FROM Sales.SalesOrderDetail