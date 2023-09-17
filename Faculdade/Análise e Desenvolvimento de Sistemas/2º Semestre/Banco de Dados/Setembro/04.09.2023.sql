CREATE DATABASE dbaula;
USE dbaula;

-- CRIAR TABELA
CREATE TABLE cliente (
    Cod_cli INT PRIMARY KEY AUTO_INCREMENT,
    Nome_cli VARCHAR(50) NOT NULL,
    Endereco VARCHAR(50) NULL,
    Cidade VARCHAR(20) NULL,
    Cep VARCHAR(9) NULL,
    Uf VARCHAR(2) NULL
);

-- INSERIR DADOS EM UMA TABELA
INSERT INTO cliente (Nome_cli, Endereco, Cidade, Cep, Uf) 
VALUES (
'Antonio da Silva',
'Av. Euzebio, 300',
'São Paulo',
'22222-333',
'SP'
);

CREATE TABLE vendedor (
    Cod_vend INT PRIMARY KEY AUTO_INCREMENT,
    Nome_vend VARCHAR(50) NOT NULL,
    Sal_fixo DECIMAL(9, 2) NULL,
    Faixa_comiss VARCHAR(1) NULL
);

INSERT INTO vendedor (Nome_vend,Sal_fixo,Faixa_comiss) 
VALUES (
'Danilo',
1200.50,
'A'
);
    
SELECT * FROM cliente;
SELECT * FROM vendedor;
