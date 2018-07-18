import {combineReducers} from 'redux';
// Pages
import bio from './pages/bio/reducer';
import home from './pages/home/reducer';
import contact from './pages/contact/reducer';
import photos from './pages/photos/reducer';
import music from './pages/music/reducer';
import videos from './pages/videos/reducer';
// Containers
const rootReducer = combineReducers({
    bio,
    home,
    contact,
    photos,
    music,
    videos
})

export default rootReducer;