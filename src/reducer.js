import { SET_PLAYLISTS, SET_USER, SET_TOKEN, SET_DISCOVER_WEEKLY } from "./actions/constants/action-types"

const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
// TODO: REMOVE TOKEN AFTER PROJECT AND MAKE IT NULL.
  token: null
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      }
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      }
    case SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists
      }
    case SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discover_weekly: action.discover_weekly
      }
    default:
      return state
  }
}