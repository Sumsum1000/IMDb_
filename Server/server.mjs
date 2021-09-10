import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import './src/db/connect.mjs';
import {login} from './src/users.services.mjs';
import {signup} from './src/users.services.mjs';
import jwt from 'jsonwebtoken';
import {MoviesRouter} from './src/movies.routs.mjs';
import { usersRouter } from './src/users.routs.mjs';
import { FeaturedRouter } from './src/Featured.routs.mjs';


const SECRET = 'snow';
export const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/Movies', MoviesRouter);
//app.use('/api/featured', FeaturedRouter);
app.use('/api/users', usersRouter);

app.post('/api/Movies/:id/reviews', async (req, res) => {
    // const {score, title, comments, movieID, userID} = req.body;
    console.log("body" + req.body)
    const review = await addReview(req.params.id, req.body);
  console.log(review)
   if (review){
    res.json(review);
   }else{
    res.status(403).json({
        message: 'user does not exist'
    });
   }
  
});


app.post('/api/signup', async (req, res) => {
    const {email, username, password} = req.body;
    const user = await signup(email, username, password);
    console.log(user)
    if (user){
        // res.json({ 
        //     response: true
        // });
        res.send(true);
    }else {
        console.log(user)
        // res.json({ 
        //     response: false
        // });
        res.send(false);
    }
})

app.post('/api/login', async (req, res) => {
   const {email, password} = req.body;
   const user = await login(email, password)
   console.log(user);
   if(user) {
       const userResponse = {
           username: user.username,
           id: user.id.toString(),
           email: user.email
       }
       const token = jwt.sign(userResponse, SECRET, {expiresIn: 60});
       console.log(token)
       res.json({
        token,
        user: userResponse
       });
   } else {
       res.status(403).json({
           message: 'user does not exist'
       });
   }
})

app.use(express.static('../simple-products-catalog-react/build/'));

app.listen(8080);

console.log("Server is listening on http://localhost:8080");

