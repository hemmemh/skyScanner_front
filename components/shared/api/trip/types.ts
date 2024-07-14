import { IAirBus } from "../airbus";
import { ICity } from "../city";
import { ICompany } from "../company/types";
import { ISeatClass } from "../seatClass";

export interface ITrip {

    uid: string;
    price: number
    seats: number
    seatClass: ISeatClass
    departure_time: number
    arrival_time: number
    company: ICompany
    airBus: IAirBus
    departure_city: ICity
    arrival_city: ICity
    //paths: Path[]
}

