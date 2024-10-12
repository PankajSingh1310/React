import React, { useContext } from 'react'
import { GlobalContext } from '../context'

const Button = () => {

    const {theme, setTheme} = useContext(GlobalContext);

    const toggleTheme = () => {
        if(theme === "dark") setTheme("light");
        else setTheme("dark");
    }

  return (
    <div>
      <button onClick={toggleTheme}>Click me to Change text Color</button>
    </div>
  )
}

export default Button