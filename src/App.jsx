import { useEffect, useState } from 'react';
import './index.css'; // Make sure to import the CSS file

const BaseUrl = "https://mocki.io/v1/d7a9962d-9b0a-4257-9619-304382e6dcf6";

function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Music', 'Gaming', 'Movies', 'News', 'Live', 'Sports'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BaseUrl);
        const data = await response.json();
        setVideos(data);
      } catch (error) { 
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const formatViewCount = (views) => {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'K';
    } else {
      return views.toString();
    }
  };

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div className="youtube-clone">
      <header className="filter-header">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </header>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-item">
            <div className="thumbnail-container">
              <img src={video.thumbnail} alt={video.title} className="thumbnail"/>
              <span className="duration">{video.duration}</span>
            </div>
            <div className="video-info">
              <img src={video.channel.profileImage} alt={video.channel.name} className="channel-image"/>
              <div className="video-details">
                <h3 className="video-title">{video.title}</h3>
                <p className="channel-name">{video.channel.name}</p>
                <p className="video-stats">
                  {formatViewCount(video.views)} views • {video.uploadedTime}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;