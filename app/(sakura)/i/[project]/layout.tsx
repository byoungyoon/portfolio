import { ReactNode } from 'react';
import CustomModal from '@/app/(sakura)/@modal/(.)i/[project]/_component/CustomModal';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return <CustomModal>{children}</CustomModal>;
}
