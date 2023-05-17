/*
INNER JOIN

SERVE PARA JUNTAR DUAS TABELAS

SELECT <nome da coluna> FROM <nome da tabela que deseja juntar> INNER JOIN <nome da tabela que deseja juntar> ON <coluna do nome da tabela que deseja juntar> = <coluna do nome da tabela que deseja juntar>
*/

-- NESTE CASO, ESTOU JUNTANDO O FirstName E O LastName DA TABELA Person.Person COM O EmailAddress DA TABELA Person.EmailAddress.
-- E POR FIM, DIZENDO QUE O BusinessEntityID DA TABELA Person.Person É O MESMO QUE O DA TABELA Person.EmailAddress
SELECT TOP 10 * FROM Person.Person
SELECT TOP 10 * FROM Person.EmailAddress
SELECT P.BusinessEntityID, P.FirstName, P.LastName, PE.EmailAddress FROM Person.Person AS P INNER JOIN Person.EmailAddress AS PE ON P.BusinessEntityID = PE.BusinessEntityID

-- VAMOS DIZER QUE EU QUEIRA OS NOMES DOS PRODUTOS E AS INFORMAÇÕES DE SUAS SUBCATEGORIAS
-- ListPrice, Nome do produto, Nome da subcategoria
SELECT TOP 10 * FROM Production.Product
SELECT TOP 10 * FROM Production.ProductSubCategory
SELECT P.ListPrice, P.Name, PP.ProductSubCategoryID FROM Production.Product AS P INNER JOIN Production.ProductSubcategory AS PP ON P.ProductSubcategoryID = PP.ProductSubcategoryID

-- CASO QUEIRA JUNTAR TODAS AS INFORMAÇÕES DE UMA TABELA COM A DA OUTRA
SELECT TOP 10 * FROM Person.BusinessEntityAddress
SELECT TOP 10 * FROM Person.Address
SELECT TOP 10 * FROM Person.BusinessEntityAddress AS BA INNER JOIN Person.Address AS PA ON PA.AddressID = BA.AddressID