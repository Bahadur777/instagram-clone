import React from 'react'
import { Avatar } from '@mui/material'
import './post.css'
import im1 from '../../images/img-1.jpg'

const Post = () => {
  return (
    <div className='post'>
      <div className="post-header">
         <Avatar>
            B
         </Avatar>
         <h3 className='userName'>Bahadur</h3>
      </div>
      <div className="post-image">
        <img src={im1} alt=""  className='post-img-image'/>
      </div>
      <div className="post-text">
        <h4> <strong>Bahadur</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, atque?</h4>
      </div>
    </div>
  )
}

export default Post