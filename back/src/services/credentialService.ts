import { Credential, credentials } from '../models/credential';

export class CredentialService {
  static async createCredential(username: string, password: string): Promise<Credential> {

    const existingCredential = credentials.find(cred => cred.username === username);
    if (existingCredential) {
      throw new Error('Username already exists');
    }

    const newCredential: Credential = {
      id: credentials.length + 1,
      username,
      password
    };
    
    credentials.push(newCredential);
    return newCredential;
  }

  static validateCredential(username: string, password: string): number | null {
  const credential = credentials.find(cred => 
    cred.username === username && cred.password === password
  );
  
  return credential ? credential.id : null;
}

  static async getCredentialById(id: number): Promise<Credential | undefined> {
    return credentials.find(cred => cred.id === id);
  }
}