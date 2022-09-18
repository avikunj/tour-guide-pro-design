import React from "react";
import "./viewTrip.scss";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
const Bottom = () => {
  return (
    <div className="bottom">
      <h4>
        {" "}
        <CheckCircleOutlineIcon className="icon" />
        Book Trip
      </h4>
    </div>
  );
};

export default Bottom;
