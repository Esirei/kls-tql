import type { NextPage } from 'next';
import Head from 'next/head';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts';
import ChevronDownIcon from '~icons/chevron-down.svg';
import ArrowDownIcon from '~icons/arrow-down.svg';

const salesData = [
  {
    date: '20 Aug',
    amount: 2200,
  },
  {
    date: '21 Aug',
    amount: 2100,
  },
  {
    date: '22 Aug',
    amount: 1500,
  },
  {
    date: '23 Aug',
    amount: 4000,
  },
  {
    date: '24 Aug',
    amount: 2400,
  },
  {
    date: '25 Aug',
    amount: 2500,
  },
];

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
          <div className="relative grow">
            <ResponsiveContainer>
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="15%" stopColor="#EF2C5A" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#EF2C5A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey={'amount'}
                  type={'linear'}
                  stroke={'#EF2C5A'}
                  fill={'url(#colorSales)'}
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="font-sans-alt text-sm">This week</p>
          <p className="text-xl font-medium">₦1,652.50</p>
        </div>

        <div className="flex h-60 flex-col gap-1 rounded-lg border border-black p-6">
          <p className="font-sans-alt text-sm">24 Aug - 01 Sep 21</p>
          <div className="relative grow">
            <ResponsiveContainer>
              <AreaChart data={salesData}>
                <Area
                  dataKey={'amount'}
                  type={'linear'}
                  stroke={'#EF2C5A'}
                  fill={'url(#colorSales)'}
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="font-sans-alt text-sm">This month</p>
          <p className="text-xl font-medium">₦1,652.50</p>
        </div>

        <div className="flex h-60 flex-col gap-1 rounded-lg border border-black p-6">
          <p className="font-sans-alt text-sm">24 Aug - 01 Sep 21</p>
          <div className="relative grow">
            <ResponsiveContainer>
              <AreaChart data={salesData}>
                <Area
                  dataKey={'amount'}
                  type={'linear'}
                  stroke={'#EF2C5A'}
                  fill={'url(#colorSales)'}
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="font-sans-alt text-sm">Last month</p>
          <p className="text-xl font-medium">₦1,652.50</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-2 lg:flex-row xl:mr-72">
        <div className="flex items-center gap-2.5">
          <h2 className="text-xl font-medium leading-8">Sales</h2>

          <div className="h-6 w-px bg-gray-100"></div>

          <div className="flex items-center gap-6 font-sans-alt text-sm font-semibold">
            <span className="text-primary">7 days</span>
            <span>30 days</span>

            <button className="hidden h-10 items-center gap-2.5 rounded-md border border-black py-3 px-4 lg:inline-flex">
              <span className="font-sans-alt text-sm font-medium">USD</span>
              <ChevronDownIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <button className="inline-flex h-10 items-center gap-2.5 rounded-md border border-black py-3 px-4 lg:hidden">
            <span className="font-sans-alt text-sm font-medium">USD</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>

          <button className="inline-flex h-10 items-center gap-2.5 rounded-md border border-black py-3 px-4 xl:mr-6">
            <ArrowDownIcon className="h-4 w-4" />
            <span className="font-sans-alt text-xs font-semibold">Download report</span>
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-6 xl:flex-row">
        <div className="h-72 grow rounded-lg border border-black p-6">
          <ResponsiveContainer>
            <AreaChart data={salesData}>
              <XAxis dataKey={'date'} axisLine={false} padding={{ left: 16, right: 16 }} />
              <YAxis axisLine={false} padding={{ top: 16, bottom: 16 }} />
              <CartesianGrid vertical={false} stroke={'#F1F1F1'} />
              <Area
                dataKey={'amount'}
                type={'linear'}
                stroke={'#EF2C5A'}
                fill={'url(#colorSales)'}
                fillOpacity={1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="flex h-72 w-72 shrink-0 flex-col items-start justify-between rounded-lg bg-primary bg-wire p-6 text-white">
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
