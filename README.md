# 

# Tech - Stack
vscode, React + TS, SCSS, git, browser local Storage,jest testing
npm: react-router-dom, sass, sass-loader
Browsers: Brave, Google Chrome 

# App Design
* folder structure
-src
    |
    -pages
    |_ PersonalInfo
    |_ SelectPlan
    |_ AddOns
    |_ Finish

    -components
    |_ SideBar
    |_ NavBar
        fetch data to provide logic:
        --> on Page: PersonalInfo, NavBar displays: <button>Next Step</button>
        --> on Page: SelectPlan, NavBar displays: <button>Next Step</button>
        <Link to={navigation(-1)}>
        ...

    |_ StepCardContainer 
        --> fetch required data on each Side 
        --> if(page1){display in h2(data:{
            "Personal Info"
            ...
        })}
        --> this container centers the changing data
        --> inside of this container it depends what will  be displayed

    -assests
        |_fonts
        |_images
    -data
        |_modules
    -sass
        |_ _variables.scss