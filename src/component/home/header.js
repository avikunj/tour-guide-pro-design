import React from "react";
import "./home.scss";
import Profile from "../../img/profile.jpg";
import {GrFilter} from 'react-icons/gr'
const Header = () => {
  return (
    <div className="Header">
      <div className="headertext">
        <h1>
          Trip<span>out</span>
        </h1>
        <div className="profilepicture">
          <img src={Profile} className="profilepic" height={50} />
        </div>

      </div>

      <div className="tripContener">
        <h3>Find your</h3>
        <h1>group trip</h1>
      </div>
      <div className="filter"> <h4>
filters
<GrFilter/>
      </h4>
      </div>
    </div>
  );
};

export default Header;
