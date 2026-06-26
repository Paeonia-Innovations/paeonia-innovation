import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WP_API } from "../config/wordpress";

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${WP_API}/posts?_embed&per_page=12&orderby=date&order=desc`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="blogPage">
      {/* Hero */}
      <div className="blog-hero">
        <div className="blog-hero-inner">
          <span className="ue-eyebrow">Insights & Updates</span>
          <h1 className="ue-title">Blog</h1>
          <p className="ue-desc">
            The latest news, research insights, and product updates from
            Paeonia Innovations.
          </p>
        </div>
        <div className="ue-hero-line" />
      </div>

      {/* Content */}
      <div className="blog-grid-wrapper">
        {loading && (
          <p className="blog-state-msg">Loading posts…</p>
        )}
        {error && (
          <p className="blog-state-msg blog-state-error">
            Could not load posts. Please check the WordPress URL in config.
          </p>
        )}
        {!loading && !error && posts.length === 0 && (
          <p className="blog-state-msg">No posts published yet.</p>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="blog-grid">
            {posts.map((post) => {
              const featuredImg =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
              const excerpt = post.excerpt?.rendered
                ?.replace(/<[^>]+>/g, "")
                .slice(0, 160)
                .trim();

              return (
                <Link
                  to={`/blog/${post.slug}`}
                  className="blog-card"
                  key={post.id}
                >
                  {featuredImg && (
                    <div className="blog-card-img-wrap">
                      <img
                        src={featuredImg}
                        alt={post.title.rendered}
                        className="blog-card-img"
                      />
                    </div>
                  )}
                  <div className="blog-card-body">
                    <span className="blog-card-date">
                      {formatDate(post.date)}
                    </span>
                    <h2
                      className="blog-card-title"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    {excerpt && (
                      <p className="blog-card-excerpt">{excerpt}…</p>
                    )}
                    <span className="blog-card-read">Read more →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
