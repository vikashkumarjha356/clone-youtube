import React from 'react'
import Comment from './Comment'


const CommentsList = ({ comments }) => {
    console.log(comments)
    // return comments.map((item, index) =>
    //     <div key={index}>
    //         <Comment data={item} />
    //         <div className="pl-5 ml-5 border border-l-black">
    //             <CommentsList comments={item.replies} />
    //         </div>
    //     </div>

    // )

    return comments.map((item, index) => <div key={index}>
        <Comment data={item.snippet.topLevelComment ? item.snippet.topLevelComment : item.snippet} />
        {/* <div>{item.replies?.comments.length}</div> */}
        {item.replies?.comments?.length && (<div className="pl-5 ml-5">
            <CommentsList comments={item.replies.comments} />
        </div>)}
    </div>)
}

export default CommentsList