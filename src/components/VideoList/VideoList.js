import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Image, Dimmer, Loader } from 'semantic-ui-react';

import { playVideo } from '../../store/actions/play-video'

class VideoList extends Component {
    constructor(props) {
        super(props)

        this.renderVideo = this.renderVideo.bind(this)
    }

    renderVideo (video) {
        const title = video?.snippet?.title
        return (
            <List key={video?.id.videoId} verticalAlign='middle'>
                <List.Item onClick={() => this.props.play(video)}>
                    <Image width='100px' height='80px' src={video?.snippet?.thumbnails?.default?.url} />
                    
                    <List.Content>
                        <List.Header>{title.length > 30 ? ((title).substring(0, 30)+'...')  : title}</List.Header>
                    </List.Content>
                </List.Item>
            </List>       
        )
    }
    render() {
        return (
            
            <div className='video-list'>
                {
                this.props.loading && ( <Dimmer active>
                    <Loader size='medium'> Loading... </Loader>
                </Dimmer>)
                }
                {this.props.videos.map(video => {
                    return this.renderVideo(video)
                })}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        play: (video) => dispatch(playVideo(video))
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.search.videos,
        loading: state.search.loading,
        error: state.search.error,
        video: state.play.video
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)