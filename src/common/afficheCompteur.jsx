import React from 'react'
import { useSelector } from 'react-redux'

const AfficheCompteur = () => {
    const {compteur} = useSelector (state => state) // récupération de la valeur de compteur dans le store
  
    return (
    <div>affiche Compteur : {compteur}</div>
  )
}

export default AfficheCompteur