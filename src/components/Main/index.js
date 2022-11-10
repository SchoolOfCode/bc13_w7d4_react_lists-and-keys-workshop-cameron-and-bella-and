import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return <main id="main"> 
   {posts.map((post)=>{
  return <Post key={post.postId}  text = {posts.text}/> 
 } )} </main>;
}

export default Main;

