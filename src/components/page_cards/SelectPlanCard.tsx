import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SelectPlanCard.scss'

type Props = {
    title: string
    subtitle: string
    nextStep: string
    back: string
    monthly: string
    yearly: string
    planMonthly: any
    planYearly: any
    icons: any
}
const SelectPlanCard = ({ title, subtitle, planMonthly, planYearly, monthly, yearly, nextStep, back, icons }: Props) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleActiveClass = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
        console.log(activeIndex)
    };



    return (
        <div className="stepcard_container">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>

            <div className='plan_container'>
                {
                    planMonthly.map((plan, index) => (
                        <div
                            className={`plan_card${index === activeIndex ? ' active' : ''}`}
                            key={plan.id}
                            onClick={() => toggleActiveClass(index)}
                        >
                            <div className="plan_icon">
                                <img src={icons[plan.id - 1].name} alt={icons[plan.id - 1].alt} />
                            </div>
                            <div className="plan_description">
                                <h3>{plan.title}</h3>
                                <p>{plan.price}</p>
                            </div>
                        </div>
                    ))
                }

                {
                    planYearly.map((plan, index) => (
                        <div
                            className={`plan_card${index === activeIndex ? ' active' : ''}`}
                            key={plan.id}
                            onClick={() => toggleActiveClass(index)}
                        >
                            <div className="plan_icon">
                                <img src={icons[plan.id - 1].name} alt={icons[plan.id - 1].alt} />
                            </div>
                            <div className="plan_description">
                                <h3>{plan.title}</h3>
                                <p>{plan.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="plan_toggle">
                <p>{monthly}</p>

                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <p>{yearly}</p>
            </div>
            <nav>
                <Link to={`${back}`}>{back ? "Go Back" : ""}</Link>
                <Link to={`${nextStep}`} className="btn">Next Step</Link>
            </nav>
        </div>
    );
};

export default SelectPlanCard;