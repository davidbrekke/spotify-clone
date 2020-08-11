import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    /* clear token from url for security */
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        console.log("playlists", playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      // spotify.getUserPlaylists().then((playlists) => {
      //   console.log(playlists.items[0]);
      //   dispatch({
      //     type: "SET_PLAYLIST",
      //     playlist: playlists.items[0],
      //   });
      // });
    }
  }, [dispatch, token]);

  console.log("USER!!!! >>", user);
  console.log("TOKEN!!!! >>", token);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
