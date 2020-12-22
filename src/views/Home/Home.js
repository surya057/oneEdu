import React from "react";
import Nav from '../../components/Nav/Nav';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/CardDeck/CardDeck';
import Heading from '../../components/Heading/Heading';
import ContactUs from '../../components/ContactUs/ContactUs';
import AchieveYourGoals from "../../components/AchieveYourGoals/AchieveYourGoals";
import Footer from "../../components/Footer/Footer";


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      about: 'About',
      headingCourses: 'Courses',
      team: 'Our Team'
    };
  }

  render() {
    return (
      <div className='page_container'>
        <Nav/>
        <div className="place_holderForNav"></div>
        <Hero/>
        <AchieveYourGoals/>
        <Heading headingName={this.state.headingCourses}/>
        <Card/>
        <Heading headingName={this.state.about}/>
        <div className="container">
        At Moz, we believe there is a better way to do marketing. A more valuable, less invasive way where customers are earned rather than bought. We're obsessively passionate about it, and our mission is to help people achieve it. We focus on search engine optimization (SEO). It's one of the least understood and least transparent aspects of great marketing, and we see that as an opportunity: We're excited to simplify SEO for everyone through our software, education, and community.
        </div>
        <Heading headingName={this.state.team}/>
        <ContactUs/>
        <Footer/>
    </div>
    );
  }
}

export default Home;
