import React, { useState } from 'react'
import Comment from './Comment';
import CommentsList from './CommentsList';
import { useEffect } from 'react';
import { YOUTUBE_COMMETS_API } from '../utils/constants';
import { useSearchParams } from 'react-router-dom';

const CommentsContainer = () => {

    const [searchParams] = useSearchParams();
    const searchParamsId = searchParams.get("v");
    const [comments, setComments] = useState([])

    useEffect(() => {
        getCommentWithReplies();
    }, [])

    const getCommentWithReplies = async () => {
        const res = await fetch(YOUTUBE_COMMETS_API + searchParamsId);
        const data = await res.json();
        setComments(data.items);
    }

    return (
        <div className='mx-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments:</h1>
            <CommentsList comments={comments} />
        </div>
    )
}

export default CommentsContainer