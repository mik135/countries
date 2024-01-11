
import { IonIcon } from "@ionic/react"
import { moonOutline } from "ionicons/icons"

export default function Header() {
  return (
    <div className="cursor-pointer font-nunito bg-white flex w-full justify-between py-5 px-16 shadow-md shadow-darkBlueLM">
        <h1 className="font-extrabold text-2xl">Where in the world?</h1>
        <div className="flex gap-1 items-center font-semibold">
            <IonIcon icon={moonOutline} style={{ fontSize: '20px', color: 'black' }}/>
            <h3>Dark Mode</h3>
        </div>
    </div>
  )
}
