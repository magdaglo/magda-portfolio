// src/pages/Blog/Blog.jsx
import React from 'react';
import styles from './Blog.module.css';

function Blog() {
  // Docelowo tutaj pobierasz wpisy z bazy / plików / CMS lub wyświetlasz statyczne
  const posts = [
    {
      id: 1,
      title: 'Pierwszy wpis',
      date: '2025-03-01',
      content: 'Treść pierwszego wpisu...'
    },
    {
      id: 2,
      title: 'Drugi wpis',
      date: '2025-03-05',
      content: 'Treść drugiego wpisu...'
    }
  ];

  return (
    <section className={styles.blogSection}>
      <h1>Blog</h1>
      <div className={styles.posts}>
        {posts.map(post => (
          <article key={post.id} className={styles.post}>
            <h2>{post.title}</h2>
            <p className={styles.date}>{post.date}</p>
            <p>{post.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;
