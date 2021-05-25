//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUrl = "https://localhost:3000/"; //where are you running your app (local react by default is http://localhost:3000/
const clientId = "de219c0013a2403ab8d688dfb63b0f97"; // clintId you can get at https://developer.spotify.com/dashboard

/**
 * You can read more about Spotify scopes at https://developer.spotify.com/documentation/general/guides/scopes/
 */
const scopes = [
  "user-read-playback-position",
  "user-read-email",
  "user-library-modify",
  "playlist-modify-public",
  "ugc-image-upload",
  "user-follow-modify",
  "user-modify-playback-state",
  "user-read-recently-played",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "playlist-modify-private",
  "user-follow-read",
  "user-read-playback-state",
  "user-read-currently-playing",
  "playlist-read-private",
  "playlist-read-collaborative",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getAccessTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};
