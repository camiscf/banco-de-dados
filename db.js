// comunicação com o msql
const mysql = require('mysql2/promise'); // pega um wrapper do mysql que da um suporte ao promisses
const connection = mysql.createConnection('mysql://root:root@localhost:3306/empresa'); // cria a conexão com o banco de dados