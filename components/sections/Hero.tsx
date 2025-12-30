"use client";

import { motion } from "framer-motion";
import { ChevronDown, Rocket, Trophy, Users, Star } from "lucide-react";
import { CountUp } from "../ui/CountUp";

const stats = [
  { icon: Trophy, value: 100, suffix: "+", label: "Agent 作品" },
  { icon: Star, value: 99, suffix: "%", label: "好评率" },
  { icon: Users, value: 1500, suffix: "+", label: "实验参与者" },
  { icon: Rocket, value: 10, suffix: "k+", label: "AI 交互次数" },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        {/* 渐变光晕 */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[var(--primary)]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--secondary)]/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-pink)]/10 rounded-full blur-[150px]" />
        
        {/* 网格背景 */}
        <div className="absolute inset-0 grid-bg opacity-50" />
        
        {/* 装饰线条 */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--secondary)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#line-gradient)" strokeWidth="1" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#line-gradient)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* 标签 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-[var(--primary)]/30 backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--secondary)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--secondary)]" />
            </span>
            <span className="text-sm text-gray-300">2025 AI & Agent 寒假训练营预约中</span>
          </motion.div>

          {/* 主标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">用</span>
            <span className="gradient-text"> AI 驱动</span>
            <br />
            <span className="text-white">孩子的</span>
            <span className="gradient-text">无限可能</span>
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-6 leading-relaxed"
          >
            <span className="text-[var(--secondary)] font-semibold">每个孩子都能构建自己的 AI 智能体</span>
            <br className="hidden sm:block" />
            从创意到落地，让孩子亲手打造专属 Agent
          </motion.p>
          
          {/* 亮点标签 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {["🤖 构建专属智能体", "🎨 AI 创意工坊", "🚀 项目式学习", "📱 国内直连无需VPN"].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* 代码展示 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl mx-auto mb-10"
          >
            <div className="gradient-border p-1">
              <div className="bg-[#0a0a0f] rounded-xl p-4 font-mono text-left">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-gray-500 text-xs ml-2">my_agent.py</span>
                </div>
                <pre className="text-sm md:text-base overflow-x-auto">
                  <code>
                    <span className="text-[var(--accent-pink)]">class</span>{" "}
                    <span className="text-[var(--secondary)]">SmartAgent</span>{" "}
                    <span className="text-gray-400">(Agent):</span>
                    {"\n"}
                    {"  "}
                    <span className="text-[var(--accent-pink)]">def</span>{" "}
                    <span className="text-[var(--secondary)]">think</span>
                    <span className="text-gray-400">(self, task):</span>
                    {"\n"}
                    {"    "}
                    <span className="text-gray-500"># 拆解目标，调用工具</span>
                    {"\n"}
                    {"    "}
                    <span className="text-white">sub_tasks</span>{" "}
                    <span className="text-gray-400">=</span>{" "}
                    <span className="text-white">self</span>
                    <span className="text-gray-400">.split(task)</span>
                    {"\n"}
                    {"    "}
                    <span className="text-[var(--accent-pink)]">return</span>{" "}
                    <span className="text-white">self</span>
                    <span className="text-gray-400">.execute(sub_tasks)</span>
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>

          {/* CTA 按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="#register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 rounded-xl font-semibold text-white text-lg flex items-center space-x-2"
            >
              <Rocket className="w-5 h-5" />
              <span>预约实验室体验</span>
            </motion.a>
            <motion.a
              href="#courses"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl font-semibold text-white text-lg border border-white/20 hover:bg-white/5 transition-colors"
            >
              探索课程体系
            </motion.a>
          </motion.div>


          {/* 统计数据 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="gradient-border p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-[var(--secondary)] mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 向下滚动提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#competitions"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-xs mb-2">滚动探索</span>
            <ChevronDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}








