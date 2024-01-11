import { IonIcon } from "@ionic/react"
import { searchOutline, chevronDownOutline } from "ionicons/icons"
import { useState } from "react";

function SearchDiv() {
    const [dropFilters, setDropFilters] = useState(false);


    function handleDropFilter() {
        setDropFilters(!dropFilters);
    }

  return (
    <div className="flex justify-between px-16 py-10">
        <div className="bg-white w-[28rem] py-4 px-8 flex items-center gap-4 shadow-md shadow-darkBlueLM rounded">
            <IonIcon icon={searchOutline} style={{fontSize: '23px'}}/>
            <input type="text" placeholder="Search for a country..." className="outline-none border-0 h-full w-full" />
        </div>
        
        <div className="bg-white flex items-center w-48 px-3 justify-between cursor-pointer rounded shadow-md shadow-darkBlueLM relative" onClick={handleDropFilter}>
            <h1 className="m-0">Filter By Region</h1>
            <IonIcon icon={chevronDownOutline} />

            {dropFilters &&
            <div className="animateShow absolute top-[65px] left-0 bg-white w-full px-6 py-3 flex flex-col gap-1 rounded shadow-md shadow-darkBlueLM">
                <h3>Africa</h3>
                <h3>America</h3>
                <h3>Asia</h3>
                <h3>Europe</h3>
                <h3>Oceania</h3>
            </div>
        }        
        </div>
        
    </div>
  )
}

export default SearchDiv