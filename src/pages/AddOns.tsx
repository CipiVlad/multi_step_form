import { useContext } from "react"
import SideBar from "../components/SideBar"
import AddOnsCard from "../components/page_cards/AddOnsCard"
import { StorageContext } from "../contexts/StorageProvider"
import { addOnsData } from "../data/addOns.module"

const AddOns = () => {
    const [setItem, getItem] = useContext(StorageContext) || []

    return (
        <>
            <div className="spacer"></div>
            <SideBar />
            <AddOnsCard
                title={addOnsData.title}
                subtitle={addOnsData.subtitle}
                add_ons={addOnsData.add_ons}
                nextStep={addOnsData.nextStep}
                back={addOnsData.back}
                setItem={setItem}
                getItem={getItem}
            />

        </>)
}
export default AddOns