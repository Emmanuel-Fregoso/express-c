import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/usuarios', (req, res) => {
    const query = req.query;
    console.log(query.q);
    res.json("{mensaje: 'Usuario creado'}");
})


app.listen(3000);
console.log('Server corriendo')