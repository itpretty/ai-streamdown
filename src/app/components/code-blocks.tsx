import { Section } from './section';

const markdown = `
\`\`\`tsx
import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    type="button"
    className="button"
    onClick={onClick}
    aria-label={label}
  >
    {label}
  </button>
);
\`\`\`
`;

export const CodeBlocks = () => (
  <Section
    description={
      <>
        Streamdown 使用{' '}
        <a
          className="underline"
          href="https://shiki.style/"
          rel="noreferrer"
          target="_blank"
        >
          Shiki
        </a>{' '}
        来高亮显示代码块，并带有复制按钮，方便你复制代码。{' '}
        <span className="font-medium text-blue-600">
          悬停显示复制按钮！
        </span>
      </>
    }
    markdown={markdown}
    title="美观、交互式的代码块"
  />
);
