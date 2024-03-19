import SideBar from "../components/SideBar"
import '../components/SideBar.scss'
import { selectPlan } from "../data/selectPlan.module"
import SelectPlanCard from "../components/page_cards/SelectPlanCard"
const SelectPlan = () => {
    return (
        <>
            <SideBar
                title={selectPlan.title}
                subtitle={selectPlan.subtitle}
                back={selectPlan.back}
                nextStep={selectPlan.nextStep}
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
            />

        </>
    )
}
export default SelectPlan