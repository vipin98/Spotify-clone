import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import { Grid, Slider } from '@material-ui/core'
import PlalistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img
                    className="footer__albumLogo"
                    src="data:image/jpeg;base64,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" alt="ablum" />
                <div className="footer__songInfo">

                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlalistPlayIcon />
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
