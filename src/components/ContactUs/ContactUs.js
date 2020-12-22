import React from "react";

class ContactUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userDetails:[
              {
                "name": "John Doe",
                "image": require("../../assets/team/john.jpg"),
                "role":"CEO &amp; Founder",
                "roleDescription":"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
              },
              {
                "name": "Abby",
                "image": require("../../assets/team/johnDoe.jpg"),
                "role":"CEO &amp; Founder",
                "roleDescription":"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
              },
              {
                "name": "Mike",
                "image": require("../../assets/team/Mike.jpg"),
                "role":"CEO &amp; Founder",
                "roleDescription":"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
              },{
                "name": "Timmon",
                "image": require("../../assets/team/Dan.jpg"),
                "role":"CEO &amp; Founder",
                "roleDescription":"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
              }
            ]
        };
      }

render() { 
    const contactUsComponentStyle = {
        width: "100%"
      };
    return (
        <div className="w3-row-padding team-container">
            {this.state.userDetails.map((item,i)=>
            <div className=" w3-col l3 m6 w3-margin-bottom" key={i}>
                <img src={item.image} alt={item.name} style={contactUsComponentStyle} />
                <h3>{item.name}</h3>
                <p className="w3-opacity">{item.role}</p>
                <p>{item.roleDescription}</p>
                <p><button className="w3-button w3-blue w3-block">Contact</button></p>
            </div>
            )}
        </div>
        );
  }
}

export default ContactUs;