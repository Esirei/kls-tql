import { NextPage } from 'next';
import Head from 'next/head';
import SearchIcon from '~icons/search.svg';
import FilterIcon from '~icons/filter.svg';

const Transactions: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="divide-y divide-gray-100 rounded-lg border border-gray-100">
        <div className="p-4 pb-6">
          <h1 className="text-xl font-medium leading-6">Transaction history</h1>
        </div>

        <div className="flex items-center justify-between px-4 py-2">
          <div className="relative">
            <input
              type="text"
              className="rounded-lg border border-gray-100 py-2.5 pl-3 pr-12 font-sans-alt text-sm placeholder:text-gray-700"
              placeholder="Search"
            />
            <SearchIcon className="absolute right-3 top-0 h-full w-6" />
          </div>

          <div className="flex items-center gap-4">
            <button className="inline-flex h-10 items-center gap-2.5 rounded-lg border border-black px-5">
              <span className="font-sans-alt text-xs font-semibold">Filter</span>
              <FilterIcon className="h-4 w-4" />
            </button>

            <button className="inline-flex h-10 items-center gap-2.5 rounded-lg border border-black px-5">
              <span className="font-sans-alt text-xs font-semibold">Export</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-scroll">
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Source</th>
                <th>Customer name</th>
                <th>Customer email</th>
                <th>Amount</th>
                <th>Request date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="font-sans-alt text-sm">
              <tr className="py-6 px-8 hover:bg-gray-50">
                <td>GB124QWERTY12346</td>
                <td>GTB</td>
                <td>Mike Owen</td>
                <td>0223337281</td>
                <td>$230.00</td>
                <td>24.08.2021</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-end p-4">
          <div className="flex items-center rounded-md border border-gray-100 p-3"></div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
