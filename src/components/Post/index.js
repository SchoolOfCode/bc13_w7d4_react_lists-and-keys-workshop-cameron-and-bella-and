import React from 'react';

import './index.css';

import samplePosts from '../../libs/data';

function Post(props, index) {
  return <article >
  <img alt ={props.alt} src ={props.img} style = {{height:200}}></img>
   <h1 key = {props.postId} > {props.title}  </h1>
   <h2 className='author'> {props.author}</h2>
   <h3 className='date'> {props.date} </h3>
    <p className='text'> {props.text}</p>
    {props.highlights.map((highlight)=>
    <li key = {highlight.indexOf()}>{highlight}</li> )}
   </article>;
}

export default Post;

// {postId, title, date, author, text, highlights, image}
// props.title, props.date, props.author, props.text, props.highlights, props.image