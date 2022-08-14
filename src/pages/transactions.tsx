import { faker } from '@faker-js/faker';
import { NextPage } from 'next';
import Head from 'next/head';
import SearchIcon from '~icons/search.svg';
import FilterIcon from '~icons/filter.svg';

type Row = {
  id: string;
  source: string;
  name: string;
  email: string;
  amount: string;
  date: Date;
  status: string;
};

const data = () => {
  return Array.from({ length: 4 }).map(() => ({
    id: faker.helpers.replaceSymbols('??###??????######'),
    source: faker.helpers.arrayElement(['GTB', 'UBA', 'FBN', 'ECO', 'ABNG']),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    amount: faker.finance.amount(50, 5000, 2, '$', true),
    date: faker.date.recent(),
    status: faker.helpers.arrayElement(['Pending', 'Completed', 'Failed']),
  }));
};

const formatDate = (date: Date) => {
  return date
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    .replace(/\//g, '.');
};

const Transactions: NextPage = () => {
  const renderRow = ({ id, source, name, email, amount, date, status }: Row) => (
    <tr className="hover:bg-gray-50" key={id}>
      <td>{id}</td>
      <td>{source}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{amount}</td>
      <td>{formatDate(date)}</td>
      <td>{status}</td>
    </tr>
  );

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

        <div className="overflow-x-auto">
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
            <tbody className="font-sans-alt text-sm">{data().map(renderRow)}</tbody>
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
