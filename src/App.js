import './App.css';

import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoPlayer'

import YOUTUBE_API from './services/api';

function App() {
  return (
    <div className="container">
      <SearchBar/>
      <VideoList/>
      {console.log(YOUTUBE_API)}
      <VideoPlayer/>
    </div>
  );
}

export default App;
