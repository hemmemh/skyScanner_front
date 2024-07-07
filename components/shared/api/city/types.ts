import { ITrip } from "../trip/types";

export interface ICity {
    uid: string,
    name: string,
    trips: ITrip[]
}

