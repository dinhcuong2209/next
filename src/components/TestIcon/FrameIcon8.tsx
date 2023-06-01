import { memo, SVGProps } from 'react';

const FrameIcon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.0033 4.66667H14.0033C14.3715 4.66667 14.6699 4.96515 14.6699 5.33333V13.3333C14.6699 13.7015 14.3715 14 14.0033 14H2.00325C1.63507 14 1.33659 13.7015 1.33659 13.3333V2.66667C1.33659 2.29848 1.63507 2 2.00325 2H12.0033V4.66667ZM2.66992 6V12.6667H13.3366V6H2.66992ZM2.66992 3.33333V4.66667H10.6699V3.33333H2.66992ZM10.0033 8.66667H12.0033V10H10.0033V8.66667Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(FrameIcon8);
export { Memo as FrameIcon8 };
