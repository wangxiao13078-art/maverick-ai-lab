"use client";

import { Sparkles, MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-[#050508] border-t border-[var(--primary)]/20">
      {/* 装饰背景 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & 简介 */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-xl blur-lg opacity-50" />
                <div className="relative bg-[#0a0a0f] p-2 rounded-xl border border-[var(--primary)]/50">
                  <Sparkles className="w-8 h-8 text-[var(--secondary)]" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold gradient-text">Maverick AI</span>
                <span className="block text-xs text-gray-400">智能体实验室</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              专注于青少年 AI 素养与 Agent 智能体架构教学，帮助学生在 AI 时代掌握核心技术与思维，开启未来智能之路。
            </p>
            <div className="flex space-x-4">
              {["微信", "GitHub", "知乎"].map((social) => (
                <div
                  key={social}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--primary)]/50 transition-all cursor-pointer"
                >
                  <span className="text-xs">{social}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center">
              <span className="w-1 h-4 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] rounded-full mr-2" />
              快速链接
            </h3>
            <ul className="space-y-3">
              {[
                { name: "实验室模块", href: "#competitions" },
                { name: "课程体系", href: "#courses" },
                { name: "成功案例", href: "#success" },
                { name: "师资团队", href: "#teachers" },
                { name: "预约体验", href: "#register" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--secondary)] mr-0 group-hover:mr-2 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 技术模块 */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center">
              <span className="w-1 h-4 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] rounded-full mr-2" />
              实验室模块
            </h3>
            <ul className="space-y-3">
              {[
                "Prompt Engineering",
                "Agent 架构设计",
                "RAG 知识库技术",
                "多智能体协作",
                "私有化模型部署",
              ].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]/50 mr-2" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center">
              <span className="w-1 h-4 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] rounded-full mr-2" />
              联系我们
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[var(--secondary)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">北京市海淀区中关村科技园 Maverick AI 实验室</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[var(--secondary)]" />
                <span className="text-gray-400 text-sm">400-AI-LAB-888</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[var(--secondary)]" />
                <span className="text-gray-400 text-sm">lab@maverick.ai</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[var(--secondary)]" />
                <span className="text-gray-400 text-sm">周一至周日 10:00-22:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 Maverick AI Lab. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                服务条款
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                京ICP备XXXXXXXX号
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}








