import './ThankYouCard.scss'
import image from '../../assets/images/icon-thank-you.svg'
const thankyou = {
    "imageAlt": "thankyou icon",
    "title": "Thank you!",
    "subtitle": "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com"
}

const ThankYouCard = () => {
    console.log(thankyou.image);

    return (
        <div className="stepcard_container">
            <div className="thankyou_container">
                <img src={image} alt={thankyou.imageAlt} />
                <h1>{thankyou.title}</h1>
                <p>{thankyou.subtitle}</p>
            </div>
        </div>
    )
}

export default ThankYouCard