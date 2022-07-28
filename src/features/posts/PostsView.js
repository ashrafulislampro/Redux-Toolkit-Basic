import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./PostSlice";

const PostsView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div style={{ marginTop: "10px" }}>
      <h2>Post View</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {posts &&
          posts.map((post, index) => (
            <article key={index}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </article>
          ))}
      </section>
    </div>
  );
};

export default PostsView;
