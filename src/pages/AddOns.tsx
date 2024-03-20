import SideBar from "../components/SideBar"
import AddOnsCard from "../components/page_cards/AddOnsCard"
import { addOns } from "../data/addOns.module"

const AddOns = () => {
    return (
        <>
            <SideBar />

            <AddOnsCard
                title={addOns.title}
                subtitle={addOns.subtitle}
                add_ons={addOns.add_ons}
                name={addOns.add_ons[0].name}
                description={addOns.add_ons[0].description}
                price={addOns.add_ons[0].price}
                nextStep={addOns.nextStep}
                back={addOns.back}
            />

        </>)
}
export default AddOns