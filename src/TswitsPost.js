import React, { forwardRef } from "react";
import "./TswitsPost.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const TswitsPost = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="profile-pic">
          <Avatar src={avatar} />
        </div>
        <div className="bg">
          <div className="header">
            <div className="text">
              <h3>
                {displayName}{" "}
                <span className="special-case">
                  {verified && <VerifiedUserIcon className="badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="header-desc">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default TswitsPost;