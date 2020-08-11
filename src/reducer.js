export const initialState = {
  user: null,
  playlists: [],
  playlist: {
    description: "",
    name: "select playlist",
    tracks: [
      {
        items: [
          {
            track: {
              name: "",
              artists: [],
              album: {},
            },
          },
        ],
      },
    ],
    images: [
      {
        url:
          "https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png",
      },
    ],
  },
  playing: false,
  item: null,
  // change to null after development
  //token:"BQDpUHSzkSTWDQzLx3qKOQkfTvQ8ZGQWgJcENtgLtRmGWr_Mx4ykAt1Z1K0lnaHzseYisnK7FWR3g1UA87IXam6c9gfDwzB6m4ym0PASkPQ3Wvjmm2-9Z3LOCUPspGfBQMgKKpBXcgahpPSVrGGT5O5o9SU2vGVN03v1EqNRxWlLFYPx9KeV",
};

const reducer = (state, action) => {
  console.log("DISPATCH ACTION", action);

  // action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };
    default:
      return state;
  }
};
export default reducer;
