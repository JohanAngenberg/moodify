function getPlaylistId(str) {
    let playlistId = '';

    if (str.includes('?')) {
        str = str.split('?')[0];
        playlistId = str.split('/')[6];
    } else if (str.includes('https://open.spotify.com/playlist/')) {
        playlistId = str.split('/')[4];
    } else {
        playlistId = str;
    }

    return playlistId;
}

export default getPlaylistId;