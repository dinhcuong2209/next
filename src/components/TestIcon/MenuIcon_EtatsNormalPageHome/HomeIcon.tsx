import { memo, SVGProps } from 'react';

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14 13.3331C14 13.7013 13.7015 13.9998 13.3333 13.9998H2.66667C2.29848 13.9998 2 13.7013 2 13.3331V6.32588C2 6.12015 2.09498 5.92595 2.25737 5.79965L7.59073 1.6515C7.83147 1.46426 8.16853 1.46426 8.40927 1.6515L13.7426 5.79965C13.905 5.92595 14 6.12015 14 6.32588V13.3331ZM12.6667 12.6665V6.65194L8 3.02231L3.33333 6.65194V12.6665H12.6667Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(HomeIcon);
export { Memo as HomeIcon };
