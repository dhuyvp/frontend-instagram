import React, { useState } from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";


function Post( {user, postImage, likes, timestamp} ) {
    const [isLiked, setIsLiked] = useState(false);

    const handleClickLike = () => {
        // onClick();
        setIsLiked(!isLiked);
      };

  return (
    <div className='post'>
        <div className='post__header'>
            <div className='post_headerAuthor'>
                <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
                {user} . <span>{timestamp}</span>
            </div>

            <MoreHorizIcon /> 

        </div>

        <div className='post__image'>
            <img 
                src={postImage}
                alt=''
            />
        </div>

        <div className='post__footer'>
            <div className='post__footerIcons'>
                <div className='post__iconMains'>
                    <FavoriteBorderIcon className='postIcon'
                        sx={{
                            // backgroundColor: isLiked ? "red" : "black",
                            color: isLiked ? "red" : "primary",
                          }}
                          onClick={handleClickLike}
                    />
                    <ChatBubbleOutlineIcon className='postIcon'/>
                    <TelegramIcon className='postIcon'/>
                </div>
                <div>
                    <BookmarkBorderIcon className='postIcon'/>
                </div>
            </div>

            Liked by {likes} people.
        </div>
    </div>
  )
}

export default Post