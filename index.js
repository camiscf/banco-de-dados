//simular aplicação 

 const db = require('./db');

 async function main(){
    const selectCapacidadeCinema = await db.selectCapacidadeCinema();
    
    const selectMediaIDH = await db.selectMediaIDH();

    const selectSumFamiliaBairro = await db.selectSumFamiliaBairro();

    const selectFamiliaCinema = await db.selectFamiliaBairroCinema();

    const selectBairroSemCinema = await db.selectBairroSemCinema();

    const selectBairroDadosCecad = await db.selectBairroFamiliaDados();

    const selectTudo = await db.selectTudo();
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

// consultas com JOIN
//familia frequenta cinema por bairro
    app.get('/familiaCinema', (req, res) => {

        res.render('JOINFamiliaCinema',{title: 'Famílias que frequentam cinema por bairro', action:'list', sampleData: selectFamiliaCinema});
    });

//bairro sem cinema
    app.get('/bairroSemCinema', (req, res) => {

        res.render('JOINBairrosSemCinema',{title: 'Bairros sem Cinema', action:'list', sampleData: selectBairroSemCinema});
    });

// BAIRRO FAMILIA DADOS_CECAD
    app.get('/bairroFamilia', (req, res) => {
        res.render('bairroFamilia',{title: 'Informações do CECAD do bairro das famílias', action:'list', sampleData: selectBairroDadosCecad});
    });

// SELECT TUDO
    app.get('/tudo', (req, res) => {
        res.render('selectTudo',{title: 'Família Frequenta Cinema que pertence ao Bairro que está na Região Administrativa', action:'list', sampleData: selectTudo});
    });

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
}

main();

