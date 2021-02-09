import { createReducer } from "@reduxjs/toolkit"

import { setLoading } from "./action"

const initialState = { isLoading: false }

const loadingReducer = createReducer(initialState, builder => {
    builder
        .addCase(setLoading, (state, action) => {
            state.isLoading = action.payload
        })
})

export default loadingReducer