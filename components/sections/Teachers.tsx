"use client";

import { motion } from "framer-motion";
import { GlowCard } from "../ui/GlowCard";
import { Award, BookOpen, Users, GraduationCap } from "lucide-react";

const teachers = [
  {
    name: "李教授",
    title: "首席讲师 / 教研总监",
    avatar: "李",
    education: "清华大学计算机系博士",
    achievements: [
      "前 NOI 命题组成员",
      "培养 5 名 IOI 选手",
      "15 年竞赛教学经验",
    ],
    specialty: "算法设计与分析",
    color: "from-blue-500 to-purple-600",
  },
  {
    name: "王老师",
    title: "高级讲师 / NOIP 组负责人",
    avatar: "王",
    education: "北京大学信息科学技术学院",
    achievements: [
      "NOI 金牌得主",
      "ACM-ICPC 亚洲区金奖",
      "培养 NOIP 一等奖 50+",
    ],
    specialty: "动态规划 / 图论",
    color: "from-emerald-500 to-cyan-500",
  },
  {
    name: "张老师",
    title: "资深讲师 / CSP 组负责人",
    avatar: "张",
    education: "中国科学技术大学",
    achievements: [
      "NOIP 一等奖得主",
      "蓝桥杯国赛金奖",
      "3 年大厂算法岗经验",
    ],
    specialty: "数据结构 / 搜索算法",
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "刘老师",
    title: "讲师 / 入门班负责人",
    avatar: "刘",
    education: "北京航空航天大学",
    achievements: [
      "CSP-S 一等奖",
      "5 年少儿编程经验",
      "擅长激发学生兴趣",
    ],
    specialty: "编程入门 / 思维训练",
    color: "from-pink-500 to-rose-500",
  },
];

const features = [
  {
    icon: GraduationCap,
    title: "名校背景",
    desc: "100% 名校计算机专业毕业",
  },
  {
    icon: Award,
    title: "竞赛经历",
    desc: "全部具有省级以上竞赛获奖经历",
  },
  {
    icon: BookOpen,
    title: "教学经验",
    desc: "平均 5 年以上竞赛教学经验",
  },
  {
    icon: Users,
    title: "培养成果",
    desc: "累计培养获奖学员 500+",
  },
];

export function Teachers() {
  return (
    <section id="teachers" className="relative py-32 overflow-hidden bg-[#050508]">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[var(--secondary)]/5 rounded-full blur-[100px]" />
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
            师资力量
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">金牌教练</span>团队
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            由 NOI 金牌得主、清北博士组成的专业教研团队
          </p>
        </motion.div>

        {/* 教师特点 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <feature.icon className="w-10 h-10 text-[var(--secondary)] mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* 教师卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <GlowCard key={teacher.name} delay={index * 0.1}>
              <div className="text-center">
                {/* 头像 */}
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${teacher.color} flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4`}>
                  {teacher.avatar}
                </div>

                {/* 基本信息 */}
                <h3 className="text-xl font-bold text-white mb-1">{teacher.name}</h3>
                <p className="text-[var(--secondary)] text-sm mb-2">{teacher.title}</p>
                <p className="text-gray-400 text-xs mb-4">{teacher.education}</p>

                {/* 专长 */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--primary)]/20 text-[var(--primary-light)] text-xs">
                    {teacher.specialty}
                  </span>
                </div>

                {/* 成就列表 */}
                <ul className="text-left space-y-2">
                  {teacher.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)] mr-2 mt-1.5 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* 教研优势 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <GlowCard>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-4">
                  专业的<span className="gradient-text">教研体系</span>
                </h3>
                <p className="text-gray-400">
                  我们的教研团队持续跟踪最新竞赛动态，每年更新教学内容，确保学员学习最前沿的算法知识。
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "每周教研会议",
                    "真题深度解析",
                    "分层教学设计",
                    "个性化辅导",
                    "模拟赛命题",
                    "学情跟踪分析",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center space-x-2 text-gray-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}








