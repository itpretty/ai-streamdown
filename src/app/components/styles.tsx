import { Section } from './section';

const markdown = `# AI 模型概述

现代 AI 模型彻底改变了我们与技术交互的方式。从**语言模型**到_计算机视觉_，这些系统展示了非凡的能力。

## 主要特性

### 优势
- 自然语言理解
- 多模态处理
- 实时推理

### 需求
1. GPU 加速
2. 模型权重
3. API 访问

## 架构

![Model Architecture](https://placehold.co/600x400)

## 见解

> “全人工智能的发展可能意味着人类的终结。” —— 史蒂芬·霍金

了解更多关于 [AI 安全](https://example.com) 和 \`transformer\` 架构的信息。
`;

export const Styles = () => (
  <Section
    description="Streamdown 为常见的 Markdown 组件提供内置的 Tailwind 类 —— 标题、列表、代码块等。"
    markdown={markdown}
    title="内置的排版样式"
  />
);
