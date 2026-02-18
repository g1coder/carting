import { getRandomValues } from "node:crypto";
import { encryptKey } from "shared/lib";

interface Account {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

const generateToken = () => {
    const arr = new Uint8Array(12);
    getRandomValues(arr);
    return Array.from(arr, (v) => v.toString(16).padStart(2, "0")).join("");
};

class UserSessions {
    #db: Map<string, Account>;
    #sessions: Set<string>;

    constructor() {
        this.#sessions = new Set();
        this.#db = new Map([
            [
                "guest@mail.com",
                {
                    id: "USR-000",
                    firstName: "Ivan",
                    lastName: "Ivanov",
                    email: "guest@mail.ru",
                    password: "Secret1",
                },
            ],
        ]);
    }

    public async signUp(account: Account) {
        const token = generateToken();
        const encryptedToken = await encryptKey(token);
        this.#db.set(account.email, account);
        this.#sessions.add(encryptedToken);
        return encryptedToken;
    }

    public async signIn(email: string, password: string) {
        const dbUser = this.#db.get(email);
        if (dbUser && dbUser.password === password) {
            const token = generateToken();
            const encryptedToken = await encryptKey(token);
            this.#sessions.add(encryptedToken);
            return encryptedToken;
        }
        return null;
    }

    public getUser(sessionId: string) {
        return this.#sessions.has(sessionId) && this.#db.get(sessionId);
    }

    public async signOut(sessionId: string | undefined) {
        if (sessionId) {
            this.#sessions.delete(sessionId);
        }
    }
}

export const userSessions = new UserSessions();
