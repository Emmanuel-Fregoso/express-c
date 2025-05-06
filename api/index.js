import express from 'express';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { createUser } from '../actions/create-user.js';
import { loginUser } from '../actions/login.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(process.env.JWT_SECRET)
    try {
        const user = await loginUser(username, password);
        const token = jwt.sign(
            { id: user.id, username: user.username }
            , process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.status(200).cookie(
            'access_token',
            token,
            {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 3600000, // 1 hour
                sameSite: 'strict',
            }
        ).send({user, token});
    } catch (error) {
        res.status(401).send(error.message);
    }
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try{
        const id = await createUser(username, password)
        res.status(201).send({ id });
    } catch (error) {
        res.status(400).send(error.message);
    }
});
app.post('/logout', (req, res) => {
    res.clearCookie('access_token').send('Logged out successfully');
});

app.use((req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(403).send('Unauthorized');
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data;
        next();
    } catch (error) {
        res.status(401).send('Invalid token');
    }
})

app.get('/profile', (req, res) => {
    res.status(200).send(req.user);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

export default app;