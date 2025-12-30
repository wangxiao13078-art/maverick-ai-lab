"use client";

import { useEffect, useState } from "react";

interface RainDrop {
  id: number;
  char: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const codeChars = "01</>{}[]();=+*&|!?#@$%^~ABCDEFπλΣΩ∞∫∂∇";

export function CodeRain() {
  const [drops, setDrops] = useState<RainDrop[]>([]);

  useEffect(() => {
    const newDrops: RainDrop[] = [];
    const columns = Math.floor(window.innerWidth / 30);

    for (let i = 0; i < columns; i++) {
      newDrops.push({
        id: i,
        char: codeChars[Math.floor(Math.random() * codeChars.length)],
        left: (i / columns) * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 12 + Math.random() * 8,
      });
    }
    setDrops(newDrops);

    const interval = setInterval(() => {
      setDrops(prev => prev.map(drop => ({
        ...drop,
        char: codeChars[Math.floor(Math.random() * codeChars.length)],
      })));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
      {drops.map((drop) => (
        <span
          key={drop.id}
          className="code-rain-char absolute"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
            fontSize: `${drop.size}px`,
          }}
        >
          {drop.char}
        </span>
      ))}
    </div>
  );
}








