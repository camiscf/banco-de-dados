import dbRouter from './routers/db.js';
import express from 'express';
import { 
    selectCapacidadeCinema, 
    selectMediaIDH, 
    selectSumFamiliaBairro, 
    selectFamiliaBairroCinema, 
    selectBairroSemCinema, 
    selectBairroFamiliaDados, 
    selectTudo 
} from './db.js';

import bodyParser from 'body-parser';
//simular aplicação 

 async function main(){
    const selectCapacidadeCinemaVAR = await selectCapacidadeCinema();

    const selectMediaIDHVAR = await selectMediaIDH();

    const selectSumFamiliaBairroVAR = await selectSumFamiliaBairro();

    const selectFamiliaCinemaVAR = await selectFamiliaBairroCinema();

    const selectBairroSemCinemaVAR = await selectBairroSemCinema();

    const selectBairroDadosCecadVAR = await selectBairroFamiliaDados();

    const selectTudoVAR = await selectTudo();

    //rotas
   
    const app = express();
    const port = 3000;
    app.set('view engine', 'ejs');
    app.use(express.static("front"));

    app.get('/', (req, res) => {
        //mostrar o index.html
        res.sendFile(__dirname + '/front/index.html');
    });
//agregação

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });

    // subconsultas aninhadas

    //body parser
    app.use(bodyParser.urlencoded({ extended: true }));

    // selecionar o cinema por bairro
    app.get('/cinemaBairro', (req, res) => {
        res.render('cinemaBairro',{title: 'Cinema por Bairro', action:'list', sampleData: selectMediaIDH});
    });


    app.post('/cinemaBairroEscolhido', async (req, res) => {
        //res.send('Bairro escolhido: ' + req.body.bairro);
        const bairro = req.body.bairro;
        const selectCinemaBairro = await selectCinemaBairro(bairro);
        res.render('cinemaBairroEscolhido',{title: 'Cinema por Bairro', action:'list', sampleData: selectCinemaBairro});    
       });
    
    
    // selecionar n° de bairros por região administrativa
    app.get('/bairroRA', (req, res) => {
        const regiao = req.body.regiao;
        selectBairroRA = selectBairroRegiao(regiao);
        res.render('bairroRA',{title: 'Bairro por Região Administrativa', action:'list', sampleData: selectBairroRA});
    });


    app.use('/db', dbRouter);
}

main();

