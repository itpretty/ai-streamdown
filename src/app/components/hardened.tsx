import { Section } from './section';

const markdown = `
这里是一些指向潜在恶意站点的链接（请不要真的点击它们）：

- [点击这里获取免费iPhone](http://malicious-site.com)
- [快速致富！](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
- [下载可疑文件](http://dangerous-downloads.net)
- [虚假登录页面](http://fake-login.com)
`;

export const HardenedMarkdown = () => (
  <Section
    description={
      <>
        Streamdown 确保不可信的 markdown 不包含来自意外源的图像和链接，这些源可能已经{' '}
        <a
          className="font-medium text-blue-600 underline"
          href="https://vercel.com/blog/building-secure-ai-agents"
          rel="noreferrer"
          target="_blank"
        >
          受到提示注入攻击
        </a>
        。
      </>
    }
    markdown={markdown}
    streamdownProps={{
      defaultOrigin: 'https://streamdown.vercel.app',
      allowedLinkPrefixes: ['https://streamdown.vercel.app'],
    }}
    title="内置安全加固"
  />
);
