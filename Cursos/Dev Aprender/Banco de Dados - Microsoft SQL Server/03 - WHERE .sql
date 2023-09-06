/*
WHERE

SERVE PARA QUANDO É NECESSÁRIO PEGAR APENAS ALGUNS DADOS DA TABELA

SELECT <coluna1, coluna2, coluna3> FROM <nome da tabela> WHERE <condição>
*/


SELECT * FROM Person.Person WHERE FirstName = 'anna' AND LastName = 'miller'

SELECT * FROM Production.Product WHERE Color = 'blue' OR Color = 'black'

SELECT * FROM Production.Product WHERE ListPrice > 1500 AND ListPrice < 5000

SELECT * FROM Production.Product WHERE Color <> 'red'

-- Desafio 01
SELECT * FROM Production.Product WHERE Weight > 500 AND Weight <= 700 

-- Desafio 02
SELECT * FROM HumanResources.Employee WHERE MaritalStatus = 'M' AND SalariedFlag = 1

-- Desafio 03
SELECT * FROM Person.Person WHERE FirstName = 'Peter' AND LastName = 'Krebs'
SELECT * FROM Person.EmailAddress WHERE BusinessEntityID = 26