//simular aplicação 

 const db = require('./db');

 async function main(){
    const selectCapacidadeCinema = await db.selectCapacidadeCinema();
    const selectMediaIDH = await db.selectMediaIDH();

    const selectSumFamiliaBairro = await db.selectSumFamiliaBairro();


    //rotas
    const express = require('express');
    const app = express();
    const port = 3000;
    app.set('view engine', 'ejs');
    app.use(express.static("front"));

    app.get('/', (req, res) => {
        //mostrar o index.html
        res.sendFile(__dirname + '/front/index.html');
    });
//agregação
//// somar a capacidade dos cinemas por bairro
    app.get('/CapacidadeCinema', (req, res) => {
       // mostrar dados do banco no front com tudo.ejs
         res.render('selectCapacidadeCinema',{title: 'Capacidade dos Cinemas', action:'list', sampleData: selectCapacidadeCinema});
    });
// media dos IDHs por região adm
    app.get('/mediaIDH', (req, res) => {
        
          res.render('idhRA',{title: 'Média dos IDHs por Região Administrativa', action:'list', sampleData: selectMediaIDH});
     });
//quantidade de familia por bairro
    app.get('/qntfamiliaBairro', (req, res) => {
        
            res.render('qntfamiliabairro',{title: 'Quantidade de Famílias por Bairro', action:'list', sampleData: selectSumFamiliaBairro});
    });

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
}

main();

