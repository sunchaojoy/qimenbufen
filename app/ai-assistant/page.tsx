'use client';

import { useState } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  category?: string;
}

interface SuggestedQuestion {
  id: string;
  text: string;
  category: string;
  icon: string;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: '您好！我是您的奇门遁甲学习助手。我可以帮助您解答关于奇门遁甲的各种问题，包括基础理论、排盘方法、断局技巧等。请问有什么可以帮助您的吗？',
      timestamp: new Date().toISOString()
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const suggestedQuestions: SuggestedQuestion[] = [
    {
      id: '1',
      text: '什么是奇门遁甲？',
      category: '基础概念',
      icon: '📚'
    },
    {
      id: '2',
      text: '八门分别代表什么？',
      category: '符号系统',
      icon: '🎯'
    },
    {
      id: '3',
      text: '如何进行排盘？',
      category: '排盘方法',
      icon: '📊'
    },
    {
      id: '4',
      text: '用神如何选择？',
      category: '断局技巧',
      icon: '🔮'
    },
    {
      id: '5',
      text: '五行相生相克关系？',
      category: '基础理论',
      icon: '🌟'
    },
    {
      id: '6',
      text: '九星的具体含义？',
      category: '符号系统',
      icon: '⭐'
    }
  ];

  const categories = [
    { value: 'all', label: '全部问题', color: 'bg-gray-100 text-gray-800' },
    { value: '基础概念', label: '基础概念', color: 'bg-blue-100 text-blue-800' },
    { value: '符号系统', label: '符号系统', color: 'bg-green-100 text-green-800' },
    { value: '排盘方法', label: '排盘方法', color: 'bg-purple-100 text-purple-800' },
    { value: '断局技巧', label: '断局技巧', color: 'bg-amber-100 text-amber-800' },
    { value: '基础理论', label: '基础理论', color: 'bg-red-100 text-red-800' }
  ];

  const knowledgeBase: { [key: string]: string } = {
    '什么是奇门遁甲？': '奇门遁甲是中华优秀传统文化中最重要的预测学之一，被誉为"帝王之学"。它以易经八卦为基础，结合天文学、历法学、阴阳五行学说，形成了一套完整的时空预测体系。通过分析特定时间空间中的天、地、人、神四盘关系，来预测和指导各种事务的发展趋势。',

    '八门分别代表什么？': '奇门遁甲的八门分为吉门和凶门：\n\n**吉门：**\n- 休门：休息、安逸，宜休养生息\n- 生门：生长、发展，宜求财创业\n- 景门：景致、文书，宜考试求名\n- 开门：开启、顺利，宜出行开业\n\n**凶门：**\n- 伤门：伤害、争斗，宜捕猎讨债\n- 杜门：堵塞、隐匿，宜躲藏避灾\n- 死门：死亡、终结，宜丧葬执法\n- 惊门：惊恐、官司，宜诉讼惊敌',

    '如何进行排盘？': '奇门遁甲排盘的基本步骤如下：\n\n1. **确定时间**：确定预测的年、月、日、时（农历）\n2. **确定局数**：根据时间和节气确定使用阴遁还是阳遁，以及具体局数（1-9局）\n3. **排地盘**：排出六仪在九宫中的固定位置\n4. **排天盘**：根据局数排出天盘三奇六仪的位置\n5. **排九星**：排出九星在各宫的位置\n6. **排八门**：排出八门在八宫的位置\n7. **排八神**：排出八神在八宫的位置\n8. **检查验证**：检查排盘是否正确，验证关键信息\n\n初学者建议使用排盘软件，先理解原理再学习手工排盘。',

    '用神如何选择？': '用神是奇门遁甲预测的核心，根据预测内容的不同，选择相应的符号作为用神。常见的用神选择方法：\n\n**财运占断：**\n- 求财用神：戊土、生门\n\n**婚姻占断：**\n- 婚姻用神：乙庚、六合\n\n**事业占断：**\n- 事业用神：开门、值符\n\n**学业占断：**\n- 学业用神：天辅、景门\n\n**疾病占断：**\n- 疾病用神：天芮、死门\n\n**出行占断：**\n- 出行用神：景门、九天\n\n用神的状态、位置、与其他符号的关系是判断吉凶的主要依据。',

    '五行相生相克关系？': '五行相生和相克关系如下：\n\n**五行相生关系：**\n木生火 → 火生土 → 土生金 → 金生水 → 水生木\n\n**五行相克关系：**\n木克土 → 土克水 → 水克火 → 火克金 → 金克木\n\n**记忆技巧：**\n- 相生：顺时针方向循环\n- 相克：隔位相克（相隔一个位置）\n\n**在奇门遁甲中的应用：**\n- 判断符号间的生克关系\n- 分析运势的强弱变化\n- 选择合适的时间和行动\n- 判断人际关系的和谐程度'
  };

