import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*"
});

const teams = [
    { id: 1, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 2, name: "Mercedes-AMG Petronas", base: "Brackley, United Kingdom" },
    { id: 3, name: "Ferrari", base: "Maranello, Italy" },
    { id: 4, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
    { id: 6, name: "Alpine", base: "Enstone, United Kingdom / Viry-Châtillon, France" },
    { id: 7, name: "Visa Cash App RB", base: "Faenza, Italy" },
    { id: 8, name: "Stake F1 Team Kick Sauber", base: "Hinwil, Switzerland" },
    { id: 9, name: "Williams", base: "Grove, United Kingdom" },
    { id: 10, name: "Haas F1 Team", base: "Kannapolis, United States / Banbury, United Kingdom" }
];


const drivers = [
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 2, name: "Sergio Pérez", team: "Red Bull Racing" },
    { id: 3, name: "Lewis Hamilton", team: "Ferrari" },
    { id: 4, name: "Charles Leclerc", team: "Ferrari" },
    { id: 5, name: "George Russell", team: "Mercedes-AMG Petronas" },
    { id: 6, name: "Mick Schumacher", team: "Mercedes-AMG Petronas" }, // especulativo se Mick será o segundo piloto
    { id: 7, name: "Lando Norris", team: "McLaren" },
    { id: 8, name: "Oscar Piastri", team: "McLaren" },
    { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
    { id: 10, name: "Lance Stroll", team: "Aston Martin" },
    { id: 11, name: "Esteban Ocon", team: "Alpine" },
    { id: 12, name: "Pierre Gasly", team: "Alpine" },
    { id: 13, name: "Daniel Ricciardo", team: "Visa Cash App RB" },
    { id: 14, name: "Yuki Tsunoda", team: "Visa Cash App RB" },
    { id: 15, name: "Valtteri Bottas", team: "Stake F1 Team Kick Sauber" },
    { id: 16, name: "Guanyu Zhou", team: "Stake F1 Team Kick Sauber" },
    { id: 17, name: "Alexander Albon", team: "Williams" },
    { id: 18, name: "Logan Sargeant", team: "Williams" },
    { id: 19, name: "Kevin Magnussen", team: "Haas F1 Team" },
    { id: 20, name: "Nico Hülkenberg", team: "Haas F1 Team" }
];


server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return { teams };
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    return [{ id: 1, name: "Max Verstappen", team: "Red Bull" }];
})

interface DriverParams {
    id: string
}

server.get<{ Params: DriverParams }>(
    "/drivers/:id",
    async (request, response) => {
        const id = parseInt(request.params.id);
        const driver = drivers.find((d) => d.id === id);

        if (!driver) {
            response.type("application/json").code(404);
            return { message: "Driver not found" };
        } else {
            response.type("application/json").code(200);
            return { driver };
        }
    }
);

server.listen({ port: 3333 }, () => {
    console.log("Server init");
});