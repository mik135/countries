/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import { IonIcon } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import "./index.css"
import ReactLoading from 'react-loading';
import BorderHolder from "./BorderHolder";

function CountryDetails({countries}) {
  const { name } = useParams();
  console.log(name);
  const found = countries.find(i => i.capital[0].toLowerCase() == name);
//   console.log(found);

  const currencies = Object.keys(found.currencies || {}).map(
    (currency) => found.currencies[currency].name
  );

  const languages = Object.keys(found.languages || {}).map(
    (language) => found.languages[language]
  );
  console.log(languages)
//   console.log(currencies)

  return (
        <>
            <Header />
            <div className="lg:px-16 px-5 py-10">
                <Link to="/">
                    <button className="bg-white flex gap-2 items-center justify-center text-veryDarkBlueLM back px-5 py-2 pr-6 rounded">
                        <IonIcon icon={arrowBackOutline} style={{fontSize: '20px'}}/>Back
                    </button>
                </Link>
                {found ?
                    <div className="grid grid-cols-1 lg:grid-cols-2 mt-16" key={found.area}>
                    {console.log(found)}
                    <div>
                        <img src={found.flags.png} alt={found.flags.alt} className="w-full h-full object-contain"/>
                    </div> 
                    <div className="lg:px-10 px-3 py-5 flex flex-col gap-7 ">
                        <span>
                            <h1 className="font-extrabold text-4xl">{found.name.common}</h1>
                        </span>
                        <span className="lg:flex md:flex-row flex flex-col justify-between text-darkBlueDM text-xl gap-6">
                            <span>
                                <p><span className="infoTitle">Native Name:</span> {found.name.nativeName.eng?.common}</p>
                                <p><span className="infoTitle">Population:</span> {found.population}</p>
                                <p><span className="infoTitle">Region:</span> {found.region}</p>
                                <p><span className="infoTitle">Subregion:</span> {found.subregion}</p>
                                <p><span className="infoTitle">Capital:</span> {found.capital}</p>
                            </span>
                            <span>
                                <p><span className="infoTitle">Top Level Domain:</span> {found.tld}</p>
                                <p><span className="infoTitle">Currencies:</span> {currencies[0]}</p>
                                <p><span className="infoTitle">Languages:</span> {languages.join(", ")}</p>
                            </span>
                        </span>
                        <span className="text-darkBlueDM">
                            <div className="flex gap-3 flex-wrap items-center"><p className="infoTitle">Border Countries: </p> 
                            {found.borders.map((border, index) => <BorderHolder key={index} border={border} />)}</div>
                        </span>
                    </div>
                </div>
                 : <div className="flex justify-center items-center h-96"><ReactLoading type={'spokes'} color={"green"} height={200} width={200}/></div>}
            </div>
        </>
        
  );
}

export default CountryDetails;
