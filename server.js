const express = require("express");
const cors = require("cors");
//const https = require('https');
//const fs = require('fs');
const db = require("./backend/models");

// import connectDB from "./backend/config/db.js"
// import testRoutes from './backend/routes/testRoute.js'
//const cors = require('cors') 
// import express from 'express'
const dotenv = require('dotenv')

// connectDB()

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

// const privateKey = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/privkey.pem', 'utf8'); // key
// const certificate = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/cert.pem', 'utf8'); // certificate
// const ca = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/chain.pem', 'utf8'); // chain
// const credentials = {
//    key: privateKey,
//    cert: certificate,
//    ca: ca
// };

// const httpsServer = https.createServer(credentials, app);
// httpsServer.listen('8443', () => {
//     console.log('listening on https://einsteincovidtracker.com/:8443');
// });

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my application" })
})


require("./backend/routes/test.routes")(app);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))