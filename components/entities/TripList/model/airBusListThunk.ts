
import { getAllTrips } from '@/components/shared/api/trip'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const fetchTripList = createAsyncThunk('trip/getAll', async () => {
    try {
        const response = await getAllTrips()
        return response
    } catch (err) {
        return  null
    }
})
