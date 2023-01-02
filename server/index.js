import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import Connection from './database/db.js';
import Routes from './server/route.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use('/', Routes);
const PORT = 8000;

const username =process.env.DB_USERNAME;
const password =process.env.DB_PASSWORD;

Connection(username, password);
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));