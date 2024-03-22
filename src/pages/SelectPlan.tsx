import SideBar from "../components/SideBar"
import '../components/SideBar.scss'
import { selectPlan } from "../data/selectPlan.module"
import SelectPlanCard from "../components/page_cards/SelectPlanCard"
import { StepContext } from "../App"
import { useContext } from "react"
const SelectPlan = () => {
    const sum = useContext(StepContext)
    // console.log(sum);
    return (
        <>
            <SideBar
            // title={selectPlan.title}
            // subtitle={selectPlan.subtitle}
            // back={selectPlan.back}
            // nextStep={selectPlan.nextStep}
            />

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
                sum={sum}
            />

        </>
    )
}
export default SelectPlan