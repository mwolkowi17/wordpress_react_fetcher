//import React from 'react';
import { useQuery } from "apollo/client";
import { GET_POSTS } from '../graphql/queries';

const PostList = () => {
    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return <p>Loading…</p>;
    if (error) return <p>Error</p>;

    return (
        <div>
            {data.posts.nodes.map(({ id, title, content }) => (
                <div key={id}>
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;

