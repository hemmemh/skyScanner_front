import { ITrip } from "../trip/types";

export interface ISeatClass {
    uid: string,
    name: string,
    multiplie:number,
    trips: ITrip[]
}

