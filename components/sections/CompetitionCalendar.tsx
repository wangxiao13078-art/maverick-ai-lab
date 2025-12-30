"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Bell, ChevronLeft, ChevronRight, MapPin, ExternalLink } from "lucide-react";

interface Competition {
  id: string;
  name: string;
  fullName: string;
  startDate: Date;
  endDate?: Date;
  type: "报名" | "初赛" | "复赛" | "决赛";
  level: string;
  color: string;
  description: string;
}

const competitions: Competition[] = [
  {
    id: "csp-j-register",
    name: "CSP-J/S",
    fullName: "CSP-J/S 第一轮认证报名",
    startDate: new Date(2025, 8, 1), // 9月1日
    endDate: new Date(2025, 8, 15),
    type: "报名",
    level: "入门/提高",
    color: "from-blue-500 to-cyan-400",
    description: "CCF 计算机软件能力认证报名开始",
  },
  {
    id: "csp-round1",
    name: "CSP-J/S",
    fullName: "CSP-J/S 第一轮认证",
    startDate: new Date(2025, 9, 19), // 10月19日
    type: "初赛",
    level: "入门/提高",
    color: "from-blue-500 to-cyan-400",
    description: "CSP 第一轮认证考试",
  },
  {
    id: "csp-round2",
    name: "CSP-J/S",
    fullName: "CSP-J/S 第二轮认证",
    startDate: new Date(2025, 10, 16), // 11月16日
    type: "复赛",
    level: "入门/提高",
    color: "from-blue-500 to-cyan-400",
    description: "CSP 第二轮认证考试",
  },
  {
    id: "noip",
    name: "NOIP",
    fullName: "全国青少年信息学奥林匹克联赛",
    startDate: new Date(2025, 10, 29), // 11月29日
    type: "决赛",
    level: "省级",
    color: "from-purple-500 to-pink-500",
    description: "NOIP 全国联赛",
  },
  {
    id: "lanqiao-register",
    name: "蓝桥杯",
    fullName: "蓝桥杯青少年组报名",
    startDate: new Date(2025, 11, 1), // 12月1日
    endDate: new Date(2026, 1, 28),
    type: "报名",
    level: "全国",
    color: "from-emerald-500 to-teal-400",
    description: "蓝桥杯青少年创意编程大赛报名",
  },
  {
    id: "lanqiao-provincial",
    name: "蓝桥杯",
    fullName: "蓝桥杯省赛",
    startDate: new Date(2026, 3, 12), // 4月12日
    type: "初赛",
    level: "省级",
    color: "from-emerald-500 to-teal-400",
    description: "蓝桥杯省级选拔赛",
  },
  {
    id: "noi",
    name: "NOI",
    fullName: "全国青少年信息学奥林匹克竞赛",
    startDate: new Date(2025, 6, 15), // 7月15日
    endDate: new Date(2025, 6, 21),
    type: "决赛",
    level: "国家级",
    color: "from-amber-500 to-orange-500",
    description: "NOI 国赛",
  },
];

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-2">
      {[
        { value: timeLeft.days, label: "天" },
        { value: timeLeft.hours, label: "时" },
        { value: timeLeft.minutes, label: "分" },
        { value: timeLeft.seconds, label: "秒" },
      ].map((item, index) => (
        <div key={index} className="text-center">
          <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-xl font-mono font-bold text-white">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="text-xs text-gray-500 mt-1">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export function CompetitionCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // 获取最近的比赛
  const now = new Date();
  const upcomingCompetitions = competitions
    .filter(c => c.startDate > now)
    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
    .slice(0, 3);

  const nextCompetition = upcomingCompetitions[0];

  // 获取当前月份的比赛
  const monthCompetitions = competitions.filter(c => {
    const compMonth = c.startDate.getMonth();
    const compYear = c.startDate.getFullYear();
    return compMonth === currentMonth.getMonth() && compYear === currentMonth.getFullYear();
  });

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const formatDate = (date: Date) => {
    return `${date.getMonth() + 1}月${date.getDate()}日`;
  };

  return (
    <section className="relative py-32 overflow-hidden bg-[#050508]">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[var(--accent-pink)]/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[var(--secondary)]/5 rounded-full blur-[100px]" />
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
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--accent-pink)]/10 border border-[var(--accent-pink)]/30 text-[var(--accent-pink)] text-sm font-medium mb-4">
            📅 竞赛日历
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            重要<span className="gradient-text">竞赛时间</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            把握每一个关键时间节点，提前规划，从容备赛
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 倒计时卡片 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {nextCompetition && (
              <div className="gradient-border p-1 h-full">
                <div className="bg-[#0a0a0f] rounded-xl p-8 h-full">
                  <div className="flex items-center gap-2 mb-6">
                    <Clock className="w-5 h-5 text-[var(--accent)]" />
                    <span className="text-[var(--accent)] font-medium">距离下一场比赛</span>
                  </div>
                  
                  <div className="mb-6">
                    <div className={`inline-block px-3 py-1 rounded-lg bg-gradient-to-r ${nextCompetition.color} text-white text-sm font-semibold mb-3`}>
                      {nextCompetition.type}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{nextCompetition.fullName}</h3>
                    <p className="text-gray-400">{formatDate(nextCompetition.startDate)}</p>
                  </div>

                  <CountdownTimer targetDate={nextCompetition.startDate} />

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-gray-400 text-sm mb-4">{nextCompetition.description}</p>
                    <button className="flex items-center gap-2 text-[var(--secondary)] hover:text-white transition-colors text-sm font-medium">
                      <Bell className="w-4 h-4" />
                      设置提醒
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* 月历视图 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="gradient-border p-1">
              <div className="bg-[#0a0a0f] rounded-xl p-6">
                {/* 月份导航 */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevMonth}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-400" />
                  </button>
                  <h3 className="text-xl font-bold text-white">
                    {currentMonth.getFullYear()}年{currentMonth.getMonth() + 1}月
                  </h3>
                  <button
                    onClick={nextMonth}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                {/* 当月比赛列表 */}
                <div className="space-y-3">
                  {monthCompetitions.length > 0 ? (
                    monthCompetitions.map((comp) => (
                      <div
                        key={comp.id}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className={`w-2 h-12 rounded-full bg-gradient-to-b ${comp.color}`} />
                        <div className="flex-grow">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-white">{comp.name}</span>
                            <span className="px-2 py-0.5 rounded text-xs bg-white/10 text-gray-400">
                              {comp.type}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm">
                            {formatDate(comp.startDate)}
                            {comp.endDate && ` - ${formatDate(comp.endDate)}`}
                          </p>
                        </div>
                        <Calendar className="w-5 h-5 text-gray-500" />
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p>本月暂无重要赛事</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 即将到来的比赛列表 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] rounded-full" />
            即将到来的比赛
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingCompetitions.map((comp, index) => (
              <div
                key={comp.id}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--primary)]/50 transition-all group"
              >
                <div className={`inline-block px-3 py-1 rounded-lg bg-gradient-to-r ${comp.color} text-white text-xs font-semibold mb-3`}>
                  {comp.level}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{comp.fullName}</h4>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  {formatDate(comp.startDate)}
                </div>
                <p className="text-gray-500 text-sm">{comp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            * 具体时间以官方通知为准，建议关注 CCF 官网获取最新信息
          </p>
        </motion.div>
      </div>
    </section>
  );
}








