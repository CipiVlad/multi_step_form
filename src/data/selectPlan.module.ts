import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'

export const selectPlan = {
    "title": "Select your plan",
    "subtitle": "You have the option of monthly or yearly billing.",
    "icons": [
        {
            "name": arcade,
            "alt": "arcade"
        },
        {
            "name": advanced,
            "alt": "advanced"
        },
        {
            "name": pro,
            "alt": "pro"
        }
    ],
    "planMonthly": [
        {
            "id": "1",
            "title": "Arcade",
            "price": "$9/mo",
        },
        {
            "id": "2",
            "title": "Advanced",
            "price": "$12/mo",
        },
        {
            "id": "3",
            "title": "Pro",
            "price": "$15/mo",
        }
    ],
    "planYearly": [
        {
            "id": "1",
            "title": "Arcade",
            "price": "$90/year",
            "description": "2 months free"
        },
        {
            "id": "2",
            "title": "Advanced",
            "price": "$120/year",
            "description": "2 months free"
        },
        {
            "id": "3",
            "title": "Pro",
            "price": "$150/year",
            "description": "2 months free"
        }
    ],

    "monthly": "Monthly",
    "yearly": "Yearly",
    "nextStep": "/add-ons",
    "back": "/"
}