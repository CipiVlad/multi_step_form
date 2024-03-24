import { useContext } from "react"
import SideBar from "../components/SideBar"
import FinishCard from "../components/page_cards/FinishCard"
import { finish } from "../data/finish.module"
import { StorageContext } from "../contexts/StorageProvider"
const Finish = () => {

    const [setItem, getItem] = useContext(StorageContext) || []

    // const sum = {
    //     "title": "Arcade",
    //     "price": "$9/mo",
    //     "addons": [{
    //         "title": "Online service",
    //         "price": "$1/mo"
    //     },
    //     {
    //         "title": "Larger storage",
    //         "price": "$2/mo"
    //     },
    //     {
    //         "title": "Customizable profile",
    //         "price": "$2/mo"
    //     }]
    // }



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
                nextStep={finish.nextStep}
                back={finish.back}
                changePlan={finish.changePlan}
                // sum={sum}
                setItem={setItem}
                getItem={getItem}
            />

        </>
    )
}
export default Finish