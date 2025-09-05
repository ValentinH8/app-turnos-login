import express from "express";
import { envs } from "./config/envs";
import indexRouter from "./routes/indexRouter";

const app = express();

app.use(express.json());
app.use("/", indexRouter);

app.listen(envs.PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${envs.PORT}`);
});