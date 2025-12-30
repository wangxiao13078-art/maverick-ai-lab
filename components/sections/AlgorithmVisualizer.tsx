"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, ChevronRight } from "lucide-react";

const algorithms = [
  {
    id: "bubble",
    name: "梯度下降",
    description: "通过不断迭代，寻找损失函数的最小值，让 AI 模型越来越精准",
    complexity: "Loss Optimized",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "selection",
    name: "特征提取", 
    description: "从原始数据中筛选出最有价值的信息，降低噪声干扰",
    complexity: "Feature Scored",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "insertion",
    name: "权重调整",
    description: "像微调天平一样，根据反馈不断优化神经元之间的连接强度",
    complexity: "Weight Balanced",
    color: "from-amber-500 to-orange-500",
  },
];

export function AlgorithmVisualizer() {
  const [selectedAlgo, setSelectedAlgo] = useState(algorithms[0]);
  const [array, setArray] = useState<number[]>([]);
  const [comparing, setComparing] = useState<number[]>([]);
  const [sorted, setSorted] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(300);
  const stopRef = useRef(false);

  // 生成随机数组
  const generateArray = () => {
    const newArray = Array.from({ length: 12 }, () => Math.floor(Math.random() * 80) + 20);
    setArray(newArray);
    setComparing([]);
    setSorted([]);
    stopRef.current = false;
  };

  useEffect(() => {
    generateArray();
  }, []);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  // 冒泡排序
  const bubbleSort = async () => {
    const arr = [...array];
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (stopRef.current) return;
        
        setComparing([j, j + 1]);
        await sleep(speed);
        
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
        }
      }
      setSorted(prev => [...prev, n - 1 - i]);
    }
    setSorted(Array.from({ length: n }, (_, i) => i));
    setComparing([]);
  };

  // 选择排序
  const selectionSort = async () => {
    const arr = [...array];
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      
      for (let j = i + 1; j < n; j++) {
        if (stopRef.current) return;
        
        setComparing([minIdx, j]);
        await sleep(speed);
        
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      
      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        setArray([...arr]);
      }
      setSorted(prev => [...prev, i]);
    }
    setSorted(Array.from({ length: n }, (_, i) => i));
    setComparing([]);
  };

  // 插入排序
  const insertionSort = async () => {
    const arr = [...array];
    const n = arr.length;
    
    setSorted([0]);
    
    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;
      
      while (j >= 0 && arr[j] > key) {
        if (stopRef.current) return;
        
        setComparing([j, j + 1]);
        await sleep(speed);
        
        arr[j + 1] = arr[j];
        setArray([...arr]);
        j--;
      }
      
      arr[j + 1] = key;
      setArray([...arr]);
      setSorted(prev => [...prev, i]);
    }
    setComparing([]);
  };

  const startSort = async () => {
    setIsRunning(true);
    stopRef.current = false;
    setSorted([]);
    
    switch (selectedAlgo.id) {
      case "bubble":
        await bubbleSort();
        break;
      case "selection":
        await selectionSort();
        break;
      case "insertion":
        await insertionSort();
        break;
    }
    
    setIsRunning(false);
  };

  const stopSort = () => {
    stopRef.current = true;
    setIsRunning(false);
  };

  const reset = () => {
    stopRef.current = true;
    setIsRunning(false);
    generateArray();
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[120px]" />
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
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary-light)] text-sm font-medium mb-4">
            🔬 AI 模型演练
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            看得见的<span className="gradient-text">模型演化</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            选择一个 AI 训练策略，看看数据是如何在算法驱动下变得有序且具备智能的
          </p>
        </motion.div>

        {/* 算法选择 */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {algorithms.map((algo) => (
            <button
              key={algo.id}
              onClick={() => {
                if (!isRunning) {
                  setSelectedAlgo(algo);
                  reset();
                }
              }}
              disabled={isRunning}
              className={`px-6 py-3 rounded-xl transition-all ${
                selectedAlgo.id === algo.id
                  ? `bg-gradient-to-r ${algo.color} text-white shadow-lg`
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              } ${isRunning ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <div className="font-medium">{algo.name}</div>
              <div className="text-xs opacity-75">{algo.complexity}</div>
            </button>
          ))}
        </div>

        {/* 算法说明 */}
        <motion.div
          key={selectedAlgo.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <p className="text-gray-300 flex items-center justify-center gap-2">
            <ChevronRight className="w-4 h-4 text-[var(--secondary)]" />
            {selectedAlgo.description}
          </p>
        </motion.div>

        {/* 可视化区域 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="gradient-border p-1 mb-8"
        >
          <div className="bg-[#0a0a0f] rounded-xl p-8">
            {/* 数组可视化 */}
            <div className="flex items-end justify-center gap-2 h-64 mb-8">
              {array.map((value, index) => (
                <motion.div
                  key={index}
                  layout
                  className={`w-12 rounded-t-lg transition-colors duration-200 flex items-end justify-center pb-2 text-xs font-mono text-white ${
                    sorted.includes(index)
                      ? "bg-gradient-to-t from-green-500 to-emerald-400"
                      : comparing.includes(index)
                      ? "bg-gradient-to-t from-amber-500 to-yellow-400"
                      : "bg-gradient-to-t from-[var(--primary)] to-[var(--primary-light)]"
                  }`}
                  style={{ height: `${value}%` }}
                >
                  {value}
                </motion.div>
              ))}
            </div>

            {/* 图例 */}
            <div className="flex justify-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]" />
                <span className="text-gray-400 text-sm">原始权重</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-r from-amber-500 to-yellow-400" />
                <span className="text-gray-400 text-sm">优化中</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-r from-green-500 to-emerald-400" />
                <span className="text-gray-400 text-sm">已收敛</span>
              </div>
            </div>

            {/* 速度控制 */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-gray-400 text-sm">速度:</span>
              <input
                type="range"
                min="50"
                max="500"
                value={550 - speed}
                onChange={(e) => setSpeed(550 - parseInt(e.target.value))}
                className="w-32 accent-[var(--secondary)]"
                disabled={isRunning}
              />
              <span className="text-gray-400 text-sm w-12">{speed < 150 ? "快" : speed < 300 ? "中" : "慢"}</span>
            </div>

            {/* 控制按钮 */}
            <div className="flex justify-center gap-4">
              <button
                onClick={reset}
                disabled={isRunning}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all disabled:opacity-50"
              >
                <RotateCcw className="w-4 h-4" />
                重新生成
              </button>
              {isRunning ? (
                <button
                  onClick={stopSort}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all"
                >
                  <Pause className="w-4 h-4" />
                  停止
                </button>
              ) : (
                <button
                  onClick={startSort}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl btn-primary text-white font-medium"
                >
                  <Play className="w-4 h-4" />
                  开始训练
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* 学习提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm">
            这些可视化展示了 AI 模型优化的基本思想。在我们的 Agent 课程中，你将亲手构建更复杂的智能系统！
          </p>
        </motion.div>
      </div>
    </section>
  );
}








