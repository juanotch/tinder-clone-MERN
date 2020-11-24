import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StartRateIcon from "@material-ui/icons/StarRate"
import FavoriteIcon from "@material-ui/icons/Favorite"
import IconButton from "@material-ui/core/IconButton"
import FlashOnIcon from "@material-ui/icons/FlashOn"

function SwipeButtons() {
    return (
        <div className="swipeButtons">  
            <IconButton className="swipeButtons_repeat">
                <ReplayIcon fontSize="large" >

                </ReplayIcon>
            </IconButton>
              <IconButton className="swipeButtons_left">
              <CloseIcon fontSize="large" >

                </CloseIcon>
            </IconButton>
                  <IconButton className="swipeButtons_start">
             <StartRateIcon fontSize="large" >

             </StartRateIcon>
            </IconButton>
                  <IconButton className="swipeButtons_right">
           <FavoriteIcon fontSize="large" >

           </FavoriteIcon>
            </IconButton>
                  <IconButton className="swipeButtons_lightning">
               <FlashOnIcon fontSize="large" >

            </FlashOnIcon>
            </IconButton>
            
        

            
        </div>
    )
}

export default SwipeButtons
