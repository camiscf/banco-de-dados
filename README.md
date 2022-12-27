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

## Populando tabela dados_cecad

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (27937,42331,32596,20);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (331,817,813,16);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (4098,6542,62540,6);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (1641,2888,2880,8);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (1515,3550,3552,2);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (29471,4148,46441,17);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (6827,16944,9312,1);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (2912,6196,6182,3);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (9351,14272,14224,25);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (1746,2572,2579,9);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (1037,2031,4687,26);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (206,445,445,24);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (5172,9266,9229,14);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (1047,1792,1793,22);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (3905,8202,8199,10);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (5895,12974,11761,12);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (1288,3185,3740,13);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (315,629,627,18);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (35,5,93,4);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (1037,93,1507,21);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (212,1508,583,23);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (5361,6462,8129,11);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (1631,541,2725,19);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (2751,3264,4869,27);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (3610,2557,5815,15);

INSERT INTO dados_cecad(extrema_pobreza,bolsa_familia,renda_per_capita,idbairro) VALUES (3808,13896,8378,5);

## Populando tabela familia

INSERT INTO familia VALUES (0,0,1,4,27);

INSERT INTO familia VALUES (0,0,2,2,27);

INSERT INTO familia VALUES (0,1,3,8,27);

INSERT INTO familia VALUES (0,1,4,6,27);

INSERT INTO familia VALUES (0,1,5,5,27);

INSERT INTO familia VALUES (1,1,6,3,26);

INSERT INTO familia VALUES (0,0,7,2,26);

INSERT INTO familia VALUES (1,1,8,8,26);

INSERT INTO familia VALUES (0,0,9,6,26);

INSERT INTO familia VALUES (0,1,10,4,26);

INSERT INTO familia VALUES (1,1,11,5,26);

INSERT INTO familia VALUES (1,1,12,3,25);

INSERT INTO familia VALUES (0,0,13,2,25);

INSERT INTO familia VALUES (1,1,14,8,25);

INSERT INTO familia VALUES (0,0,15,6,25);

INSERT INTO familia VALUES (0,1,16,4,25);

INSERT INTO familia VALUES (1,1,17,5,25);

INSERT INTO familia VALUES (0,1,18,3,24);

INSERT INTO familia VALUES (1,0,19,2,24);

INSERT INTO familia VALUES (0,0,23,5,24);

INSERT INTO familia VALUES (0,0,24,3,23);

INSERT INTO familia VALUES (0,0,25,2,23);

INSERT INTO familia VALUES (0,0,26,5,23);

INSERT INTO familia VALUES (0,0,27,3,23);

INSERT INTO familia VALUES (0,0,28,2,23);

INSERT INTO familia VALUES (0,0,29,5,23);

INSERT INTO familia VALUES (0,0,30,2,22);

INSERT INTO familia VALUES (0,0,31,2,22);

INSERT INTO familia VALUES (0,0,32,3,22);

INSERT INTO familia VALUES (0,0,33,2,21);

INSERT INTO familia VALUES (0,0,34,5,21);

INSERT INTO familia VALUES (0,0,35,3,21);

INSERT INTO familia VALUES (1,1,36,8,20);

INSERT INTO familia VALUES (0,1,37,5,20);

INSERT INTO familia VALUES (1,1,38,6,20);

INSERT INTO familia VALUES (1,1,39,4,20);

INSERT INTO familia VALUES (1,1,40,4,1);

INSERT INTO familia VALUES (0,0,41,1,1);

INSERT INTO familia VALUES (0,1,42,2,1);

INSERT INTO familia VALUES (1,0,43,3,1);

INSERT INTO familia VALUES (0,1,44,4,2);

INSERT INTO familia VALUES (0,0,45,1,2);

INSERT INTO familia VALUES (0,1,46,2,2);

INSERT INTO familia VALUES (0,0,47,3,2);

INSERT INTO familia VALUES (0,0,48,4,3);

INSERT INTO familia VALUES (0,0,49,2,3);

INSERT INTO familia VALUES (0,0,50,3,3);

INSERT INTO familia VALUES (0,0,51,4,3);

INSERT INTO familia VALUES (1,1,52,4,4);

INSERT INTO familia VALUES (0,0,53,2,4);

INSERT INTO familia VALUES (0,0,54,3,4);

INSERT INTO familia VALUES (0,1,55,4,4);

INSERT INTO familia VALUES (1,1,56,4,5);

INSERT INTO familia VALUES (0,0,57,2,5);

INSERT INTO familia VALUES (0,0,58,3,5);

INSERT INTO familia VALUES (0,1,59,6,5);

INSERT INTO familia VALUES (1,1,60,6,8);

INSERT INTO familia VALUES (1,1,61,8,9);

INSERT INTO familia VALUES (0,1,62,9,10);

INSERT INTO familia VALUES (0,1,63,5,11);

INSERT INTO familia VALUES (1,1,64,5,12);

INSERT INTO familia VALUES (1,1,65,4,13);

INSERT INTO familia VALUES (0,1,66,3,14);

INSERT INTO familia VALUES (0,0,67,2,15);

INSERT INTO familia VALUES (0,0,68,3,16);

INSERT INTO familia VALUES (1,1,69,6,17);

INSERT INTO familia VALUES (0,1,70,3,18);

INSERT INTO familia VALUES (0,1,71,4,19);

INSERT INTO familia VALUES (1,1,72,6,19);
