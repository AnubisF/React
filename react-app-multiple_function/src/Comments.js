import React from 'react'

export default function Comments({comments}) {
    return (
        <div>
            <h3>Comments</h3>
            <p>{comments.comment.text}</p>
            <p>{comments.comment.date} by {comments.comment.by}</p>
        </div>
    )
}
