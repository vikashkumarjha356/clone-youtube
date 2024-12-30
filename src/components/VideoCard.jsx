import React from 'react';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-4 m-2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <img
        className="rounded-lg w-full h-auto"
        src={thumbnails.medium.url}
        alt="video thumbnail"
      />
      <ul className="pt-2">
        <li className="font-bold text-sm sm:text-base">{title}</li>
        <li className="text-xs sm:text-sm text-gray-600">{channelTitle}</li>
        {/* Optionally, you can add the views count */}
        {/* <li className="text-xs sm:text-sm">{statistics.viewCount} views</li> */}
      </ul>
    </div>
  );
};

export default VideoCard;
