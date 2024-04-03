import { Link, useNavigate } from "react-router-dom"
import { finish } from "../../data/finish.module"
import './FinishCard.scss'
import { useEffect, useState } from "react"

type FinishCardProps = {
    title: string,
    subtitle: string,
    nextStep: string
    back: string
    changePlan: string
    getItem: any
    setItem: any
}

const FinishCard = ({ getItem }: FinishCardProps) => {
    const [plan, setPlan] = useState({} || getItem)
    const [addon, setAddon] = useState({} || getItem)
    console.log(getItem("addon"));


    //for rendering the price in monthly or yearly
    const planType = plan.price?.includes("mo") ? "Monthly" : "Yearly";


    //for rendering price extended with mo or yr
    const planPriceType = plan.price?.includes("mo") ? "mo" : "yr";

    //for rendering per month or per year
    const per = plan.price?.includes("mo") ? "(per month)" : "(per year)";

    // for converting string to number and removing the dollar sign
    // using replace method with regular expression
    const planPrice = Number(plan.price?.replace(/[^\d.-]/g, ''));

    // for adding up all the addons
    /**
     * 1) The code uses the map function to iterate over each price in the addon.price array.
     * 2) Inside the map function, it uses the replace method with a regular expression to remove any non-digit characters from each price string.
     * 3) The Number function is then used to convert each cleaned price string into a number.
     * 4) The reduce function is used to sum up all the numbers in the resulting array, starting from an initial value of 0.
     * 5) The final sum is assigned to the addOnPrice variable.

    */
    const addOnPrice = addon.price?.map((price: string, index: number) => {
        return Number(price.replace(/[^\d.-]/g, ''))
    }).reduce((a: number, b: number) => a + b, 0);

    //for calculating the total
    const calcTotal = planPrice + addOnPrice;

    //navigation
    const navigate = useNavigate();

    useEffect(() => {
        getItem("plan");
        getItem("addon")
        setPlan(getItem("plan"))
        setAddon(getItem("addon"))
    }, []);

    function handleConfirmation() {
        setTimeout(() => {
            navigate('/')
        }, 10000)
    }

    return (
        <div className="stepcard_container media_mobile">
            <div className="stepcard_description ">
                <h1 className="title">{finish.title}</h1>
                <p className="subtitle">{finish.subtitle}</p>
            </div>

            <div className="summary_container">
                <div className="summary_plan">
                    <div>
                        <p> {plan.title} ({planType})</p>
                        <Link to={`${finish.changePlan}`}>Change</Link>
                    </div>
                    <p>{plan.price}</p>
                </div>

                <div className="line"></div>

                {
                    addon.name?.map((element: string, index: number) => (
                        <div className="summary_addons" key={index}>
                            <>
                                <p key={index}>{element} <br /></p>
                            </>
                            <p>+{addon.price[index]}</p>
                        </div>
                    ))
                }
            </div>

            <div className="summary_total">
                <>
                    <p>Total {per}</p>
                    <p> ${calcTotal}/{planPriceType}</p>
                </>

            </div>
            <nav className="nav_rest_pages">
                <Link to={`${finish.back}`}>{finish.back ? "Go Back" : ""}</Link>
                <Link to={`${finish.nextStep}`} className="btn"
                    onClick={handleConfirmation}
                >Confirm</Link>
            </nav>
        </div>
    )
}
export default FinishCard
