import React from "react";

class Footer extends React.Component {

constructor(props) {
    super(props);
}

render() {
    const footerPaddingLeft = {
        paddingleft: "0px"
      };
    return (
        <footer className="page-footer font-small blue " style={footerPaddingLeft}>
            <div className="footer-copyright text-center">© 2020 Copyright:
                <a href="#"> Onedu.com</a>
            </div>
        </footer>
        );
  }
}

export default Footer;