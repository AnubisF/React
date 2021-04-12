import React from 'react'

export default function Author({author}) {
    return (
        <p>
            {author.date} by {author.fname}
        </p>
    )
}