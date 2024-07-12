
import { getAllTrips } from '@/components/shared/api/trip'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const fetchTripList = createAsyncThunk('trip/getAll', async (params:any) => {
    try {
        const response = await getAllTrips(params)
        return response
    } catch (err) {
        return  null
    }
})
