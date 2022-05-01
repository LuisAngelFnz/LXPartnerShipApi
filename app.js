const express = require('express');
const ExplorerService = require('./lib/services/ExplorerService');
const app = express();

app.use(express.json());

const port = 3000

let [sucess, all_explorers] = ExplorerService.getExplorers('explorers.json');

if(! sucess){
    console.log(`Error get explorers ${all_explorers}`);
    console.log('Set explorers to []');
    all_explorers = [];
}

app.get('/v1/explorers/:mission', (request, response)=>{
    console.log(`[${new Date()}] Api PartnerShip [M] GET [F] filterByMission [P] ${request.params.mission}`);
    const result = ExplorerService.filterByMission(all_explorers,request.params.mission)
    response.status(200).json(result);
});

app.get('/v1/explorers/amount/:mission', (request, response)=>{
    console.log(`[${new Date()}] Api PartnerShip [M] GET [F] filterByMission [P] ${request.params.mission}`);
    const result = ExplorerService.getAmountOfExplorersByMission(all_explorers,request.params.mission)
    response.status(200).json(result);
});

app.get('/v1/explorers/usernames/:mission', (request, response)=>{
    console.log(`[${new Date()}] Api PartnerShip [M] GET [F] filterByMission [P] ${request.params.mission}`);
    const result = ExplorerService.getExplorersUsernamesByMission(all_explorers,request.params.mission)
    response.status(200).json(result);
});

app.listen(port, () => {
 console.log(`Init server, listening on port ${port}`)
});

