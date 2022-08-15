import { faker } from '@faker-js/faker';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PaginationItem from '~/components/PaginationItem';
import SearchIcon from '~icons/search.svg';
import FilterIcon from '~icons/filter.svg';
import ChevronLeftIcon from '~icons/chevron-left.svg';
import ChevronRightIcon from '~icons/chevron-right.svg';

type Transaction = {
  id: string;
  source: string;
  name: string;
  email: string;
  amount: string;
  date: string;
  status: string;
};

type Props = {
  transactions: Transaction[];
  page: number;
  total: number;
  perPage: number;
  lastPage: number;
};

const Transactions: NextPage<Props> = ({ transactions, page, total, perPage, lastPage }) => {
  const router = useRouter();

  const renderRow = ({ id, source, name, email, amount, date, status }: Transaction) => (
    <tr className="hover:bg-gray-50" key={id}>
      <td>{id}</td>
      <td>{source}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{amount}</td>
      <td>{date}</td>
      <td>{status}</td>
    </tr>
  );

  const get = async ({ page, search }: { page?: number; search?: string }) => {
    await router.push({ pathname: router.pathname, query: { page, search } });
  };

  const paginate = (page: number) => get({ ...router.query, page });

  const search = (search?: string) => get({ search });

  const generateLinksSection = (page: number, pages: number, padding = 1) => {
    const links = [];
    const start = Math.max(1, page - padding);
    const end = Math.min(pages, page + padding);

    for (let i = start; i <= end; i++) {
      links.push(i);
    }

    return links;
  };

  const generateLinks = () => {
    const totalPages = Math.ceil(total / perPage);
    const midPage = Math.ceil(lastPage / 2);
    const links: (string | number)[] = generateLinksSection(1, lastPage, 2);
    const pageLinks = generateLinksSection(page, lastPage);
    const midLinks = generateLinksSection(midPage, lastPage);
    const endLinks = generateLinksSection(totalPages, lastPage, 2);

    const merge = (newLinks: number[]) => {
      for (let i = 0; i < newLinks.length; i++) {
        const link = newLinks[i];

        if (links.includes(link)) {
          continue;
        } else if (i === 0 && links[links.length - 1] !== link - 1) {
          links.push('...');
        }

        links.push(link);
      }
    };

    if (page > midPage) {
      merge(midLinks);
      merge(pageLinks);
    } else {
      merge(pageLinks);
      merge(midLinks);
    }

    merge(endLinks);

    return links;
  };

  const renderPaginationItem = (item: number | string, index: number) => {
    const isActive = item === page;
    const isEllipsis = item === '...';
    const onClick = () => void (isEllipsis ? undefined : paginate(item as number));
    return (
      <PaginationItem key={`${item}-${index}`} onClick={onClick} active={isActive}>
        {item}
      </PaginationItem>
    );
  };

  console.log({ transactions });

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

        <div className="flex flex-col items-center gap-2 px-4 py-2 md:flex-row md:justify-between">
          <div className="relative">
            <input
              type="text"
              onChange={e => void search(e.target?.value)}
              className="rounded-lg border border-gray-100 py-2.5 pl-3 pr-12 font-sans-alt text-sm placeholder:text-gray-700"
              placeholder="Search"
            />
            <SearchIcon className="absolute right-3 top-0 h-full w-6" />
          </div>

          <div className="flex items-center justify-between gap-4">
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
            <tbody className="font-sans-alt text-sm">{transactions.map(renderRow)}</tbody>
          </table>
        </div>

        <div className="flex justify-end p-4">
          <div className="flex items-center overflow-hidden rounded-md border border-gray-100">
            <PaginationItem onClick={() => void paginate(page !== 1 ? page - 1 : 1)}>
              <ChevronLeftIcon className="h-4 w-4" />
            </PaginationItem>
            {generateLinks().map(renderPaginationItem)}
            <PaginationItem onClick={() => void paginate(page !== lastPage ? page + 1 : lastPage)}>
              <ChevronRightIcon className="h-4 w-4" />
            </PaginationItem>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;

const formatDate = (date: Date) => {
  return date
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    .replace(/\//g, '.');
};

const allTransactions = Array.from({ length: 100 }).map(() => ({
  id: faker.helpers.replaceSymbols('??###??????######'),
  source: faker.helpers.arrayElement(['GTB', 'UBA', 'FBN', 'ECO', 'ABNG']),
  name: faker.name.fullName(),
  email: faker.internet.email(),
  amount: faker.finance.amount(50, 5000, 2, '$', true),
  date: formatDate(faker.date.recent()),
  status: faker.helpers.arrayElement(['Pending', 'Completed', 'Failed']),
}));

const PER_PAGE = 5;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getServerSideProps: GetServerSideProps<Props> = context => {
  const page = Number(context.query.page ?? 1);
  const search = (context.query.search as string) ?? '';
  const start = (page - 1) * PER_PAGE;
  const end = page * PER_PAGE;
  let transactions = allTransactions;

  if (search) {
    transactions = allTransactions.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  const total = transactions.length;

  transactions = transactions.slice(start, end);
  return {
    props: { transactions, page, total, perPage: PER_PAGE, lastPage: Math.ceil(total / PER_PAGE) },
  };
};
