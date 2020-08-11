import React, { useEffect, useState } from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ playlist, user, token }, dispatch] = useDataLayerValue();
  console.log("playlist in body", playlist);
  console.log("tracks in playlist", playlist.tracks);
  console.log("USERRRR", user);

  //   const [tracks, setTracks] = useState([]);
  //   console.log(tracks);

  //   useEffect(() => {
  //     function getTracks() {
  //       const tracks = spotify.playlist_tracks(playlist.id);
  //       setTracks(tracks);
  //     }
  //     getTracks();
  //   }, [playlist]);

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={playlist?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>{playlist?.name}</h2>
          <p>{playlist?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffle bodyIcon" />
          <FavoriteIcon fontSize="large" className="bodyIcon" />
          <MoreHorizIcon className="bodyIcon" />
        </div>

        {/* {playlist?.tracks?.items?.map((item) => (
          <SongRow track={item.track} />
        ))} */}
        <h2 className="body_songCount">
          number of songs: {playlist?.tracks?.total}
        </h2>
      </div>
    </div>
  );
}

export default Body;
