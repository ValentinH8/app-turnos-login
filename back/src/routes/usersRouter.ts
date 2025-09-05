import { Router } from "express";
import { 
  registerUser, 
  loginUser, 
  getAllUsers, 
  getUserById 
} from "../controllers/usersController";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;