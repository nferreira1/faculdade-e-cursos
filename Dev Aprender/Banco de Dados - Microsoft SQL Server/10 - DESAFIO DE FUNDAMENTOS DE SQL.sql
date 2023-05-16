-- DESAFIO DE FUNDAMENTOS DE SQL

-- Desafio 1
SELECT COUNT(ListPrice) FROM Production.Product WHERE ListPrice > 1500

-- Desafio 2
SELECT COUNT(LastName) FROM Person.Person WHERE LastName LIKE 'p%'

--cDesafio 3
SELECT COUNT(DISTINCT City) FROM Person.Address

-- Desafio 4
SELECT DISTINCT City FROM Person.Address

-- Desafio 5
SELECT COUNT(*) FROM Production.Product WHERE Color = 'red' AND ListPrice BETWEEN 500 AND 1500

-- Desafio 6
SELECT COUNT(Name) FROM Production.Product WHERE Name LIKE '%road%'