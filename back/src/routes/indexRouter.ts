import { Router } from "express";
import usersRouter from "./usersRouter";
import turnsRouter from "./turnsRouter";

const router = Router();

router.use("/users", usersRouter);
router.use("/turns", turnsRouter);

export default router;
