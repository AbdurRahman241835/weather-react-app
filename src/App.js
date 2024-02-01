import axios from 'axios'
import { useState } from 'react';

function App() {
  


  const[deg, setDeg] =useState("...");
  const[city, setCity] =useState("...")
  const[desc, setDesc] =useState("...")
  const[enteredValue, setEnteredValue] = useState("")



  function handleInput(e){
    setEnteredValue(e.target.value)
  }



  function getData(){
    let weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredValue}&appid=b9fa17325fcfb262c9e1be3bbb4fe963`);

    weather.then((dalta) => {
      setDeg(dalta.data.main.temp)
      setCity(dalta.data.name)
      setDesc(dalta.data.weather[0].main)
    });

    weather.catch((error) => console.log(error.message))
    
  }



  return (
    <div className="flex flex-row justify-center h-[100vh] items-center"  >
      <div style={{backgroundImage : "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"}}
      className="p-4 rounded-md shadow"
      >
        <h2 className="font-medium">Hey ⛅</h2>
        <p className="text-xs">Do you want to know the weather report :)</p>
        <input onChange = {handleInput} type="text" className="rounded-md h-6 text-sm mt-2 p-1 outline-none" placeholder="City Name ?"/>
        <br/>
        <button onClick={getData} className="bg-black text-white rounded-lg p-1 text-xs mt-2">Get Report ⚡</button>
      
        <p className="text-xs mt-2"> Degree : {deg} | City : {city} | Weather : {desc} </p>
      
      </div>
    </div>
  );
}

export default App;
