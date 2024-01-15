/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Header from "./Header"
// import HomeContainer from "./HomeContainer";
import SearchDiv from "./SearchDiv";
import Card from "./Card";
import { Link } from "react-router-dom";
import ReactLoading from 'react-loading';

function Home({ countries }) {   

  return (
    <>
      <Header />
      <SearchDiv />
      {countries ?
      <div className="grid grid-cols-1 px-10 sm:grid-cols-2 sm:gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:px-16 lg:gap-8">
      {countries.slice(0, 8).map(country => {
        return <Link to={`/country/${country.capital[0].toLowerCase()}`} key={country.area}><Card key={country.area} population={country.population} region={country.region} capital={country.capital} countryName={country.name.common} flag={country.flags.svg} alt={country.flags.alt}/></Link>
      })}
      </div>
      : <div className="flex justify-center items-center h-96"><ReactLoading type={'spokes'} color={"green"} height={200} width={200}/></div>}
    </>
  )
}

export default Home
