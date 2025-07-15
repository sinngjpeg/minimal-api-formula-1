import fastify from "fastify";

const server = fastify({logger: true});

const teams = [
    {id: 1, name:"MacLaren", base: "Woking, United Kingdom"},
    {id: 2, name:"Red Bull", base: "Milton Keynes, United Kingdom"},
    {id: 3, name:"Mercedes", base: "Brackley, United Kingdom"}
]; 

const drivers = [
    {id: 1, name:"Max Verstappen", team: "Red Bull"},
    {id: 2, name: "Luis Hamilton", team: "Ferrari"},
    {id:3, name: "Lando Norris", teams: "McLaren"}
];

server.get("/teams", async(request, response) =>{
    response.type("application/json").code(200);
    return {teams};
});

server.get("/drivers", async(request, response) =>{
    response.type("application/json").code(200);
    return [{id:1, name:"Max Verstappen", team: "Red Bull"}];
})

server.listen({port: 3333}, () => {
    console.log("Server init");
});