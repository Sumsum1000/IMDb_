import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import './src/db/connect.mjs';
import {login} from './src/users.services.mjs';

import {MoviesRouter} from './src/movies.routs.mjs';
import { usersRouter } from './src/users.routs.mjs';

export const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/Movies', MoviesRouter);
app.use('/api/users', usersRouter);

app.post('/api/login', async (req, res) => {
   
   const {email, password} = req.body;
   const user = await login(email, password)
   console.log(user);
   if(user) {
       res.json(user.username);
   } else {
       res.status(403).json({
           message: 'failed'
       });
   }
})

app.use(express.static('../simple-products-catalog-react/build/'));

app.listen(8080);

console.log("Server is listening on http://localhost:8080");

