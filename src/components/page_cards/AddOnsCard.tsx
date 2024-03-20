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

const AddOnsCard = ({ title, subtitle, add_ons, name, description, price, nextStep, back }: Props) => {



    return (
        <div className="stepcard_container">
            <h1 className='title'>{title}</h1>
            <p className='subtitle'>{subtitle}</p>

            {
                add_ons.map((add_on, index) => (
                    <div className="add_ons_card" key={add_on.name}>
                        <input
                            type="checkbox"
                            name={add_on.name}
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