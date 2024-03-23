import { Link } from "react-router-dom"
import { finish } from "../../data/finish.module"
import './FinishCard.scss'
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
    sum: any
}

const FinishCard = ({ sum }: Props) => {
    //for rendering the price in monthly or yearly
    const planType = sum.price.includes("mo") ? "Monthly" : "Yearly";

    //for rendering price extended with mo or yr
    const planPriceType = sum.price.includes("mo") ? "mo" : "yr";

    //for rendering per month or per year
    const per = sum.price.includes("mo") ? "(per month)" : "(per year)";

    //for converting string to number and removing the dollar sign
    // using replace method with regular expression
    const planPrice = Number(sum.price.replace(/[^\d.-]/g, ''));

    //for adding up all the addons
    const addOnPrice = sum.addons.map((addon) => {
        return Number(addon.price.replace(/[^\d.-]/g, ''))
    }).reduce((a: number, b: number) => a + b, 0)

    //for calculating the total
    const calcTotal = planPrice + addOnPrice;

    return (
        <div className="stepcard_container">
            <h1 className="title">{finish.title}</h1>
            <p className="subtitle">{finish.subtitle}</p>

            <div className="summary_container">
                <div className="summary_plan">
                    <div>
                        <p>{sum.title}({planType})</p>
                        <Link to={`${finish.changePlan}`}>change</Link>
                    </div>
                    <p>${planPrice}/{planPriceType}</p>
                </div>

                {
                    sum.addons.map((addon, index) => (
                        <div className="summary_addons" key={index}>
                            <p>{addon.title}</p>
                            <p>+${Number(addon.price.replace(/[^\d.-]/g, ''))}/{planPriceType}</p>
                        </div>
                    ))
                }

            </div>
            <div className="summary_total">
                <p>Total {per}</p>
                <p>${calcTotal}/{planPriceType}</p>
            </div>

            <nav className="navBar">
                <Link to={`${finish.back}`}>{finish.back ? "Go Back" : ""}</Link>
                <Link to={`${finish.nextStep}`} className="btn">Confirm</Link>
            </nav>
        </div>
    )
}
export default FinishCard