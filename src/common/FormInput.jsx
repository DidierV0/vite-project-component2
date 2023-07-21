import React from "react";
import { useDispatch } from "react-redux";
import { addStagiaire,editStagiaire,deleteStagiaire } from "../redux";

const FormInput = () => {

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault() 
    const {prenom, note} = event.target ;
    // console.log('prenom', prenom.value , 'note', note.value)

    const infostagiaire = {
                          id : Date.now(),
                          prenom : prenom.value,
                          note: Number(note.value)}
    dispatch(addStagiaire(infostagiaire)); 
   }

  return (
    <div className="navbar bg-base-100">
      <form onSubmit={handleSubmit}>
        <div className="navbar-start">
          <input
            name="note"
            type="text"
            placeholder="Note du stagiaire"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="navbar-center">
          <div className="form-control">
            <input
            name="prenom"
              type="text"
              placeholder="Ajouter un Stagiaire"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>
        <div className="navbar-end">
          <button type="submit" className="btn">Ajouter</button>
        </div>
      </form>
    </div>
  );
};

export default FormInput;
