import ReactMarkdown from 'react-markdown';
import { readFileSync } from 'fs';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { data } from '@/app/_data/projectsData';

type Props = {
  project: string;
};

export default function Page({ params }: { params: Props }) {
  const markdownContent = readFileSync(`app/_data/readme/${params.project}.md`, 'utf-8');

  return (
    <div>
      <ReactMarkdown
        components={{
          h2: (props: any) => {
            const { children, className, node, ...rest } = props;

            return (
              <h2 style={{ marginBottom: '10px' }} {...rest}>
                {children}
              </h2>
            );
          },

          code: (props: any) => {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter {...rest} PreTag="div" language={match[1]} style={coldarkCold}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
        rehypePlugins={[remarkGfm]}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
}
