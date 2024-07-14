import { ITrip } from "../api/trip";

export function isTripsPairs(trips: ITrip | [ITrip, ITrip]): trips is [ITrip, ITrip] {
    return Array.isArray(trips);
  }