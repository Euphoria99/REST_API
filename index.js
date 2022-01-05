import express  from "express";
import bodyParser from 'body-parser';
import res from "express/lib/response.js";

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;


app.use(bodyParser.json());

app.use('/users' , usersRoutes)

app.get('/', (req, res) => res.send('Hello There'));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));