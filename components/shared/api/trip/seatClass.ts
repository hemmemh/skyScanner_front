
import apiInstance from '../base'
import {ITrip } from './types'

const BASE_URL = 'trip'

export const createTrip = (trip:Partial<ITrip>): Promise<ITrip> => {
    return apiInstance.post(`${BASE_URL}`, trip)
}

export const getAllTrips = (params:any): Promise<ITrip[]> => {
    return apiInstance.get(`${BASE_URL}`, {params})
}
