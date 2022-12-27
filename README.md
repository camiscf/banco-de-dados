# Trabalho final de Banco de Dados 2022.2 - UFRJ
Script de Montagem do trabalho \
Alunos: Luigi Rangel, João Pedro Batista, Camila Caleones, Pedro Gadelha e Eduardo Viana
<br>

# Criando a DATABASE no MySQL

Para iniciar o processo de montagem do banco de dados é preciso criar a database 'trabalho_final' usando o comando do SQL:\
CREATE DATABASE trabalho_final

Agora criando as tabelas que serão usadas: bairro, cinema, dados_cecad, família, frequenta, regiao_administrativa

## Criando a tabela Bairro

CREATE TABLE Bairro ( 
 IDH FLOAT(4, 3),  
 Coordenadas CHAR(24),  
 Nome VARCHAR(50),  
 CEP CHAR(8),
 idRegiao_Administrativa INT,  
 ID INT PRIMARY KEY
); 

## Criando a tabela Familia

CREATE TABLE Familia ( 
 Extrema_Pobreza bool,  
 Beneficiario_BF bool,  
 ID INT PRIMARY KEY,  
 Qtd_Membros INT,  
 idBairro INT
); 

## Criando a tabela Cinema

CREATE TABLE Cinema ( 
 Salas INT,  
 Capacidade INT,  
 Nome VARCHAR(50),  
 ID INT PRIMARY KEY,  
 idBairro INT
); 

## Criando a tabela Regiao_Administrativa

CREATE TABLE Regiao_Administrativa ( 
 Nome varchar(50),  
 Numero_Bairros INT,  
 ID INT PRIMARY KEY
); 

## Criando a tabela Dados_CECAD

CREATE TABLE Dados_CECAD ( 
 renda_per_capita INT,  
 Extrema_Pobreza INT,  
 Bolsa_Familia INT,  
 idBairro INT
); 

## Criando a tabela frequenta

CREATE TABLE frequenta ( 
 Qtd_Ingressos INT,  
 ID_Familia INT PRIMARY KEY,  
 ID_Cinema INT PRIMARY KEY
); 

## Adicionando as FK

ALTER TABLE Bairro ADD CONSTRAINT fk_reg_ad FOREIGN KEY(idRegiao_Administrativa) REFERENCES Regiao_Administrativa (ID);
ALTER TABLE Familia ADD CONSTRAINT fk_fbairro FOREIGN KEY(idBairro) REFERENCES Bairro (ID);
ALTER TABLE Cinema ADD CONSTRAINT fk_cbairro FOREIGN KEY(idBairro) REFERENCES Bairro (ID);
ALTER TABLE Dados_CECAD ADD CONSTRAINT fk_dbairro FOREIGN KEY(idBairro) REFERENCES Bairro (ID);
ALTER TABLE Frequenta ADD CONSTRAINT fk_familia FOREIGN KEY(ID_Familia) REFERENCES Familia (ID);
ALTER TABLE Frequenta ADD CONSTRAINT fk_cinema FOREIGN KEY(ID_Cinema) REFERENCES Cinema (ID);
