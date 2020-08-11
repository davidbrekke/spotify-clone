import React from "react";
import "./SidebarOption.css";
import { useDataLayerValue } from "./DataLayer";

function SidebarOption({ title, playlist_current, Icon }) {
  const [{ playlists, playlist }, dispatch] = useDataLayerValue();

  //   function setPlaylist(e) {
  //     e.preventDefault();
  //     dispatch({
  //       type: "SET_PLAYLIST",
  //       playlist: playlist_id,
  //     });
  //     console.log("CURRENT PLAYLIST", playlist);
  //   }

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <button
          onClick={() => {
            dispatch({
              type: "SET_PLAYLIST",
              playlist: playlist_current,
            });
          }}
        >
          {title}
        </button>
      )}
    </div>
  );
}

export default SidebarOption;
