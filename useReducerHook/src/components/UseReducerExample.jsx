import React, { useReducer } from 'react'

const UseReducerExample = () => {

  const initialState = {
    showTextFlag: false,
    toggleTextStylesFlag: false 
  }

  const HIDE_TEXT = 'HIDE_TEXT';
  const SHOW_TEXT = 'SHOW_TEXT';
  const  TOGGLE_STYLE = 'TOGGLE_STYLE';

  const reducer = (state, action) => {

    switch (action.type) {
      case HIDE_TEXT:
        return {
          ...state,
          showTextFlag: false
        };

      case SHOW_TEXT:
        return {
          ...state,
          showTextFlag: true
        };
    
      case TOGGLE_STYLE:
        return {
          ...state,
          toggleTextStylesFlag: !state.toggleTextStylesFlag
        };

      default:
      return state;
    }

  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    
    <div>

      {
        state.showTextFlag ? <h1 style={{color: state.toggleTextStylesFlag ? "red" : "white"}}>useReducer Hook example</h1> : null
      }  
      <button onClick={() => dispatch({type: HIDE_TEXT})}>Hide Text</button>
      <button onClick={() => dispatch({type: SHOW_TEXT})}>Show Text</button>
      <button onClick={() => dispatch({type: TOGGLE_STYLE})}>Toggle Text Styles</button>
    </div>
  )
}

export default UseReducerExample;
