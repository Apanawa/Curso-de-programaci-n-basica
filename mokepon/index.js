<<<<<<< HEAD
const express = require("express");
const cors = require("cors");

<<<<<<< HEAD
const app = express();
const jugadores = [];

class Jugador {
    constructor(id) {
        this.id = id;
    }
}

app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Middleware para parsear JSON

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`;
    const jugador = new Jugador(id);
    jugadores.push(jugador);

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(id);
});

app.post("/mokepon/:jugadorId", (req, res) => {
    const jugadorId = req.params.jugadorId;
    const mascotaJugador = req.body.mokepon;
    console.log(`Jugador ${jugadorId} ha seleccionado ${mascotaJugador}`);
    res.end();
});

app.listen(8080, () => {
    console.log("Servidor funcionando en http://localhost:8080");
});
=======
console.log("Hola node");
>>>>>>> parent of 1b5c973 (servidor web con express.js)
=======
const app = express()

app.get("/", (req, res)=> {
    res.send("Hola")
})

app.listen(8080, () => {
    console.log("Servidor funcionando");
}) 
>>>>>>> parent of cb9db94 (API REST)
