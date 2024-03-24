import SideBar from "../components/SideBar"
import '../components/SideBar.scss'
import { selectPlan } from "../data/selectPlan.module"
import SelectPlanCard from "../components/page_cards/SelectPlanCard"
import { StorageContext } from "../contexts/StorageProvider"
import { useContext } from "react"


const SelectPlan = () => {
    const [storage, addItem] = useContext(StorageContext)

    return (
        <>
            <SideBar />

            <SelectPlanCard
                title={selectPlan.title}
                subtitle={selectPlan.subtitle}
                planMonthly={selectPlan.planMonthly}
                planYearly={selectPlan.planYearly}
                monthly={selectPlan.monthly}
                yearly={selectPlan.yearly}
                nextStep={selectPlan.nextStep}
                back={selectPlan.back}
                icons={selectPlan.icons}
                addItem={addItem}
                storage={storage}
            />

        </>
    )
}
export default SelectPlan