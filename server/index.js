import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//import router
import postRoutes from './routes/posts.js';

const app = express();

//Connecting to the database
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

//use express middleware to connect this to our app
app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://mosmnn:mosmn144@cluster0.ebhlgfb.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5001;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));