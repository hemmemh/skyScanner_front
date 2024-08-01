import { IOrder } from "../order/types";

export interface IUser {
    uid: string;
    email: string
    password: string
    orders: IOrder[]

}

export interface IToken {
    access_token:string,
    user:IUser
}



