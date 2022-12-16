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

module.exports = {selectBairro, insertBairro, updateBairro, deleteBairro}