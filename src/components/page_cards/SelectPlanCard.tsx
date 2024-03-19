import React, { useEffect, useState } from 'react'
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
    const [activeIndex, setActiveIndex] = useState(null || 0);
    const [togglePlan, setTogglePlan] = useState(true);

    const [chosenPlan, setChosenPlan] = useState({})

    const toggleActiveClass = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const handleTogglePlan = () => {
        setTogglePlan(!togglePlan)
    }

    useEffect(() => {
        //write a function to get the selected plan

        if (!togglePlan) {
            setChosenPlan(planYearly[activeIndex])
        } else {
            setChosenPlan(planMonthly[activeIndex])
        }


    }, [activeIndex, togglePlan]);

    console.log(chosenPlan);

    return (
        <div className="stepcard_container">
            <h1>{title}</h1>
            <p>{subtitle}</p>

            <div className='plan_container'>

                {/* if togglePlan is true display  Monthly Plan  else display Yearly Plan*/}

                {togglePlan ? (

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

                ) : (

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
                )}


            </div>

            {/* test the chosen plan */}
            {/* <div style={{ textAlign: 'center', fontSize: "16px", border: "1px solid black", padding: "10px", margin: "10px" }} >
                <span>chosen plan: {chosenPlan.title}</span>
                <span>price:  {chosenPlan.price}</span>
                <span>description {chosenPlan.description}</span>
            </div> */}


            <div className="plan_toggle">
                <p>{monthly}</p>
                <label className="switch">
                    <input type="checkbox" onClick={handleTogglePlan} />
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