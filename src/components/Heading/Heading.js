import React from "react";
import './Heading.css';

class Heading extends React.Component {

constructor(props) {
    super(props);
}

render() { 
    return (
        <div className="w3-container w3-padding-32" id="projects">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">{this.props.headingName}</h3>
        </div>
        );
  }
}

export default Heading;