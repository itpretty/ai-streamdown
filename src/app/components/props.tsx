const props = [
  {
    name: 'children',
    type: 'string',
    description:
      '要渲染的 markdown 内容。可以是 markdown 字符串或 React 节点。',
  },
  {
    name: 'parseIncompleteMarkdown',
    type: 'boolean',
    default: 'true',
    description:
      '是否解析和修复不完整的 markdown 语法（例如，未关闭的代码块或列表）。',
  },
  {
    name: 'className',
    type: 'string',
    description: '要应用到包装器 div 元素的 CSS 类名。',
  },
  {
    name: 'components',
    type: 'object',
    description:
      '用于渲染 markdown 元素的自定义 React 组件（例如，自定义标题、段落、代码块组件）。',
  },
  {
    name: 'allowedImagePrefixes',
    type: 'string[]',
    default: '["*"]',
    description:
      '允许的图像 URL 前缀数组。使用 ["*"] 允许所有图像。',
  },
  {
    name: 'allowedLinkPrefixes',
    type: 'string[]',
    default: '["*"]',
    description:
      '允许的链接 URL 前缀数组。使用 ["*"] 允许所有链接。',
  },
  {
    name: 'defaultOrigin',
    type: 'string',
    description: '用于链接和图像中相对 URL 的默认源。',
  },
  {
    name: 'rehypePlugins',
    type: 'array',
    default: '[rehypeKatex]',
    description:
      '用于处理 HTML 的 rehype 插件数组。默认包含 KaTeX 用于数学渲染。',
  },
  {
    name: 'remarkPlugins',
    type: 'array',
    default: '[remarkGfm, remarkMath]',
    description:
      '用于处理 markdown 的 remark 插件数组。默认包含 GitHub 风格 Markdown 和数学支持。',
  },
  {
    name: 'shikiTheme',
    type: 'BundledTheme (from Shiki)',
    default: 'github-light',
    description: '用于代码块的主题。',
  },
];

export const Props = () => (
  <div className="divide-y sm:grid sm:grid-cols-3 sm:divide-x sm:divide-y-0">
    <div className="space-y-2 p-4 sm:p-8">
      <h2 className="font-semibold text-2xl tracking-tight">属性</h2>
      <p className="text-muted-foreground">
        StreamdownProps 扩展了 react-markdown 组件属性，添加了流式传输和安全功能的额外属性。
      </p>
      <p className="text-muted-foreground">
        所有属性都是可选的，并且对于典型用例都有合理的默认值。
      </p>
    </div>
    <div className="divide-y sm:col-span-2">
      {props.map((prop) => (
        <div className="space-y-2 p-4 sm:p-8" key={prop.name}>
          <div className="flex items-center gap-2">
            <code className="font-semibold text-primary text-sm tracking-tight">
              {prop.name}
            </code>
            <code className="text-muted-foreground text-xs">{prop.type}</code>
          </div>
          <p className="text-muted-foreground text-sm">{prop.description}</p>
          {prop.default && (
            <p className="text-muted-foreground text-xs">
              默认值：{' '}
              <code className="rounded bg-muted px-1">{prop.default}</code>
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
);
