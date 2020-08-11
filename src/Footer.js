import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_albumLogo"
          src="https://hypebeast.com/image/2016/09/nick-knight-interview-travis-scott-birds-artwork-2.jpg"
          alt=""
        />
        <div className="footer_songInfo">
          <h4>lose</h4>
          <p>Travis Scott</p>
        </div>
      </div>
      <div className="footer_middle">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <PlaylistPlayIcon className="footer_icon_right" />

        <VolumeDownIcon className="footer_icon_right" />

        <Slider />
      </div>
    </div>
  );
}

export default Footer;
