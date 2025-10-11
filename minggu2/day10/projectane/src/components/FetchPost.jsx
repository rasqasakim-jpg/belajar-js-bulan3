import React, {useState, useEffect} from "react";

export default function FetchPost() {
    const [post, setPost] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) => {
            setPost(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Terjadi Error: ",error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return(
        <div>
            <h2>Data dari API</h2>
            {post ? (
                <div>
                 <h3>{post.title}</h3>
                 <p>{post.body}</p>
                </div>
            ):(
                <p>Data tidak ditemukan</p>
            )}
        </div>
    );
}