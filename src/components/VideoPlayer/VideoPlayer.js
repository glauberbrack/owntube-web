import React from 'react';
import { connect } from 'react-redux';
import { Advertisement, Embed } from 'semantic-ui-react'

const VideoPlayer = (props) => {
    return (
        <div className='video-player'>
            {
                !props.video.id && (
                    <div >
                    <Advertisement style={{'height': '433px'}} unit='top banner' test='Search for a video and select it' />
                    </div>
                )
            }
            {
                props.video && props.video.snippet && (
                    <div>
                    <Embed id={props.video.id.videoId} placeholder='https://i.pinimg.com/originals/a2/81/38/a28138c18f0e24e9bab084aaa97770be.jpg' source='youtube' />
                        <p className='video-title'>{props.video.snippet.title}</p>
                        <p className='video-description'>{props.video.snippet.description}</p>
                    </div>
                )
            }            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        video: state.play.video
    }
}

export default connect(mapStateToProps, null)(VideoPlayer)