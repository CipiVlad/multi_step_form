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
    setItem: any
    getItem: any
}

const AddOnsCard = ({ title, subtitle, add_ons, nextStep, back, setItem, getItem }: Props) => {
    const [api, setApi] = useState([])
    const [addon, setAddon] = useState([])
    const [addonTitle, setAddonTitle] = useState([])

    useEffect(() => {
        setApi(add_ons)
        getItem("plan")

    }, []);

    const [sum, setSum] = useState([{}])
    useEffect(() => {
        setTimeout(() => {
            setSum(getItem("plan"))
        }, 50)
    }, []);

    const [priceType, setPriceType] = useState('')
    useEffect(() => {
        setTimeout(() => {
            setPriceType(getItem("plan").price.includes("mo") ? 'monthly' : 'yearly');
        }, 50)
    }, [sum]);
    console.log();


    const handleChange = (e, index) => {
        const activeData = document.getElementById(index).checked
        if (activeData === true) {
            setAddon(prevState => [...prevState, e.target.value])
            setAddonTitle(prevState => [...prevState, e.target.name])

        } else {
            setAddon(addon.filter(item => item !== e.target.value))
            setAddonTitle(addonTitle.filter(item => item !== e.target.name))
        }
    }


    const setItemStorage = () => {
        setItem({ price: addon, name: addonTitle }, "addon")
    }

    console.log(addonTitle);

    return (
        <div className="stepcard_container">
            <div className="stepcard_description">
                <h1 className="title">{title}</h1>
                <p className="subtitle">{subtitle}</p>
            </div>
            {
                api.map((add_on, index) => (
                    <div className={`${addonTitle && addonTitle.includes(add_on.name) ? "add_ons_card add_ons_card-active" : "add_ons_card"}`} key={index} >
                        <div>

                            <input
                                id={index}
                                type="checkbox"
                                name={add_on.name}
                                value={add_on.price[priceType]}
                                onChange={(e) => handleChange(e, index)}
                            />

                        </div>
                        <div style={{ width: '50%' }}>

                            <label htmlFor={add_on.name}>
                                <p>{add_on.name}</p>
                                <p>{add_on.description}</p>
                            </label>
                        </div>


                        <div className="price">
                            <p>{add_on.price[priceType]}</p>
                            {/* <p>{priceDisplay[1]}</p> */}
                        </div>
                    </div>
                ))

            }

            <nav className="navBar">
                <Link to={`${back}`}>{back ? "Go Back" : ""}</Link>

                <Link to={`${nextStep}`} className="btn" onClick={() => setItemStorage()} >

                    {/* onClick={() => sum.push(addon, addonTitle)} */}
                    Next Step
                </Link>
            </nav>
        </div>
    )
}
export default AddOnsCard