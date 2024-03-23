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
    // console.log(sum[0].price.includes("mo") ? "mo" : "yr");


    return (
        <div className="stepcard_container">
            <h1 className="title">{finish.title}</h1>
            <p className="subtitle">{finish.subtitle}</p>

            <div className="summary_container">
                {
                    sum.map((item, index) => (
                        <div className="summary_plan" key={index}>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </div>
                    ))
                }
                <Link to={`${finish.changePlan}`}>change</Link>

                <div className="summary_addons">
                    <div>
                        {
                            sum[2].map((item, index) => (
                                <p key={index}>{item}</p>
                            ))
                        }
                    </div>
                    <div>
                        {
                            sum[1].map((item, index) => (
                                <p key={index}>{item}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="summary_total">
                <p>Total (per {sum[0].price.includes("mo") ? "month" : "year"})</p>
                <p>{sum[0].price} </p>
            </div>

            <nav className="navBar">
                <Link to={`${finish.back}`}>{finish.back ? "Go Back" : ""}</Link>
                <Link to={`${finish.nextStep}`} className="btn">Confirm</Link>
            </nav>
        </div>
    )
}
export default FinishCard