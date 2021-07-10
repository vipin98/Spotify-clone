export const authEndpoint = "https://accounts.spotify.com/en/";

const redirectUri = " https://vipin98.github.io/Spotify-clone/";

const clientId = "99c0c356e2f14ef2b8ef1fc58c45b415"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {

        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial
    }, {});
}
export const loginUrl = `${authEndpoint}authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
