import Layout from '@/components/layout';
import Guitar from '@/components/guitar';
import styles from '@/styles/grid.module.css';

// Consumir API de forma estatica. Todos los html files se crean en el build
// export async function getStaticProps() {
//   const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);
//   const { data: guitars } = await response.json();
//   console.log(guitars);
//   return {
//     props: { guitars },
//   };
// }

// Consumir API de forma dinamica. Cada vez estará realizando las concultas
export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);
  const { data: guitars } = await response.json();

  return {
    props: { guitars },
  };
}

function Tienda({ guitars }) {
  return (
    <>
      <Layout
        title={'Tienda Virtual'}
        description={
          'Tienda Virtual, venta de guitarras, instrumentos, GuitarLA'
        }
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>
          <div className={styles.grid}>
            {guitars?.map((guitar) => (
              <Guitar guitar={guitar.attributes} key={guitar.id} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
}

export default Tienda;
