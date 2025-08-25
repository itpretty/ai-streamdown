import { Section } from './section';

const markdown = `# GitHub 风格 Markdown 功能

GFM 在标准 Markdown 的基础上扩展了强大的功能。这里是一个全面的演示：

## 表格

| 功能 | 标准 MD | GFM |
|---------|------------|-----|
| 表格 | ❌ | ✅ |
| 任务列表 | ❌ | ✅ |
| 删除线 | ❌ | ✅ |

## 任务列表

- [x] 实现身份验证
- [x] 添加数据库模型
- [ ] 编写单元测试
- [ ] 部署到生产环境

## 删除线

~~旧的方法~~ → 使用 AI 模型的新方法
`;

export const GitHubFlavoredMarkdown = () => (
  <Section
    description="Streamdown 开箱即用地支持 GitHub 风格 Markdown (GFM)，所以你可以使用任务列表、表格等功能。"
    markdown={markdown}
    title="GitHub 风格 Markdown"
  />
);
