import React from 'react';

import './index.css';

import samplePosts from '../../libs/data';

function Post(props) {
  return <article > 
   <h1 text = {props.postId} > {props.text}</h1></article>;
}

export default Post;

// {postId, title, date, author, text, highlights, image}
// props.title, props.date, props.author, props.text, props.highlights, props.image