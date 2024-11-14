import { IUser } from "./IUser";

export enum DataStatus {
    LOADING = "LOADING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
    IDLE = "IDLE",
}

export interface userState {
    error: string | null;
    status: DataStatus;
    user: null | IUser;
}

export interface IAttack {
    username:string
    nameOfMissel: string
    create_at: Date
    arrived_in: number
    status: string
}