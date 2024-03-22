import { Link } from "react-router-dom"
import SideBar from "../components/SideBar"
import '../components/SideBar.scss'
import { personalInfo } from "../data/personalInfo.module"
import PersonalInfoCard from "../components/page_cards/PersonalInfoCard"

const PersonalInfo = () => {
    return (
        <>
            <SideBar
                title={personalInfo.title}
                subtitle={personalInfo.subtitle}
                back={personalInfo.back}
                nextStep={personalInfo.nextStep}
            />

            <PersonalInfoCard
                title={personalInfo.title}
                subtitle={personalInfo.subtitle}
                nextStep={personalInfo.nextStep}
                back={personalInfo.back}
            />
        </>
    )
}
export default PersonalInfo