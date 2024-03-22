import { Link } from "react-router-dom"
import './PersonalInfoCard.scss'
import { useState } from "react"


type Props = {
    title: string
    subtitle: string
    nextStep: string
    back: boolean
}


const PersonalInfoCard = ({ title, subtitle, nextStep, back }: Props) => {
    const [inputs, setInputs] = useState({})

    const handleNext = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setInputs(prevState => ({ ...prevState, [name]: value }))
        console.log(inputs)
    }


    return (
        <>
            {
                <div className="stepcard_container">
                    <h1 className="title">{title}</h1>
                    <p className="subtitle">{subtitle}</p>
                    <form className="form">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={inputs.name} onChange={handleNext}

                            id="name" placeholder="e.g. Stephen King" required />

                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" value={inputs.email} onChange={handleNext}

                            id="email" placeholder="e.g. stephenking@lorem" required />

                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" name="phone" value={inputs.phone} onChange={handleNext}

                            id="phone" placeholder="e.g. +1 234 567 890" required />

                    </form>
                    <nav className="navBar">
                        <Link to={`${back}`}>{back ? "Go Back" : ""}</Link>
                        <Link to={`${nextStep}`} className="btn">Next Step</Link>
                    </nav>
                </div>

            }

        </>
    )
}
export default PersonalInfoCard