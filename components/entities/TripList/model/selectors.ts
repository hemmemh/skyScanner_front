import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/components/app/store'
import { ITripListState } from './types'

const selectBase = createSelector(
    (state: RootState) => state,
    (state) => state.tripList
)

export const selectTripList = createSelector(
    selectBase,
    (state: ITripListState) => state.trips
)

export const selectTripsListLoading = createSelector(
    selectBase,
    (state: ITripListState) => state.loading
)
export const selectTripListError = createSelector(
    selectBase,
    (state: ITripListState) => state.error
)
