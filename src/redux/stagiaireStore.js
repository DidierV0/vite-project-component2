import { createSlice } from "@reduxjs/toolkit";
import { deleteStagiaire } from ".";

export const stagiaireSlice = createSlice({
    name: "stagiaire", // nom de mon store
    initialState: [], // état initail de mon store stagiaire
    reducers:{
        addStagiaire:(state,action) => {
                    /*ajouter un stagiaire*/
                    return [...state, action.payload]
                    },// end add
        editStagiaire:(state,action) => {
                    /*editer un stagiaire*/
                    
                    },// end edit
        deleteStagiaire:(state,action) => {
                        /*suprimmer un stagiaire*/
                        // console.log(action)
                        return state.filter(item => item.id != action.payload)
                        
                        }, // end delete
    } // ensemble des fonction pouvant agire sur le store
})

 //configuration du store

