import { FC, PropsWithChildren } from 'react';
import { c } from '~/helpers/classNames';

type Props = {
  active?: boolean;
};

const PaginationItem: FC<PropsWithChildren<Props>> = ({ children, active }) => (
  <div className="grid h-10 w-10 cursor-pointer place-items-center p-2 text-sm">
    <div
      className={c('grid h-6 w-6 place-items-center rounded-full font-semibold', {
        'bg-gray-200 text-black': active,
        'text-[#8F8F8F]': !active,
      })}>
      {children}
    </div>
  </div>
);

export default PaginationItem;
