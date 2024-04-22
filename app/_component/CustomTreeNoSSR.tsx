import dynamic from 'next/dynamic';

export const CustomTreeNoSSR = dynamic(() => import('./CustomTree'), { ssr: false });
