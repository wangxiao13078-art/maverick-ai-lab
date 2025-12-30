"use client";

import { motion } from "framer-motion";
import { GlowCard } from "../ui/GlowCard";
import { Trophy, Medal, Star, Quote } from "lucide-react";
import { CountUp } from "../ui/CountUp";

const students = [
  {
    name: "张明轩",
    school: "人大附中",
    avatar: "M",
    achievement: "NOI 金牌",
    destination: "保送清华大学",
    year: "2024",
    quote: "从零基础到 NOI 金牌，编程之星的老师们给了我最专业的指导。",
    color: "from-amber-400 to-yellow-500",
  },
  {
    name: "李思雨",
    school: "北京四中",
    avatar: "L",
    achievement: "NOIP 一等奖",
    destination: "保送北京大学",
    year: "2024",
    quote: "系统的课程体系让我快速掌握了竞赛核心算法。",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "王浩然",
    school: "清华附中",
    avatar: "W",
    achievement: "CSP-S 一等奖",
    destination: "中考降 50 分录取",
    year: "2024",
    quote: "CSP 一等奖让我在中考中获得了巨大优势！",
    color: "from-purple-400 to-pink-500",
  },
  {
    name: "陈雨萱",
    school: "北师大附中",
    avatar: "C",
    achievement: "IOI 银牌",
    destination: "保送清华姚班",
    year: "2023",
    quote: "在编程之星，我实现了自己的 IOI 梦想。",
    color: "from-emerald-400 to-teal-500",
  },
];

const achievements = [
  { label: "NOI 金牌", count: 12, icon: Trophy },
  { label: "NOIP 一等奖", count: 85, icon: Medal },
  { label: "CSP 一等奖", count: 200, icon: Star },
  { label: "名校保送", count: 50, icon: Trophy },
];

export function SuccessStories() {
  return (
    <section id="success" className="relative py-32 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--accent-pink)]/5 rounded-full blur-[100px]" />
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
            荣誉殿堂
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            他们都在<span className="gradient-text">这里起飞</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            累计培养 500+ 获奖学员，帮助他们实现名校梦想
          </p>
        </motion.div>

        {/* 成就统计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((item, index) => (
            <div
              key={item.label}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10"
            >
              <item.icon className="w-10 h-10 text-[var(--accent)] mx-auto mb-3" />
              <div className="text-4xl font-bold gradient-text mb-2">
                <CountUp end={item.count} suffix="+" />
              </div>
              <div className="text-gray-400 text-sm">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* 学员卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {students.map((student, index) => (
            <GlowCard key={student.name} delay={index * 0.1}>
              <div className="flex flex-col md:flex-row gap-6">
                {/* 头像 */}
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${student.color} flex items-center justify-center text-white text-2xl font-bold`}>
                    {student.avatar}
                  </div>
                </div>

                {/* 内容 */}
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{student.name}</h3>
                      <p className="text-gray-400 text-sm">{student.school}</p>
                    </div>
                    <span className="text-gray-500 text-sm">{student.year}</span>
                  </div>

                  {/* 成就标签 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${student.color} text-white text-xs font-semibold`}>
                      {student.achievement}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs">
                      {student.destination}
                    </span>
                  </div>

                  {/* 引用 */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-[var(--primary)]/30" />
                    <p className="text-gray-300 text-sm italic pl-4">
                      &ldquo;{student.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* 奖牌墙 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <GlowCard>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-8">🏆 荣誉墙</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "NOI 2024 金牌×3",
                  "NOI 2024 银牌×8",
                  "NOIP 2024 一等奖×25",
                  "CSP-S 2024 一等奖×48",
                  "蓝桥杯国赛金奖×15",
                  "USACO 白金组×5",
                  "IOI 2023 银牌×1",
                  "省队选手×12",
                ].map((award, index) => (
                  <motion.div
                    key={award}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-200 text-sm font-medium"
                  >
                    {award}
                  </motion.div>
                ))}
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}








