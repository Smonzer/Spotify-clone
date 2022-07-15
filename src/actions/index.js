import { SET_TOKEN, SET_USER, SET_PLAYLISTS, SET_DISCOVER_WEEKLY } from "./constants/action-types";

export const setUser = user => ({
  type: SET_USER,
  user: user
})

export const setToken = token => ({
  type: SET_TOKEN,
  token: token
})

export const setPlaylists = playlists => ({
  type: SET_PLAYLISTS,
  playlists: playlists
})

export const setDiscoverWeekly = response => ({
  type: SET_DISCOVER_WEEKLY,
  discover_weekly: response
})