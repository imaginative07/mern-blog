import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

// Define port to run the server
const port = process.env.PORT || 5000;

// Initiate express 
const app = express();

app.use('/', (req, res) => {
    res.send('Welcome to MERN Blog');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});