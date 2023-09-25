import React from 'react'
import './App.css'
import Post from './components/post/Post'

const App = () => {
  return (
    <div className="app">
      <div className="app-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png" alt="" className="app-header-img" />
      </div>
      <h1>some div here</h1>
      <Post/>
    </div>
  )
}

export default App