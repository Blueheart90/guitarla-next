import Image from 'next/image';
import Layout from '@/components/layout';
import { dateFormated } from '@/utils/helpers';
import styles from '@/styles/blog.module.css';

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.API_URL}/posts`);
  const { data: posts } = await response.json();

  const paths = posts.map((post) => ({
    params: {
      slug: post.attributes.url,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${slug}&populate=image`
  );
  const { data: post } = await res.json();

  return {
    props: { post },
  };
}

function Posts({ post }) {
  const { title, content, publishedAt, image } = post[0].attributes;
  return (
    <Layout title={title}>
      <article className={` ${styles.post} ${styles['mt-3']}`}>
        <Image
          src={image.data.attributes.url}
          alt={`Imagen del post ${title}`}
          width={1000}
          height={400}
          priority
        />
        <div className={styles.contenido}>
          <h3>{title}</h3>
          <p className={styles.fecha}>{dateFormated(publishedAt)}</p>
          <p className={styles.texto}>{content}</p>
        </div>
      </article>
    </Layout>
  );
}

export default Posts;
