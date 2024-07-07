
import apiInstance from '../base'
import {ISeatClass } from './types'

const BASE_URL = 'seat_class'

export const createSeatClass = (name:string, multiplier:number): Promise<ISeatClass> => {
    return apiInstance.post(`${BASE_URL}`, {name, multiplier })
}
