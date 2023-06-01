import { memo, SVGProps } from 'react';

const FrameIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8 10.0004L5.17155 7.172L6.11436 6.22917L8 8.1148L9.8856 6.22917L10.8284 7.172L8 10.0004Z'
      fill='#73848C'
    />
  </svg>
);
const Memo = memo(FrameIcon2);
export { Memo as FrameIcon2 };
