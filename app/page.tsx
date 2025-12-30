import { CodeRain } from "@/components/ui/CodeRain";
import { Hero } from "@/components/sections/Hero";
import { WhyProgramming } from "@/components/sections/WhyProgramming";
import { BuildYourAgent } from "@/components/sections/BuildYourAgent";
import { TalentQuiz } from "@/components/sections/TalentQuiz";
import { AlgorithmVisualizer } from "@/components/sections/AlgorithmVisualizer";
import { CodingPlayground } from "@/components/sections/CodingPlayground";
import { Competitions } from "@/components/sections/Competitions";
import { Courses } from "@/components/sections/Courses";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { Teachers } from "@/components/sections/Teachers";
import { FAQ } from "@/components/sections/FAQ";
import { Register } from "@/components/sections/Register";

export default function Home() {
  return (
    <>
      {/* 代码雨背景动画 */}
      <CodeRain />
      
      {/* 首页 Hero */}
      <Hero />
      
      {/* 为什么学 AI & Agent */}
      <WhyProgramming />
      
      {/* 🆕 构建你的专属 Agent */}
      <BuildYourAgent />
      
      {/* AI 能力趣味测试 */}
      <TalentQuiz />
      
      {/* 模型训练可视化 */}
      <AlgorithmVisualizer />
      
      {/* 提示词互动挑战 */}
      <CodingPlayground />
      
      {/* Agent 应用场景 */}
      <Competitions />
      
      {/* 课程体系 */}
      <Courses />
      
      {/* 成功案例 */}
      <SuccessStories />
      
      {/* 师资团队 */}
      <Teachers />
      
      {/* 常见问题 */}
      <FAQ />
      
      {/* 报名入口 */}
      <Register />
    </>
  );
}
