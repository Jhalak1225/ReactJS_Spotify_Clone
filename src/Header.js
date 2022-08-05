import React from 'react'
import './Header.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
// import {Avatar} from '@mui/material';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from './DataLayer';

function Header() {
const [{user}, dispatch] = useDataLayerValue();
 
  return (
    <div className='header'>
        <div className="header__left">
            <SearchRoundedIcon/>
            <input placeholder='Search for Artists, Songs, Albums ' type="text" />
        </div>

        <div className="header__right">
            <Avatar className='avatar' src={user?.images[0]?.url} alt={user?.display_name} />
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header