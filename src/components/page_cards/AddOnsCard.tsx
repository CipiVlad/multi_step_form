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
    const [inputState, setInputState] = useState(false)

    const handleNext = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        console.log(name)
        console.log(value)
    }


    //if inputState is true add class to add_ons_card to change background 
    //write an onChange function to toggle inputState and add class only to checked input

    const handleChange = (e) => {
        const { checked } = e.target
        setInputState(checked)
    }






    return (
        <div className="stepcard_container">
            <h1 className='title'>{title}</h1>
            <p className='subtitle'>{subtitle}</p>

            {
                add_ons.map((add_on, index) => (
                    <div className={`${inputState ? "add_ons_card add_ons_card-active" : "add_ons_card"}`} key={index} >

                        <input
                            key={add_on.name}
                            type="checkbox"
                            name={add_on.name}
                            id={add_on.name}
                            onChange={handleChange}
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