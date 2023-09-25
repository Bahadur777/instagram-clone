import React, { useState } from 'react'
import './App.css'
import Post from './components/post/Post'

const App = () => {
  const [post, setPosts] = useState([
    {
      userName: "bahadur",
      caption:"caption is here",
      imgUrl:"https://cdn.pixabay.com/photo/2013/05/11/08/28/sunset-110305_640.jpg"
    },
    {
      id: 0,
      userName: "shihab mia",
      caption:"caption is here",
      imgUrl:"https://cdn.pixabay.com/photo/2013/05/11/08/28/sunset-110305_640.jpg"
    },
  ])
  return (
    <div className="app">
      <div className="app-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png" alt="" className="app-header-img" />
      </div>
      <h1>some div here</h1>
      {
     post.map( post => (
      <Post key={post.id} userName={post.userName} caption={post.caption} imgUrl={post.imgUrl} />
     ))
      }
      
    </div>
  )
}

export default App