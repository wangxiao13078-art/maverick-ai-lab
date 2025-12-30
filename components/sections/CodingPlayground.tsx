"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, RotateCcw, Sparkles, CheckCircle, XCircle } from "lucide-react";

const challenges = [
  {
    id: 1,
    title: "提示词艺术",
    difficulty: "入门",
    description: "修改下面的提示词，让 AI 扮演一个挑剔的文学评论家来分析朱自清的《背影》",
    initialCode: `你现在是一个______。请分析一下朱自清《背影》中关于父亲买橘子的片段。`,
    answer: "评论家",
    hint: "在第一个空白处填入：'评论家'",
  },
  {
    id: 2,
    title: "思维链 (CoT)",
    difficulty: "进阶",
    description: "补全提示词，引导 AI 步步拆解如何制作一个简单的校园 Agent 方案",
    initialCode: `我想做一个校园 AI 助手。请你______地告诉我如何实现它。`,
    answer: "分步骤",
    hint: "要求 AI '分步骤'或'逻辑严密'地进行回答",
  },
  {
    id: 3,
    title: "Agent 设定",
    difficulty: "简单",
    description: "补全提示词，给你的 Agent 设定一个明确的限制条件",
    initialCode: `你是一个数学助教，你的回答必须______，不能直接给答案。`,
    answer: "引导学生",
    hint: "填入：'引导学生思考'，这样 AI 就不会直接泄题了",
  },
];

export function CodingPlayground() {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [userCode, setUserCode] = useState(challenges[0].initialCode);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [showHint, setShowHint] = useState(false);

  const challenge = challenges[currentChallenge];

  const checkAnswer = () => {
    // 简单检查用户是否填入了正确答案
    if (userCode.includes(challenge.answer)) {
      setResult("correct");
    } else {
      setResult("wrong");
    }
  };

  const resetCode = () => {
    setUserCode(challenge.initialCode);
    setResult(null);
    setShowHint(false);
  };

  const nextChallenge = () => {
    if (currentChallenge < challenges.length - 1) {
      setCurrentChallenge(currentChallenge + 1);
      setUserCode(challenges[currentChallenge + 1].initialCode);
      setResult(null);
      setShowHint(false);
    }
  };

  return (
    <section className="relative py-32 overflow-hidden bg-[#050508]">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[var(--secondary)]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[var(--accent)]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-sm font-medium mb-4">
            🎮 互动实验
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            提示词<span className="gradient-text">交互挑战</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            动手试试看！通过优化提示词，感受 AI 智能体反馈的变化
          </p>
        </motion.div>

        {/* 挑战选择器 */}
        <div className="flex justify-center gap-4 mb-8">
          {challenges.map((c, index) => (
            <button
              key={c.id}
              onClick={() => {
                setCurrentChallenge(index);
                setUserCode(challenges[index].initialCode);
                setResult(null);
                setShowHint(false);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentChallenge === index
                  ? "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              挑战 {index + 1}
            </button>
          ))}
        </div>

        {/* 编程区域 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="gradient-border p-1"
        >
          <div className="bg-[#0a0a0f] rounded-xl overflow-hidden">
            {/* 顶部信息栏 */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white">{challenge.title}</h3>
                  <span className="px-2 py-1 rounded bg-[var(--secondary)]/20 text-[var(--secondary)] text-xs">
                    {challenge.difficulty}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-1">{challenge.description}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="px-3 py-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all text-sm"
                >
                  💡 提示
                </button>
              </div>
            </div>

            {/* 提示 */}
            {showHint && (
              <div className="px-4 py-3 bg-amber-500/10 border-b border-amber-500/20">
                <p className="text-amber-300 text-sm">💡 {challenge.hint}</p>
              </div>
            )}

            {/* 代码编辑器 */}
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-500 text-xs ml-2">prompt_test.txt</span>
              </div>
              <textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                className="w-full h-64 bg-[#1a1a2e] rounded-lg p-4 font-mono text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 resize-none"
                spellCheck={false}
              />
            </div>

            {/* 结果显示 */}
            {result && (
              <div className={`px-4 py-3 ${result === "correct" ? "bg-green-500/10" : "bg-red-500/10"}`}>
                <div className="flex items-center gap-2">
                  {result === "correct" ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-medium">🎉 太棒了！回答正确！</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span className="text-red-400 font-medium">再想想，答案不太对哦~</span>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* 操作按钮 */}
            <div className="flex items-center justify-between p-4 border-t border-white/10">
              <button
                onClick={resetCode}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                重置代码
              </button>
              <div className="flex gap-3">
                {result === "correct" && currentChallenge < challenges.length - 1 && (
                  <button
                    onClick={nextChallenge}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-all"
                  >
                    <Sparkles className="w-4 h-4" />
                    下一题
                  </button>
                )}
                <button
                  onClick={checkAnswer}
                  className="flex items-center gap-2 px-6 py-2 rounded-lg btn-primary text-white font-medium"
                >
                  <Play className="w-4 h-4" />
                  检查答案
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 底部提示 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-6"
        >
          想解锁更多高级 Agent 开发技巧？<a href="#register" className="text-[var(--secondary)] hover:underline">立即预约实验室体验</a>
        </motion.p>
      </div>
    </section>
  );
}