  const generateResponse = async (userMessage: string): Promise<string> => {
    const message = userMessage.trim();

    try {
      // 尝试调用真实的AI API
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          context: messages.slice(-4).map(m => ({ role: m.role, content: m.content }))
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.response;
      }
    } catch (error) {
      console.log('API调用失败，使用本地知识库');
    }

    // 如果API调用失败，回退到本地知识库
    // 直接匹配知识库
    for (const [question, answer] of Object.entries(knowledgeBase)) {
      if (message.includes(question.slice(0, 6)) || question.includes(message.slice(0, 6))) {
        return answer;
      }
    }

    // 关键词匹配
    if (message.includes('八门') || message.includes('门')) {
      return knowledgeBase['八门分别代表什么？'];
    }
    if (message.includes('排盘') || message.includes('排')) {
      return knowledgeBase['如何进行排盘？'];
    }
    if (message.includes('用神')) {
      return knowledgeBase['用神如何选择？'];
    }
    if (message.includes('五行')) {
      return knowledgeBase['五行相生相克关系？'];
    }
    if (message.includes('奇门遁甲') || message.includes('什么是')) {
      return knowledgeBase['什么是奇门遁甲？'];
    }

    // 默认回复
    return `感谢您的提问！关于"${message}"这个问题，我建议您可以：

1. 在我们的术语词典中搜索相关概念
2. 查看相关的学习模块和案例分析
3. 在学习社区中向其他学习者请教

如果您有更具体的问题，比如关于八门、九星、排盘方法等，我很乐意为您详细解答！`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    setIsTyping(true);

    try {
      // 调用异步响应生成函数
      const response = await generateResponse(currentInput);
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('生成回复失败:', error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '抱歉，我遇到了一些问题。请稍后再试，或者尝试重新表述您的问题。',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputMessage(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
  };

  const filteredQuestions = selectedCategory === 'all'
    ? suggestedQuestions
    : suggestedQuestions.filter(q => q.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* 头部 */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">AI学习助手</h1>
                <p className="text-amber-100">智能问答，实时解答您的学习疑惑</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-amber-200">在线状态</div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">服务正常</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* 问题分类 */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-lg font-bold mb-4 text-gray-800">快速提问</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map(category => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.value
                      ? category.color
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* 建议问题 */}
          {messages.length <= 1 && (
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-lg font-bold mb-4 text-gray-800">您可能想问：</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {filteredQuestions.map(question => (
                  <button
                    key={question.id}
                    onClick={() => handleSuggestedQuestion(question.text)}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors text-left"
                  >
                    <span className="text-2xl">{question.icon}</span>
                    <span className="font-medium text-gray-800">{question.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 对话区域 */}
          <div className="bg-white rounded-xl shadow-lg">
            <div className="border-b">
              <div className="p-6 max-h-96 overflow-y-auto">
                {messages.map(message => (
                  <div
                    key={message.id}
                    className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
                  >
                    <div className={`inline-block max-w-lg ${
                      message.role === 'user'
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    } rounded-lg px-4 py-3`}>
                      <div className="whitespace-pre-line">{message.content}</div>
                    </div>
                    <div className={`text-xs text-gray-500 mt-1 ${
                      message.role === 'user' ? 'text-right' : 'text-left'
                    }`}>
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="text-left mb-4">
                    <div className="inline-block bg-gray-100 text-gray-800 rounded-lg px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 输入区域 */}
            <div className="p-6">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="请输入您的问题..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isTyping || !inputMessage.trim()}
                  className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  发送
                </button>
              </div>
            </div>
          </div>

          {/* 功能说明 */}
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 border border-blue-200">
            <h3 className="text-lg font-bold mb-4 text-blue-800">使用提示</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>可以直接输入问题，我会根据知识库为您解答</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>支持关于奇门遁甲各个方面的提问</span>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>点击建议问题可以快速获取答案</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>可以连续提问，我会记住对话上下文</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}