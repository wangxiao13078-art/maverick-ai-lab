"use client";

import { motion } from "framer-motion";
import { GlowCard } from "../ui/GlowCard";
import { BookOpen, Code, Cpu, Zap, CheckCircle, Clock, Users } from "lucide-react";

const courses = [
  {
    level: "AI 启蒙班",
    subtitle: "L1 - AI 素养",
    icon: BookOpen,
    color: "from-emerald-400 to-cyan-400",
    age: "4-6年级",
    duration: "2个月",
    target: "零基础学员",
    topics: [
      "理解大语言模型原理",
      "Prompt 提示词艺术",
      "多模态 AI (绘图/视频) 使用",
      "AI 辅助学习方法论",
      "初步认识智能体概念",
    ],
    price: "2980",
    popular: false,
  },
  {
    level: "Agent 进阶班",
    subtitle: "L2 - 智能体架构",
    icon: Code,
    color: "from-blue-400 to-purple-500",
    age: "6-8年级",
    duration: "4个月",
    target: "有一定 AI 使用经验",
    topics: [
      "思维链 (COT) 深度解析",
      "可视化 Agent 流程设计",
      "知识库挂载与 RAG 初探",
      "常用工具调用 (Tools)",
      "小型校园助手项目实战",
    ],
    price: "5980",
    popular: true,
  },
  {
    level: "开发者实验室",
    subtitle: "L3 - 技术攻坚",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
    age: "8-10年级",
    duration: "6个月",
    target: "具备基础编程能力",
    topics: [
      "LLM API 深度集成",
      "向量数据库 (Vector DB) 实战",
      "Agent 的长期记忆管理",
      "Function Calling 闭环开发",
      "构建个人数字分身",
    ],
    price: "8800",
    popular: false,
  },
  {
    level: "实战专家班",
    subtitle: "L4 - 行业解决方案",
    icon: Zap,
    color: "from-amber-400 to-orange-500",
    age: "高中生及以上",
    duration: "寒暑假",
    target: "极客/未来创业者",
    topics: [
      "多智能体系统 (Multi-Agent)",
      "Agent 内容合规与安全",
      "私有化模型部署 (Ollama)",
      "行业级 Agent 应用设计",
      "项目演示与路演",
    ],
    price: "定制",
    popular: false,
  },
];

export function Courses() {
  return (
    <section id="courses" className="relative py-32 overflow-hidden bg-[#050508]">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-[100px]" />
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
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--secondary)]/10 border border-[var(--secondary)]/30 text-[var(--secondary)] text-sm font-medium mb-4">
            🤖 打造你的专属智能体
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            从零到一，<span className="gradient-text">构建自己的 Agent</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            每个孩子都将完成一个属于自己的 AI 智能体项目，从创意到落地，全程实战
          </p>
        </motion.div>

        {/* 课程卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.level}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {course.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-4 py-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-pink)] rounded-full text-white text-xs font-bold">
                    最受欢迎
                  </span>
                </div>
              )}
              <GlowCard className={`h-full ${course.popular ? 'ring-2 ring-[var(--accent)]/50' : ''}`}>
                <div className="flex flex-col h-full">
                  {/* 图标和标题 */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4`}>
                    <course.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{course.level}</h3>
                  <p className="text-gray-400 text-sm mb-4">{course.subtitle}</p>

                  {/* 信息标签 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300">
                      {course.age}
                    </span>
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {course.duration}
                    </span>
                  </div>

                  {/* 适合人群 */}
                  <p className="text-[var(--secondary)] text-sm mb-4">
                    适合：{course.target}
                  </p>

                  {/* 课程内容 */}
                  <div className="flex-grow">
                    <ul className="space-y-2">
                      {course.topics.map((topic) => (
                        <li key={topic} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[var(--secondary)] mr-2 mt-0.5 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 价格和按钮 */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold gradient-text">
                        {course.price === "定制" ? course.price : `¥${course.price}`}
                      </span>
                      {course.price !== "定制" && (
                        <span className="text-gray-400 text-sm ml-1">/期</span>
                      )}
                    </div>
                    <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      course.popular 
                        ? 'btn-primary text-white' 
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                    }`}>
                      立即咨询
                    </button>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* 学员作品展示 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            🎯 学员可构建的 <span className="gradient-text">智能体项目</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "📚", title: "学科辅导 Agent", desc: "个人专属的数学/英语/物理 AI 家教" },
              { emoji: "🎮", title: "游戏攻略 Agent", desc: "自动分析游戏策略、生成攻略文章" },
              { emoji: "📝", title: "作文批改 Agent", desc: "智能点评作文，给出修改建议" },
              { emoji: "🎨", title: "创意绘画 Agent", desc: "根据描述生成艺术作品和设计" },
              { emoji: "🔬", title: "科学实验 Agent", desc: "模拟物理/化学实验，解答原理" },
              { emoji: "📅", title: "日程管理 Agent", desc: "智能规划学习计划和作业提醒" },
              { emoji: "🌍", title: "翻译助手 Agent", desc: "多语言翻译和语法学习助手" },
              { emoji: "💡", title: "创意无限...", desc: "你的想法 + AI = 无限可能！" },
            ].map((project) => (
              <div
                key={project.title}
                className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-[var(--primary)]/50 transition-all group"
              >
                <div className="text-3xl mb-3">{project.emoji}</div>
                <h4 className="text-white font-semibold mb-1 group-hover:text-[var(--secondary)] transition-colors">{project.title}</h4>
                <p className="text-gray-400 text-sm">{project.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 服务保障 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: Users, title: "小班教学", desc: "每班不超过8人，一对一指导" },
            { icon: BookOpen, title: "项目实战", desc: "每个学员完成专属 Agent 项目" },
            { icon: Zap, title: "国内直连", desc: "DeepSeek/Ollama，无需 VPN" },
          ].map((service) => (
            <div
              key={service.title}
              className="flex items-center space-x-4 p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/20 flex items-center justify-center">
                <service.icon className="w-6 h-6 text-[var(--primary-light)]" />
              </div>
              <div>
                <h4 className="text-white font-semibold">{service.title}</h4>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}








