import { useContext } from "react"
import { StepContext } from "../App"
import SideBar from "../components/SideBar"
import FinishCard from "../components/page_cards/FinishCard"
import { finish } from "../data/finish.module"

const Finish = () => {
    const sum = useContext(StepContext)

    return (
        <>

            <SideBar
                title={finish.title}
                subtitle={finish.subtitle}
                plan={finish.plan}
                total={finish.total}
                button={finish.button}
            />

            <FinishCard
                title={finish.title}
                subtitle={finish.subtitle}
                plan={finish.plan}
                total={finish.total}
                button={finish.button}
                sum={sum}
            />

        </>
    )
}
export default Finish