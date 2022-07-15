import { useDispatch, useSelector } from 'react-redux/es/exports';
import './App.css';
import React, { useEffect } from 'react';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { setToken, setUser, setPlaylists, setDiscoverWeekly } from './actions';
import Player from './components/Player/Player';

const spotify = new SpotifyWebApi()

function App() {
  const token = useSelector(state => state.reducer.token)
  const playlists = useSelector(state => state.reducer.playlists)
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token

    if (_token) {
      dispatch(setToken(_token))
      spotify.setAccessToken(_token)
      spotify.getMe().then((user) => {
        dispatch(setUser(user))
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch(setPlaylists(playlists))
      })

      spotify.getPlaylist('2CjnrV8p6Bjxq3NJfiUYgZ').then(response => {
        dispatch(setDiscoverWeekly(response))
      })
    }
  }, [])

  return (
    <div className="app">
      { token ? ( <Player /> ) : ( <Login /> ) }
    </div>
  );
}

export default App;
