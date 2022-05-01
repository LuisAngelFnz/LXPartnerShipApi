# LXPartnerShipApi
Practica de LaunchX Back End, Api Rest

## Arquitectura
- NodeJS

## Dependencias 
- Jest
- Linter
- Express

Desde linea de comando ejecutuar los siguientes pasos

### Paso 1
Clonar repo.
> git clone <span>https://github.com/LuisAngelFnz/LXPartnerShipApi.git</span>

### Paso 2
Cambiar al directorio del proyecto
> cd LXPartnerShipApi

Instalar dependencias necesarias(Jest, Linter, Express)
> npm install

### Paso 3
Arrancar servidor
> npm run server

### Paso 4
Escribir en el navegador lo siguiente y verificar que el servidor responda de manera correcta

Muestra todos los explorers que se encuentran en la mision "node"
> localhost:3000/v1/explorers/node


Muestra la cantidad de explorers que se encuentran en la mision "node", ejemplo: {'mission':'node', 'quantity':20}
> localhost:3000/v1/explorers/amount/node


Obtiene los nombre de los exploerer que están en la mision node
> localhost:3000/v1/explorers/usernames/node


Debe responder lo siguiente: {score: 1, trick: 1}
> localhost:3000/v1/fizzbuzz/1


Debe responder lo siguiente: {score: 3, trick: "Fizzz"}
> localhost:3000/v1/fizzbuzz/3


Debe responder lo siguiente: {score: 5, trick: "Buzz"}
> localhost:3000/v1/fizzbuzz/5

Debe responder lo siguiente: {score: 15, trick: "Fizzbuzz"}
> localhost:3000/v1/fizzbuzz/15
