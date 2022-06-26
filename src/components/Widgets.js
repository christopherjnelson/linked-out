import React from "react";
import "../css/Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2> LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "ReactJS is the past, present and future",
        "Top News - 425 Readers"
      )}
      {newsArticle(
        "Flutter shutdown by Google permanently",
        "Top News - 290 Readers"
      )}
      {newsArticle(
        "Angular devs accidently delete repo",
        "Top News - 210 Readers"
      )}
      {newsArticle(
        "Found iPhone belongs to DB Cooper",
        "Top News - 120 Readers"
      )}
      {newsArticle(
        "Chris Nelson needs to practice more CSS",
        "Top News - 55 Readers"
      )}
    </div>
  );
}

export default Widgets;
