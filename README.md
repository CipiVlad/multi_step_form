# Tech - Stack
vscode, React + TS, SCSS, git, 
npm: react-router-dom, sass, sass-loader 

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

    -models
    -assests
        |_fonts
        |_images
    -data
        |_db.json
    -sass
        |_ _variables.scss