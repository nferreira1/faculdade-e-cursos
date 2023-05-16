/*
GROUP BY

SERVE PARA DIVIR O RESULTADO DA SUA PESQUISA EM GRUPOS

SELECT <nome da coluna> FROM <nome da tabela> GROUP BY <nome da coluna>
*/

SELECT * FROM Sales.SalesOrderDetail WHERE SpecialOfferID = '9'

/* 
ASSIM ELE ESTÁ SOMANDO TODOS OS DADOS QUE TEM NA COLUNA UnitPrice E QUE TEM EM COMUM O SpecialOfferID IGUAL, POR EXEMPLO:

TODOS OS DADOS DA COLUNA UnitPrice QUE TEM O MESMO SpecialOfferID, SERÃO SOMADOS E SERÁ EXIBIDO LADO A LADO
*/
SELECT SpecialOfferID, SUM(UnitPrice) AS 'SOMA DE TODOS OS VALORES QUE TEM O SpecialOfferID IGUAL' FROM Sales.SalesOrderDetail GROUP BY SpecialOfferID
SELECT SpecialOfferID, UnitPrice FROM Sales.SalesOrderDetail WHERE SpecialOfferID = 9


-- VAMOS DIZER QUE EU QUEIRA SABER QUANTO FOI VENDIDO DE CADA PRODUTO ATÉ HOJE
SELECT * FROM Sales.SalesOrderDetail
SELECT ProductID AS 'ID DO PRODUTO', COUNT(ProductID) AS 'QUANTIDADE VENDIDA' FROM Sales.SalesOrderDetail GROUP BY ProductID


-- VAMOS DIZER QUE EU QUEIRA SABER QUANTOS NOMES DE CADA NOME EU TENHO CADASTRADO NO MEU BANCO DE DADOS
SELECT * FROM Person.Person
SELECT FirstName, COUNT(FirstName) AS CONTADOR FROM Person.Person GROUP BY FirstName


-- NA TABELA Production.Product EU QUERO SABER A MÉDIA DE PREÇO PARA OS PRODUTOS QUE SÃO PRATAS
SELECT * FROM Production.Product
SELECT Color, AVG(ListPrice) AS MEDIA FROM Production.Product WHERE Color = 'silver' GROUP BY Color


-- Desafio 1
SELECT * FROM Person.Person
SELECT MiddleName, COUNT(MiddleName) AS QUANTIDADE FROM Person.Person GROUP BY MiddleName

-- Desafio 2
SELECT * FROM Sales.SalesOrderDetail
SELECT ProductID, AVG(OrderQty) AS 'MEDIA DE VENDAS' FROM Sales.SalesOrderDetail GROUP BY ProductID

-- Desafio 3
SELECT * FROM Sales.SalesOrderDetail
SELECT ProductID, SUM(LineTotal) FROM Sales.SalesOrderDetail GROUP BY ProductID ORDER BY ProductID DESC

-- Desafio 4
SELECT * FROM Production.WorkOrder
SELECT ProductID, COUNT(ProductID) AS CONTAGEM, AVG(OrderQty) AS MEDIA FROM Production.WorkOrder GROUP BY ProductID ORDER BY ProductID