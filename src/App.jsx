import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux';
import { store } from './redux';
import AfficheCompteur from './common/afficheCompteur';

import FormInput from './common/FormInput'

import ListItem from './common/ListItem' ;


function App() {


  return (
    <Provider store={store}>
      <div className='App'>
        <AfficheCompteur/>
        <FormInput /> 
        <ListItem />
      </div>
    </Provider>
  )
}

export default App
