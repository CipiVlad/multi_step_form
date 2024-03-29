import { useContext } from "react"
import SideBar from "../components/SideBar"
import FinishCard from "../components/page_cards/FinishCard"
import { finish } from "../data/finish.module"
import { StorageContext } from "../contexts/StorageProvider"
const Finish = () => {

    const [setItem, getItem] = useContext(StorageContext) || []

    return (
        <>
            <div className="spacer"></div>

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
                nextStep={finish.nextStep}
                back={finish.back}
                changePlan={finish.changePlan}
                setItem={setItem}
                getItem={getItem}
            />

        </>
    )
}
export default Finish