//simular aplicação 

 const db = require('./db');

 async function main(){
    const selectCapacidadeCinema = await db.selectCapacidadeCinema();
    const selectMediaIDH = await db.selectMediaIDH();
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

    app.get('/CapacidadeCinema', (req, res) => {
       // mostrar dados do banco no front com tudo.ejs
         res.render('selectCapacidadeCinema',{title: 'Capacidade dos Cinemas', action:'list', sampleData: selectCapacidadeCinema});
    });

    app.get('/mediaIDH', (req, res) => {
        // mostrar dados do banco no front com tudo.ejs
          res.render('idhRA',{title: 'Média dos IDHs por Região Administrativa', action:'list', sampleData: selectMediaIDH});
     });


    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
}

main();

