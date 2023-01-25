import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/blog.module.css';
import { dateFormated } from '@/utils/helpers';

function Post({ post }) {
  const { title, content, image, url, publishedAt } = post.attributes;
  return (
    <article className="post">
      <Image
        src={image.data.attributes.formats.small.url}
        alt={`Imagen del post ${title}`}
        width={600}
        height={400}
        priority
      />
      <div className={styles.contenido}>
        <h3>{title}</h3>
        <p className={styles.fecha}>{dateFormated(publishedAt)}</p>
        <p className={styles.resumen}>{content}</p>
        <Link className={styles.enlace} href={`/blog/${url}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
}

export default Post;
