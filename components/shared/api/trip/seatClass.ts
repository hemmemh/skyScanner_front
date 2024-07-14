
import { Info } from '../../types/tripsTypes'
import apiInstance from '../base'
import {ITrip } from './types'

const BASE_URL = 'trip'

export const createTrip = (trip:Partial<ITrip>): Promise<ITrip> => {
    return apiInstance.post(`${BASE_URL}`, trip)
}

export const getAllTripsWithReturns = (query:Info, params:{depart:number, return:number}): Promise<[ITrip, ITrip][]> => {
    return apiInstance.get(`${BASE_URL}/${params.depart}/${params.return}`, {params:query})
}

export const getAllTrips = (query:Info, params:{depart:number}): Promise<ITrip[]> => {
    return apiInstance.get(`${BASE_URL}/${params.depart}`, {params:query})
}
