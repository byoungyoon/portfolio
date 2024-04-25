import CustomModal from '@/app/(sakura)/@modal/(.)i/[project]/_component/CustomModal';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return <CustomModal>{children}</CustomModal>;
}
