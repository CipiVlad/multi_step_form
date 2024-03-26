import SideBar from "../components/SideBar"
import '../components/SideBar.scss'
import { selectPlan } from "../data/selectPlan.module"
import SelectPlanCard from "../components/page_cards/SelectPlanCard"
import { StorageContext } from "../contexts/StorageProvider"
import { useContext, useEffect } from "react"


const SelectPlan = () => {
    const [setItem, getItem] = useContext(StorageContext) || [];
    return (
        <>
            <div className="spacer"></div>

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
                setItem={setItem}
                getItem={getItem}
            />

        </>
    )
}
export default SelectPlan