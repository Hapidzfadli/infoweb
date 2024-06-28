import Image from "next/image";
import Head from 'next/head'
import { websites } from "../constant";
export default function Home() {
  return (
    <div className="flex text-black bg-white flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Kiosfilm Update</title>
        <meta name="description" content="Info URL Update Website Kiosfilm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">
          INFO URL UPDATE WEBSITE Kiosfilm21, Downmovie21, Pusatfilm21, Lk21, Indoseries21
        </h1>
        <p className="mt-4 text-xl">
          Halaman Ini Hanya Digunakan Sebagai Info Live Update Alamat Website Kiosfilm21
        </p>
        <p className="mt-2 text-lg">
          Silahkan klik link dibawah ini
        </p>
        <div className="mt-4">
          {websites.map((site, index) => (
            <div key={index} className="mt-2">
              <a href={site.url} className="text-blue-500 text-lg underline">
                {site.name}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xl">
          Hapus Cache atau Refresh Browser Kamu Jika Masih Nyasar Ke alamat Lama
        </p>
      </main>
    </div>
  );
}
