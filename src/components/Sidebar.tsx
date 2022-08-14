import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useRef } from 'react';
import { c } from '~/helpers/classNames';
import Logo from '~icons/logo.svg';
import LogoCompact from '~icons/logo-compact.svg';
import DashboardIcon from '~icons/dashboard.svg';
import BalanceIcon from '~icons/balances.svg';
import TransactionIcon from '~icons/transaction.svg';
import AnalyticsIcon from '~icons/analytics.svg';
import MarketingIcon from '~icons/marketing.svg';
import ExchangeIcon from '~icons/exchange.svg';
import CheckoutIcon from '~icons/checkout.svg';
import LinksIcon from '~icons/links.svg';
import KlashaWireIcon from '~icons/klasha-wire.svg';
import ChevronLeftIcon from '~icons/chevron-left.svg';

type Link = {
  Icon: FC<{ className?: string }>;
  href: string;
  title: string;
};

type LinksSection = {
  title: string;
  links: Link[];
};

const routes: LinksSection[] = [
  {
    title: 'Main pages',
    links: [
      /* eslint-disable @typescript-eslint/no-unsafe-assignment */
      { Icon: DashboardIcon, title: 'Dashboard', href: '/' },
      { Icon: BalanceIcon, title: 'Balances', href: '#balances' },
      { Icon: TransactionIcon, title: 'Transactions', href: '/transactions' },
      { Icon: AnalyticsIcon, title: 'Analytics', href: '#analytics' },
      { Icon: MarketingIcon, title: 'Marketing', href: '#marketing' },
      { Icon: ExchangeIcon, title: 'Exchange rates', href: '#exchange-rates' },
    ],
  },
  {
    title: 'Accept payments',
    links: [
      { Icon: CheckoutIcon, title: 'KlashaCheckout', href: '#klasha-checkout' },
      { Icon: LinksIcon, title: 'Payment Links', href: '#payment-links' },
    ],
  },
  {
    title: 'Send payments',
    links: [{ Icon: KlashaWireIcon, title: 'KlashaWire', href: '#klasha-wire' }],
    /* eslint-enable @typescript-eslint/no-unsafe-assignment */
  },
];

export const Sidebar: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggle = () => {
    ref.current?.classList.toggle('compact');
  };

  const active = (href: string) => href === router.pathname;

  const renderLink = ({ Icon, title, href }: Link) => (
    <Link href={href} key={href}>
      <a
        className={c('inline-flex items-center gap-2 hover:text-primary compact:px-2', {
          'font-semibold text-primary': active(href),
        })}
        href={href}>
        <Icon className="h-6 w-6" />
        <span className="compact:hidden">{title}</span>
      </a>
    </Link>
  );

  const renderLinkSection = ({ title, links }: LinksSection) => (
    <div className="flex flex-col items-start gap-4" key={title}>
      <p className="font-sans font-medium text-gray-400 compact:hidden">{title}</p>
      <div className="hidden h-px bg-gray-300 compact:block" />
      {links.map(renderLink)}
    </div>
  );

  return (
    <div
      ref={ref}
      className="flex h-screen w-72 flex-col items-start gap-8 bg-secondary p-12 font-sans-alt transition-all compact:w-16 compact:px-3">
      <Link href="#">
        <>
          <Logo className="block h-6 compact:hidden" />
          <LogoCompact className="hidden h-6 px-3 compact:block" />
        </>
      </Link>

      <nav className="flex w-full grow flex-col gap-8 font-sans-alt">
        {routes.map(renderLinkSection)}
      </nav>

      <button
        onClick={toggle}
        className="inline-flex h-10 items-center gap-2.5 rounded-md border border-black py-3 px-4 transition-all compact:p-3">
        <ChevronLeftIcon className="h-4 w-4 transition-all compact:rotate-180" />
        <span className="font-sans-alt text-xs font-semibold transition-all compact:hidden">
          Hide panel
        </span>
      </button>
    </div>
  );
};
