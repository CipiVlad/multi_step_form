import { Link } from "react-router-dom"

type Props = {
    title: string
    subtitle: string
    nextStep: string
    back: boolean
}

const PersonalInfoCard = ({ title, subtitle, nextStep, back }: Props) => {
    return (
        <>
            {
                <div className="stepcard_container">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <form action="">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="e.g. Stephen King" />

                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="e.g. stephenking@lorem" />

                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" placeholder="e.g. +1 234 567 890" />
                    </form>
                    <nav>
                        <Link to={`${back}`}>{back ? "Go Back" : ""}</Link>
                        <Link to={`${nextStep}`} className="btn">Next Step</Link>
                    </nav>
                </div>

            }

        </>
    )
}
export default PersonalInfoCard