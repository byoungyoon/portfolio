import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import styles from './customMarkdown.module.css';
import { Suspense } from 'react';

type Props = {
  markdown: string;
};

export default function CustomMarkdown({ markdown }: Props) {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <ReactMarkdown
        components={{
          h2: (props: any) => {
            const { children, className, node, ...rest } = props;

            return (
              <h2 className={styles.h2} {...rest}>
                {children}
              </h2>
            );
          },
          h3: (props: any) => {
            const { children, className, node, ...rest } = props;

            return (
              <h3 className={styles.h3} {...rest}>
                {children}
              </h3>
            );
          },
          h4: (props: any) => {
            const { children, className, node, ...rest } = props;

            return (
              <h3 className={styles.h4} {...rest}>
                {children}
              </h3>
            );
          },

          p: (props: any) => {
            const { children, className, node, ...rest } = props;

            return (
              <p className={styles.p} {...rest}>
                {children}
              </p>
            );
          },

          a: (props: any) => {
            const { children, className, node, ...rest } = props;

            return (
              <a className={styles.a} target="_blank" {...rest}>
                {children}
              </a>
            );
          },

          ul: (props: any) => {
            const { children, className, node, ...rest } = props;

            return <ul className={styles.ul}>{children}</ul>;
          },

          table: (props: any) => {
            const { children, className, node, ...rest } = props;

            return <table className={styles.table}>{children}</table>;
          },

          img: (props: any) => {
            const { className, node, ...rest } = props;

            return <img className={styles.img} {...rest} />;
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
        {markdown}
      </ReactMarkdown>
    </Suspense>
  );
}
