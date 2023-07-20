import { createSlice } from "@reduxjs/toolkit";

export const compteurSlice = createSlice({
    name: "compteur", // nom de mon store
    initialState: 0, 
    reducers:{
        plus:(state,action) => {/*ajouter un stagiaire*/},
        moins:(state,action) => {/*editer un stagiaire*/},
    } // ensemble des fonction pouvant agire sur le store
})

 //configuration du store

