/*
IN

É USADO JUNTO DO WHERE, PARA VERIFICAR SE UM VALOR QUE CONTÉM EM UMA COLUNA CORRESPONDE COM QUALQUER VALOR PASSADO NA LISTA DE VALORES

SELECT <nome da coluna> FROM <nome da tabela> WHERE <nome da coluna> IN (<valor que deseja saber se existe na tabela>, <>, <>)
*/

SELECT * FROM Person.Person WHERE BusinessEntityID /* NOT */ IN (2, 7, 13)

-- SERIA A MESMA COISA QUE FAZER ISSO:
SELECT * FROM Person.Person WHERE BusinessEntityID = 2 OR BusinessEntityID = 7 OR BusinessEntityID = 13