import { useState , useCallback , useEffect} from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(8);
  const [charAllowed , setChar] = useState(true);
  const [numAllowed , setNum] = useState(true);
  const [password ,  setPassword] = useState("");

  const passGenrator = useCallback(()=>{

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";

    if(charAllowed) str += "@#&%_";
    if(numAllowed) str += "0123456789";

    for(let a = 0 ; a < length ; a++){

      let char = Math.floor(Math.random()*str.length);
      pass += str.charAt(char);

    }

    setPassword(pass);

  } , [length , charAllowed , numAllowed])

  // useEffect(() => {
  //   passGenrator();
  // }, [length, charAllowed, numAllowed]);


  return (
    <>
      <div className='h-full flex flex-col justify-center items-center m-auto'>

        <h1 className='text-center text-2xl'>Password Generator</h1>
        <div className='flex flex-col items-center mt-10'>

          <div>
            <input type="text"  value={password} className="p-2 border w-64 border-gray-300 rounded-md"/>
          </div>

          <div className="flex items-center space-y-2 space-x-5 mt-5">

                <div className="flex items-center space-x-2 mt-2">
                  <input type="range" min="8" max="12" value={length} onChange={(e)=> setLength(e.target.value)} className="w-full"/> 
                  <span>{length}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="numCheck" defaultChecked={numAllowed} onChange={()=>setNum((prev)=>!prev)} />
                  <label for="numCheck">Numbers</label>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="charCheck" defaultChecked={charAllowed} onChange={()=>setChar((prev)=>!prev)}/>
                  <label for="charCheck">Characters</label>
                </div>

          </div>
            <button className=' mt-10 border px-3 py-2 text-white bg-blue-600 rounded-md' onClick={passGenrator}>Generate</button>
          </div>

      </div>
    </>
  )
}

export default App
