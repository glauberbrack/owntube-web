import { combineReducers } from 'redux';

import search from './search';
import playVideo from './play-video';

const rootReducer = combineReducers({
    search,
    playVideo
})

export default rootReducer;