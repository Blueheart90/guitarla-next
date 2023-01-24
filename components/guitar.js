import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/guitarras.module.css';

function Guitar({ guitar }) {
  const { description, name, image, price, url } = guitar;

  return (
    <div className={styles.guitarra}>
      <Image
        src={image.data.attributes.formats.medium.url}
        alt={`Imagen de guitarra ${name}`}
        width={600}
        height={400}
      />
      <div className={styles.contenido}>
        <h3>{name}</h3>
        <p className={styles.descripcion}>{description}</p>
        <p className={styles.precio}>${price}</p>
        <Link className={styles.enlace} href={`/guitarra/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
}

export default Guitar;
