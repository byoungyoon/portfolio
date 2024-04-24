import CustomModal from '@/app/(sakura)/_component/CustomModal';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return <CustomModal>{children}</CustomModal>;
}
