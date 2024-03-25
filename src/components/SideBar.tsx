import './SideBar.scss'
import '../sass/@media.scss'
import { steps } from '../data/steps.module'
// import StepCardContainer from './page_cards/PersonalInfoCard'

const SideBar = () => {
    return (
        <>
            <div className='sidebar_image'>
                <div className="step_container">
                    {steps.map((step) => (
                        <div className="step_card" key={step.id}>
                            <div className="step_number">
                                <span>{step.id}</span>
                            </div>
                            <div className="step_description">
                                <p>{step.step}</p>
                                <h3>{step.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}
export default SideBar