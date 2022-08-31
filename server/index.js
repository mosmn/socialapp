import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

//import router
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

//Connecting to the database
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

//use express middleware to connect this to our app
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Hello to GOLDs API');
});

const PORT = process.env.PORT || 5001;


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));