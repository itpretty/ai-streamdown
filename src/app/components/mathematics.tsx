import { Section } from './section';

const markdown = `## 内联数学

二次方程公式是 $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$，用于求解 $ax^2 + bx + c = 0$。

欧拉恒等式：$e^{i\\pi} + 1 = 0$ 结合了五个基本数学常数。

## 块级数学

正态分布概率密度函数：

$$
f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}
$$

## 求和和积分

前 $n$ 个自然数的和：$\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$

分部积分：$\\int u \\, dv = uv - \\int v \\, du$
`;

export const Mathematics = () => (
  <Section
    description="Streamdown 通过 remark-math 和 KaTeX 支持 LaTeX 数学表达式，在你的 markdown 中实现美观的数学符号。"
    markdown={markdown}
    title="数学表达式"
  />
);
