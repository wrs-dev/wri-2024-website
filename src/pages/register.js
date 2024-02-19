import Head from 'next/head';
import Registration from '@/components/registration';
import CventWidget from '@/components/CventWidget';
import Banner2 from '@/components/banner2';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="bg-white">
      <Head>
        <title>WRI 2024 || Register</title>
      </Head>
      <Banner2 />
      <CventWidget className="cvt-embed" />
    </main>
  );
}
