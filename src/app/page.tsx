import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import styles from './page.module.css';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>FINLOG</h1>
        <p className={styles.heroDesc}>
          금융 도메인의 개념과 시스템 흐름을 이해하고 정리하는 블로그
        </p>
      </section>

      {posts.length === 0 ? (
        <p className={styles.empty}>아직 포스트가 없습니다.</p>
      ) : (
        <div className={styles.grid}>
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      )}
    </div>
  );
}
