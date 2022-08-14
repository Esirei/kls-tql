import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ChevronDownIcon from '~icons/chevron-down.svg';
import ArrowDownIcon from '~icons/arrow-down.svg';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-xl font-medium leading-8">Sales overview</h1>

      <div className="mt-4 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="h-60 rounded-lg border border-black p-6"></div>
        <div className="h-60 rounded-lg border border-black bg-black p-6 text-white"></div>
        <div className="h-60 rounded-lg border border-black p-6"></div>
        <div className="h-60 rounded-lg border border-black p-6"></div>
      </div>

      <div className="mt-8 flex items-center justify-between xl:mr-72">
        <div className="flex items-center gap-2.5">
          <h2 className="text-xl font-medium leading-8">Sales</h2>

          <div className="h-6 w-px bg-gray-100"></div>

          <div className="flex items-center gap-6 font-sans-alt text-sm font-semibold">
            <span className="text-primary">7 days</span>
            <span>30 days</span>

            <button className="inline-flex h-10 items-center gap-2.5 rounded-md border border-black py-3 px-4">
              <span className="font-sans-alt text-sm font-medium">USD</span>
              <ChevronDownIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        <button className="inline-flex h-10 items-center gap-2.5 rounded-md border border-black py-3 px-4 xl:mr-6">
          <ArrowDownIcon className="h-4 w-4" />
          <span className="font-sans-alt text-xs font-semibold">Download report</span>
        </button>
      </div>

      <div className="mt-4 flex flex-col gap-6 xl:flex-row">
        <div className="h-72 grow rounded-lg border border-black p-6"></div>
        <div className="h-72 w-72 rounded-lg border border-black bg-primary p-6"></div>
      </div>
    </>
  );
};

export default Home;
