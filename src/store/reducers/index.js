import { combineReducers } from 'redux';

import search from './search';
import play from './play-video';

const rootReducer = combineReducers({
    search,
    play
})

export default rootReducer;