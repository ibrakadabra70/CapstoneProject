import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) =>{
    res.send('Capstone Project')
})

const CONNECTION_URL = "mongodb+srv://Ibrahim_Abdo:Ibrahimabdo70$$@cluster0.elzg6.mongodb.net/test";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => app.listen(PORT, () => console.log(`listening on port: ${PORT}`)))
    .catch((error) => console.log(error.message))
