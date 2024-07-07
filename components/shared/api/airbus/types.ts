import { ITrip } from "../trip/types";

export interface IAirBus {
    uid: string,
    name: string,
    trips: ITrip[]
}

