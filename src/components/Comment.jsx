import React from 'react';

const Comment = ({ data }) => {
    console.log(data);
    // const { name, text, replies } = data;
    return (
        <div className='flex rounded-lg p-4'>
            {/* Profile image */}
            <img
                className='h-12 w-12 rounded-full sm:h-14 sm:w-14'
                src={data.snippet ? data.snippet.authorProfileImageUrl : data.authorProfileImageUrl}
                alt="userIcon"
            />
            <div className="px-3 flex flex-col justify-between">
                {/* Commenter name */}
                <p className='font-bold text-sm sm:text-base'>{data.snippet ? data.snippet.authorDisplayName : data.authorDisplayName}</p>

                {/* Comment text */}
                <p className='text-sm sm:text-base'>{data.snippet ? data.snippet.textDisplay : data.textDisplay}</p>
            </div>
        </div>
    );
}

export default Comment;
