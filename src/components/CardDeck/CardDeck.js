import React from "react";

class CardDeck extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        imageDetails:[
          {
            "name": "UI",
            "image": require("../../assets/cardsAssets/ui.jpg")
          },{
            "name": "UX",
            "image": require("../../assets/cardsAssets/UX.jpg")
          },{
            "name": "UX/UI",
            "image": require("../../assets/cardsAssets/UIUX.png")
          },{
            "name": "AI",
            "image": require("../../assets/cardsAssets/AI.jpg")
          },{
            "name": "Machine Learning",
            "image": require("../../assets/cardsAssets/ML.jpg")
          },{
            "name": "React.js",
            "image": require("../../assets/cardsAssets/react.jpg")
          },{
            "name": "Machine Learning",
            "image": require("../../assets/cardsAssets/ML.jpg")
          },{
            "name": "UI",
            "image": require("../../assets/cardsAssets/ui.jpg")
          }
        ]
    };
  }


  render() {
    const cardComponentStyle = {
      maxWidth: "1564px"
    };

    const cardComponentImageStyle = {
      width: "100%"
    };

    return (
      <div className="card-componet-parent w3-content w3-padding" style={cardComponentStyle}>
        <div className=" w3-row-padding">
        {this.state.imageDetails.map((item,i)=>
          <div className="card-zoom w3-col l3 m6 w3-margin-bottom" key={i}>
          <div className="w3-display-container">
            <div className="w3-display-topleft w3-black w3-padding">{item.name}</div>
              <div className="">
                    <a href="#"><img src={item.image} alt="House" className="" style={cardComponentImageStyle} /></a>
              </div>
          </div>
        </div>
         )}
        </div>
      </div>
    );
  }
}

export default CardDeck;