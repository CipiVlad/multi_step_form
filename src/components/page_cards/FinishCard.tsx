import { Link } from "react-router-dom"
import { finish } from "../../data/finish.module"
import './FinishCard.scss'
import { useEffect, useState } from "react"
type Props = {
    title: string,
    subtitle: string,
    add_ons: string[] | boolean[]
    name: string
    description: string
    price: string[]
    nextStep: string
    back: string
    changePlan: string
    // sum: any
    getItem: any
    setItem: any
}

const FinishCard = ({ getItem, setItem }: Props) => {


    // //for rendering the price in monthly or yearly

    // const planType = plan.price.includes("mo") ? "Monthly" : "Yearly";

    // //for rendering price extended with mo or yr
    // const planPriceType = plan.price.includes("mo") ? "mo" : "yr";

    // //for rendering per month or per year
    // const per = api.price.includes("mo") ? "(per month)" : "(per year)";

    // //for converting string to number and removing the dollar sign
    // // using replace method with regular expression
    // const planPrice = Number(api.price.replace(/[^\d.-]/g, ''));

    // //for adding up all the addons
    // const addOnPrice = api.addons.map((addon) => {
    //     return Number(addon.price.replace(/[^\d.-]/g, ''))
    // }).reduce((a: number, b: number) => a + b, 0)

    // //for calculating the total
    // const calcTotal = planPrice + addOnPrice;
    const [plan, setPlan] = useState({})
    const [addon, setAddon] = useState([])
    useEffect(() => {
        getItem("plan");
        getItem("addon")
        setPlan(getItem("plan"))
        setAddon(getItem("addon"))
    }, []);
    console.log(plan);
    console.log(addon);


    return (
        <div className="stepcard_container">

            <h1 className="title">{finish.title}</h1>
            <p className="subtitle">{finish.subtitle}</p>

            <div className="summary_container">
                <div className="summary_plan">
                    <div>
                        <p> {plan.title}</p>
                        <Link to={`${finish.changePlan}`}>change</Link>
                    </div>
                    <p>{plan.price}</p>
                </div>
                <div className="summary_addons">
                    <p>{addon.name}</p>
                    <p>{addon.price === "0" ? "" : `+${addon.price}`}</p>
                </div>
            </div>
            <div className="summary_total">
                <p>Total (per)</p>
                <p> {plan.price}</p>

            </div>

            <nav className="navBar">
                <Link to={`${finish.back}`}>{finish.back ? "Go Back" : ""}</Link>
                <Link to={`${finish.nextStep}`} className="btn">Confirm</Link>
            </nav>
        </div>
    )
}
export default FinishCard