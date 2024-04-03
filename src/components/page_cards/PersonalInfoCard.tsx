import { useNavigate } from "react-router-dom"
import './PersonalInfoCard.scss'
import { useEffect, useState } from "react"

type PersonalInfoProps = {
    title: string
    subtitle: string
    labelName: string
    email: string
    phone: string
    nextStep: string
    setItem: any
}

const PersonalInfoCard = ({ title, subtitle, nextStep, setItem, labelName, email, phone }: PersonalInfoProps) => {
    const [inputs, setInputs] = useState({ name: '', email: '', phone: '' });
    const navigate = useNavigate()

    const handleChange = ({ target: { name, value } }: { target: { name: string, value: string } }) => setInputs(inputs => ({ ...inputs, [name]: value }));

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (inputs && inputs.name && inputs.email && inputs.phone) {
            try {
                setItem(inputs, "person");

                navigate(nextStep)
            } catch (error) {

                console.error("Error setting localStorage:", error);
            }
        }
    };

    //persist storage in localstorage on page reload
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
                        <label htmlFor="labelName">{labelName}</label>
                        <input type="text" name="name" value={inputs.name} onChange={handleChange}
                            id="name" placeholder="e.g. Stephen King" required={true}
                        />
                        <span></span>

                        <label htmlFor="email">{email}</label>
                        <input type="email" name="email" value={inputs.email} onChange={handleChange}
                            id="email" placeholder="e.g. stephenking@lorem" required={true} />
                        <span></span>

                        <label htmlFor="phone">{phone}</label>
                        <input type="tel" name="phone" value={inputs.phone} onChange={handleChange}
                            id="phone" placeholder="e.g. +1 234 567 890" required={true} />
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

