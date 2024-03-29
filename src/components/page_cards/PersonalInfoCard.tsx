import { Link, useNavigate } from "react-router-dom"
import './PersonalInfoCard.scss'
import { useEffect, useState } from "react"

type Props = {
    title: string
    subtitle: string
    nextStep: string
    back: boolean
    setItem: any
    getItem: any
}

const PersonalInfoCard = ({ title, subtitle, nextStep, back, setItem, getItem }: Props) => {
    const [inputs, setInputs] = useState({ name: '', email: '', phone: '' });
    const navigate = useNavigate()
    const handleChange = ({ target: { name, value } }: { target: { name: string, value: string } }) => setInputs(inputs => ({ ...inputs, [name]: value }));

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (inputs && inputs.name && inputs.email && inputs.phone) {
            try {
                setItem(inputs, "person");

            } catch (error) {
                console.error("Error setting localStorage:", error);
            }
        }

        navigate(nextStep)
    };

    //persist storage in localstorage on page reload, and get it from localstorage to display it on page 
    useEffect(() => {
        if (localStorage.person) {
            try {
                setInputs(JSON.parse(localStorage.getItem("person") || "[]"));
            } catch (error) {
                console.error("Error setting localStorage:", error);
            }
        }
    }, []);

    return (
        <>
            {
                <div className="stepcard_container">
                    <div className="stepcard_description">
                        <h1 className="title">{title}</h1>
                        <p className="subtitle">{subtitle}</p>
                    </div>
                    <form className="form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name
                        </label>
                        <input type="text" name="name" value={inputs.name || ""} onChange={handleChange}
                            id="name" placeholder="e.g. Stephen King" required
                        />
                        <span></span>

                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" value={inputs.email || ""} onChange={handleChange}
                            id="email" placeholder="e.g. stephenking@lorem" required />
                        <span></span>

                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" name="phone" value={inputs.phone || ""} onChange={handleChange}
                            id="phone" placeholder="e.g. +1 234 567 890" required />
                        <span></span>

                        <nav className="nav_firstpage">
                            <button type="submit" className="btn">Next Step</button>
                        </nav>
                    </form>
                </div>
            }
        </>
    )
}
export default PersonalInfoCard

