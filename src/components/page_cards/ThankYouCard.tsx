import './ThankYouCard.scss'
import image from '../../assets/images/icon-thank-you.svg'
import { thankyou } from '../../data/thankyou.module'


const ThankYouCard = () => {
    return (
        <div className="stepcard_container media_mobile ">
            <div className="thankyou_container">
                <img src={image} alt={thankyou.imageAlt} />
                <h1>{thankyou.title}</h1>
                <p>{thankyou.subtitle}</p>
            </div>
        </div>
    )
}

export default ThankYouCard