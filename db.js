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

// media dos IDHs
async function selectMediaIDH(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT AVG(idh) AS media FROM bairro');
    return await rows;
}

// media dos IDHs por bairro
async function selectMediaIDHBairro(nome){
    const conn = await connect();
    const [rows] = await conn.query('SELECT AVG(idh) AS media FROM bairro WHERE idRegiao_Administrativa = (SELECT id FROM regiao_administrativa WHERE nome = ?)', [nome]);
    return await rows;
}

module.exports = {selectBairro, insertBairro, updateBairro, deleteBairro, selectCinema, selectBairroRegiao,
    selectCapacidadeCinema, selectMediaIDH, selectMediaIDHBairro}