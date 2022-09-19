/* eslint-disable */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { setupRoutes } = require("./src/routes/index");

const app = express();

const port = process.env.PORT ?? "5000";

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(express.json());

setupRoutes(app);

app.listen(port, () => {
  console.warn(`Le serveur écoute sur le port ${port}`);
});
