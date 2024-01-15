import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import { useState, useEffect } from "react"
import { IonIcon } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import "./index.css"

function CountryDetails() {
  const params = useParams();
  const [country, setCountry] = useState(null)
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${params.name}?fullText=true`)
    .then(res => res.json())
    .then(data => {
        setCountry(data[0]);
        console.log(data[0]);
    })
  }, [params.name]);

  return (
        <>
            <Header />
            <div className="px-16 py-10">
                <Link to="/">
                    <button className="bg-white flex gap-2 items-center justify-center text-veryDarkBlueLM back px-5 py-2 pr-6 rounded">
                        <IonIcon icon={arrowBackOutline} style={{fontSize: '20px'}}/>Back
                    </button>
                </Link>
                <div className="grid grid-cols-2 mt-16">
                    <div>
                        <img src={country.flags.svg} alt={country.name.common} className="w-[500px] h-[500px] object-fill"/>
                    </div>
                    <div>
                        <h1>{country.name.common}</h1>
                        <p>Native Name: {country.name.nativeName.eng}</p>
                    </div>
                </div>
            </div>
        </>
        
  );
}

export default CountryDetails;
