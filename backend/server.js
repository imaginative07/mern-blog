import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import ConnectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/customerror.js';

// Load env variables
dotenv.config();

// Connect to Database
ConnectDB(); 

// Server listen port
const port = process.env.PORT || 5000;

// Initiate express 
const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

// logging middleware
var num = 0;
app.use(function (req, res, next) {
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    var method = req.method;
    var url = req.url;

    console.log('\n- - - - - - - - - - - -\n'+(++num) + ". IP " + ip + " " + method + " " + url+'\n- - - - - - - - - - - -\n');
    next();
});

app.use('/', (req, res) => {
    res.send('Welcome to MERN Blog');
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});