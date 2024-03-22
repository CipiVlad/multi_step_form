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
                name={addOnsData.add_ons[0].name}
                description={addOnsData.add_ons[0].description}
                price={addOnsData.add_ons[0].price}
                nextStep={addOnsData.nextStep}
                back={addOnsData.back}
            />

        </>)
}
export default AddOns