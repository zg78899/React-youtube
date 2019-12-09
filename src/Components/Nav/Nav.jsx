import React from 'react';
import './Nav.css';
import YouTubeImage from '../Nav/images/.youtubelogo';


const Nav = props => {
  return (
    <div className="">
      <nav className="">
        <a>
          <img src={YouTubeImage}/>
        </a>
        {props.children}
      </nav>
    </div>
  )
}
export default Nav;
