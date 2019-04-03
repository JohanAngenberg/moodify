function getPlaylistId(str) {
    let playlistId = '';
    if (str.includes('https://open.spotify.com/playlist/')) {
        playlistId = str.split('/')[4];
    } else {
        playlistId = str;
    }
    return playlistId;
}

export default getPlaylistId;