import React from 'react'
import './Login.css'
import image from '../../assets/images/Spotify_Logo_RGB_White.png'
import { loginUrl } from '../../spotify'

function Login() {
  return (
    <div className='login'>
      <img 
        src={image}
        alt='' 
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login