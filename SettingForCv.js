import Element from "./CompForCv/Element";
import "./SettingForCv.css"

function SettingForCv()
{
    return (
        <div>
            <h1>The content CV</h1>
            <form method="post" action="#">
                <Element
                  namePunkt="Name"
                  nameForPost="name"
                >
                </Element>
                <Element
                  namePunkt="Surname"
                  nameForPost="surname"
                >
                </Element>
                <Element
                  namePunkt="Phone"
                  nameForPost="phone"
                >
                </Element>
                <Element
                  namePunkt="Mail"
                  nameForPost="mail"
                >
                </Element>
                <Element
                  namePunkt="YouTube"
                  nameForPost="youtube"
                >
                </Element>
                <Element
                  namePunkt="Git"
                  nameForPost="git"
                >
                </Element>
                <Element
                  namePunkt="Linkdln"
                  nameForPost="linkdln"
                >
                </Element>
                <Element
                  namePunkt="Address"
                  nameForPost="address"
                >
                </Element>
                <Element
                  namePunkt="Technology stack"
                  nameForPost="technologyStack"
                >
                </Element> 
                <Element
                  namePunkt="Professional programming experience"
                  nameForPost="professional"
                >
                </Element> 
                <Element
                  namePunkt="Programming experience"
                  nameForPost="experience"
                >
                </Element> 
                <Element
                  namePunkt="Education"
                  nameForPost="education"
                >
                </Element> 
                <Element
                  namePunkt="Language Skills"
                  nameForPost="language"
                >
                </Element> 
                <Element
                  namePunkt="Certificates"
                  nameForPost="сertificates"
                >
                </Element> 
                <Element
                  namePunkt="Permission for Processing Personal Data"
                  nameForPost="personal"
                >
                </Element> 
                <input type="submit" name="okSettingContentForCv"/>
            </form>
           
        </div>
    );
}

export default SettingForCv;
