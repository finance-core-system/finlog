import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About',
};

const contributors = [
  {
    name: '김경규',
    role: 'Author',
    github: 'https://github.com/KoungQ',
    birth: '2000.07.09',
    age: 27,
    school: '가천대학교 소프트웨어전공 4학년 재학',
    stack: ['Java', 'Spring', 'MySQL', 'PostgreSQL', 'Redis', 'Docker'],
    email: 'guu119@naver.com',
  },
  {
    name: '김준혁',
    role: 'Author',
    github: 'https://github.com/jkim1202',
    birth: null,
    age: 27,
    school: '가천대학교 소프트웨어전공 3학년 재학',
    stack: ['Java', 'Spring', 'MySQL'],
    email: null,
  },
];

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About</h1>
      <div className="prose">
        <p>
          <strong>FINLOG</strong>는 금융 도메인의 개념과 시스템 흐름을 이해하고
          정리하기 위한 학습 블로그입니다.<br/>
        복잡한 금융 시스템을 개발자의 시선으로 분해하고 기록합니다.</p>
      </div>

      <section className={styles.contributorsSection}>
        <h2 className={styles.contributorsTitle}>Authors</h2>
        <ul className={styles.contributorsList}>
          {contributors.map((c) => (
            <li key={c.github} className={styles.contributorCard}>
              <div className={styles.cardTop}>
                <img
                  src={`${c.github}.png?size=128`}
                  alt={c.name}
                  className={styles.avatar}
                  width={64}
                  height={64}
                />
                <div className={styles.cardHeader}>
                  <span className={styles.contributorName}>{c.name}</span>
                  <span className={styles.contributorRole}>{c.role}</span>
                  <div className={styles.links}>
                    <a
                      href={c.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.contributorLink}
                    >
                      GitHub
                    </a>
                    {c.email && (
                      <a href={`mailto:${c.email}`} className={styles.contributorLink}>
                        Email
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <dl className={styles.profile}>
                <div className={styles.profileRow}>
                  <dt>나이</dt>
                  <dd>{c.age && c.birth ? `${c.age}세 (${c.birth})` : '-'}</dd>
                </div>
                <div className={styles.profileRow}>
                  <dt>학교</dt>
                  <dd>{c.school ?? '-'}</dd>
                </div>
                <div className={styles.profileRow}>
                  <dt>기술</dt>
                  <dd className={styles.stackList}>
                    {c.stack.length > 0
                      ? c.stack.map((s) => (
                          <span key={s} className={styles.stackBadge}>{s}</span>
                        ))
                      : '-'}
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
