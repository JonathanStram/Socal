import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
         <div className = {s.postsBlock}>
    My posts
    <div>
        <div>
        <textarea></textarea>
        </div>
        <div>
        <button>Add post</button>
        </div>
    </div>
<div className = {s.post}>
<Post message= 'Hello world'/>
<Post message= 'Hi, this is first post' />

</div>
</div>
    )
}

export default MyPosts;