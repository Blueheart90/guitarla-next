import Link from 'next/link';
import Layout from '@/components/layout';

function Page404() {
  return (
    <Layout title="Pagína no encontrada">
      <p className="error">Pagína no encontrada</p>
      <Link href="/" className="error-enlace">
        Ir al inicio
      </Link>
    </Layout>
  );
}

export default Page404;
