//simular aplicação 

 const db = require('./db');

 async function main(){
     const bairros = await db.selectBairro();
     console.log(bairros);
 }

 main();

