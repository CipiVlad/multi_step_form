import '../components/SideBar.scss'
import SideBar from "../components/SideBar"
import PersonalInfoCard from "../components/page_cards/PersonalInfoCard"
import { personalInfo } from "../data/personalInfo.module"
import { useContext } from "react"
import { StorageContext } from "../contexts/StorageProvider"

const PersonalInfo = () => {
    const [setItem, getItem] = useContext(StorageContext) || [];

    return (
        <>
            <div className="spacer"></div>
            <SideBar />

            <PersonalInfoCard
                title={personalInfo.title}
                subtitle={personalInfo.subtitle}
                name={personalInfo.name}
                email={personalInfo.email}
                phone={personalInfo.phone}
                nextStep={personalInfo.nextStep}
                back={personalInfo.back}
                setItem={setItem}
            // getItem={getItem}

            />
        </>
    )
}
export default PersonalInfo