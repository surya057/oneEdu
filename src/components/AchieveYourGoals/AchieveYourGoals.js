import React from "react";

class Achieve extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        achievement:[
          {
            "headingText": "Learn the latest skills",
            "desc":"like business analytics, graphic design, Python, and more",
            "image": require("../../assets/Acheivement/SvgaLearn.png"),
            "alt":"An avatar image of a head with a lightbulb, pencil, and arrow coming out of it"
          },
          {
            "headingText": "Get ready for a career",
            "desc":"in high-demand fields like IT, AI and cloud engineering",
            "image": require("../../assets/Acheivement/teacher-img.png"),
            "alt":"An avatar image of a head with a lightbulb, pencil, and arrow coming out of it"
          },
          {
            "headingText": "Earn a certificate or degree",
            "desc":"from a leading university in business, computer science, and more",
            "image": require("../../assets/Acheivement/SvgaColorCertificate.png"),
            "alt":"An avatar image of a head with a lightbulb, pencil, and arrow coming out of it"
          },
          {
            "headingText": "Upskill your organization",
            "desc":"with on-demand training and development programs",
            "image": require("../../assets/Acheivement/SvgaCommunity.png"),
            "alt":"An avatar image of a head with a lightbulb, pencil, and arrow coming out of it"
          }
        ]
    };
}

render() { 

    const AchieveYourGoalsComponent = {
        maxHeight: "55px"
      };

    return (
        <section className="rc-AchieveYourGoals">
            <h2 className="rc-AchieveYourGoals__title">Achieve your goals with Onedu</h2>
            <ul className="rc-AchieveYourGoals__value-prop-list">
            {this.state.achievement.map((item,i)=>
                <li className="rc-AchieveYourGoals__value-prop-item"  key={i}>
                    <div className="img-container">
                        <img src={item.image} style={AchieveYourGoalsComponent} alt="{item.alt}" />
                    </div>
                    <h3 className="rc-AchieveYourGoals__value-prop-title">
                        <span>{item.headingText}<small>{item.desc}</small></span>
                    </h3>
                </li>
            )}
            </ul>
        </section>
        );
  }
}

export default Achieve;