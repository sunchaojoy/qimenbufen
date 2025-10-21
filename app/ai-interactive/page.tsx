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
      content: '您好！我是您的奇门遁甲专业AI导师 🌟\n\n我专精于奇门遁甲全领域教学，可以为您提供：\n\n📚 **系统学习指导** - 从入门到精通的完整学习路径\n🎯 **专业知识解答** - 基础理论、符号系统、排盘断局\n📊 **实战案例分析** - 真实案例演示和应用技巧\n🔮 **个性化辅导** - 根据您的水平调整教学深度\n\n我是基于GLM-4.6大模型训练的专业助手，具备深厚的奇门遁甲理论功底。\n\n请告诉我您当前的学习基础，我会为您量身定制学习方案！',
      timestamp: new Date().toISOString()
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showLearningProgress, setShowLearningProgress] = useState(false);

  const suggestedQuestions: SuggestedQuestion[] = [
    {
      id: '1',
      text: '我是初学者，请给我一个系统的学习路线',
      category: '学习规划',
      icon: '🗺️'
    },
    {
      id: '2',
      text: '详细解释八门九星八神的作用和含义',
      category: '符号系统',
      icon: '🎯'
    },
    {
      id: '3',
      text: '请用一个实际案例演示排盘和断局的完整过程',
      category: '实战演练',
      icon: '📊'
    },
    {
      id: '4',
      text: '不同预测类型（财运、婚姻、事业）的用神选择方法',
      category: '断局技巧',
      icon: '🔮'
    },
    {
      id: '5',
      text: '五行生克制化的具体应用实例',
      category: '基础理论',
      icon: '🌟'
    },
    {
      id: '6',
      text: '如何判断一个奇门局的吉凶格局？',
      category: '格局分析',
      icon: '⚖️'
    },
    {
      id: '7',
      text: '天干地支在奇门遁甲中的重要作用',
      category: '基础理论',
      icon: '📅'
    },
    {
      id: '8',
      text: '请分析一个历史奇门遁甲预测案例',
      category: '案例分析',
      icon: '📜'
    },
    {
      id: '9',
      text: '现代奇门遁甲的应用和注意事项',
      category: '现代应用',
      icon: '🏢'
    },
    {
      id: '10',
      text: '学习奇门遁甲常见的误区和纠正方法',
      category: '学习指导',
      icon: '⚠️'
    }
  ];

  const categories = [
    { value: 'all', label: '全部问题', color: 'bg-gray-100 text-gray-800' },
    { value: '学习规划', label: '学习规划', color: 'bg-indigo-100 text-indigo-800' },
    { value: '基础理论', label: '基础理论', color: 'bg-blue-100 text-blue-800' },
    { value: '符号系统', label: '符号系统', color: 'bg-green-100 text-green-800' },
    { value: '排盘方法', label: '排盘方法', color: 'bg-purple-100 text-purple-800' },
    { value: '断局技巧', label: '断局技巧', color: 'bg-amber-100 text-amber-800' },
    { value: '实战演练', label: '实战演练', color: 'bg-red-100 text-red-800' },
    { value: '格局分析', label: '格局分析', color: 'bg-cyan-100 text-cyan-800' },
    { value: '案例分析', label: '案例分析', color: 'bg-rose-100 text-rose-800' },
    { value: '现代应用', label: '现代应用', color: 'bg-teal-100 text-teal-800' },
    { value: '学习指导', label: '学习指导', color: 'bg-orange-100 text-orange-800' }
  ];

  const knowledgeBase: { [key: string]: string } = {
    '什么是奇门遁甲？': '奇门遁甲是中华优秀传统文化中最重要的预测学之一，被誉为"帝王之学"。它以易经八卦为基础，结合天文学、历法学、阴阳五行学说，形成了一套完整的时空预测体系。通过分析特定时间空间中的天、地、人、神四盘关系，来预测和指导各种事务的发展趋势。\n\n**核心构成：**\n- **天盘**：九星、三奇六仪的动态分布\n- **地盘**：六仪的固定位置，基础框架\n- **人盘**：八门的位置，代表人事状态\n- **神盘**：八神的排列，代表神秘力量\n\n**学习价值：**\n- 培养系统思维和时空观念\n- 增强对传统文化的理解\n- 提升分析问题和决策能力',

    '我是初学者，请给我一个系统的学习路线': '作为奇门遁甲初学者，建议按照以下系统路线学习：\n\n**第一阶段：基础知识（1-2个月）**\n1. **理论基础**：阴阳五行、天干地支、八卦九宫\n2. **符号认知**：八门、九星、八神、三奇六仪的基本含义\n3. **基本概念**：什么是奇门局、四盘结构、用神概念\n\n**第二阶段：排盘方法（2-3个月）**\n1. **排盘原理**：阴阳遁局、时家奇门概念\n2. **排盘步骤**：从确定时间到完整排盘的8个步骤\n3. **工具使用**：学会使用排盘软件验证结果\n\n**第三阶段：断局基础（3-4个月）**\n1. **用神选择**：不同预测类型的用神确定方法\n2. **基本分析**：宫位含义、符号组合、生克关系\n3. **简单断局**：从单一宫位开始分析\n\n**第四阶段：实战应用（4-6个月）**\n1. **分项占断**：财运、婚姻、事业等专项预测\n2. **案例学习**：分析经典案例，总结经验规律\n3. **实践验证**：为亲友提供参考性预测\n\n**学习建议：**\n- 每天坚持学习1-2小时\n- 理论与实践相结合\n- 多做笔记，建立自己的知识体系\n- 加入学习群体，与他人交流讨论\n- 保持理性态度，避免迷信',

    '八门九星八神的作用和含义': '奇门遁甲的八门九星八神构成了完整的分析体系：\n\n**八门（人事状态）：**\n**吉门：**\n- 休门：休息、安逸、休养生息\n- 生门：生长、发展、求财创业\n- 景门：景致、文书、考试求名\n- 开门：开启、顺利、出行开业\n\n**凶门：**\n- 伤门：伤害、争斗、捕猎讨债\n- 杜门：堵塞、隐匿、躲藏避灾\n- 死门：死亡、终结、丧葬执法\n- 惊门：惊恐、官司、诉讼惊敌\n\n**九星（天时影响）：**\n- 天蓬星（水）：智慧、谋略、暗中行事\n- 天芮星（土）：病灾、阻碍、求医问药\n- 天冲星（木）：冲动、激烈、武职征讨\n- 天辅星（木）：辅助、文昌、求学考试\n- 天禽星（土）：中正、威严、管理统御\n- 天心星（金）：医药、将帅、治病领导\n- 天柱星（金）：破坏、口舌、修筑建造\n- 天任星（土）：担当、收获、农业生产\n- 天英星（火）：文明、光明、文化艺术\n\n**八神（神助力量）：**\n- 值符：百神之首，统领八神\n- 螣蛇：虚惊、变化、文书缠绕\n- 太阴：隐秘、阴私、女性之事\n- 六合：和合、婚姻、合作中介\n- 白虎：凶猛、争斗、官司血光\n- 玄武：盗贼、欺骗、暗昧不明\n- 九地：静坤、稳定、固守待时\n- 九天：飞扬、升迁、远行出征',

    '请用一个实际案例演示排盘和断局的完整过程': '让我用一个求财预测的案例来演示完整的奇门遁甲应用过程：\n\n**案例背景：**\n某商人想在2024年3月15日上午10点开店，预测生意前景。\n\n**第一步：确定时间信息**\n- 公历：2024年3月15日10:00\n- 农历：甲辰年二月初六日巳时\n- 干支：甲辰年 丁卯月 丁亥日 乙巳时\n\n**第二步：确定局数**\n- 节气：春分后，用阳遁\n- 根据时干乙巳和日干丁亥，确定为阳遁三局\n\n**第三步：排盘结果**\n- 天盘：乙奇在离九宫，丙奇在坤二宫，丁奇在兑七宫\n- 地盘：戊土在坎一宫，己土在坤二宫...\n- 九星：天英星在离宫，天芮星在坤宫...\n- 八门：开门在乾宫，生门在艮宫，景门在离宫\n- 八神：值符在离宫，螣蛇在坎宫...\n\n**第四步：用神选择**\n- 求财用神：戊土（财星）+ 生门（财源）\n- 店主用神：日干丁火\n- 店铺用神：值符和值使门\n\n**第五步：局象分析**\n**有利因素：**\n- 戊土财星在坎宫，得水生，财源充沛\n- 生门在艮宫，土居土位，财运稳定\n- 日干丁火在离宫，得位有力\n- 值符临天英星，店铺有声望\n\n**不利因素：**\n- 戊土受玄武神，需防盗贼\n- 丙奇在坤宫受制，合作伙伴关系需谨慎\n- 杜门在震宫，文书合同易出问题\n\n**第六步：综合判断**\n**财运评估：★★★★☆**\n- 开店前3个月较困难，需谨慎经营\n- 6个月后财运逐渐上升\n- 1年后生意稳定，收益良好\n\n**具体建议：**\n1. 加强防盗措施，避免财物损失\n2. 合作合同要仔细审查\n3. 初期投资要适度，不可冒进\n4. 注重声誉建设，诚信经营\n5. 6个月后可考虑扩大经营\n\n**注意事项：**\n- 此预测仅供参考，实际经营还需结合市场分析\n- 建议咨询专业师傅进行更详细的指导\n- 保持理性经营态度，不可过分依赖预测',

    '不同预测类型的用神选择方法': '奇门遁甲中不同预测类型的用神选择有明确规律：\n\n**财运预测：**\n- **主要用神**：戊土（正财）、己土（偏财）\n- **辅助用神**：生门（财源）、天心星（生意）\n- **判断标准**：用神旺相、得生、无克制为吉\n\n**婚姻感情：**\n- **男性用神**：庚金（男命）+ 乙木（女命）\n- **女性用神**：乙木（女命） + 庚金（男命）\n- **辅助用神**：六合神（婚姻）、桃花位\n- **关键宫位**：夫妻宫、财帛宫、子女宫\n\n**事业前程：**\n- **主要用神**：开门（事业）、值符（领导）\n- **辅助用神**：年干（上级）、月干（同事）\n- **观察重点**：官禄宫、天乙贵人\n\n**学业考试：**\n- **主要用神**：天辅星（文昌）、景门（考试）\n- **辅助用神**：丁奇（智慧）、巽宫（学业）\n- **判断要点**：用神得令、无冲克为佳\n\n**健康疾病：**\n- **主要用神**：天芮星（病星）、死门（疾病）\n- **辅助用神**：天心星（医药）、乙奇（医生）\n- **分析方法**：病星宫位与命宫关系\n\n**出行远行：**\n- **主要用神**：景门（道路）、九天（远行）\n- **辅助用神**：马星、驿马宫\n- **判断标准**：用神旺相、无阻隔为利\n\n**房产土地：**\n- **主要用神**：坤宫（房产）、艮宫（土地）\n- **辅助用神**：戊土（房产）、死门（地产）\n- **分析要点**：宫位生克、星门组合\n\n**用神选择的基本原则：**\n1. **相关性**：用神必须与预测内容直接相关\n2. **代表性**：选择最能代表核心问题的符号\n3. **综合性**：结合多个用神进行综合分析\n4. **灵活性**：根据具体情况灵活调整用神\n\n**用神状态判断：**\n- **旺相**：用神得时令、有生扶为吉\n- **休囚**：用神失时令、受克制为凶\n- **得位**：用神在其适宜宫位为佳\n- **失位**：用神在不适宜宫位为差'
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
      let errorMessage = '抱歉，我遇到了一些技术问题。请稍后再试，或者尝试重新表述您的问题。';

      // 根据错误类型提供更具体的提示
      if (error instanceof Error) {
        if (error.message.includes('余额不足')) {
          errorMessage = '⚠️ **AI服务余额不足**\n\n很抱歉，当前AI服务余额不足，无法提供智能回答。\n\n您可以：\n• 稍后再试\n• 使用下方的快捷问题查看本地知识库\n• 浏览我们的学习资料获取答案\n\n联系管理员充值后即可恢复正常使用。';
        } else if (error.message.includes('配置错误')) {
          errorMessage = '⚠️ **AI服务配置错误**\n\nAI服务配置出现问题，请联系管理员检查配置。\n\n在修复期间，您仍可以使用本地知识库功能学习。';
        }
      }

      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: errorMessage,
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