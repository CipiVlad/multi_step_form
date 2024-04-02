import './ThankYouCard.scss'
import image from '../../assets/images/icon-thank-you.svg'
import { thankyou } from '../../data/thankyou.module'
import { useEffect, useState } from 'react'


const ThankYouCard = () => {
    const [seconds, setSeconds] = useState(10)
    const [redirectInfo, setRedirectInfo] = useState('')

    useEffect(() => {
        //wipe out all local storage
        localStorage.clear()
        // redirect after 10 seconds
        const timer = setTimeout(() => {
            setRedirectInfo(`You'll be redirected to the homepage in ${seconds - 1} seconds`)
            setSeconds(seconds - 1)
        }, 1000)
        return () => clearTimeout(timer)
    })
    return (
        <div className="stepcard_container media_mobile ">
            <div className="thankyou_container">
                <img src={image} alt={thankyou.imageAlt} />
                <h1>{thankyou.title}</h1>
                <p>{thankyou.subtitle}</p>
            </div>
            <div className="thankyou_confirm">
                <p>{redirectInfo}</p>
            </div>
        </div>
    )
}

export default ThankYouCard