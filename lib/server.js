const express = require('express');
const ExplorerController = require('./controllers/ExplorerController');
const app = express();

app.use(express.json());

const port = 3000;

app.get('/v1/explorers/:mission', (request, response)=>{
    console.log(`[${new Date()}] Api PartnerShip [M] GET [F] getExplorersByMission [P] ${request.params.mission}`);
    const result = ExplorerController.getExplorersByMission(request.params.mission)
    response.status(200).json(result);
});

app.get('/v1/explorers/amount/:mission', (request, response)=>{
    console.log(`[${new Date()}] Api PartnerShip [M] GET [F] getExplorersAmonutByMission [P] ${request.params.mission}`);
    const result = ExplorerController.getExplorersAmonutByMission(request.params.mission)
    response.status(200).json({mission:request.params.mission,quantity:result});
});

app.get('/v1/explorers/usernames/:mission', (request, response)=>{
    console.log(`[${new Date()}] Api PartnerShip [M] GET [F] getExplorersUsernamesByMission [P] ${request.params.mission}`);
    const result = ExplorerController.getExplorersUsernamesByMission(request.params.mission)
    response.status(200).json({
        mission:request.params.mission,
        explorers:result
    });
});

app.listen(port, () => {
 console.log(`Init server, listening on port ${port}`)
});

