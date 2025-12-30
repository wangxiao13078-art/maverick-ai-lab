"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "孩子没有任何编程基础可以参加 AI 实验室吗？",
    answer: "完全可以！我们的 L1 启蒙班专门为零基础孩子设计，重点在于培养 AI 素养和对话逻辑，而不是枯燥的代码语法。只要孩子有好奇心，就可以开始探索 AI 的世界。",
  },
  {
    question: "学习 AI 会影响学校的正常功课吗？",
    answer: "恰恰相反。我们会教孩子如何利用 AI 辅助学习（如：拆解复杂数学题、润色作文、整理知识脑图）。掌握了 AI 这一工具，孩子的学习效率会得到显著提升，从而腾出更多时间进行深度思考。",
  },
  {
    question: "你们教的是不是只是如何使用 ChatGPT？",
    answer: "使用工具只是第一步。我们的课程核心是“Agent 架构思维”。我们教孩子如何设计一套系统，让 AI 能够具备逻辑、记忆并自动执行复杂任务。这是从“使用者”向“创造者”的飞跃。",
  },
  {
    question: "国内校园环境无法使用国外 AI 工具怎么办？",
    answer: "我们针对国内环境进行了深度优化。实验室课程主要基于 DeepSeek、通义千问等国产顶尖模型，并提供自建的安全加速网关。同时，我们还会教孩子如何在本地部署私有化模型（Ollama），确保在任何网络环境下都能顺畅实验。",
  },
  {
    question: "学习 Agent 智能体对未来升学有什么帮助？",
    answer: "AI 素养已成为未来人才的必备基石。在综合评价录取、科技创新大赛中，拥有 AI 项目实践经验（如：独立开发一个智能助教 Agent）将是非常亮眼的加分项，能显著体现孩子的科技创新能力与前瞻性思维。",
  },
  {
    question: "课程形式是怎样的？",
    answer: "我们采用 PBL（项目式学习）模式。每节课都会围绕一个真实的挑战展开，学生在老师引导下，通过拆解任务、配置 Agent、不断调试，最终亲手产出一个可运行的 AI 作品。",
  },
  {
    question: "需要准备什么硬件设备？",
    answer: "只需要一台可以上网的笔记本电脑（Windows 或 Mac 均可）。我们会提供所有的软件环境和 API 访问权限。不需要昂贵的显卡，因为我们会利用云端算力支持实验。",
  },
  {
    question: "如何报名预约实验室体验？",
    answer: "您可以通过页面底部的表单提交预约申请。我们的实验室助教会在 24 小时内联系您，为您安排一次线上的“AI 奇妙日”体验课，让孩子亲身感受 Agent 的魅力。",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--primary)]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--secondary)]/10 border border-[var(--secondary)]/30 text-[var(--secondary)] text-sm font-medium mb-4">
            常见问题
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            家长<span className="gradient-text">常见问题</span>解答
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            以下是家长们最关心的问题，如有其他疑问欢迎咨询
          </p>
        </motion.div>

        {/* FAQ 列表 */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="gradient-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left bg-[var(--card-bg)] hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)] font-mono text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span className="text-white font-medium">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-300 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* 更多问题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10">
            <MessageCircle className="w-5 h-5 text-[var(--secondary)]" />
            <span className="text-gray-300">还有其他问题？</span>
            <a href="#register" className="text-[var(--secondary)] hover:text-white transition-colors font-medium">
              联系我们 →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}








