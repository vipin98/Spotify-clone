import React from 'react'
import './player.css';
import Sidebar from './Sidebar';
import Body from './Body'
import Footer from './Footer'

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />

                {/* sidebar */}
                {/* Body */}
                <Body spotify={spotify} />
            </div>
            <Footer />
            {/* Footer */}
        </div>
    )
}

export default Player
