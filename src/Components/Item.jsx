import React from "react";
import "../styles/Items.css";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CategoryIcon from "@mui/icons-material/Category";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LinkIcon from "@mui/icons-material/Link";

const ListItem = (props) => {
  return (
    <div className="itemContainer">
      <div className="itemImageContainer">
        <img src={props.data.image} alt="" width="100%" />
      </div>
      <div className="innerContainer">
        <div>
          <span>{props.data.itemTitle}</span>
        </div>
        <div>
          <span>{props.data.studentName}</span>
        </div>
        <hr />
        <div>
          <DescriptionIcon style={{ fontSize: "medium" }} />
          <span>{props.data.itemDescription}</span>
        </div>
        <div>
          <CalendarMonthIcon style={{ fontSize: "medium" }} />
          <span>{new Date(props.data.createdAt).toDateString()}</span>
        </div>
        <div>
          <EmailIcon style={{ fontSize: "medium" }} />
          <span>{props.data.email}</span>
          <a className="mail-link" href={`mailto:${props.data.email}`}>
            <LinkIcon />
          </a>
        </div>
        <div>
          <LocationOnIcon style={{ fontSize: "medium" }} />
          <span>{props.data.lostLocation}</span>
        </div>
        <div
          className="category"
          style={{
            backgroundColor:
              props.data.category === "LOST" ? "#e57373" : " #66bb6a",
            cursor: "default",
          }}
        >
          <CategoryIcon style={{ fontSize: "medium" }} />
          <span>{props.data.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
