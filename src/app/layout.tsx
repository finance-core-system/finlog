import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import '@/styles/typography.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://finance-core-system.github.io/finlog'),
  title: {
    default: 'FINLOG · 금융 도메인 학습 블로그',
    template: '%s · FINLOG',
  },
  description: '금융 도메인의 개념과 시스템 흐름을 이해하고 정리하는 블로그',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
