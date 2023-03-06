import Layout from '/Users/abhi/Documents/daily_cal/week1/nextjs-blog/components/layout.js';

import { getAllPostIds, getPostData } from '/Users/abhi/Documents/daily_cal/week1/nextjs-blog/lib/posts.js';

import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import Date from '/Users/abhi/Documents/daily_cal/week1/nextjs-blog/components/date.js';

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}



export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}


