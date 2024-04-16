'use client';

import { ReactNode } from 'react';
import { Sakura } from '@byoungyoon/by-asset';

type Props = {
  children: ReactNode;
  total: number;
};

export default function CustomSakura({ children, total }: Props) {
  return <Sakura total={total}>{children}</Sakura>;
}
