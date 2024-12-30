import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const searchParamsId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className='flex flex-col w-full m-5 p-5'>
      <div className='px-5 flex flex-col md:flex-row'>
        <div className="w-full md:w-2/3 ">
          <iframe
            className="w-full h-[420px] sm:h-[520px] md:h-[600px] lg:h-[600px] xl:h-[600px] rounded-xl"
            src={`https://www.youtube.com/embed/${searchParamsId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className='w-full md:w-1/3 md:pl-5 mt-5 md:mt-0'>
          <LiveChat />
        </div>
      </div>
      <div className=''>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
