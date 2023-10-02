import React, { useEffect, useState } from 'react'
import './App.css'
import Post from './components/post/Post'
import { db } from './firebase';
import 'firebase/auth';
import 'firebase/firestore';

const App = () => {
const [posts, setPosts] = useState([
  {
    id:0,
    userName:'Bahadur mia',
    caption: 'caption is here',
    imgUrl: 'https://cdn.pixabay.com/photo/2023/09/22/16/31/donkey-cart-8269449_640.jpg'
  }
  ,
  {
    id:0,
    userName:'Bahadur mia',
    caption: 'caption is here',
    imgUrl: 'https://cdn.pixabay.com/photo/2023/09/22/00/20/beach-8267793_640.jpg'
  }
])

  return (
    <div className="app">
      <div className="app-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png" alt="" className="app-header-img" />
      </div>
      <h1>some div here</h1>
       {
        posts.map(post =>(
          <Post key={post.id} userName={post.userName} caption={post.caption} imgUrl={post.imgUrl}/>
        ))
       }
    </div>
  );
}

export default App;
