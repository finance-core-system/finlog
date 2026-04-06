import Link from 'next/link';
import styles from './PostCard.module.css';
import type { PostMeta } from '@/lib/posts';

export default function PostCard({ slug, title, date, excerpt, tags }: PostMeta) {
  return (
    <Link href={`/posts/${slug}`} className={styles.card}>
      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.excerpt}>{excerpt}</p>
      <time className={styles.date} dateTime={date}>
        {new Date(date).toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
    </Link>
  );
}
