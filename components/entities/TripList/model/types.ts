import { IAirBus } from '@/components/shared/api/airbus'
import {ITrip } from '@/components/shared/api/trip/types'
import { RejectedDataType } from '@/components/shared/types/errorTypes'

export interface ITripListState {

    readonly trips: [ITrip[], ITrip[]][] | ITrip[][] | null
    readonly minTime:number
    readonly maxTime:number
    readonly minDepartureTime:number
    readonly maxDepartureTime:number
    readonly loading: boolean
    readonly error: RejectedDataType | null
}
