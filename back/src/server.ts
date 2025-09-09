import express from "express";
import { envs } from "./config/envs";
import indexRouter from "./routes/indexRouter";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

const app = express();

app.use(express.json());
app.use("/", indexRouter);

AppDataSource.initialize()
  .then(() => {
    console.log("Conexión a la base inicializada");
    app.listen(envs.PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${envs.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al inicializar la conexión a la base de datos:", error);
  });
