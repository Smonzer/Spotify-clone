import React from 'react'
import './Footer.css'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <img 
          className='footer_albumLogo'
          src="" 
          alt="" 
        />
        <div className='footer_songInfo'>
          <h4>Broken Wings</h4>
          <p>Alter Bridge</p>
        </div>
      </div>

      <div className='footer_center'>
        <ShuffleIcon className='footer_icon' />
        <SkipPreviousIcon className='footer_icon' />
        <PlayCircleIcon className='footer_solid' />
        <SkipNextIcon className='footer_icon' />
        <RepeatIcon className='footer_icon' />
      </div>

      <div className='footer_right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon className='footer_icon'/>
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer