import OpenAI from "openai";

// 建议在 .env.local 中设置 DEEPSEEK_API_KEY
const apiKey = process.env.DEEPSEEK_API_KEY || "your-api-key-here";

export const deepseek = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: apiKey,
  dangerouslyAllowBrowser: true, // 仅用于 Demo，生产环境建议通过后端 API 中转
});

/**
 * 简单的 Agent 对话函数示例
 */
export async function chatWithAgent(message: string, history: any[] = []) {
  try {
    const response = await deepseek.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        {
          role: "system",
          content: "你是一个专业的 AI 实验室助教，擅长向青少年解释复杂的 AI 和 Agent 概念。请使用生动、易懂的语言，并经常使用类比。"
        },
        ...history,
        { role: "user", content: message }
      ],
      temperature: 0.7,
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error("DeepSeek API Error:", error);
    return "抱歉，实验室大脑暂时连接受阻，请检查网络设置或 API Key。";
  }
}

