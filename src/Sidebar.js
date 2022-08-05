import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{playlists}, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
      <img className='sidebar__logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
      <SidebarOption Icon={HomeRoundedIcon} title='Search' />
      <SidebarOption Icon={SearchRoundedIcon} title='Your Library' />
      <SidebarOption Icon={LibraryMusicRoundedIcon} title='Home' />
    
    <br />
    <strong className='sidebar__title'>PLAYLISTS</strong>
    <hr />

    {playlists?.items?.map((playlist) => (
      <SidebarOption title={playlist.name} />
    ))}
    
    </div>
  )
}

export default Sidebar