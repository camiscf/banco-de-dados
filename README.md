# Script de Montagem do trabalho final de Banco de Dados 2022.2 - UFRJ

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

# Populando o Banco de Dados

Agora é preciso popular o banco de dados para visualizar as informações

## Populando a tabela bairro

INSERT INTO bairro VALUES (0.882, '22.9071° S, 43.1819° W', 'Centro', '20020050', 1, 1);

INSERT INTO bairro VALUES (0.952, '22.9512° S, 43.1808° W', 'Botafogo', '22250040', 2, 2);

INSERT INTO bairro VALUES (0.957, '22.9332° S, 43.1847° W', 'Laranjeiras', '22240004', 2, 21);

INSERT INTO bairro VALUES (0.956, '22.9694° S, 43.1868° W', 'Copacabana', '22020002', 3, 3);

INSERT INTO bairro VALUES (0.959, '22.9621° S, 43.2077° W', 'Lagoa', '22210000', 4, 4);

INSERT INTO bairro VALUES (0.962, '22.9847° S, 43.1986° W', 'Ipanema', '22421000', 4, 22);

INSERT INTO bairro VALUES (0.967, '22.9843° S, 43.2231° W', 'Leblon', '22441020', 4, 23);

INSERT INTO bairro VALUES (0.970, '22.9760° S, 43.2285° W', 'Gávea', '22451010', 4, 24);

INSERT INTO bairro VALUES (0.926, '22.9326° S, 43.2410° W', 'Tijuca', '20520000', 5, 5);

INSERT INTO bairro VALUES (0.825, '22.8942° S, 43.2391° W', 'Benfica', '20911360', 6, 6);

INSERT INTO bairro VALUES (0.901, '22.9166° S, 43.2502° W', 'Vila Isabel', '20560120', 7, 7);

INSERT INTO bairro VALUES (0.861, '22.8627° S, 43.2540° W', 'Bonsucesso', '21040320', 8, 8);

INSERT INTO bairro VALUES (0.860, '22.8804° S, 43.2690° W', 'Del Castilho', '21051090', 9, 9);

INSERT INTO bairro VALUES (0.798, '22.8443° S, 43.3232° W', 'Irajá', '21230280', 10, 10);

INSERT INTO bairro VALUES (0.876, '22.8538° S, 43.3036° W', 'Vila Cosmos', '21210010', 10, 25);

INSERT INTO bairro VALUES (0.831, '22.8725° S, 43.3364° W', 'Madureira', '21351000', 11, 11);

INSERT INTO bairro VALUES (0.769, '22.9682° S, 43.3907° W', 'Jacarepaguá', '22740175', 12, 12);

INSERT INTO bairro VALUES (0.898, '22.9389° S, 43.3408° W', 'Freguesia', '22745901', 12, 26);

INSERT INTO bairro VALUES (0.836, '22.8058° S, 43.1932° W', 'Jardim Carioca', 'CEP', 13, 13);

INSERT INTO bairro VALUES (0.810, '22.8401° S, 43.3781° W', 'Guadalupe', '21660620', 14, 14);

INSERT INTO bairro VALUES (0.878, '22.9163° S, 43.1916° W', 'Santa Teresa', '20241140', 15, 15);

INSERT INTO bairro VALUES (0.959, '23.0004° S, 43.3659° W', 'Barra da Tijuca', '22630010', 16, 16);

INSERT INTO bairro VALUES (0.894, '23.0175° S, 43.4626° W', 'Recreio', '22790140', 16, 27);

INSERT INTO bairro VALUES (0.810, '22.9077° S, 43.5659° W', 'Campo Grande', '79080320', 17, 17);

INSERT INTO bairro VALUES (0.856, '22.8905° S, 43.3909° W', 'Jardim Sulacap', '21741370', 18, 18);

INSERT INTO bairro VALUES (0.931, '22.9022° S, 43.2803° W', 'Méier', '20735040', 19, 19);

INSERT INTO bairro VALUES (0.794, '22.8742° S, 43.4685° W', 'Bangu', '21820020', 20, 20);

## Populando tabela cinema

INSERT INTO cinema VALUES (1,550,'Centro Cultural Odeon',1,1);

INSERT INTO cinema VALUES (4,814,'Kinoplex Sao Luiz',2,2);

INSERT INTO cinema VALUES (1,70,'Cine Musei da República',3,2);

INSERT INTO cinema VALUES (6,1353,'Cinemark Botafogo',4,2);

INSERT INTO cinema VALUES (6,934,'Espaço Itaú Botafogo',5,2);

INSERT INTO cinema VALUES (5,450,'Estação Net Rio',6,2);

INSERT INTO cinema VALUES (3,387,'Estação Net Botafogo',7,2);

INSERT INTO cinema VALUES (6,643,'Kinoplex Rio Sul',8,2);

INSERT INTO cinema VALUES (3,914,'Roxy',9,3);

INSERT INTO cinema VALUES (1,87,'Cine Jóia',10,3);

INSERT INTO cinema VALUES (6,16663,'Kinoplex Tijuca',11,5);

INSERT INTO cinema VALUES (1,200,'Cine Manguinhos',12,6);

INSERT INTO cinema VALUES (7,1019,'Kinoplex Boulevard Rio',13,7);

INSERT INTO cinema VALUES (1,95,'Cine Carioca Nova Brasília',14,8);

INSERT INTO cinema VALUES (3,389,'Cine Carioca Meier',15,19);

INSERT INTO cinema VALUES (5,937,'Kinoplex Madureira',16,11);

INSERT INTO cinema VALUES (4,1112,'Cinesystem Ilha Plaza',17,13);

INSERT INTO cinema VALUES (1,46,'Cine Santa Teresa',18,15);

INSERT INTO cinema VALUES (6,1527,'Cinesystem Bangu',19,20);

INSERT INTO cinema VALUES (6,1372,'Cinesystem Cine 10 Sulacap',20,18);

INSERT INTO cinema VALUES (7,920,'Cinesystem Parque Sulacap',21,18);

INSERT INTO cinema VALUES (7,1677,'UCI Park Campo Grande',22,17);

INSERT INTO cinema VALUES (5,1053,'Kinoplex West Shopping',23,17);

INSERT INTO cinema VALUES (12,2234,'Cinemark Downtown',24,16);

INSERT INTO cinema VALUES (7,1557,'Cinemark Metropolitano Barra',25,16);

INSERT INTO cinema VALUES (4,283,'Cinemark Village Mall',26,16);

INSERT INTO cinema VALUES (3,425,'Espaço Itaú Rio Design',27,16);

INSERT INTO cinema VALUES (2,212,'Estação Net Barra Point',28,16);

INSERT INTO cinema VALUES (18,4180,'UCI New York City Center',29,16);

INSERT INTO cinema VALUES (6,1399,'Kinoplex Via Parque',30,16);

INSERT INTO cinema VALUES (7,1248,'Cinesystem Américas',31,27);

INSERT INTO cinema VALUES (5,1226,'Cinesystem Recreio',32,27);

INSERT INTO cinema VALUES (1,73,'Ponto Cine',33,14);

INSERT INTO cinema VALUES (5,1530,'Araujo Multiplex J.Guadalupe',34,14);

INSERT INTO cinema VALUES (4,645,'Cinemark Jacarepaguá',35,12);

INSERT INTO cinema VALUES (3,336,'Cine Jóia Rio Shopping',36,26);
