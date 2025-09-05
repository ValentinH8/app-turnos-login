import { Request, Response } from "express";
import { UserService } from "../services/userService";

export const getAllUsers = (req: Request, res: Response) => {
  try {
    const users = UserService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

export const getUserById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = UserService.getUserById(Number(id));
    
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario' });
  }
};

export const registerUser = (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    

    if (!name || !email || !birthdate || !nDni || !username || !password) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const newUser = UserService.registerUser(
      { name, email, birthdate: new Date(birthdate), nDni }, 
      username,
      password
    );

    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const loginUser = (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ error: 'Usuario y contraseña requeridos' });
    }

    const user = UserService.loginUser(username, password); 
    
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    res.json({ message: 'Login exitoso', user });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};