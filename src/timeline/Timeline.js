import React, { useState } from 'react'
import './Timeline.css'
import Suggest from './Suggest.js'
import Post from './posts/Post'

function Timeline() {
    const [posts, setPosts] = useState([
        {
            user : 'dhuyvp',
            postImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png',
            likes: 200,
            timestamp: '2d',
        },
        {
            user : 'dhuyvp2',
            postImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png',
            likes: 200,
            timestamp: '2d',
        },
        {
            user : 'dhuyvp3',
            postImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png',
            likes: 200,
            timestamp: '2d',
        },
    ]);
  return (
    <div className='timeline'>
        <div className='timeline__left'>
            <div className='timeline__posts'>
            {posts.map((post) => (
                <Post
                user={post.user}
                postImage={post.postImage}
                likes={post.likes}
                timestamp={post.timestamp}
                />
            ))}
                {/* <Post user='1' postImage='' likes='12' timestamp='12d'/> */}
               
            </div>
        </div>
        <div className='timeline__right'>
            <Suggest />
        </div>
    </div>
  )
}

export default Timeline