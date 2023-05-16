/*
AGREGAÇÃO

FUNÇÕES DE AGREGAÇÃO BASICAMENTE AGREGAM OU COMBINAM DADOS DE UMA TABELA EM UM SÓ RESULTADO

-------------------------

MIN

SERVE PARA MOSTRAR O MENOR VALOR DA COLUNA

SELECT MIN(<nome da coluna que deseja ver o menor valor>) FROM <nome da tabela>

-------------------------

MAX

SERVE PARA MOSTRAR O MAIOR VALOR DA COLUNA

SELECT MAX(<nome da coluna que deseja ver o maior valor>) FROM <nome da tabela>

-------------------------

SUM

SERVE PARA SOMAR O VALOR TOTAL DE UMA COLUNA

SELECT SUM(<nome da coluna que deseja somar>) FROM <nome da tabela>

-------------------------

AVG

SERVE PARA SOMAR TODOS OS VALORES DA COLUNA E DIVIDIR PELA QUANTIDADE DE LINHAS DA COLUNA

SELECT AVG(<nome da coluna que deseja descobrir a média>) FROM <nome da tabela>
*/

-- PODE-SE COLOCAR APELIDOS, BASTA USAR O AS <nome do apelido>
SELECT SUM(LineTotal) AS SOMA FROM Sales.SalesOrderDetail

SELECT MIN(LineTotal) AS MENORVALOR FROM Sales.SalesOrderDetail

SELECT MAX(LineTotal) AS MAIORVALOR FROM Sales.SalesOrderDetail

SELECT AVG(LineTotal) AS MEDIA FROM Sales.SalesOrderDetail

SELECT * FROM Sales.SalesOrderDetail