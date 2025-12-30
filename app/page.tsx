import { CodeRain } from "@/components/ui/CodeRain";
import { Hero } from "@/components/sections/Hero";
import { WhyProgramming } from "@/components/sections/WhyProgramming";
import { TalentQuiz } from "@/components/sections/TalentQuiz";
import { AlgorithmVisualizer } from "@/components/sections/AlgorithmVisualizer";
import { CodingPlayground } from "@/components/sections/CodingPlayground";
import { Competitions } from "@/components/sections/Competitions";
import { CompetitionCalendar } from "@/components/sections/CompetitionCalendar";
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
      
      {/* 为什么学编程 */}
      <WhyProgramming />
      
      {/* 🆕 编程能力趣味测试 */}
      <TalentQuiz />
      
      {/* 🆕 算法可视化演示 */}
      <AlgorithmVisualizer />
      
      {/* 🆕 在线编程挑战 */}
      <CodingPlayground />
      
      {/* 竞赛介绍 */}
      <Competitions />
      
      {/* 🆕 竞赛日历倒计时 */}
      <CompetitionCalendar />
      
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
