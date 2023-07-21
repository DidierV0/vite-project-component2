import { createSlice } from "@reduxjs/toolkit";

export const compteurSlice = createSlice({
    name: "compteur", // nom de mon store
    initialState: 0, 
    reducers:{
        plus:(state,action) => {return state +1},
        moins:(state,action) => {return state > 1? state -1 : 0},
        reset:(state,action) => {return 0},
    } // ensemble des fonction pouvant agir sur le store
})

 //configuration du store

