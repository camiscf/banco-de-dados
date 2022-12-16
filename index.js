//simular aplicação 

 const db = require('./db');

 async function main(){
     //const bairros = await db.selectBairro();
     //console.log(bairros);

     //subconsulta aninhada de cinema por bairro
     const cinemas = await db.selectCinema('Centro');
     //console.log(cinemas);

     //subconsulta aninhada para selecionar n° de bairros por região administrativa

    const bairros = await db.selectBairroRegiao('Centro');
    //console.log(bairros);

    //subconsulta aninhada para somar a capacidade dos cinemas por bairro
    
    const capacidade = await db.selectCapacidadeCinema('Centro');
    //console.log(capacidade);

    // media dos idhs   
    const media = await db.selectMediaIDH();
    console.log(media);

    // media dos idhs por bairro
    const mediaBairro = await db.selectMediaIDHBairro('Centro');
    console.log(mediaBairro);
    
    }

 main();

