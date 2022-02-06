import React from 'react';
import twitter from './images/twitter-icon.png'
import discord from './images/discord-icon.png'
import opensea from './images/opensea-icon.png'
function Header() {
  return (
  <div >
    <div className='header-container'>
        <div className='header-left'>
            <div className='header-text' style={{color: 'white'}}>
            This is not a minting site 
            <br/>
            <br/>
            -by anonymous
            </div>
        </div>
        <div className='header-right'>
            <div className='header-container-logo'>
                <div className='twitter-logo'>
                    <a href='Twitter.com/lootquotesnft' target='_blank'>
                        <img className='twitter-logo-1' alt='twitter-icon' src={twitter} />
                    </a>
                </div>
                <div className='discord-logo' >
                    <a href='_blank'>
                        <img className='discord-logo-1' alt='discord-icon' src={discord} />
                    </a>    
                </div>
                <div className='opensea-logo'>
                    <a href='_blank'>
                        <img className='opensea-logo-1' alt='opensea-icon' src={opensea}/>
                    </a>                       
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Header;
