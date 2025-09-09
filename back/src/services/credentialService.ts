import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";

export class CredentialService {
    private static credentialRepository = AppDataSource.getRepository(Credential);

    static async createCredential(username: string, password: string): Promise<Credential> {
        const credential = this.credentialRepository.create({ username, password });
        return await this.credentialRepository.save(credential);
    }

    static async validateCredential(username: string, password: string): Promise<number | null> {
        const credential = await this.credentialRepository.findOne({
            where: { username, password }
        });
        return credential ? credential.id : null;
    }

    static async getCredentialById(id: number): Promise<Credential | null> {
        return await this.credentialRepository.findOneBy({ id });
    }
}