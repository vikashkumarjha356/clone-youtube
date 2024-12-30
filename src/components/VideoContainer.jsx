import React, { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_API, YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
  const search = useSelector(state => state.search);
  const searchQuery = search.globalSearchQuery;
  console.log("Global Search Query is: " + searchQuery);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    getVideos();
  }, [searchQuery]);

  const getVideos = async () => {
    const url = searchQuery ? YOUTUBE_SEARCH_API + searchQuery : YOUTUBE_VIDEOS_API;
    const data = await fetch(url);
    const videosData = await data.json();
    setVideos(videosData.items);
  };

  const handleScroll = () => {
    console.log('Scrolling')
  }



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-2">
      {videos
        .filter((video) => typeof video.id === 'string' || (video.id && video.id.videoId))
        .map((video) => (
          <Link
            to={"watch?v=" + (typeof video.id === 'string' ? video.id : video.id.videoId)}
            key={(typeof video.id === 'string' ? video.id : video.id.videoId)}
          >
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
