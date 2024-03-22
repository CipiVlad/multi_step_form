import { useState } from 'react'
import './AddOnsCard.scss'
import { Link } from 'react-router-dom'

type Props = {
    title: string,
    subtitle: string,
    add_ons: any
    name: string
    description: string
    price: string[]
    nextStep: string
    back: string
}

const AddOnsCard = ({ title, subtitle, add_ons, nextStep, back }: Props) => {

    //handle checkbox state
    const [inputState, setInputState] = useState([false, false, false])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { checked } = e.target;
        // Find the index of the checked checkbox and update the corresponding value in the state array
        setInputState(prev => prev.map((item, index) => index === inputState.indexOf(item) ? checked : item));

    }

    return (
        <div className="stepcard_container">
            <h1 className='title'>{title}</h1>
            <p className='subtitle'>{subtitle}</p>

            {
                add_ons.map((add_on, index: number) => (
                    <div className={`${inputState[index] ? "add_ons_card add_ons_card-active" : "add_ons_card"}`} key={index} >

                        {/* <div className="add_ons_card" key={index}> */}
                        <input
                            type="checkbox"
                            onChange={handleChange}
                            checked={inputState[index]}
                            id={add_on.name}
                        />
                        <label htmlFor={add_on.name}>
                            <p>{add_on.name}</p>
                            <p>{add_on.description}</p>
                        </label>
                        <label htmlFor={add_on.name}>
                            <p>{add_on.price}</p>
                        </label>
                    </div>
                ))
            }
            <nav className="navBar">
                <Link to={`${back}`}>{back ? "Go Back" : ""}</Link>
                <Link to={`${nextStep}`} className="btn">Next Step</Link>
            </nav>

        </div>
    )
}
export default AddOnsCard