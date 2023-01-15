import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
const [state,dispatch] = useReducer(counterReducer,intialState)
  return (
    <div id="main">
         <span id='counter'>{state}</span>
         <div>
    
    
 <button id='increment-btn' onClick={()=>dispatch({type: "INCREMENT"})}>IN</button>
 <button id='decrement-btn' onClick={()=>dispatch({type: "DECREMENT"})}>Dec</button>
          </div>


  </div>
    
   
  )
}


export default App;
