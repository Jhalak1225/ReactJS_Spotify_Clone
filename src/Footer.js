import React from 'react'
import './Footer.css'
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';
import QueueMusicRoundedIcon from '@mui/icons-material/QueueMusicRounded';
import {Grid, Slider} from '@mui/material'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer__left">
            <img className='footer__albumlogo' src="https://scontent.famd1-3.fna.fbcdn.net/v/t39.30808-6/274730295_496430925181056_1302123395949807626_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RR388rp2rxoAX9Oe6Q7&_nc_ht=scontent.famd1-3.fna&oh=00_AT9hcYwtLlnlKvshFLVqSb1AtsF12fmQ5-FrzP10MitQew&oe=62D97BE9" alt="" />
            <div className='footer__songInfo'>
                <h4>yeahh</h4>
                <p>usher</p>
            </div>
        </div>

        <div className="footer__center">
            <ShuffleRoundedIcon className='footer__green' />
            <SkipPreviousRoundedIcon className='footer__icon' />
            <PlayCircleRoundedIcon fontSize='large' className='footer__icon' />
            <SkipNextRoundedIcon className='footer__icon' />
            <RepeatRoundedIcon className='footer__green' />
        </div>

        <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <QueueMusicRoundedIcon />
          </Grid>
          <Grid item>
            <VolumeDownRoundedIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
        </div>
    </div>
  )
}

export default Footer