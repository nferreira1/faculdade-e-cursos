USE dbaula;

CREATE TABLE produto (
	Cod_produto INT PRIMARY KEY AUTO_INCREMENT,
    Unid_produto VARCHAR(3),
    Desc_produto VARCHAR(20),
    Val_unit DECIMAL(9,2)
);

INSERT INTO produto (unid_produto, val_unit, desc_produto) 
VALUES ("CX", 5.45, "Lápis"), ("UN", 7.56, "Caneta");

SELECT * FROM produto;

CREATE TABLE pedidos (
	Num_pedido INT PRIMARY KEY AUTO_INCREMENT,
    Prazo_entr INT,
    FK_cod_cli INT,
    -- CHAVE ESTRANGEIRA, REFERENCES SERVE PARA DIZER QUE A FK_cod_cli É A MESMA QUE O Cod_cli DA TABELA cliente
    FOREIGN KEY(FK_cod_cli) REFERENCES cliente(Cod_cli),
    FK_cod_vend iNT, 
    FOREIGN KEY(FK_cod_vend) REFERENCES vendedor(Cod_vend)
);

SELECT * FROM cliente;
SELECT * FROM vendedor;

INSERT INTO pedidos (Prazo_entr, FK_cod_cli, FK_cod_vend)
VALUES (15, 1, 1), (10, 2, 1);

SELECT * FROM pedidos;

CREATE TABLE item_pedido (
          Qtd_ped INT,
          FK_num_ped INT,
          FOREIGN KEY(FK_num_ped) REFERENCES pedidos(Num_pedido),
          FK_cod_prod INT,
          FOREIGN KEY(FK_cod_prod) REFERENCES produto(Cod_produto)
);

INSERT INTO item_pedido (Qtd_ped, FK_num_ped, FK_cod_prod) 
VALUES (5,1,1);

SELECT * FROM pedidos;
SELECT * FROM item_pedido;
SELECT * FROM produto;

-- DESCRIBE, SERVE PARA OBTER INFORMAÇÕES DA TABELA
DESCRIBE cliente;

-- ALTER TABLE, SERVE PARA ADICIONAR, MODIFICAR, ETC ALGUMA COLUNA DE UMA TABELA
-- ADD COLUMN, SERVE PARA ADICIONAR UMA NOVA COLUNA A TABELA
ALTER TABLE cliente ADD COLUMN telefone VARCHAR(15);

SELECT * FROM cliente;
SELECT nome_cli, cidade FROM cliente;

-- MODIFY, SERVE PARA ALTERAR UMA PROPRIEDADE DE ALGUMA COLUNA DE UMA TABELA
ALTER TABLE cliente MODIFY COLUMN cidade VARCHAR(50);

-- CHANGE, TEM A MESMA FUNCIONALIDADE DO MODIFY E TAMBÉM SERVE PARA RENOMEAR UMA COLUNA
ALTER TABLE cliente CHANGE endereco ender_cli VARCHAR(50);

-- SERVE PARA QUANDO É NECESSÁRIO PEGAR APENAS ALGUNS DADOS DA TABELA
SELECT * FROM cliente WHERE cod_cli = 1;

-- AND = &&
SELECT * FROM cliente WHERE cidade = "São Paulo" AND Uf = "SP";

-- UPDATE, SERVE PARA MODIFICAR OS REGISTROS EXISTENTES EM UMA TABELA
UPDATE cliente SET cidade = "Cotia" WHERE cod_cli = 2;

SELECT * FROM cliente WHERE cod_cli = 2;

SELECT * FROM CLIENTE;

-- DELETE, SERVE PARA REMOVER REGISTROS DE UMA TABELA
DELETE FROM cliente WHERE cod_cli = 3;

-- OR = ||
SELECT * FROM cliente WHERE cidade = "São Paulo" OR uf = "SP";

INSERT INTO cliente (Nome_cli, ender_cli, Cidade, Cep, uf)
VALUES (
	"Carlos",
    "Av. Euzebio,300",
    "São Paulo",
    "33333-555",
    "SP"
);