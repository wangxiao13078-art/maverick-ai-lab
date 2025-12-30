"use client";

import { motion } from "framer-motion";
import { GlowCard } from "../ui/GlowCard";
import { Award, Calendar, Users, TrendingUp, ExternalLink } from "lucide-react";

const competitions = [
  {
    name: "LLM 原理与 Prompt",
    fullName: "大语言模型交互基础",
    level: "入门级",
    description: "深入理解 GPT、DeepSeek 等模型的工作原理，掌握系统化提示词工程，让 AI 成为你最高效的助手。",
    features: ["模型原理解析", "提示词艺术", "多模态交互"],
    time: "随到随学",
    participants: "500+",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    name: "Agent 架构设计",
    fullName: "智能体系统开发",
    level: "进阶级",
    description: "学习如何使用 LangChain、Vercel AI SDK 构建具备感知、规划、记忆和执行能力的智能体系统。",
    features: ["思维链 (COT)", "工具调用", "状态管理"],
    time: "定期开课",
    participants: "200+",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "RAG 与知识库",
    fullName: "检索增强生成技术",
    level: "专家级",
    description: "掌握向量数据库（Vector DB）与 Embeddings 技术，让 AI 能够基于私有知识库进行精准回答。",
    features: ["向量化存储", "语义搜索", "数据清洗"],
    time: "项目制",
    participants: "100+",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    name: "AI 实战项目",
    fullName: "端到端应用开发",
    level: "全能级",
    description: "从 Idea 到上线，独立开发一个完整的 AI 驱动应用（如 AI 老师、自动客服、数字分身）。",
    features: ["全栈开发", "部署上线", "产品设计"],
    time: "赛季制",
    participants: "50+",
    gradient: "from-emerald-500 to-teal-400",
  },
];

export function Competitions() {
  return (
    <section id="competitions" className="relative py-32 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--secondary)]/10 rounded-full blur-[80px]" />
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
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary-light)] text-sm font-medium mb-4">
            实验室模块
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            探索<span className="gradient-text"> AI 实验室</span>核心领域
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            从基础对话到复杂智能体架构，我们带你深度拆解 AI 技术栈，构建属于你的智能未来
          </p>
        </motion.div>

        {/* 竞赛卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {competitions.map((comp, index) => (
            <GlowCard key={comp.name} delay={index * 0.1}>
              <div className="flex flex-col h-full">
                {/* 头部 */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className={`inline-block px-3 py-1 rounded-lg bg-gradient-to-r ${comp.gradient} text-white text-xs font-semibold mb-2`}>
                      {comp.level}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{comp.name}</h3>
                    <p className="text-gray-400 text-sm">{comp.fullName}</p>
                  </div>
                  <Award className={`w-12 h-12 bg-gradient-to-r ${comp.gradient} rounded-xl p-2.5 text-white`} />
                </div>

                {/* 描述 */}
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  {comp.description}
                </p>

                {/* 特点标签 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {comp.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* 信息栏 */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      {comp.time}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="w-4 h-4 mr-1.5" />
                      {comp.participants}
                    </div>
                  </div>
                  <button className="flex items-center text-[var(--secondary)] hover:text-white transition-colors text-sm font-medium">
                    了解更多
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* 竞赛路径图 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <GlowCard>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">AI 开发者晋级路径</h3>
              <p className="text-gray-400">从 AI 使用者到 Agent 架构师的进化阶梯</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              {[
                { name: "User", desc: "AI 使用者" },
                { name: "Prompter", desc: "提示词达人" },
                { name: "Maker", desc: "Agent 创作者" },
                { name: "Engineer", desc: "AI 工程师" },
                { name: "Architect", desc: "系统架构师" },
              ].map((step, index, arr) => (
                <div key={step.name} className="flex items-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white font-bold mb-2">
                      {step.name}
                    </div>
                    <span className="text-xs text-gray-400">{step.desc}</span>
                  </div>
                  {index < arr.length - 1 && (
                    <TrendingUp className="w-6 h-6 text-[var(--secondary)] mx-2 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}








