
import { IonIcon } from "@ionic/react"
import { moonOutline } from "ionicons/icons"

export default function Header() {
  return (
    <div className="cursor-pointer font-nunito bg-white flex w-full justify-between md:py-5 md:px-16 px-5 py-5 shadow-md shadow-darkBlueLM">
        <h1 className="font-extrabold md:text-2xl text-base">Where in the world?</h1>
        <div className="flex gap-1 items-center font-semibold">
            <IonIcon icon={moonOutline} style={{ fontSize: '20px', color: 'black' }}/>
            <h3>Dark Mode</h3>
        </div>
    </div>
  )
}
