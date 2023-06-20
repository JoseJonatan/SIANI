"use strict";
const config = require('./config.js');
const express = require("express");
const app = express();
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

console.log('ENVIRONMENT VARIABLES: ', config);

app.get('/', (req, res) => {
  res.send('Hello world');
});

//middleware

app.use(cors());
app.use(express.json());

// swagger document

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

//routes

app.use("/authentication", require("./server/routes/jwtAuth"));

app.use("/dashboard", require("./server/routes/dashboard"));

app.use("/general", require("./server/routes/general"));

app.use("/company", require("./server/routes/company"));

app.use("/advisory", require("./server/routes/advisory"));

app.use("/process", require("./server/routes/process"));

app.use("/marketing", require("./server/routes/marketing"));

app.use("/future", require("./server/routes/future"));

app.use("/forta", require("./server/routes/fort"));

app.use("/report", require("./server/routes/report"));

app.use("/perfil", require("./server/routes/edituser"));

//app.listen(config.PORT, config.HOST, () => {
app.listen(config.PORT, () => {
  console.log(`App listening on http://${config.HOST}:${config.PORT}`);
});