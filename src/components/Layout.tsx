import { FC, PropsWithChildren } from 'react';
import { Sidebar } from '~/components/Sidebar';
import ChevronDownIcon from '~icons/chevron-down.svg';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const date = () => {
    return new Date().toLocaleDateString('en-NG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="flex min-h-screen bg-white text-black">
      <Sidebar />

      <div className="flex h-screen grow flex-col overflow-hidden">
        <header className="flex items-center justify-between border-b border-gray-100 px-8 pb-4 pt-12 font-sans-alt font-medium">
          Today: {date()}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="inline-flex h-6 w-11 cursor-pointer justify-end rounded-full bg-primary p-0.5">
                <div className="h-5 w-5 rounded-full bg-white" />
              </div>

              <span className="text-sm font-semibold">Live</span>
            </div>

            <div className="h-6 w-px bg-gray-100" />

            <div className="flex items-center gap-2">
              <span className="font-sans">Welcome back, Ada!</span>
              <ChevronDownIcon className="h-6 w-6" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">En</span>
              <ChevronDownIcon className="h-6 w-6" />
            </div>
          </div>
        </header>

        <main className="h-full overflow-y-scroll px-8 py-20">{children}</main>
      </div>
    </div>
  );
};
