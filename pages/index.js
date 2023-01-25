import Link from 'next/link';
import Guitar from '@/components/guitar';
import Post from '@/components/post';
import Layout from '@/components/layout';
import styles from '@/styles/grid.module.css';

export const getStaticProps = async () => {
  const urlGuitars = `${process.env.API_URL}/guitars?populate=image`;
  const urlPosts = `${process.env.API_URL}/posts?populate=image`;

  const [resGuitars, resPosts] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlPosts),
  ]);

  const [{ data: guitars }, { data: posts }] = await Promise.all([
    resGuitars.json(),
    resPosts.json(),
  ]);

  return {
    props: {
      guitars,
      posts,
    },
  };
};

export default function Home({ guitars, posts }) {
  return (
    <Layout title={'Inicio'} description={'Blog de música, venta de guitarras'}>
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.grid}>
          {guitars?.map((guitar) => (
            <Guitar guitar={guitar.attributes} key={guitar.id} />
          ))}
        </div>
      </main>

      <section className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.grid}>
          {posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
