import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './SelectPlanCard.scss'

type SelectPlanCardProps = {
    title: string
    subtitle: string
    nextStep: string
    back: string
    monthly: string
    yearly: string
    planMonthly: any
    planYearly: any
    icons: any
    setItem: any
}

const SelectPlanCard = ({ title, subtitle, planMonthly, planYearly, monthly, yearly, nextStep, back, icons, setItem }: SelectPlanCardProps) => {
    const [activeIndex, setActiveIndex] = useState(null || 0);
    const [togglePlan, setTogglePlan] = useState(true);
    const [chosenPlan, setChosenPlan] = useState({});

    const toggleActiveClass = (index: any) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const handleTogglePlan = () => {
        setTogglePlan(!togglePlan)
    }

    const handleNext = () => {
        setItem(chosenPlan, "plan");
    }

    useEffect(() => {
        // for setting the selected plan
        if (!togglePlan) {
            setChosenPlan(planYearly[activeIndex])
        } else {
            setChosenPlan(planMonthly[activeIndex])
        }

    }, [activeIndex, togglePlan]);

    return (
        <div className="stepcard_container media_mobile">
            <div className="stepcard_description">
                <h1 className='title'>{title}</h1>
                <p className='subtitle'>{subtitle}</p>
            </div>
            <div className="plan_description">

                <div className='plan_container'>

                    {/* if togglePlan is true display  Monthly Plan  else display Yearly Plan*/}

                    {togglePlan ? (

                        planMonthly.map((plan: any, index: number) => (
                            <div
                                className={`plan_card${index === activeIndex ? ' active' : ''}`}
                                key={plan.id}
                                onClick={() => toggleActiveClass(index)}
                            >
                                <div className="plan_icon">
                                    <img src={icons[plan.id - 1].name} alt={icons[plan.id - 1].alt} />
                                </div>
                                <div className="plan_card_description">
                                    <p>{plan.title}</p>
                                    <p>{plan.price}</p>
                                </div>
                            </div>
                        ))

                    ) : (

                        planYearly.map((plan: any, index: number) => (
                            <div
                                className={`plan_card${index === activeIndex ? ' active' : ''}`}
                                key={plan.id}
                                onClick={() => toggleActiveClass(index)}
                            >
                                <div className="plan_icon">
                                    <img src={icons[plan.id - 1].name} alt={icons[plan.id - 1].alt} />
                                </div>
                                <div className="plan_card_description">
                                    <p>{plan.title}</p>
                                    <p>{plan.price}</p>
                                    <p>{plan.description}</p>
                                </div>
                            </div>
                        ))
                    )}


                </div>

                <div className="plan_toggle">
                    <p
                        className={`${togglePlan ? ' active' : ' inactive'}`}
                    >{monthly}</p>
                    <label className="switch">
                        <input type="checkbox" onClick={handleTogglePlan} />
                        <span className="slider round"></span>
                    </label>
                    <p
                        className={`${togglePlan ? ' inactive' : ' active'}`}
                    >{yearly}</p>
                </div>
            </div>
            <nav className="nav_rest_pages">
                <Link to={`${back}`}>{back ? "Go Back" : ""}</Link>
                <Link to={`${nextStep}`} className="btn" onClick={handleNext}>Next Step</Link>

            </nav>
        </div>
    );
};

export default SelectPlanCard;