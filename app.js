const express = require("express");
const app = express();

// Conectando Db
const conexion = require("./database/database");
conexion.once("open", () => console.log("Conexão concluida MongoDB"));
conexion.on("falha", () => console.log("Erro: " + falha));

// Admin bro
const adminBro = require("admin-bro");
const adminBroMongoose = require("@admin-bro/mongoose");
const adminBroExpress = require("@admin-bro/express");

// Exportando modelo
const user = require("./model/user");
const product = require("./model/product");

adminBro.registerAdapter(adminBroMongoose);

const adminBroOptions = {
  resources: [user, product],
};
const argAdmin = new adminBro(adminBroOptions);
const router = adminBroExpress.buildRouter(argAdmin);

app.use(argAdmin.options.rootPath, router);

app.get("/", (req, res) => {
  res.send("Dashboard com Node");
});

app.listen(8000, () => {
  console.log("Server Create http://localhost:8000/admin");
});
