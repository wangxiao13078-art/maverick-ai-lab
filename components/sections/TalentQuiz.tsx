"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, ChevronRight, RotateCcw, Sparkles, Star, Trophy } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "🧩 小明有 5 个苹果，给了小红 2 个，又买了 3 个。现在小明有几个苹果？",
    options: ["4个", "5个", "6个", "8个"],
    correct: 2, // index
    category: "逻辑思维",
  },
  {
    id: 2,
    question: "🔢 找规律：2, 4, 8, 16, ？下一个数字是什么？",
    options: ["18", "24", "32", "64"],
    correct: 2,
    category: "数学思维",
  },
  {
    id: 3,
    question: "🎯 如果所有的猫都是动物，所有的动物都需要吃东西，那么所有的猫？",
    options: ["不需要吃东西", "需要吃东西", "可能需要吃东西", "不一定"],
    correct: 1,
    category: "逻辑推理",
  },
  {
    id: 4,
    question: "🔄 把 'HELLO' 反过来写是什么？",
    options: ["OLLEH", "OLLHE", "ELLOH", "OLELH"],
    correct: 0,
    category: "字符串处理",
  },
  {
    id: 5,
    question: "🗺️ 机器人从起点出发，向北走2步，向东走3步，向南走2步。它现在在起点的什么方向？",
    options: ["北方", "东方", "南方", "回到起点"],
    correct: 1,
    category: "空间思维",
  },
  {
    id: 6,
    question: "⚖️ 有8个外表相同的球，其中一个比较轻。用天平最少称几次能找出这个轻球？",
    options: ["1次", "2次", "3次", "4次"],
    correct: 1,
    category: "算法思维",
  },
];

const results = [
  {
    min: 0,
    max: 2,
    title: "编程小萌新 🌱",
    description: "你对编程世界还比较陌生，但没关系！每个大神都是从零开始的。通过系统学习，你一定能快速进步！",
    recommendation: "推荐从入门班开始，打好基础最重要！",
    color: "from-blue-400 to-cyan-400",
  },
  {
    min: 3,
    max: 4,
    title: "潜力新星 ⭐",
    description: "你展现出了不错的逻辑思维能力！稍加训练，你就能在编程竞赛中崭露头角。",
    recommendation: "推荐报名提高班，挑战更高难度！",
    color: "from-purple-400 to-pink-400",
  },
  {
    min: 5,
    max: 6,
    title: "编程小天才 🏆",
    description: "太棒了！你的逻辑思维和问题解决能力都非常出色，是信息学竞赛的好苗子！",
    recommendation: "推荐直接报名精英班，冲击 NOIP 一等奖！",
    color: "from-amber-400 to-orange-400",
  },
];

export function TalentQuiz() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const startQuiz = () => {
    setStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    const isCorrect = index === questions[currentQuestion].correct;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnswers([...answers, isCorrect]);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const getResult = () => {
    return results.find(r => score >= r.min && score <= r.max) || results[0];
  };

  const question = questions[currentQuestion];
  const result = getResult();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[var(--accent-pink)]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary-light)] text-sm font-medium mb-4">
            🧠 能力测试
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            测测你的<span className="gradient-text">编程潜力</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            6 道趣味思维题，3 分钟测出你的编程天赋
          </p>
        </motion.div>

        {/* 测试内容区 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="gradient-border p-1"
        >
          <div className="bg-[#0a0a0f] rounded-xl p-8 min-h-[400px]">
            <AnimatePresence mode="wait">
              {!started ? (
                /* 开始页面 */
                <motion.div
                  key="start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">准备好了吗？</h3>
                  <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    这份测试将评估你的逻辑思维、数学能力和问题解决能力。
                    放轻松，相信自己！
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {["逻辑思维", "数学推理", "空间想象", "算法基础"].map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full bg-white/5 text-gray-400 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={startQuiz}
                    className="btn-primary px-8 py-4 rounded-xl font-semibold text-white text-lg flex items-center gap-2 mx-auto"
                  >
                    <Sparkles className="w-5 h-5" />
                    开始测试
                  </button>
                </motion.div>
              ) : showResult ? (
                /* 结果页面 */
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8"
                >
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${result.color} flex items-center justify-center mx-auto mb-6`}>
                    <Trophy className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{result.title}</h3>
                  <p className="text-[var(--secondary)] text-lg mb-6">
                    得分：{score} / {questions.length}
                  </p>
                  
                  {/* 答题情况 */}
                  <div className="flex justify-center gap-2 mb-6">
                    {answers.map((correct, index) => (
                      <div
                        key={index}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm ${
                          correct ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {index + 1}
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-300 mb-4 max-w-md mx-auto">
                    {result.description}
                  </p>
                  <p className="text-[var(--accent)] font-medium mb-8">
                    💡 {result.recommendation}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                      onClick={startQuiz}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                      <RotateCcw className="w-4 h-4" />
                      再测一次
                    </button>
                    <a
                      href="#register"
                      className="btn-primary px-6 py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2"
                    >
                      <Star className="w-4 h-4" />
                      预约免费试听
                    </a>
                  </div>
                </motion.div>
              ) : (
                /* 答题页面 */
                <motion.div
                  key={`question-${currentQuestion}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {/* 进度条 */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>题目 {currentQuestion + 1} / {questions.length}</span>
                      <span className="px-2 py-0.5 rounded bg-[var(--primary)]/20 text-[var(--primary-light)] text-xs">
                        {question.category}
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
                        initial={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                        animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* 问题 */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-8 leading-relaxed">
                    {question.question}
                  </h3>

                  {/* 选项 */}
                  <div className="space-y-3">
                    {question.options.map((option, index) => {
                      const isSelected = selectedAnswer === index;
                      const isCorrect = index === question.correct;
                      const showCorrect = selectedAnswer !== null && isCorrect;
                      const showWrong = isSelected && !isCorrect;

                      return (
                        <button
                          key={index}
                          onClick={() => handleAnswer(index)}
                          disabled={selectedAnswer !== null}
                          className={`w-full p-4 rounded-xl text-left transition-all flex items-center gap-4 ${
                            showCorrect
                              ? "bg-green-500/20 border-green-500"
                              : showWrong
                              ? "bg-red-500/20 border-red-500"
                              : selectedAnswer !== null
                              ? "bg-white/5 border-white/10 opacity-50"
                              : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-[var(--primary)]/50"
                          } border`}
                        >
                          <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium ${
                            showCorrect
                              ? "bg-green-500 text-white"
                              : showWrong
                              ? "bg-red-500 text-white"
                              : "bg-white/10 text-gray-400"
                          }`}>
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className={`${
                            showCorrect ? "text-green-400" : showWrong ? "text-red-400" : "text-gray-300"
                          }`}>
                            {option}
                          </span>
                          {showCorrect && (
                            <span className="ml-auto text-green-400 text-sm">✓ 正确</span>
                          )}
                          {showWrong && (
                            <span className="ml-auto text-red-400 text-sm">✗ 错误</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}








