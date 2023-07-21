import { configureStore } from "@reduxjs/toolkit"
import { stagiaireSlice } from "./stagiaireStore"
import { compteurSlice } from "./compteurStore"

// ations creator 
export const {plus, moins, reset} =compteurSlice.actions;
export  const {addStagiaire, editStagiaire, deleteStagiaire} = stagiaireSlice.actions

export const store = configureStore({
    reducer:{
            stagiaires: stagiaireSlice.reducer,
            compteur: compteurSlice.reducer,
    },
})