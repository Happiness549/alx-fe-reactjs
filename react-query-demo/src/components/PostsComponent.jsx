import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
};

const PostsComponent = () => {
    const {data, isLoading, refetch, error} = useQuery('posts', fetchPosts, {
         cacheTime: 1000 * 60 * 5, // 5 minutes
         staleTime: 1000 * 60, // 1 minute
          refetchOnWindowFocus: false,
          keepPreviousData: true,
    });
    

    if(isLoading) return <div>Loading posts</div>;
    if(isError) return <div>Eroor fetching posts</div>

    return(
        <div>
            <h2>Posts</h2>
            <button onClick={() => refetch()}>Refresh posts</button>
            <ul>
                {data.map((posts) => (
                    <li key={posts.id}>
                        <strong>{posts.title}</strong>
                        <p>{posts.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;