import { memo, SVGProps } from 'react';

const FrameIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.33659 3.33529H7.3366V9.33527H5.33659V11.3353H4.00325V9.33527H2.00325V3.33529H4.00325V1.33529H5.33659V3.33529ZM3.33659 4.66862V8.00193H6.00325V4.66862H3.33659ZM12.0033 6.6686H14.0033V12.6686H12.0033V14.6686H10.6699V12.6686H8.66993V6.6686H10.6699V4.66862H12.0033V6.6686ZM10.0033 8.00193V11.3353H12.6699V8.00193H10.0033Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(FrameIcon3);
export { Memo as FrameIcon3 };
