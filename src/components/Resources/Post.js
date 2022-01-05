import React from 'react';
import { useParams } from 'react-router-dom';


function Post({ posts }) {
    const { slug } = useParams();

    const post = posts.find((post) => post.slug === slug);

    return (
    <h1>{post.title}</h1>
    )
}

export default Post;