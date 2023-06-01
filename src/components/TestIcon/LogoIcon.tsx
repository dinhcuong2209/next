import { memo, SVGProps } from 'react';

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={64} height={64} fill='white' />
    <path
      d='M32 19L19 35.4396L26.5581 45L32 38.119L37.4419 45L45 35.4396L32 19ZM29.8821 35.4396L26.5581 39.6393L23.234 35.4396L26.5581 31.2399L29.8821 35.4396ZM40.7642 35.4396L37.4401 39.6393L34.1161 35.4396L37.4365 31.2399L40.7624 35.4396H40.7642ZM35.3204 28.5622L32 32.7619L28.6796 28.5622L32 24.3625L35.3204 28.5622Z'
      fill='#1AA84A'
    />
  </svg>
);
const Memo = memo(LogoIcon);
export { Memo as LogoIcon };
