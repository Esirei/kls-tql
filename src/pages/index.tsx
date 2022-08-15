import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ChevronDownIcon from '~icons/chevron-down.svg';
import ArrowDownIcon from '~icons/arrow-down.svg';
import SalesChart from '~images/sales-chart.png';
import LastMonthChart from '~images/last-month-chart.png';
import ThisWeekChart from '~images/this-week-chart.png';
import ThisMonthChart from '~images/this-month-chart.png';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-xl font-medium leading-8">Sales overview</h1>

      <div className="mt-4 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="flex h-60 flex-col gap-1 rounded-lg border border-black p-6">
          <p className="font-sans-alt text-sm">Today&apos;s sales</p>
          <p className="text-xl font-medium">₦1,652.50</p>
        </div>
        <div className="flex h-60 flex-col gap-1 rounded-lg border border-black bg-black p-6 text-white">
          <p className="font-sans-alt text-sm">24 Aug - 01 Sep 21</p>
          <div className="grow">
            <Image src={ThisWeekChart} alt="Sales chart" layout="responsive" />
          </div>
          <p className="font-sans-alt text-sm">This week</p>
          <p className="text-xl font-medium">₦1,652.50</p>
        </div>
        <div className="flex h-60 flex-col gap-1 rounded-lg border border-black p-6">
          <p className="font-sans-alt text-sm">24 Aug - 01 Sep 21</p>
          <div className="grow">
            <Image src={ThisMonthChart} alt="Sales chart" layout="responsive" />
          </div>
          <p className="font-sans-alt text-sm">This month</p>
          <p className="text-xl font-medium">₦1,652.50</p>
        </div>
        <div className="flex h-60 flex-col gap-1 rounded-lg border border-black p-6">
          <p className="font-sans-alt text-sm">24 Aug - 01 Sep 21</p>
          <div className="grow">
            <Image src={LastMonthChart} alt="Sales chart" layout="responsive" />
          </div>
          <p className="font-sans-alt text-sm">Last month</p>
          <p className="text-xl font-medium">₦1,652.50</p>
        </div>
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
        <div className="h-72 grow rounded-lg border border-black p-6">
          <div className="relative h-full w-full">
            <Image src={SalesChart} alt="Sales chart" layout="fill" />
          </div>
        </div>

        <div className="flex h-72 w-72 flex-col items-start justify-between rounded-lg bg-primary bg-wire p-6 text-white">
          <p className="w-4/5 text-xl font-medium">
            KlashaWire - send money to businesses globally from Africa
          </p>

          <button className="rounded-md bg-black px-6 py-3 font-sans-alt text-sm font-semibold">
            Send a Wire
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
