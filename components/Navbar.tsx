"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "首页", href: "#hero" },
  { name: "实验室模块", href: "#competitions" },
  { name: "课程体系", href: "#courses" },
  { name: "成功案例", href: "#success" },
  { name: "师资团队", href: "#teachers" },
  { name: "常见问题", href: "#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-[var(--primary)]/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
                <div className="relative bg-[#0a0a0f] p-2 rounded-xl border border-[var(--primary)]/50">
                  <Sparkles className="w-8 h-8 text-[var(--secondary)]" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold gradient-text">Maverick AI</span>
                <span className="block text-xs text-gray-400">智能体实验室</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] group-hover:w-3/4 transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.a
                href="#register"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-6 py-3 rounded-xl font-semibold text-white flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>立即报名</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0f]/98 backdrop-blur-xl pt-24 md:hidden"
          >
            <div className="flex flex-col items-center space-y-4 p-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl text-gray-300 hover:text-white py-3"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#register"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary px-8 py-4 rounded-xl font-semibold text-white mt-8"
              >
                立即报名
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}








