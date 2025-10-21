'use client';

import { useState } from 'react';

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
  time: string;
  date: string;
  author: string;
  description: string;
  tags: string[];
  content: {
    background: string;
    question: string;
    analysis: string;
    result: string;
    lesson: string;
  };
  chart?: {
    time: string;
    dunType: string;
    chartData: any;
  };
}

export default function CaseLibrary() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: '商业投资决策分析',
      category: '商业决策',
      difficulty: 'basic',
      time: '30分钟',
      date: '2024-01-15',
      author: '张志春',
      description: '某企业家面临重大投资决策，通过奇门遁甲分析项目可行性，最终做出正确选择。',
      tags: ['投资', '商业', '决策'],
      content: {
        background: '某企业家计划投资500万元建设新能源项目，需要判断项目前景和投资时机。',
        question: '该项目是否值得投资？何时为最佳投资时机？',
        analysis: '通过排盘分析，值符天心星落乾六宫，生门在艮八宫，戊土财星得令，项目前景良好。',
        result: '建议投资，选择在春季项目启动最为有利。项目最终获得良好收益。',
        lesson: '奇门遁甲在商业决策中能提供重要参考，但要结合实际情况综合考虑。'
      }
    },
    {
      id: 2,
      title: '婚姻匹配分析',
      category: '婚姻情感',
      difficulty: 'intermediate',
      time: '45分钟',
      date: '2024-02-20',
      author: '王凤麟',
      description: '一对情侣通过奇门遁甲分析婚姻匹配度，解决感情困惑。',
      tags: ['婚姻', '感情', '匹配'],
      content: {
        background: '一对恋爱三年的情侣准备结婚，但双方家庭对这门婚事有所顾虑。',
        question: '两人是否适合结婚？婚姻前景如何？',
        analysis: '乙庚合化，六合神临震宫，天喜星照命，婚姻匹配度很高，适合结婚。',
        result: '建议在秋季举行婚礼，婚后生活和谐美满。',
        lesson: '奇门遁甲在婚姻分析中注重天干地支的配合关系，六合神的作用很重要。'
      }
    },
    {
      id: 3,
      title: '疾病健康预测',
      category: '健康医疗',
      difficulty: 'advanced',
      time: '60分钟',
      date: '2024-03-10',
      author: '刘文元',
      description: '通过奇门遁甲分析疾病原因和康复时机，提供健康建议。',
      tags: ['健康', '疾病', '康复'],
      content: {
        background: '一位中年男性长期患病，多方治疗效果不佳，寻求奇门遁甲分析。',
        question: '疾病根源是什么？何时康复最有利？',
        analysis: '天芮星落坤宫，死门临之，病根在脾胃功能失调。天心星可医，宜在夏季调理。',
        result: '按照建议进行中医调理，三个月后身体状况明显好转。',
        lesson: '健康预测要结合天芮星、死门等符号，同时考虑时令因素对康复的影响。'
      }
    },
    {
      id: 4,
      title: '考试升学指导',
      category: '学业考试',
      difficulty: 'basic',
      time: '25分钟',
      date: '2024-04-05',
      author: '杜新会',
      description: '高考生通过奇门遁甲选择专业和学校，最终被理想院校录取。',
      tags: ['考试', '升学', '专业'],
      content: {
        background: '高三学生面临高考志愿填报，对专业选择和学校选择存在困惑。',
        question: '应该选择什么专业？哪所学校更适合？',
        analysis: '天辅星落离九宫，景门照应，适合选择文理结合的专业，南方院校更有利。',
        result: '选择了计算机科学专业，被南方某重点大学录取。',
        lesson: '学业分析要重点关注天辅星和景门的位置，结合个人兴趣特长。'
      }
    },
    {
      id: 5,
      title: '房产投资分析',
      category: '房地产',
      difficulty: 'intermediate',
      time: '40分钟',
      date: '2024-05-12',
      author: '肖殿中',
      description: '投资者通过奇门遁甲分析房产投资时机和位置选择。',
      tags: ['房产', '投资', '风水'],
      content: {
        background: '投资者计划购买房产作为投资，需要判断最佳购买时机和位置选择。',
        question: '何时购买房产最合适？哪个位置更有升值潜力？',
        analysis: '生门落巽四宫，戊土财星旺相，东南方向房产升值潜力大，夏季购买最佳。',
        result: '在6月份购买了东南方向的房产，一年后升值30%。',
        lesson: '房产投资分析要结合八门中的生门，同时考虑地理位置和购买时机。'
      }
    },
    {
      id: 6,
      title: '官司诉讼预测',
      category: '法律事务',
      difficulty: 'advanced',
      time: '50分钟',
      date: '2024-06-18',
      author: '幺学声',
      description: '企业通过奇门遁甲分析官司胜负，制定应对策略。',
      tags: ['官司', '法律', '纠纷'],
      content: {
        background: '某企业面临合同纠纷诉讼，需要预测诉讼结果并制定应对策略。',
        question: '官司胜负如何？应该采取什么策略？',
        analysis: '惊门落坎一宫，白虎临之，诉讼过程会有波折，但最终能胜诉。',
        result: '经历3个月的诉讼过程，最终法院判决企业胜诉，获得赔偿。',
        lesson: '官司分析要注意惊门和白虎的位置，同时考虑值符值使的配合。'
      }
    }
  ];

  const categories = ['all', '商业决策', '婚姻情感', '健康医疗', '学业考试', '房地产', '法律事务'];
  const difficulties = ['all', 'basic', 'intermediate', 'advanced'];

  const difficultyColors = {
    basic: 'bg-green-100 text-green-800',
    intermediate: 'bg-amber-100 text-amber-800',
    advanced: 'bg-red-100 text-red-800'
  };

  const difficultyText = {
    basic: '基础',
    intermediate: '进阶',
    advanced: '高级'
  };

  const filteredCases = caseStudies.filter(case_ => {
    const matchesCategory = selectedCategory === 'all' || case_.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || case_.difficulty === selectedDifficulty;
    const matchesSearch = case_.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         case_.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         case_.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* 头部 */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">案例库</h1>
              <p className="text-amber-100">真实案例分析，学习实战应用技巧</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{caseStudies.length}</div>
              <div className="text-sm text-amber-200">精选案例</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* 筛选和搜索 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">搜索案例</label>
              <input
                type="text"
                placeholder="输入关键词搜索..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">案例类别</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? '全部类别' : cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">难度等级</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                {difficulties.map(diff => (
                  <option key={diff} value={diff}>
                    {diff === 'all' ? '全部难度' : difficultyText[diff as keyof typeof difficultyText]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>找到 {filteredCases.length} 个案例</span>
            <div className="flex space-x-4">
              <span className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>基础</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span>进阶</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>高级</span>
              </span>
            </div>
          </div>
        </div>

        {selectedCase ? (
          /* 案例详情 */
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="mb-6">
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 mb-4"
                  >
                    <span>←</span>
                    <span>返回案例列表</span>
                  </button>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedCase.title}</h2>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[selectedCase.difficulty]}`}>
                      {difficultyText[selectedCase.difficulty]}
                    </span>
                    <span className="text-sm text-gray-600">类别：{selectedCase.category}</span>
                    <span className="text-sm text-gray-600">时间：{selectedCase.time}</span>
                    <span className="text-sm text-gray-600">作者：{selectedCase.author}</span>
                    <span className="text-sm text-gray-600">日期：{selectedCase.date}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedCase.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">{selectedCase.description}</p>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="font-bold text-lg mb-2 text-blue-700">案例背景</h3>
                    <p className="text-gray-700">{selectedCase.content.background}</p>
                  </div>

                  <div className="border-l-4 border-amber-500 pl-6">
                    <h3 className="font-bold text-lg mb-2 text-amber-700">核心问题</h3>
                    <p className="text-gray-700">{selectedCase.content.question}</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="font-bold text-lg mb-2 text-green-700">分析过程</h3>
                    <p className="text-gray-700">{selectedCase.content.analysis}</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="font-bold text-lg mb-2 text-purple-700">预测结果</h3>
                    <p className="text-gray-700">{selectedCase.content.result}</p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="font-bold text-lg mb-2 text-red-700">学习要点</h3>
                    <p className="text-gray-700">{selectedCase.content.lesson}</p>
                  </div>
                </div>

                {/* 操作按钮 */}
                <div className="flex space-x-4 mt-8">
                  <button className="flex-1 bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors font-medium">
                    收藏案例
                  </button>
                  <button className="flex-1 border border-amber-600 text-amber-600 py-2 px-4 rounded-lg hover:bg-amber-50 transition-colors font-medium">
                    分享案例
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    打印案例
                  </button>
                </div>
              </div>
            </div>

            {/* 右侧信息 */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-800">相关推荐</h3>
                <div className="space-y-3">
                  {caseStudies
                    .filter(c => c.id !== selectedCase.id && c.category === selectedCase.category)
                    .slice(0, 3)
                    .map(case_ => (
                      <div
                        key={case_.id}
                        onClick={() => setSelectedCase(case_)}
                        className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-amber-50 transition-colors"
                      >
                        <h4 className="font-semibold text-sm text-gray-800 mb-1">{case_.title}</h4>
                        <p className="text-xs text-gray-600">{case_.description}</p>
                      </div>
                    ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 border border-blue-200">
                <h3 className="text-lg font-bold mb-4 text-blue-800">学习建议</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>仔细理解案例背景和分析思路</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>关注关键符号的解读方法</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>思考类似问题的分析思路</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>结合理论知识进行实践应用</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* 案例列表 */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map(case_ => (
              <div
                key={case_.id}
                onClick={() => setSelectedCase(case_)}
                className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[case_.difficulty]}`}>
                    {difficultyText[case_.difficulty]}
                  </span>
                  <span className="text-xs text-gray-500">{case_.time}</span>
                </div>

                <h3 className="font-bold text-lg mb-2 text-gray-800">{case_.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{case_.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {case_.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{case_.category}</span>
                  <span>{case_.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredCases.length === 0 && !selectedCase && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">没有找到相关案例</h3>
            <p className="text-gray-600 mb-4">尝试调整筛选条件或搜索关键词</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDifficulty('all');
                setSearchTerm('');
              }}
              className="bg-amber-600 text-white py-2 px-6 rounded-lg hover:bg-amber-700 transition-colors font-medium"
            >
              重置筛选
            </button>
          </div>
        )}
      </div>
    </div>
  );
}