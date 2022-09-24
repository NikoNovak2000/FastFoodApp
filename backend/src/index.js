import express from 'express';
import cors from 'cors'
import connect from './db.js'
import mongo from 'mongodb';
import routes from './routes.js';

const app = express()  // instanciranje aplikacije
const port = 3000  // port na kojem će web server slušati

app.use(cors());
app.use(express.json()); // automatski dekodiraj JSON poruke

app.get('/', (req, res) => {
    res.json({ status: 'Radi :)' });
});

app.get('/', routes.home)
app.get('/student', routes.student)

/* čitanje FastFood iz MongoDB */
app.get('/getAll', async (req, res) => {
    let db = await connect() // pristup db objektu
    let cursor = await db.collection("itemFood").find()
    let results = await cursor.toArray()
    res.json(results)
})

//Komentar
app.listen(port, () => console.log(`Slušam na portu ${port}!`));
