import React from 'react'

const CommentDetail = (props) => {
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="alt" src={props.avatar} />
        </a>
        <div className="content">
            <a href="/">
                {props.name}
            </a>
            <div className="metadata">
                <span className="date">{props.xtime}</span>
            </div>
            <div className="text">{props.comment}</div>
        </div>
    </div>
    );
}

export default CommentDetail;