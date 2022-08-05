import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import SongRow from './SongRow';

function Body({spotify}) {
    const [{discover_weekly}, dispatch] = useDataLayerValue();
  return (
    <div className='body'>
        <Header spotify={spotify} />
        <div className="body_info">

            <img src={discover_weekly?.images[0].url} alt="" />

            <div className="body_infoText">

                <strong>PLAYLIST</strong>
                
                <h2>THE WEEKND:BestOfTheBest</h2>

                <p>{discover_weekly?.description}</p>

            </div>
        </div>

        <div className="body_songs">
            <div className="body_icons">
                <PlayCircleRoundedIcon className='body_shuffle' />
                <FavoriteRoundedIcon fontSize='large' />
                <MoreHorizRoundedIcon />
            </div>
            {/* songs here */}
            {discover_weekly?.tracks.items.map(item => (
                <SongRow track={item.track} />
            ))}
        </div>
    </div>
  )
}

export default Body