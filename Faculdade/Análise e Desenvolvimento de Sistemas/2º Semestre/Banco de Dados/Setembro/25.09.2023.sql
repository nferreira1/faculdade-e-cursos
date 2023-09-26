CREATE DATABASE Clinica;
USE Clinica;

CREATE TABLE ambulatorios (
    nroa INT PRIMARY KEY AUTO_INCREMENT,
    andar VARCHAR(50) NOT NULL,
    capacidade VARCHAR(50) NULL
);

CREATE TABLE medicos (
    codm INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(40) NOT NULL,
    idade SMALLINT NOT NULL,
    especialidade CHAR(20) NULL,
    cpf VARCHAR(11) UNIQUE NULL,
    cidade VARCHAR(30) NULL,
    nroa INT NULL,
    FOREIGN KEY(nroa) REFERENCES ambulatorios(nroa)
);

CREATE TABLE pacientes (
	codp INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(40) NOT NULL,
	idade SMALLINT NOT NULL,
    cidade CHAR(30) NULL,
    cpf VARCHAR(11) UNIQUE NULL,
    doenca VARCHAR(40) NOT NULL   
);

CREATE TABLE funcionarios (
	codf INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(40) NOT NULL,
    idade SMALLINT NULL, 
    cpf VARCHAR(11) UNIQUE NULL,
    cidade VARCHAR(30) NULL,
    salario NUMERIC(10, 2) NULL,
    cargo VARCHAR(20) NULL
);

CREATE TABLE consultas (
	num_consultas INT PRIMARY KEY AUTO_INCREMENT,
    codm INT NULL,
    FOREIGN KEY(codm) REFERENCES medicos(codm),
    codp INT NULL,
    FOREIGN KEY(codp) REFERENCES pacientes(codp),
    data DATE NULL,
    HORA TIME NULL
);

DESCRIBE funcionarios;
ALTER TABLE funcionarios ADD COLUMN nroa INT;
ALTER TABLE funcionarios DROP COLUMN cargo;
