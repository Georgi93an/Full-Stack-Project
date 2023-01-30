import { TypeUser } from "./type-user";

export class User {
    id!:number;
    name!:string;
    firstName!:string;
    email!:string;
    typeUser!:TypeUser;
    [key: string]: any;
}
