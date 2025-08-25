import { Section } from './section';

const markdown = `# 这是未闭合的 Markdown 标签的展示

**这是一段非常长的粗体文本，不断地继续，没有明确的结尾，这样你就可以看到未终止的粗体块是如何被渲染器处理的，特别是当文本换行并且跨越多行继续时，甚至更进一步扩展以真正测试解析器的极限**

*这里是一个同样长的斜体句子，不断地延伸，从不真正达到结论，这样你可以观察在流式 Markdown 环境中未终止的斜体块的行为，特别是当内容冗长并且为了演示目的跨越多行时*

\`这是一个长的内联代码块，应该是未终止的，并且继续了相当长的时间，包括一些类似代码的内容，比如 const foo = "bar"; 等，看看当代码块没有正确关闭时解析器如何处理\`

[这是一个非常长的链接文本，未终止，不断地继续，显示未终止链接在预览中是如何渲染的，特别是当链接文本冗长而 URL 缺失或不完整时](https://www.google.com)
`;

export const TerminatorParser = () => (
  <Section
    description="Streamdown 内置支持解析未闭合的 Markdown 标签（# 标题、`内联代码`、**粗体**、_斜体_、[链接]()等），这使得流式 Markdown 内容更加美观。"
    markdown={markdown}
    title="未闭合的 Markdown 标签的样式化"
  />
);
