import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

class VideoList extends Component {
    renderVideo (video) {
        const title = video?.snippet?.title
        return (
            <List verticalAlign='middle'>
                <List.Item>
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
                {this.props.videos.map(video => {
                    return this.renderVideo(video)
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.search.videos,
        loading: state.search.loading,
        error: state.search.error
    }
}

export default connect(mapStateToProps, null)(VideoList)