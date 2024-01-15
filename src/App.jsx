/* eslint-disable react/jsx-key */
import Header from "./Header"
// import HomeContainer from "./HomeContainer";
import { useEffect, useState } from "react"
import SearchDiv from "./SearchDiv";
import Card from "./Card";
import { Link } from "react-router-dom";

function App() {
  // const [darkTheme, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);

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

  // function randomIndex() {
  //   return Math.floor(Math.random() * 240);
  // }
  // const randomNumber = randomIndex();
  

  return (
    <>
      <Header />
      <SearchDiv />
      <div className="grid grid-cols-1 px-10 sm:grid-cols-2 sm:gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:px-16 lg:gap-8">
      {countries.slice(0, 8).map(country => {
        return <Link to={`/country/${country.name.official}`}><Card key={country.area} population={country.population} region={country.region} capital={country.capital} countryName={country.name.common} flag={country.flags.svg} alt={country.flags.alt}/></Link>
      })}
      </div>
    </>
  )
}

export default App
