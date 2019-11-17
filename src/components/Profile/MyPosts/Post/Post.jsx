import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
    
<div className = {s.item}>
    <img src = 'https://cdn.dribbble.com/users/199982/screenshots/4044699/furkan-avatar-dribbble.png'/>
    {props.message}
    <div>
    <span>Like</span>
    </div>
</div>
    )
}

export default Post;