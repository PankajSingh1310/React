import { useState } from "react"


function App() {

  const [color, setColor] = useState("blue");

  return (
    <>
      <div className="h-screen w-full duration-200" style={{ backgroundColor: color }}>

        <div className="flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2">
          
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-full px-4 py-2">
            
            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}> Red</button>
            <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }}> Green</button>
            <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "blue" }}> Blue</button>
            <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "yellow" }}> Yellow</button>
            <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "purple" }}> Purple</button>
            <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "pink" }}> Pink</button>
          
          </div>

        </div>

      </div>
    </>
  )
}

export default App
