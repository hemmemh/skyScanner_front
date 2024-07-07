import apiInstance from '../base'
import { ICity } from './types'

const BASE_URL = 'city'

export const createCity = (name:string): Promise<ICity> => {
    return apiInstance.post(`${BASE_URL}`, {name})
}
