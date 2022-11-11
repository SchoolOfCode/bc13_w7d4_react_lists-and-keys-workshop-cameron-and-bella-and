import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return <main id="main">
   {posts.map((post)=>{
  return <Post key={post.postId}  text = {post.text} title = {post.title}  date = {post.date} author = {post.author}
highlights = {post.highlights} img = {post.image.link} alt = {post.image.alt}
  />} )} </main>;
}

export default Main;

