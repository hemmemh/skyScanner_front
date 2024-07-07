import { ITrip } from "../trip/types";

export interface ICompany {
    uid: string,
    name: string,
    trips: ITrip[]
}

