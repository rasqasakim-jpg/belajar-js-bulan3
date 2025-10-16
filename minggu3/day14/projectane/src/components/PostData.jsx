import React from "react";
import useFetch from "../hooks/useFetch";

export default function PostData() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts/1");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>title: {data?.title}</h2>
      <p>Body: {data?.body}</p>
    </div>
  );
}
