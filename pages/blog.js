import Layout from '@/components/layout';
import Post from '@/components/post';
import styles from '@/styles/grid.module.css';

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/posts?populate=image`);
  const { data: posts } = await response.json();
  return {
    props: { posts },
  };
}

function Blog({ posts }) {
  return (
    <Layout
      title={'Blog'}
      description={'Blog de música, venta de guitarras, consejos, GuitarLA'}
    >
      <main className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.grid}>
          {posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Blog;
