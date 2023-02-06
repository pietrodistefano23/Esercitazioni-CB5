import { useReducer, useState } from 'react'
import Counter from './components/counter'
import Home from './components/home'
import Hello from './components/hello'
import styles from './App.module.scss'

const initialRender = {route : 'home'}

const reducerRender = (state, action) => {
  switch (action.type){
    case 'counter' : 
      return {route : 'counter'};
    case 'hello' :
      return {route : 'hello'};
    case 'home' :
      return  {route : 'home'}  
    default:
      return <>Error</>   
  }

}


function App() {
 const [state,dispatch] = useReducer(reducerRender, initialRender); 
  
 
 return (
    <div className={styles.App}>
      
      <nav>
        <ul>
          <li onClick={() => dispatch({type: 'home'})}>home</li>
          <li onClick={() => dispatch({type: 'counter'})}>counter</li>
          <li onClick={() => dispatch({type: 'hello'})}>hello</li>
        </ul>
      </nav>

      {console.log (state.route)}

      {state.route === 'home' && <Home />}
      {state.route === 'counter' && <Counter />}
      {state.route === 'hello' && <Hello />}
      
      
      
      
      
      {/* <Home />
      <Counter />
      <Hello /> */}
    </div>
  )
}

export default App
