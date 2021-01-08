import youtubeSearch from 'youtube-api-v3-search'
import YOUTUBE_API from '../../services/api'

export const searchingVideo = () => {
    return {
        type: 'SEARCHING_VIDEO',
        loading: true,
        error: false
    }
}

export const listVideos = (videos) => {
    return {
        type: 'LIST_VIDEOS',
        videos,
        loading: false,
        error: false
    }
}

export const errorVideos = () => {
    return {
        type: 'ERROR_VIDEOS',
        loading: false,
        error: true
    }
}

export const searchVideo = (name) => {
    return dispatch => {
        dispatch(searchingVideo())
        youtubeSearch(YOUTUBE_API, { q: name })
            .then((data) => dispatch(listVideos(data.items)))
            .catch(() => dispatch(errorVideos()))
    }
}