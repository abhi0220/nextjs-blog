import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '/Users/abhi/Documents/daily_cal/week1/nextjs-blog/components/layout.js';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  );
}