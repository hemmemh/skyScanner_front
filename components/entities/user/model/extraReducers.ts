import { ActionReducerMapBuilder } from "@reduxjs/toolkit"
import { IUserState } from "./types"
import { addOrderAction, deleteUserAction, verifyUser } from "./userThunk"


export const verifyUserReducer = (builder:ActionReducerMapBuilder<IUserState>)=>{
    builder
    .addCase(verifyUser.pending, (state) => {
        state.loading = true
        state.error = null
    })
    .addCase(verifyUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
        state.error = null
    })
    .addCase(verifyUser.rejected, (state, action) => {
        state.loading = false
        state.error = null
    })
}


export const deleteUserReducer = (builder:ActionReducerMapBuilder<IUserState>)=>{
    builder
    .addCase(deleteUserAction.pending, (state) => {
        state.loading = true
        state.error = null
    })
    .addCase(deleteUserAction.fulfilled, (state, action) => {
        state.user = null
        state.loading = false
        state.error = null
        localStorage.removeItem('access_token')
        window.location.replace('http://localhost:3000/home')
    })
    .addCase(deleteUserAction.rejected, (state, action) => {
        state.loading = false
        state.error = null
    })
}

export const addOrderReducer = (builder:ActionReducerMapBuilder<IUserState>)=>{
    builder
    .addCase(addOrderAction.pending, (state) => {
        state.loading = true
        state.error = null
    })
    .addCase(addOrderAction.fulfilled, (state, action) => {
        action.payload && state.user?.orders.push(action.payload)
        state.loading = false
        state.error = null
    })
    .addCase(addOrderAction.rejected, (state, action) => {
        state.loading = false
        state.error = null
    })
}