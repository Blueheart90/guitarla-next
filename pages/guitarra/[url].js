import Image from 'next/image';
import styles from '@/styles/guitarras.module.css';
import Layout from '@/components/layout';

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
// export const getServerSideProps = async ({ query: { url } }) => {
//   const res = await fetch(
//     `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
//   );
//   const { data: guitar } = await res.json();

//   return {
//     props: { guitar },
//   };
// };

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}/guitars`);

  const { data } = await res.json();

  const paths = data.map((guitar) => ({
    params: {
      url: guitar.attributes.url,
    },
  }));

  console.log(paths);
  return {
    paths,
    fallback: false, // cuando no encuentre una guitarra nos dara un error 404
  };
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async ({ params: { url } }) => {
  const res = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
  );
  const { data: guitar } = await res.json();

  return {
    props: { guitar },
  };
};

function Guitarra({ guitar }) {
  const { name, description, price, image } = guitar[0].attributes;
  return (
    <Layout title={`Guitarra ${name}`}>
      <div className={styles.guitarra}>
        <Image
          src={image.data.attributes.url}
          alt={`Imagen de la guitarra ${name}`}
          width={600}
          height={400}
        />
        <div className={styles.contenido}>
          <h3>{name}</h3>
          <p className={styles.descripcion}>{description}</p>
          <p className={styles.precio}>${price}</p>
          <form onSubmit={'handleSubmit'} className="formulario">
            <label htmlFor="count">Cantidad</label>
            <select
              name="count"
              id="count"
              onChange={(e) => {
                setCount(+e.target.value);
              }}
            >
              <option value="">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Guitarra;
