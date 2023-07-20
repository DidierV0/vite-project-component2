import { configureStore } from "@reduxjs/toolkit"
import { stagiaireSlice } from "./stagiaireStore"
import { compteurSlice } from "./compteurStore"

export const store = configureStore({
    reducer:{
            stagiaires: stagiaireSlice.reducer,
            compteurSlice: compteurSlice.reducer,
    },
})