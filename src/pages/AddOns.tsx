import SideBar from "../components/SideBar"
import AddOnsCard from "../components/page_cards/AddOnsCard"
import { addOnsData } from "../data/addOns.module"

const AddOns = () => {
    return (
        <>
            <SideBar />

            <AddOnsCard
                title={addOnsData.title}
                subtitle={addOnsData.subtitle}
                add_ons={addOnsData.add_ons}
                nextStep={addOnsData.nextStep}
                back={addOnsData.back}
            />

        </>)
}
export default AddOns