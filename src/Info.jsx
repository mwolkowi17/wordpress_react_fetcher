import axios from 'axios';
import { useEffect, useState } from 'react';

// Make a request for a user with a given ID

const baseURL = 'http://localhost/roboczy1/wp-json/wp/v2/posts/1'
export default function Info() {

    const [post, setPost] = useState(null);

    useEffect(() => {
        async function getInfo() {
            await axios.get(baseURL).then((response) => {
                setPost(response.data);
            })
        }
        getInfo()
    }, [])
    //console.log(post)
    if (!post) return null;
    return (
        <div>
            <h1>{post.id}</h1>
            <p>{post.content.rendered}</p>

        </div>
    );

}