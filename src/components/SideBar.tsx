import './SideBar.scss'
import { steps } from '../data/steps.module'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


const SideBar = () => {

    //get current pathname
    const { pathname } = useLocation();

    //setting the active index
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleActiveClass = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    useEffect(() => {
        setTimeout(() => {
            const matchingStep = steps.find(step => step.endpoint === pathname);
            setActiveIndex(matchingStep ? steps.indexOf(matchingStep) : null);
            //for Thank You Page where all steps are completed 
            if (!matchingStep) {
                setActiveIndex(3)
            }
        }, 200)


    }, [pathname]);

    return (
        <>
            <div className='sidebar_image'>
                <div className="step_container">
                    {steps.map((step, index) => (
                        <div className="step_card" key={step.id}>
                            <div
                                className={`step_number ${index === activeIndex ? 'step_number_active' : ''}`}
                                onChange={() => toggleActiveClass(index)}
                            >
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