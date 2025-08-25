'use client';

import { CodeBlock, CodeBlockCopyButton } from '@/components/code-block';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const streamdownCode = `'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';
import { Streamdown } from 'streamdown';

export default function Page() {
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = useState('');

  return (
    <>
      {messages.map(message => (
        <div key={message.id}>
          {message.parts.filter(part => part.type === 'text').map((part, index) => (
            <Streamdown key={index}>{part.text}</Streamdown>
          ))}
        </div>
      ))}

      <form
        onSubmit={e => {
          e.preventDefault();
          if (input.trim()) {
            sendMessage({ text: input });
            setInput('');
          }
        }}
      >
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={status !== 'ready'}
          placeholder="说点什么..."
        />
        <button type="submit" disabled={status !== 'ready'}>
          提交
        </button>
      </form>
    </>
  );
}
`;

const elementsCode = `'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';
import { Response } from '@/components/ai-elements/response';

export default function Page() {
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = useState('');

  return (
    <>
      {messages.map(message => (
        <div key={message.id}>
          {message.parts.filter(part => part.type === 'text').map((part, index) => (
            <Response key={index}>{part.text}</Response>
          ))}
        </div>
      ))}

      <form
        onSubmit={e => {
          e.preventDefault();
          if (input.trim()) {
            sendMessage({ text: input });
            setInput('');
          }
        }}
      >
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={status !== 'ready'}
          placeholder="说点什么..."
        />
        <button type="submit" disabled={status !== 'ready'}>
          提交
        </button>
      </form>
    </>
  );
}
`;

const cssCode = `/*
 * 更新你的 Tailwind globals.css
 * 以包含以下代码。
 * 这将确保 Streamdown 的
 * 样式应用到你的项目中。
 */

@source "../node_modules/streamdown/dist/index.js";`;

export const Implementation = () => (
  <div className="divide-y sm:grid sm:grid-cols-3 sm:divide-x sm:divide-y-0">
    <div className="space-y-2 px-4 pt-8 pb-16 sm:p-8!">
      <h2 className="font-semibold text-2xl tracking-tight">概述</h2>
      <p className="text-muted-foreground">
        格式Markdown很简单，但当你对其进行分词和流式传输时，新的挑战就出现了。
      </p>
      <p className="text-muted-foreground">
        使用{' '}
        <a
          className="font-medium text-blue-600 underline"
          href="https://ai-sdk.dev/elements"
          rel="noopener noreferrer"
          target="_blank"
        >
          AI Elements
        </a>
        ，我们希望有一种方法能够流式传输安全且完美格式化的Markdown，而无需担心具体的细节。
      </p>
      <p className="text-muted-foreground">
        所以我们构建了Streamdown，一个react-markdown的直接替代品，专为AI驱动的流式传输而设计。
      </p>
      <p className="text-muted-foreground">
        它为AI Elements{' '}
        <a
          className="font-medium text-blue-600 underline"
          href="https://ai-sdk.dev/elements/components/response"
          rel="noopener noreferrer"
          target="_blank"
        >
          Response
        </a>{' '}
        组件提供支持，但如果你愿意，也可以将其作为独立包安装。
      </p>
    </div>
    <div className="relative bg-background sm:col-span-2">
      <Tabs defaultValue="elements">
        <div className="dark">
          <TabsList className="-translate-x-1/2 -translate-y-1/2 absolute top-0 left-1/2 rounded-full">
            <TabsTrigger className="rounded-full" value="elements">
              AI Elements
            </TabsTrigger>
            <TabsTrigger className="rounded-full" value="streamdown">
              Streamdown
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent className="overflow-x-hidden" value="elements">
          <CodeBlock className="p-8" code={elementsCode} language="tsx">
            <CodeBlockCopyButton />
          </CodeBlock>
        </TabsContent>
        <TabsContent className="overflow-x-hidden" value="streamdown">
          <CodeBlock className="p-8" code={streamdownCode} language="tsx">
            <CodeBlockCopyButton />
          </CodeBlock>
        </TabsContent>
      </Tabs>
      <hr />
      <CodeBlock className="p-8" code={cssCode} language="css">
        <CodeBlockCopyButton />
      </CodeBlock>
    </div>
  </div>
);
