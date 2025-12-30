"use client";

import { motion } from "framer-motion";
import { GlowCard } from "../ui/GlowCard";
import { 
  Brain, 
  Lightbulb, 
  Target, 
  Puzzle, 
  Rocket, 
  Globe,
  Smartphone,
  MapPin,
  ShoppingCart,
  Music,
  Car,
  Heart
} from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "架构思维能力",
    description: "AI 时代不再是写死代码，而是通过 Agent 架构思维来设计复杂系统的运行逻辑。",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Lightbulb,
    title: "智能体创造",
    description: "从零构建一个有灵魂、能执行任务的 AI 智能体，将天马行空的想象力转化为生产力。",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Target,
    title: "批判性思维",
    description: "在 AI 辅助下学会辨别真伪、校验结果，培养在海量信息中保持独立思考的能力。",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Puzzle,
    title: "任务拆解与分发",
    description: "面对庞大项目，学会如何将目标拆解为 AI 可理解的小任务，这是未来管理者的核心技能。",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Rocket,
    title: "AI 协作竞争力",
    description: "掌握如何与 AI 高效对话，成为能够驾驭 AI 的人，而不是被 AI 取代的人。",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Globe,
    title: "逻辑模型构建",
    description: "AI 的本质是数学与逻辑。通过实验，孩子能直观理解抽象的数学模型如何在现实中运作。",
    color: "from-violet-500 to-purple-500",
  },
];

const algorithmExamples = [
  {
    icon: Smartphone,
    title: "个人数字分身",
    description: "AI 正在学习你的语言习惯，未来每个人都将拥有一个懂自己的数字助手。",
  },
  {
    icon: MapPin,
    title: "智能城市调度",
    description: "交通灯不再是死板的定时器，而是由 AI Agent 根据实时车流进行最优决策。",
  },
  {
    icon: ShoppingCart,
    title: "AI 选购专家",
    description: "不再是简单的搜索，Agent 会对比全网评测，为你挑选最适合的商品。",
  },
  {
    icon: Music,
    title: "生成式艺术",
    description: "AI 正在重新定义创作，每个人都能通过文字生成绝美的画作与旋律。",
  },
  {
    icon: Car,
    title: "全自动驾驶",
    description: "Agent 感知周围环境并实时决策，AI 正在让出行变得前所未有的安全与智能。",
  },
  {
    icon: Heart,
    title: "精准医疗 AI",
    description: "AI 辅助分析海量医学论文与病例，为每位患者提供定制化的治疗方案。",
  },
];

export function WhyProgramming() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[var(--secondary)]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 第一部分：为什么学 AI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--secondary)]/10 border border-[var(--secondary)]/30 text-[var(--secondary)] text-sm font-medium mb-4">
            为什么进入 AI 实验室
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            赋予孩子驾驭 AI 的<span className="gradient-text">超能力</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            在 AI 时代，掌握工具的使用只是基础。真正的核心在于思维的迭代与对 Agent 系统的深度掌控。
          </p>
        </motion.div>

        {/* 好处卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {benefits.map((benefit, index) => (
            <GlowCard key={benefit.title} delay={index * 0.1}>
              <div className="flex items-start space-x-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center flex-shrink-0`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* 第二部分：AI 无处不在 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-sm font-medium mb-4">
            AI 正在重塑世界
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            从<span className="gradient-text">工具</span>到<span className="gradient-text">伙伴</span>的飞跃
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            AI 不再只是被动执行命令的程序，它正在成为能够自主决策、协作的智能伙伴。<br />
            理解 AI，就是拿到了通往未来的门票。
          </p>
        </motion.div>

        {/* AI 应用示例 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {algorithmExamples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--primary)]/50 transition-all hover:bg-white/10"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center group-hover:bg-[var(--primary)]/30 transition-colors">
                  <example.icon className="w-5 h-5 text-[var(--primary-light)]" />
                </div>
                <h3 className="text-white font-semibold">{example.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{example.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 引用区块 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GlowCard>
            <div className="text-center py-8">
              <div className="text-6xl mb-6">🤖</div>
              <blockquote className="text-2xl md:text-3xl font-medium text-white mb-6 leading-relaxed">
                &ldquo;AI 不会取代人类，<br />
                但<span className="gradient-text">会用 AI 的人</span>将取代不会用 AI 的人。&rdquo;
              </blockquote>
              <cite className="text-gray-400 text-lg">
                —— 孙正义，软银集团创始人
              </cite>
            </div>
          </GlowCard>
        </motion.div>

        {/* 数据统计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "85M", label: "到 2025 年受 AI 影响的工作岗位" },
            { value: "3.5x", label: "AI 相关人才的平均薪资溢价" },
            { value: "90%", label: "全球企业正在加速布局 AI 战略" },
            { value: "No.1", label: "被公认为未来十年最重要的技能" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}








