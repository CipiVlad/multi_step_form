type PersonalInfoProps = {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    nextStep: string;
    back: boolean;
}

export const personalInfo: PersonalInfoProps = {
    "title": "Personal info",
    "subtitle": "Please provide your name, email address, and phone number.",
    "name": "Name",
    "email": "Email Address",
    "phone": "Phone Number",
    "nextStep": "/select-plan",
    "back": false
} 