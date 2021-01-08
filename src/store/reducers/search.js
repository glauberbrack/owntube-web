const INITAL_STATE = {
    videos: [],
    loading: false,
    error: false
}

export default function search(state = INITAL_STATE, action) {
    switch(action.type) {
        case 'SEARCHING_VIDEO':
            return {
                videos: [],
                loading: true,
                error: false
            }
        case 'LIST_VIDEOS':
            return {
                videos: action.videos,
                loading: false,
                error: false
            }
        case 'ERROR_VIDEOS':
            return {
                videos: [],
                loading: false,
                error: true
            }
        default: return state
    }
}