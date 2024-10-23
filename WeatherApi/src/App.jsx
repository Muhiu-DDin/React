import { useState , useEffect } from 'react'
function App() {
 const [city , setCity] = useState("Karachi");
 const [weather , setWeather] = useState(null);


 const list = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Washington, D.C.",
  "Boston",
  "Memphis",
  "Nashville",
  "Mumbai",
  "Virginia Beach",
  "Atlanta",
  "Karachi"
];

useEffect(
  ()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d67eca7a5e3c0a0c838cb076b3ec0b27`)
    .then((res)=>res.json())
    .then((res)=>{
      setWeather(res);
      console.log(res);
    })
    
  }
, [city])

const onHandleChange = (e)=>{
    setCity(e.target.value)
}

const temp = Math.round(weather?.main?.temp - 273.15);
  return (
  <div className="min-h-screen flex flex-col justify-center items-center">
    <h1 className="text-3xl">Weather APP</h1>
    <select className="outline mt-5 py-2" value={city} onChange={onHandleChange}>
    {
      list.map(
        (data , index)=>(
          <option value={data} key={index}>
            {data}
          </option>
        )
      )
    }
    </select>

    <div className="w-[300px] flex flex-col gap-2 mt-10 shadow-lg px-10 py-10 text-center">
      <h1 className="text-3xl">Temperature</h1>
      <h1 className="text-3xl">{temp} C</h1>

      <div className="flex justify-between">
        <span>Humidity</span>
        <span>{weather?.main?.humidity}%</span>
      </div>
      <div className="flex justify-between">
        <span>Pressure</span>
        <span>{weather?.main?.pressure}</span>
      </div>
      <div className="flex justify-between">
        <span>Sunrise</span>
        <span>{new Date(weather?.sys.sunrise*1000).toLocaleTimeString()}</span>
      </div>
      <div className="flex justify-between">
        <span>Sunset</span>
        <span>{new Date(weather?.sys.sunset*1000).toLocaleTimeString()}</span>
      </div>
    </div>
  </div>
  )
}

export default App
