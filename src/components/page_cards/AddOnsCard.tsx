import { useEffect, useState } from 'react'
import './AddOnsCard.scss'
import { Link, useLocation } from 'react-router-dom'

type Props = {
    title: string,
    subtitle: string,
    add_ons: any
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
    const [addon, setAddon] = useState<string[]>([]);
    const [addonTitle, setAddonTitle] = useState<string[]>([]);
    const { pathname } = useLocation()
    const [sum, setSum] = useState([{}])
    const [priceType, setPriceType] = useState('')

    useEffect(() => {
        setApi(add_ons)
        getItem("plan")

    }, []);

    useEffect(() => {
        setTimeout(() => {
            setSum(getItem("plan"))
        }, 50)
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setPriceType(getItem("plan").price.includes("mo") ? 'monthly' : 'yearly');
        }, 50)
    }, [sum]);

    const handleChange = (e: any, index: string) => {
        const element = document.getElementById(index) as HTMLInputElement;
        if (element && element.tagName === 'INPUT') {
            const activeData = element.checked;

            if (activeData === true) {
                setAddon(prevState => [...prevState, e.target.value]);
                setAddonTitle(prevState => [...prevState, e.target.name]);
            } else {
                setAddon(addon.filter(item => item !== e.target.value));
                setAddonTitle(addonTitle.filter(item => item !== e.target.name));
            }
        }
    };

    const setItemStorage = () => {
        setItem({ price: addon, name: addonTitle }, "addon")
    }


    return (
        <div className="stepcard_container media_mobile "

            style={pathname === "/add-ons" && window.innerWidth < 376 ? { height: '385px' } : { height: 90 + '%' }}
        >
            <div className="stepcard_description">
                <h1 className="title">{title}</h1>
                <p className="subtitle">{subtitle}</p>
            </div>

            {
                api.map((add_on: any, index) => (
                    <div className={`${addonTitle && addonTitle.includes(add_on.name) ? "add_ons_card add_ons_card-active" : "add_ons_card"}`} key={index} >
                        <div>

                            <input
                                id={index.toString()}
                                type="checkbox"
                                name={add_on.name}
                                value={add_on.price[priceType]}
                                onChange={(e) => handleChange(e, index.toString())}
                            />

                        </div>
                        <div style={{ width: '50%' }}>

                            <label htmlFor={add_on.name}>
                                <p>{add_on.name}</p>
                                <p>{add_on.description}</p>
                            </label>
                        </div>


                        <div className="price">
                            <p>+{add_on.price[priceType]}</p>
                        </div>
                    </div>
                ))

            }

            <nav className="nav_rest_pages">
                <Link to={`${back}`}>{back ? "Go Back" : ""}</Link>
                <Link to={`${nextStep}`} className="btn" onClick={() => setItemStorage()} >
                    Next Step
                </Link>
            </nav>
        </div>
    )
}
export default AddOnsCard