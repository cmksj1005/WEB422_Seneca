import { useState, useEffect } from 'react';

export default function Post(props) {
  const [post, setPost] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  return (
    <>
      <strong>User ID:</strong> {post?.userId}
      <br />
      <strong>Title:</strong> {post?.title}
      <br />
      <strong>Body:</strong> {post?.body}
      <br />
    </>
  );
}
