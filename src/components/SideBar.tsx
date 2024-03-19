import './SideBar.scss'
const SideBar = () => {

    const steps = [
        {
            "id": "1",
            "step": "STEP 1",
            "title": "YOUR INFO"
        },
        {
            "id": "2",
            "step": "STEP 2",
            "title": "SELECT PLAN"
        },
        {
            "id": "3",
            "step": "STEP 3",
            "title": "ADD-ONS"
        },
        {
            "id": "4",
            "step": "STEP 4",
            "title": "SUMMARY"
        }]


    return (
        <div className="sidebar">
            <div className='sidebar_image'>
                <div className="step_container">

                    {steps.map((step) => (
                        <div className="step_card">
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
            <div className="stepcard_container"></div>
        </div>
    )
}
export default SideBar