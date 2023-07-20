import { createSlice } from "@reduxjs/toolkit";

export const stagiaireSlice = createSlice({
    name: "stagiaire", // nom de mon store
    initialState: [{id:1, prenom:"Didier", note:22 }], // état initail de mon store stagiaire
    reducers:{
        addStagiaire:(state,action) => {/*ajouter un stagiaire*/},
        editStagiaire:(state,action) => {/*editer un stagiaire*/},
        deleteStagiaire:(state,action) => {/*suprimmer un stagiaire*/},
    } // ensemble des fonction pouvant agire sur le store
})

 //configuration du store

