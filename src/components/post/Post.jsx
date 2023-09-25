import React from 'react'
import { Avatar } from '@mui/material'
import './post.css'
import im1 from '../../images/img-1.jpg'
import profile from '../../images/img-3.jpg'

const Post = ({imgUrl, userName, caption}) => {
  return (
    <div className='post'>
      <div className="post-header">
         <Avatar>
            <img src={profile} alt="" className='profile-im' />
         </Avatar>
         <h3 className='userName'>{userName}</h3>
      </div>
      <div className="post-image">
        <img src={imgUrl} alt=""  className='post-img-image'/>
      </div>
      <div className="post-text">
        <h4> <strong>Bahadur</strong> {caption}</h4>
        
      </div>
    </div>
  )
}

export default Post