import Guitar from '@/components/guitar';
import Post from '@/components/post';
import Layout from '@/components/layout';
import Course from '@/components/course';
import styles from '@/styles/grid.module.css';

export const getStaticProps = async () => {
  const urlGuitars = `${process.env.API_URL}/guitars?populate=image`;
  const urlPosts = `${process.env.API_URL}/posts?populate=image`;
  const urlCourse = `${process.env.API_URL}/course?populate=image`;

  const [resGuitars, resPosts, resCourse] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlPosts),
    fetch(urlCourse),
  ]);

  const [{ data: guitars }, { data: posts }, { data: course }] =
    await Promise.all([resGuitars.json(), resPosts.json(), resCourse.json()]);

  return {
    props: {
      guitars,
      posts,
      course,
    },
  };
};

export default function Home({ guitars, posts, course }) {
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
      <Course course={course.attributes} />
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
