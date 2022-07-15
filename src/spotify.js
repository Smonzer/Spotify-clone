export const authEndpoint = 
"https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000";

const clientId = "5c09298650204711b2d4865cd8404b0c"

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-read-collaborative",
  "playlist-read-private"
]

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      var parts = item.split('=')
      initial[parts[0]] = 
      decodeURIComponent(parts[1])

      return initial
    }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;