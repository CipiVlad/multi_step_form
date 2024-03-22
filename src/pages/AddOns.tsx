import { useContext } from "react"
import SideBar from "../components/SideBar"
import AddOnsCard from "../components/page_cards/AddOnsCard"
import { addOnsData } from "../data/addOns.module"
import { StepContext } from "../App"

const AddOns = () => {
    const sum = useContext(StepContext)
    console.log(sum);

    return (
        <>
            <SideBar />

            <AddOnsCard
                title={addOnsData.title}
                subtitle={addOnsData.subtitle}
                add_ons={addOnsData.add_ons}
                nextStep={addOnsData.nextStep}
                back={addOnsData.back}
                sum={sum}
            />

        </>)
}
export default AddOns