import { createSlice } from '@reduxjs/toolkit'
import { ITripListState } from './types'
import { fetchTripList } from './tripListThunk'



const initialState: ITripListState = {
    trips: null,
    minTime:0,
    maxTime:0,
    minDepartureTime:0,
    maxDepartureTime:0,
    loading: false,
    error: null,
}

const TripListSlice = createSlice({
    name: 'tripList',
    initialState,
    reducers: {
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchTripList.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTripList.fulfilled, (state, action) => {
              console.log('cc', action);
              
                state.trips = action.payload ? action.payload.trips : null
                state.minTime = action.payload ? action.payload.minTime : 0
                state.maxTime = action.payload ? action.payload.maxTime : 0
                state.minDepartureTime = action.payload ? action.payload.minDepartureTime : 0
                state.maxDepartureTime = action.payload ? action.payload.maxDepartureTime : 0
                state.loading = false
                state.error = null
            })
            .addCase(fetchTripList.rejected, (state, action) => {
                state.loading = false
                state.error = null
            }),
})

export default TripListSlice.reducer
