const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./backend/models");

// import connectDB from "./backend/config/db.js"
// import testRoutes from './backend/routes/testRoute.js'
// import cors from 'cors'
// import express from 'express'
// import dotenv from 'dotenv'

// connectDB()

// dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

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