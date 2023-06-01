import { memo, SVGProps } from 'react';

const FrameIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14 8.82813V13.3333H14.6667V14.6667H1.33333V13.3333H2V8.82813C1.19601 8.29 0.666666 7.37347 0.666666 6.33333C0.666666 5.78191 0.816286 5.25081 1.08881 4.79831L2.89687 1.66667C3.01595 1.4604 3.23604 1.33333 3.47421 1.33333H12.5258C12.7639 1.33333 12.9841 1.4604 13.1031 1.66667L14.905 4.78781C15.1837 5.25081 15.3333 5.78191 15.3333 6.33333C15.3333 7.37347 14.804 8.29 14 8.82813ZM12.6667 9.315C12.5572 9.32713 12.446 9.33333 12.3333 9.33333C11.4939 9.33333 10.7193 8.98533 10.1667 8.4088C9.61407 8.98533 8.8394 9.33333 8 9.33333C7.1606 9.33333 6.38593 8.98533 5.83333 8.4088C5.28073 8.98533 4.50607 9.33333 3.66667 9.33333C3.554 9.33333 3.44278 9.32713 3.33333 9.315V13.3333H12.6667V9.315ZM3.8591 2.66667L2.23732 5.47547C2.08273 5.73229 2 6.02593 2 6.33333C2 7.2538 2.74619 8 3.66667 8C4.35397 8 4.96311 7.5802 5.21453 6.953C5.43827 6.39482 6.2284 6.39482 6.45214 6.953C6.70353 7.5802 7.31267 8 8 8C8.68733 8 9.29647 7.5802 9.54787 6.953C9.7716 6.39482 10.5617 6.39482 10.7855 6.953C11.0369 7.5802 11.646 8 12.3333 8C13.2538 8 14 7.2538 14 6.33333C14 6.02593 13.9173 5.73229 13.7565 5.46497L12.1409 2.66667H3.8591Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(FrameIcon4);
export { Memo as FrameIcon4 };
