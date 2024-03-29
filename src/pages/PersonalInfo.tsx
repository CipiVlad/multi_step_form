import SideBar from "../components/SideBar"
import '../components/SideBar.scss'
import { personalInfo } from "../data/personalInfo.module"
import PersonalInfoCard from "../components/page_cards/PersonalInfoCard"
import { useContext, useEffect, useState } from "react"
import { StorageContext } from "../contexts/StorageProvider"

const PersonalInfo = () => {
    const [setItem, getItem] = useContext(StorageContext) || [];

    return (
        <>
            <div className="spacer"></div>
            <SideBar />

            <PersonalInfoCard
                title={personalInfo?.title}
                subtitle={personalInfo?.subtitle}
                nextStep={personalInfo?.nextStep}
                back={personalInfo?.back}
                setItem={setItem}
                getItem={getItem}

            />
        </>
    )
}
export default PersonalInfo