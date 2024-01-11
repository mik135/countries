/* eslint-disable react/prop-types */
import "./index.css"

function Card({ population, region, capital, countryName, flag, alt }) {
  return (
    <div className="cursor-pointer flex flex-col gap-4 w-full mb-10 bg-white rounded-lg shadowSet shadow-veryDarkBlueLM truncate">
        <img src={flag} alt={alt} className="check rounded aspect-video"/>
        <h2 className="font-extrabold text-xl px-5 text-veryDarkBlueLM">{countryName}</h2>
        <div className="px-5 pb-10">
            <h3 className="text-veryDarkBlueLM"><span className="font-normal">Population:</span> <span className="text-darkGrayLM">{population.toLocaleString()}</span></h3>
            <h3 className="text-veryDarkBlueLM"><span className="font-normal">Region:</span> <span className="text-darkGrayLM">{region}</span></h3>
            <h3 className="text-veryDarkBlueLM"><span className="font-normal">Capital:</span> <span className="text-darkGrayLM">{capital}</span></h3>
        </div>
    </div>
  )
}

export default Card