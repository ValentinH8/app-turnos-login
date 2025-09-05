import { User, users } from '../models/user';
import { CredentialService } from './credentialService';

export class UserService {
  static getAllUsers(): User[] {
    return users;
  }

  static getUserById(id: number): User | undefined {
    return users.find(user => user.id === id);
  }

  static async registerUser(userData: Omit<User, 'id' | 'credentialsId'>, username: string, password: string): Promise<User> {

    const emailExists = users.some(user => user.email === userData.email);
    if (emailExists) {
      throw new Error('Email already registered');
    }


    const newCredential = await CredentialService.createCredential(username, password);


    const newUser: User = {
      id: users.length + 1,
      ...userData,
      credentialsId: newCredential.id
    };
    
    users.push(newUser);
    return newUser;
  }

  static loginUser(username: string, password: string): User | null {
  const credentialId = CredentialService.validateCredential(username, password);
  
  if (!credentialId) {
    return null;
  }

  const user = users.find(user => user.credentialsId === credentialId);
  return user || null;
}

}