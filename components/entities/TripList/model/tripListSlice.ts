import { createSlice } from '@reduxjs/toolkit'
import { ITripListState } from './types'
import { fetchTripList } from './airBusListThunk'



const initialState: ITripListState = {
    trips: null,
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
              
                state.trips = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchTripList.rejected, (state, action) => {
                state.loading = false
                state.error = null
            }),
})

export default TripListSlice.reducer
