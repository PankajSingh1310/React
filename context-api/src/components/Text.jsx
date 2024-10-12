import React, { useContext } from 'react'
import { GlobalContext } from '../context';

const Text = () => {
    
    const {theme} = useContext(GlobalContext);

  return (
    <div>
      <h1 style={{color: theme === "dark" ? "white" : "red"}}>Hello this is the context api tutorial</h1>
    </div>
  )
}

export default Text
