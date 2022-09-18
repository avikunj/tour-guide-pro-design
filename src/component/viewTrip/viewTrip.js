import React from "react";
import "./viewTrip.scss";
import Kenai from "../../img/kenai.jpg";
import { Card } from "react-bootstrap";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Home from "@mui/icons-material/Home";

import GroupAddSharpIcon from "@mui/icons-material/GroupAddSharp";
import RoomIcon from "@material-ui/icons/Room";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import StarIcon from "@material-ui/icons/Star";
import Bottom from "./bottom";
const ViewTrip = () => {
  return (
    <>

    <div className="viewtrip">
      <div className="topview">
        <img src={Kenai} height={300} width={500} className="topviewimage" />{" "}
      </div>
      <div className="cardContainer">
        <div className="cardviewtrip">
          <Card style={{ width: "31.5rem" }}>
            <Card.Body className="cardbodyviewtrip">
              <Card.Title>
                <h2>Kenai Fjords National Park</h2>
                <h1>$333</h1>
              </Card.Title>
              <Card.Title>
                <h5 className="onmap">
                  <RoomIcon />
                  On map
                </h5>
                <h6 className="address">Kenai Peninsula Borough,Alaska,USA</h6>
              </Card.Title>

              <Tabs aria-label="icon label tabs example" centered>
                <Tab icon={<PersonOutlineIcon />} label="6 peoples" />
                <Tab icon={<WatchLaterIcon />} label="14 days" />
                <Tab icon={<StarIcon />} label="4.8" />
              </Tabs>

              <p>
                We respect wild animals as individuals with their own needs and
                preferences, rather than seeing them as mere parts of
                ecosystems. But this approach demands a richer understanding of
                wild animals’ lives. We want to take a proactive approach to
                managing the welfare benefits
                ....
              </p>
            </Card.Body>
          </Card>
        </div>
      


      </div>
    </div>

 </>
  );
};

export default ViewTrip;
