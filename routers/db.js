import express from 'express';
import { 
    selectCapacidadeCinema, 
    selectMediaIDH, 
    selectSumFamiliaBairro, 
    selectFamiliaBairroCinema, 
    selectBairroSemCinema, 
    selectBairroFamiliaDados, 
    selectTudo, 
    selectCinemaBairro,
    selectRegiaoAdmBairro
} from '../db.js';

const dbRouter = express.Router();

let queries = {
    selectCapacidadeCinema: await selectCapacidadeCinema(),
    selectMediaIDH: await selectMediaIDH(),
    selectSumFamiliaBairro: await selectSumFamiliaBairro(),
    selectFamiliaCinema: await selectFamiliaBairroCinema(),
    selectBairroSemCinema: await selectBairroSemCinema(),
    selectBairroDadosCecad: await selectBairroFamiliaDados(),
    selectTudo: await selectTudo(),
    cinemaBairroEscolhido: async (bairro) => await selectCinemaBairro(bairro),
    RegiaoAdmBairroEscolhido: async (regiaoAdm) => await selectRegiaoAdmBairro(regiaoAdm),
}

let titles = {
    selectCapacidadeCinema: 'Capacidade dos Cinemas por Bairro',
    selectMediaIDH: 'Média dos IDHs por Região Administrativa',
    selectSumFamiliaBairro: 'Quantidade de Famílias por Bairro',
    selectFamiliaCinema: 'Famílias que frequentam cinema por bairro',
    selectBairroSemCinema: 'Bairros sem Cinema',
    selectBairroDadosCecad: 'Informações do CECAD do bairro das famílias',
    selectTudo: 'Família Frequenta Cinema que pertence ao Bairro da Região Administrativa',
    selectCinemaBairro: 'Cinemas por Bairro',
    cinemaBairroEscolhido: 'Cinemas por Bairro',
    selectRegiaoAdmBairro: 'N° de bairros por Região Administrativa',
    RegiaoAdmBairroEscolhido: 'N° de bairros por Região Administrativa',
}

dbRouter.post('/cinemaBairroEscolhido/:bairro', async (req, res) => {
    const query = 'cinemaBairroEscolhido';
    const { bairro } = req.params;
    res.render(query, {title: titles[query], action:'list', sampleData: await queries[query](bairro)});
});

dbRouter.post('/RegiaoAdmBairroEscolhido/:regiaoAdm', async (req, res) => {
    const query = 'RegiaoAdmBairroEscolhido';
    const { regiaoAdm } = req.params;
    res.render(query, {title: titles[query], action:'list', sampleData: await queries[query](regiaoAdm)});
});

dbRouter.get('/:query', (req, res) => {
    const { query } = req.params;
    res.render(query, {title: titles[query], action:'list', sampleData: queries[query]});
});

export default dbRouter;