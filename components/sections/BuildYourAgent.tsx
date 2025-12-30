"use client";

import { motion } from "framer-motion";
import { GlowCard } from "../ui/GlowCard";
import { Bot, Sparkles, Palette, Mic, BookOpen, Calculator, Gamepad2, Heart, ArrowRight } from "lucide-react";

const agentIdeas = [
  {
    icon: BookOpen,
    name: "学习助手 Agent",
    description: "帮你整理笔记、解答问题、制定复习计划",
    example: "\"帮我用故事讲解光合作用\"",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Palette,
    name: "创意画师 Agent",
    description: "根据你的想法生成独特的艺术作品",
    example: "\"画一只在太空冲浪的柴犬\"",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Gamepad2,
    name: "游戏伙伴 Agent",
    description: "陪你玩文字冒险游戏，当你的专属NPC",
    example: "\"开始一段魔法学院冒险\"",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Calculator,
    name: "数学导师 Agent",
    description: "一步步引导你理解数学概念和解题思路",
    example: "\"用动画演示勾股定理\"",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: Mic,
    name: "英语教练 Agent",
    description: "陪你练口语、纠正发音、模拟真实对话",
    example: "\"模拟一次机场值机对话\"",
    color: "from-rose-500 to-red-400",
  },
  {
    icon: Heart,
    name: "心情伙伴 Agent",
    description: "倾听你的心事，给予温暖的回应和建议",
    example: "\"今天考试没考好，有点难过\"",
    color: "from-indigo-500 to-violet-400",
  },
];

const steps = [
  { step: 1, title: "想象", desc: "你想要一个什么样的 AI 助手？" },
  { step: 2, title: "设计", desc: "给它起名字、设定性格和能力" },
  { step: 3, title: "构建", desc: "用提示词和工具搭建逻辑" },
  { step: 4, title: "训练", desc: "用对话数据让它更聪明" },
  { step: 5, title: "发布", desc: "分享给朋友们一起使用" },
];

export function BuildYourAgent() {
  return (
    <section id="build-agent" className="relative py-32 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[var(--accent)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[var(--secondary)]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-sm font-medium mb-4">
            🤖 专属智能体
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            每个孩子都能<span className="gradient-text">构建自己的 Agent</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            不需要复杂编程，用创意和想象力，打造独一无二的 AI 智能体伙伴
          </p>
        </motion.div>

        {/* 构建流程 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <GlowCard>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">五步打造专属 Agent</h3>
              <p className="text-gray-400">从想法到成品，只需要这五个步骤</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {steps.map((item, index) => (
                <div key={item.step} className="flex items-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white text-xl font-bold mb-2">
                      {item.step}
                    </div>
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="text-xs text-gray-400 max-w-[100px]">{item.desc}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-[var(--secondary)] mx-4 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </GlowCard>
        </motion.div>

        {/* Agent 创意展示 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-2">学员们正在构建的 Agent</h3>
          <p className="text-gray-400">看看其他小伙伴的创意，激发你的灵感</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentIdeas.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlowCard className="h-full">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center flex-shrink-0`}>
                    <agent.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-white mb-1">{agent.name}</h4>
                    <p className="text-gray-400 text-sm mb-3">{agent.description}</p>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-center space-x-2 mb-1">
                        <Bot className="w-4 h-4 text-[var(--secondary)]" />
                        <span className="text-xs text-gray-500">示例对话</span>
                      </div>
                      <p className="text-sm text-[var(--secondary)]">{agent.example}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <GlowCard>
            <div className="py-8 text-center">
              <Sparkles className="w-12 h-12 text-[var(--accent)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                你想构建什么样的 Agent？
              </h3>
              <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                在我们的实验室里，你将学会从零开始构建自己的 AI 智能体，
                <br />让你的创意变成现实！
              </p>
              <a
                href="#register"
                className="inline-flex items-center space-x-2 btn-primary px-8 py-4 rounded-xl font-semibold text-white"
              >
                <Bot className="w-5 h-5" />
                <span>开始构建我的 Agent</span>
              </a>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}

