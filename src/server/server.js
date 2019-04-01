import express from 'express';
import SpotifyAPI from './scripts';
const app = express();
const client_id = '4345d340550f4d0bb4c837d34c69b6b6';
const client_secret = '4407f9a3be8646a8bd08758ea41c9be8';
const spotifyAPI = new SpotifyAPI(client_id, client_secret);

app.get('/', (req, res) => {
    const queryString = 'lepro*&type=artist';
    spotifyAPI.searchRequest(queryString)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        });
});

app.get('/artists', (req, res) => {
    spotifyAPI.artistRequest()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        });
});

app.get('/playlist/:id', (req, res) => {
    spotifyAPI.playlistRequest(req.params.id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err);
        });
});

app.get('/audio-features/:playlist_id', (req, res) => {
    spotifyAPI.audioFeaturesOfPlaylist(req.params.playlist_id)
        .then(data => res.send(data))
        .catch(err => res.send(err));
});

app.listen(3000, () => {
    console.log("Port 3000 is open");
});