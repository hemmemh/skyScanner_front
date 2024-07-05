
import apiInstance from '../base'
import {ICompany } from './types'

const BASE_URL = 'city'

export const createCity = (name:string): Promise<ICompany> => {
    return apiInstance.post(`${BASE_URL}`, {name})
}
