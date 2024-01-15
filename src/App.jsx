import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CountryDetails from './CountryDetails.jsx'
import Home from './Home.jsx'
import { useEffect, useState } from "react"


function App() {

  const [countries, setCountries] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/independent?status=true")
    .then(response => response.json())
    .then((data) => {
      setCountries(data);
    })
    .catch((err) => {
      console.log(err.message);
    })
  }, [])
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home countries={countries}/>}/>
      <Route path="/country/:name" element={<CountryDetails countries={countries}/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App