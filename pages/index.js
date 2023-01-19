import Link from 'next/link';
import Layout from '@/components/layout';
export default function Home() {
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de música, venta de guitarras'}
      >
        <h1>Hola mundo en Next</h1>

        <Link href="/nosotros">Nosotros</Link>
      </Layout>
    </>
  );
}
