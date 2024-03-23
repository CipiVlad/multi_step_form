import { useEffect, useState } from 'react'
import './AddOnsCard.scss'
import { Link } from 'react-router-dom'

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

const AddOnsCard = ({ title, subtitle, add_ons, nextStep, back, sum }: Props) => {

    //need to write logic for:
    //if in "Select Plan" page monthly plan is selected then yearly plan price should be disabled in "Add-ons" page and vice versa
    //Which hook should be used for that?
    //try: useContext
    // const { priceType: contextPriceType } = React.useContext(PriceContext)

    // how to display the price in monthly or yearly?

    console.log('context state:', sum[0].price.includes("mo")
    );


    const [priceType, setPriceType] = useState('')
    useEffect(() => {
        setPriceType(sum[0].price.includes("mo") ? 'monthly' : 'yearly')
    }, []);


    const [api, setApi] = useState([])
    const [selected, setSelected] = useState([])
    useEffect(() => {
        setApi(add_ons)
    }, []);

    const handleChange = (e, index) => {
        const activeData = document.getElementById(index).checked
        // console.log(activeData);
        if (activeData === true) {
            setSelected(prevState => [...prevState, { "value": e.target.value, "name": e.target.name }])
        } else {
            setSelected(selected.filter(item => item !== e.target.value))
        }
    }

    console.log(selected);




    return (
        <div className="stepcard_container">
            <h1 className='title'>{title}</h1>
            <p className='subtitle'>{subtitle}</p>


            {

                api.map((add_on, index) => (
                    <div className={`${selected && selected.includes(add_on.name) ? "add_ons_card add_ons_card-active" : "add_ons_card"}`} key={index} >

                        <input
                            id={index}
                            type="checkbox"
                            name={add_on.name}
                            value={add_on.price[priceType]}
                            onChange={(e) => handleChange(e, index)}

                        />
                        <label htmlFor={add_on.name}>
                            <p>{add_on.name}</p>
                            <p>{add_on.description}</p>
                        </label>

                        <div className="price">
                            <p>{add_on.price[priceType]}</p>
                        </div>

                    </div>
                ))

            }




            <nav className="navBar">
                <Link to={`${back}`}>{back ? "Go Back" : ""}</Link>
                <Link to={`${nextStep}`} className="btn" onClick={() => sum.push(selected)}>Next Step</Link>
            </nav>

        </div>
    )
}
export default AddOnsCard