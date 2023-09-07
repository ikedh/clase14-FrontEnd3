
import { useReducer, useState } from 'react'
import { reducer } from './utils/reducer'
import './App.css'

function App() {

  const[state,dispatch]=useReducer(reducer,{
    contador:0,
    subtitulo:""
  })

  const handleSubtitulo = e =>{
    dispatch({
      type: "ESCRIBIR",
      subtitulo: e.target.value
    })
  }

  return (
    <>
      <h1>UseReducer</h1>

      <input
        type='text'
        onChange={handleSubtitulo}
        value={state.subtitulo}
      />

      <h3>{state.subtitulo}</h3>
      <hr/>

      <button
        onClick={()=>dispatch({type: "INCREMENT"})}
      >Incrementar</button>

      <button
        onClick={()=> dispatch({type: "DECREMENT"})}
      >Decrementar</button>
      <h4>
        {state.contador}
      </h4>
    </>
  )
}

export default App
