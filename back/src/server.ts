import express from "express";
import { PORT } from "./config/envs";
import indexRouter from "./routes/indexRouter";

const app = express();

// Middlewares
app.use(express.json());

// Rutas principales
app.use("/", indexRouter);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
