// comunicação com o msql
async function connect(){

    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    

    const mysql = require('mysql2/promise'); // pega um wrapper do mysql que da um suporte ao promisses
    const connection =await mysql.createConnection('mysql://root:root@localhost:3306/trabalho_final'); // cria a conexão com o banco de dados
    global.connection = connection; // cria uma variavel global para ser usada em qualquer lugar do projeto
    console.log("Conectou ao MYSQL");
    return connection;
}

async function selectBairro(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM bairro');
    return await rows;
}

async function insertBairro(){
    const conn = await connect();
    const sql = 'INSERT INTO bairro (nome) VALUES (?)';
    const values = ['João'];
    return await conn.query(sql, values);
}

async function updateBairro(){
    const conn = await connect();
    const sql = 'UPDATE bairro SET nome = ? WHERE id = ?';
    const values = ['João', 1];
    return
}

async function deleteBairro(){
    const conn = await connect();
    const sql = 'DELETE FROM bairro WHERE id = ?';
    const values = [1];
    return
}

// subconsultas aninhadas

// selecionar todos cinemas por bairro
async function selectCinema(nome){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM cinema WHERE idBairro = (SELECT id FROM bairro WHERE nome = ?)', [nome]);
    return await rows;

}

// selecionar n° de bairros por região administrativa
async function selectBairroRegiao(nome){
    const conn = await connect();
    const [rows] = await conn.query('SELECT COUNT(*) AS nBairros FROM bairro WHERE idRegiao_Administrativa = (SELECT id FROM regiao_administrativa WHERE nome = ?)', [nome]);
    return await rows;
}

// somar a capacidade dos cinemas por bairro
async function selectCapacidadeCinema(nome){
    const conn = await connect();
    const [rows] = await conn.query('SELECT SUM(capacidade) AS capacidade FROM cinema WHERE idBairro = (SELECT id FROM bairro WHERE nome = ?)', [nome]);
    return await rows;
}

// media dos IDHs por região adm
async function selectMediaIDH(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT AVG(idh) AS media, bairro.nome as nome_bairro, regiao_administrativa.nome as regiao_administrativa FROM BAIRRO INNER JOIN regiao_administrativa ON regiao_administrativa.ID = bairro.idRegiao_Administrativa  group by idRegiao_Administrativa');
    return await rows;
}

// media dos IDHs por bairro
async function selectMediaIDHBairro(nome){
    const conn = await connect();
    const [rows] = await conn.query('SELECT AVG(idh) AS media FROM bairro WHERE idRegiao_Administrativa = (SELECT id FROM regiao_administrativa WHERE nome = ?)', [nome]);
    return await rows;
}

// descobrir bairros sem cinema com junção externa
async function selectBairroSemCinema(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT bairro.nome FROM bairro LEFT OUTER JOIN cinema ON bairro.id = cinema.idBairro WHERE cinema.idBairro IS NULL');
    return await rows;
}

// familia frequenta bairro e cinema
async function selectFamiliaBairroCinema(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM familia INNER JOIN Frequenta ON frequenta.ID_Familia = familia.ID     INNER JOIN BAIRRO ON BAIRRO.ID = familia.idBairro INNER JOIN cinema on cinema.idBairro = bairro.ID');
    return await rows;
}

// BAIRRO FAMILIA DADOS_CECAD
async function selectBairroFamiliaDados(){
    const conn = await connect();
    const [rows] = await conn.query('select *  from bairro inner join familia on familia.idBairro = bairro.ID inner join dados_cecad on dados_cecad.idBairro = familia.idBairro GROUP BY familia.idBairro');
    return await rows;
}

// inner join tudo
async function selectTudo(){
    const conn = await connect();
    const [rows] = await conn.query('select * from bairro inner join cinema on cinema.idBairro = bairro.ID inner join familia on familia.idBairro = bairro.ID inner join dados_cecad on dados_cecad.idBairro = familia.idBairro inner join regiao_administrativa on regiao_administrativa.ID = bairro.idRegiao_Administrativa');
    return await rows;
}


// exporta as funções para serem usadas em outros arquivos

module.exports = {selectBairro, insertBairro, updateBairro, deleteBairro, selectCinema, selectBairroRegiao,
    selectCapacidadeCinema, selectMediaIDH, selectMediaIDHBairro, selectBairroSemCinema, selectFamiliaBairroCinema, selectTudo, selectBairroFamiliaDados}