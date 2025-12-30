"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlowCard } from "../ui/GlowCard";
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle,
  User,
  BookOpen,
  MessageSquare,
  Sparkles
} from "lucide-react";

export function Register() {
  const [formData, setFormData] = useState({
    studentName: "",
    grade: "",
    parentName: "",
    phone: "",
    course: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 模拟提交
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="register" className="relative py-32 overflow-hidden bg-[#050508]">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent-pink)]/10 rounded-full blur-[100px]" />
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
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--accent-pink)]/10 border border-[var(--accent-pink)]/30 text-[var(--accent-pink)] text-sm font-medium mb-4">
            🚀 预约体验
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            让孩子构建<span className="gradient-text">自己的智能体</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            填写信息预约免费 Agent 体验课，亲身感受 AI 的魅力
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 报名表单 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GlowCard>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 学生姓名 */}
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      学生姓名 *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                      placeholder="请输入学生姓名"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors outline-none"
                    />
                  </div>

                  {/* 年级 */}
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">
                      <BookOpen className="w-4 h-4 inline mr-1" />
                      当前年级 *
                    </label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors outline-none appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#1a1a2e]">请选择年级</option>
                      <option value="小学三年级" className="bg-[#1a1a2e]">小学三年级</option>
                      <option value="小学四年级" className="bg-[#1a1a2e]">小学四年级</option>
                      <option value="小学五年级" className="bg-[#1a1a2e]">小学五年级</option>
                      <option value="小学六年级" className="bg-[#1a1a2e]">小学六年级</option>
                      <option value="初一" className="bg-[#1a1a2e]">初一</option>
                      <option value="初二" className="bg-[#1a1a2e]">初二</option>
                      <option value="初三" className="bg-[#1a1a2e]">初三</option>
                      <option value="高一" className="bg-[#1a1a2e]">高一</option>
                      <option value="高二" className="bg-[#1a1a2e]">高二</option>
                      <option value="高三" className="bg-[#1a1a2e]">高三</option>
                    </select>
                  </div>

                  {/* 家长姓名 */}
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      家长姓名 *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      placeholder="请输入家长姓名"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors outline-none"
                    />
                  </div>

                  {/* 联系电话 */}
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      联系电话 *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="请输入手机号码"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors outline-none"
                    />
                  </div>
                </div>

                {/* 意向课程 */}
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    <Sparkles className="w-4 h-4 inline mr-1" />
                    意向课程
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors outline-none appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#1a1a2e]">请选择意向课程</option>
                    <option value="入门班" className="bg-[#1a1a2e]">L1 入门班 - 编程启蒙</option>
                    <option value="提高班" className="bg-[#1a1a2e]">L2 提高班 - 算法进阶</option>
                    <option value="精英班" className="bg-[#1a1a2e]">L3 精英班 - 竞赛冲刺</option>
                    <option value="集训班" className="bg-[#1a1a2e]">L4 集训班 - NOI 特训</option>
                    <option value="不确定" className="bg-[#1a1a2e]">不确定，需要咨询</option>
                  </select>
                </div>

                {/* 留言 */}
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-1" />
                    备注留言
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="请填写您的具体需求或问题（选填）"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors outline-none resize-none"
                  />
                </div>

                {/* 提交按钮 */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                  className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center space-x-2 transition-all ${
                    isSubmitted
                      ? "bg-green-500"
                      : "btn-primary"
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>提交成功！我们会尽快联系您</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>提交报名信息</span>
                    </>
                  )}
                </motion.button>

                <p className="text-gray-500 text-xs text-center">
                  提交即表示您同意我们的 <a href="#" className="text-[var(--secondary)]">隐私政策</a> 和 <a href="#" className="text-[var(--secondary)]">服务条款</a>
                </p>
              </form>
            </GlowCard>
          </motion.div>

          {/* 联系信息 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* 联系方式卡片 */}
            <GlowCard>
              <h3 className="text-xl font-bold text-white mb-6">联系方式</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[var(--primary-light)]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">咨询热线</p>
                    <p className="text-white font-semibold">400-888-8888</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--secondary)]/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[var(--secondary)]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">邮箱地址</p>
                    <p className="text-white font-semibold">info@codingstar.edu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">服务时间</p>
                    <p className="text-white font-semibold">周一至周日 9:00-21:00</p>
                  </div>
                </div>
              </div>
            </GlowCard>

            {/* 校区地址 */}
            <GlowCard>
              <h3 className="text-xl font-bold text-white mb-6">校区地址</h3>
              <div className="space-y-4">
                {[
                  { city: "北京总部", address: "海淀区中关村科技园XX号楼3层" },
                  { city: "上海校区", address: "浦东新区张江高科技园区XX路XX号" },
                  { city: "深圳校区", address: "南山区科技园XX大厦12层" },
                ].map((location) => (
                  <div key={location.city} className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[var(--secondary)] mt-0.5" />
                    <div>
                      <p className="text-white font-medium">{location.city}</p>
                      <p className="text-gray-400 text-sm">{location.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>

            {/* 微信二维码 */}
            <GlowCard>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">扫码添加客服微信</h3>
                <div className="w-40 h-40 mx-auto bg-white rounded-xl flex items-center justify-center mb-4">
                  <div className="text-gray-400 text-center">
                    <div className="text-4xl mb-2">📱</div>
                    <div className="text-xs">微信二维码</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">微信号：coding_star</p>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}








