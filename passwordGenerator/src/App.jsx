import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback( () => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "1234567890"
    if(charAllowed) str += "!@#$%^&*()_-+={}[]|\/";

    for (let i = 0; i < length; i++) {

      let index = Math.floor(Math.random() * str.length);

      pass += str.charAt(index);
      
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed]);

  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center mb-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          className='outline-none w-full py-1 px-3'
          type="text"
          value={password}
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPassword} className='outline-none bg-blue-700 px-3 py-0.5 shrink-0 text-white'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            className='cursor-pointer'
            type="range"
            min={8}
            max={50}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            />
            <label>Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            className='cursor-pointer'
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => setNumberAllowed( (prev) => !prev)}
            />
            <label>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            className='cursor-pointer'
            type="checkbox"
            defaultChecked={numberAllowed}
            id='charInput'
            onChange={() => setCharAllowed( (prev) => !prev)}
            />
            <label>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
