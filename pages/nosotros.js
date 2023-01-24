import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/nosotros.module.css';
function Nosotros() {
  return (
    <>
      <Layout
        title={'Nosotros'}
        description={'Sobre nosotros, GuitarLA, tienda de música'}
      >
        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>
          <div className={styles.contenido}>
            <Image
              src="/img/nosotros.jpg"
              alt="Imagen sobre nosotros"
              width={1000}
              height={800}
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque vitae urna risus. Pellentesque luctus iaculis ex
                non commodo. Etiam aliquam volutpat odio, vel feugiat nunc
                ullamcorper in. Ut tempus augue elit, vel consequat nunc
                facilisis sit amet.
              </p>
              <p>
                Phasellus finibus purus at rhoncus consequat. Quisque ligula
                lacus, porta at purus viverra, consectetur gravida neque. Mauris
                tincidunt, ex consequat posuere vulputate, tellus lorem mollis
                lacus, sed mollis metus massa a mi. Nulla erat ante, malesuada
                non quam vulputate, fermentum efficitur leo. Aliquam erat
                volutpat. Ut justo magna, dignissim non arcu ut, volutpat
                interdum odio.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export default Nosotros;
