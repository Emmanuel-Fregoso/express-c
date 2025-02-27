import express from 'express';
import router from './routes/routes.mjs';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(router);


app.listen(PORT,function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT)
});