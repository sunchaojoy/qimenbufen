import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "专业知识体系 - 奇门遁甲基础知识学习平台",
  description: "系统化学习奇门遁甲专业知识，基于权威教材和实践经验",
  keywords: "奇门遁甲, 基础理论, 符号系统, 排盘方法, 断局技巧",
  authors: [{ name: "奇门遁甲学习平台" }],
  openGraph: {
    title: "专业知识体系 - 奇门遁甲基础知识学习平台",
    description: "系统化学习奇门遁甲专业知识",
    type: "website",
    locale: "zh_CN",
  },
};

export default function KnowledgeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">专业知识体系</h1>
              <p className="text-amber-100">基于权威教材的奇门遁甲专业知识</p>
            </div>
            <a
              href="/"
              className="bg-white/20 text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-colors font-medium"
            >
              ← 返回首页
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-gray-400">
            <p>专业知识内容基于权威奇门遁甲教材整理，仅供学习参考</p>
            <p className="mt-2">© 2024 奇门遁甲基础知识学习平台. 传承文化，启迪智慧.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}