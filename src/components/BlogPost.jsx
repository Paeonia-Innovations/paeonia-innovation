import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { WP_API } from "../config/wordpress";

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${WP_API}/posts?slug=${slug}&_embed`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch post");
        return res.json();
      })
      .then((data) => {
        if (data.length === 0) throw new Error("Post not found");
        setPost(data[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  return (
    <div id="blogPostPage">
      <div className="blog-post-wrapper">
        <Link to="/blog" className="blog-back-link">
          ← Back to Blog
        </Link>

        {loading && <p className="blog-state-msg">Loading…</p>}
        {error && (
          <p className="blog-state-msg blog-state-error">{error}</p>
        )}

        {!loading && !error && post && (
          <article className="blog-post-article">
            <h1
              className="blog-post-title"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            <div className="blog-post-meta">
              <span>{formatDate(post.date)}</span>
              {post._embedded?.author?.[0]?.name && (
                <>
                  <span className="blog-post-meta-sep">·</span>
                  <span>{post._embedded.author[0].name}</span>
                </>
              )}
            </div>

            {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
              <div className="blog-post-img-wrap">
                <img
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post.title.rendered}
                  className="blog-post-img"
                />
              </div>
            )}

            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </article>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
