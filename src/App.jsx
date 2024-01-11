import Header from "./Header"
// import HomeContainer from "./HomeContainer";
import { useEffect, useState } from "react"
import SearchDiv from "./SearchDiv";
import Card from "./Card";

function App() {
  // const [darkTheme, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then((data) => {
      setCountries(data);
    })
    .catch((err) => {
      console.log(err.message);
    })
  }, [])

  function randomIndex() {
    return Math.floor(Math.random() * 240);
  }
  const randomNumber = randomIndex();
  

  return (
    <>
      <Header />
      <SearchDiv />
      <div className="grid grid-cols-1 px-10 sm:grid-cols-2 sm:gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:px-16 lg:gap-8">
      {countries.slice(randomNumber, randomNumber + 8).map(country => {
        console.log(country);
        return <Card key={country.area} population={country.population} region={country.region} capital={country.capital} countryName={country.name.common} flag={country.flags.svg} alt={country.flags.alt}/>
      })}
      </div>
    </>
  )
}

export default App
