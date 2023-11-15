import React from "react";
import './card.css';



function Card({id='no',title='',tag='',status='',priority=''}){
    const circleStyle = {
        backgroundColor: "grey",
      };
    return(
        <div className="Card-Container">
            <div id="title1">
          <div id="id1">{id}</div>
          <div data-initials="AB">
            <div className="status-circle" style={circleStyle}></div>
          </div>
        </div>
        <div id="title2">{title}</div>
        <div id="title3">
          <div id="grey"></div>
          {tag[0]}
        </div>
            {/* <div className="Card-Id">{id}</div>
            <div className="Card-Heading">{title}</div>
            <div className="Card-Tag"><span className="Card-Priority">{priority}</span><span className="Card-Feature">{tag[0]}</span></div> */}
        </div>
    )
}


export default Card;