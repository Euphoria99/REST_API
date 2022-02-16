// import 'dotenv/config' 
import express  from "express";
import bodyParser from 'body-parser';
import res from "express/lib/response.js";




import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import usersRoutes from './routes/users.js';

// dotenv.config( { path : '.env'} )
// require('dotenv').config()
const connectDB = require('./server/database/connection.cjs');

// import connectDB from '../server/database/connection.js';

const app = express();
const PORT = 5000;

connectDB;

app.use(bodyParser.json());

app.use('/users' , usersRoutes)

app.get('/', (req, res) => res.send('Hello There'));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));