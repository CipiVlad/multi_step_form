import { finish } from "../../data/finish.module"

type Props = {
    title: string,
    subtitle: string,
    add_ons: string[] | boolean[]
    name: string
    description: string
    price: string[]
    nextStep: string
    back: string
    sum: any
}

const FinishCard = ({ title, subtitle, add_ons, name, description, price, nextStep, back, sum }: Props) => {
    //for rendering the price in monthly or yearly
    console.log(sum[0].price.includes("mo") ? "mo" : "yr");

    console.log(sum);

    return (
        <div className="stepcard_container">
            <h1></h1>
            <h1 className="title">{finish.title}</h1>
            <p className="subtitle">{finish.subtitle}</p>
            <div className="plan">
                <p>{finish.plan.name}</p>
                <p>{finish.plan.price}</p>
            </div>
            <div className="total">
                <p>{finish.total}</p>
            </div>
            <button className="btn">{finish.button}</button>
        </div>
    )
}
export default FinishCard