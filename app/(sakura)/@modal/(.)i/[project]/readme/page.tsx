import CustomMarkdown from '@/app/(sakura)/@modal/(.)i/[project]/_component/CustomMarkdown';
import { data } from '@/app/_data/readmeData';

type Props = {
  project: string;
};

export default function Page({ params }: { params: Props }) {
  const markdownContent = data[params.project];

  return (
    <div>
      <CustomMarkdown markdown={markdownContent} />
    </div>
  );
}
