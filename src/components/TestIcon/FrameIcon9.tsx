import { memo, SVGProps } from 'react';

const FrameIcon9 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8 14.6667C4.3181 14.6667 1.33334 11.6819 1.33334 8C1.33334 4.3181 4.3181 1.33333 8 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8C14.6667 11.6819 11.6819 14.6667 8 14.6667ZM7.33507 10.6667L12.0491 5.95262L11.1063 5.00981L7.33507 8.78107L5.44948 6.8954L4.50666 7.83827L7.33507 10.6667Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(FrameIcon9);
export { Memo as FrameIcon9 };
