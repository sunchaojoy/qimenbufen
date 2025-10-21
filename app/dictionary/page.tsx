'use client';

import { useState } from 'react';

interface Term {
  id: number;
  term: string;
  pinyin: string;
  category: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
  definition: string;
  explanation: string;
  examples: string[];
  related: string[];
  tags: string[];
}

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLetter, setSelectedLetter] = useState<string>('all');
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);

  const terms: Term[] = [
    {
      id: 1,
      term: '奇门遁甲',
      pinyin: 'qí mén dùn jiǎ',
      category: '基本概念',
      difficulty: 'basic',
      definition: '中华传统预测学之一，被誉为"帝王之学"',
      explanation: '奇门遁甲以易经八卦为基础，结合天文学、历法学、阴阳五行学说，形成了一套完整的时空预测体系。通过分析特定时间空间中的天、地、人、神四盘关系，来预测和指导各种事务的发展趋势。',
      examples: [
        '奇门遁甲在古代主要用于军事战略决策',
        '现代奇门遁甲广泛应用于商业、人生规划等领域'
      ],
      related: ['易经', '八卦', '阴阳五行', '四盘'],
      tags: ['基础', '核心概念']
    },
    {
      id: 2,
      term: '八门',
      pinyin: 'bā mén',
      category: '符号系统',
      difficulty: 'basic',
      definition: '奇门遁甲人盘的八个门，代表人事的各种状态',
      explanation: '八门包括休门、生门、伤门、杜门、景门、死门、惊门、开门。其中休、生、景、开为吉门；伤、杜、死、惊为凶门。八门代表人事活动的八种状态和趋势。',
      examples: [
        '生门代表生长、发展，宜求财创业',
        '开门代表开启、顺利，宜出行开业'
      ],
      related: ['人盘', '吉门', '凶门'],
      tags: ['符号', '人盘']
    },
    {
      id: 3,
      term: '九星',
      pinyin: 'jiǔ xīng',
      category: '符号系统',
      difficulty: 'basic',
      definition: '奇门遁甲天盘的九颗星，代表天时的各种影响',
      explanation: '九星包括天蓬、天芮、天冲、天辅、天禽、天心、天柱、天任、天英。每颗星都有特定的五行属性和象征意义，影响奇门局的吉凶变化。',
      examples: [
        '天辅星利于考试求学',
        '天心星适合医药治病'
      ],
      related: ['天盘', '五行'],
      tags: ['符号', '天盘']
    },
    {
      id: 4,
      term: '三奇六仪',
      pinyin: 'sān qí liù yí',
      category: '符号系统',
      difficulty: 'intermediate',
      definition: '奇门遁甲天盘中的十个天干，三奇为吉，六仪为常',
      explanation: '三奇指乙、丙、丁三个天干，为奇门遁甲中的吉神。六仪指戊、己、庚、辛、壬、癸六个天干，为奇门遁甲中的常用符号。三奇六仪的组合和位置对奇门局的吉凶有重要影响。',
      examples: [
        '乙为日奇，代表文书谋略',
        '丙为月奇，代表权威光明'
      ],
      related: ['天干', '地盘'],
      tags: ['符号', '天干']
    },
    {
      id: 5,
      term: '值符',
      pinyin: 'zhí fú',
      category: '排盘方法',
      difficulty: 'intermediate',
      definition: '奇门遁甲中的主导符号，统领八神',
      explanation: '值符是奇门遁甲中最重要的符号之一，代表当前时辰的主要能量和趋势。值符的位置和状态对整个奇门局的解读有决定性影响。',
      examples: [
        '值符落宫代表事情的主动方',
        '值符与用神的关系影响预测结果'
      ],
      related: ['八神', '值使'],
      tags: ['排盘', '核心']
    },
    {
      id: 6,
      term: '用神',
      pinyin: 'yòng shén',
      category: '断局技巧',
      difficulty: 'intermediate',
      definition: '奇门遁甲预测中代表预测事物的核心符号',
      explanation: '用神是奇门遁甲预测的核心，根据预测内容的不同，选择相应的符号作为用神。用神的状态、位置、与其他符号的关系是判断吉凶的主要依据。',
      examples: [
        '求财以戊土为用神',
        '婚姻以乙庚合为用神'
      ],
      related: ['预测', '吉凶'],
      tags: ['断局', '核心']
    },
    {
      id: 7,
      term: '阴阳遁',
      pinyin: 'yīn yáng dùn',
      category: '排盘方法',
      difficulty: 'advanced',
      definition: '奇门遁甲排盘的两种模式，根据节气确定',
      explanation: '阳遁从冬至开始到夏至，使用1-9局；阴遁从夏至开始到冬至，使用9-1局。阴阳遁的选择基于地球绕太阳的运行规律，体现了奇门遁甲的天文学基础。',
      examples: [
        '冬至后使用阳遁局',
        '夏至后使用阴遁局'
      ],
      related: ['排盘', '节气'],
      tags: ['排盘', '进阶']
    },
    {
      id: 8,
      term: '洛书',
      pinyin: 'luò shū',
      category: '理论基础',
      difficulty: 'basic',
      definition: '中国古代传说中的神秘图案，是九宫格的数字基础',
      explanation: '洛书是一个3×3的数字方阵，数字排列为：戴九履一，左三右七，二四为肩，六八为足，五居中央。洛书是奇门遁甲九宫格的数字基础，体现了中国古代的宇宙观。',
      examples: [
        '洛书数字1-9对应九宫',
        '洛书体现了阴阳平衡的原理'
      ],
      related: ['九宫格', '河图'],
      tags: ['理论', '基础']
    },
    {
      id: 9,
      term: '旺衰',
      pinyin: 'wàng shuāi',
      category: '断局技巧',
      difficulty: 'intermediate',
      definition: '奇门符号在不同季节的强弱状态',
      explanation: '旺衰是指奇门遁甲中各种符号在特定时间季节的强弱状态。春季木旺火相，夏季火旺土相，秋季金旺水相，冬季水旺木相。旺衰判断是奇门遁甲预测的重要环节。',
      examples: [
        '春季震巽宫为旺',
        '夏季离宫为旺'
      ],
      related: ['季节', '五行'],
      tags: ['断局', '五行']
    },
    {
      id: 10,
      term: '格局',
      pinyin: 'gé jú',
      category: '断局技巧',
      difficulty: 'advanced',
      definition: '奇门遁甲中多个符号组合形成的特定模式',
      explanation: '格局是指奇门遁甲中多个符号在特定位置组合形成的固定模式。不同的格局有不同的吉凶含义和适用范围，是奇门遁甲高级预测的重要内容。',
      examples: [
        '飞鸟跌穴格为吉格',
        '青龙返首格为大吉'
      ],
      related: ['预测', '吉格', '凶格'],
      tags: ['断局', '高级']
    }
  ];

  const categories = ['all', '基本概念', '符号系统', '排盘方法', '断局技巧', '理论基础'];
  const letters = ['all', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'];

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

  const filteredTerms = terms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.pinyin.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;

    const matchesLetter = selectedLetter === 'all' ||
                         (selectedLetter !== 'all' && term.pinyin.charAt(0).toUpperCase() === selectedLetter);

    return matchesSearch && matchesCategory && matchesLetter;
  });

  const getFirstLetter = (pinyin: string) => {
    return pinyin.charAt(0).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* 头部 */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">奇门遁甲术语词典</h1>
              <p className="text-amber-100">系统化学习奇门遁甲专业术语</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{terms.length}</div>
              <div className="text-sm text-amber-200">专业术语</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* 搜索和筛选 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">搜索术语</label>
            <input
              type="text"
              placeholder="输入术语、拼音或关键词..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">术语类别</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">首字母</label>
              <select
                value={selectedLetter}
                onChange={(e) => setSelectedLetter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                {letters.map(letter => (
                  <option key={letter} value={letter}>
                    {letter === 'all' ? '全部首字母' : letter}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 快速字母导航 */}
          <div className="flex flex-wrap gap-2">
            {letters.map(letter => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  selectedLetter === letter
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {letter === 'all' ? '全部' : letter}
              </button>
            ))}
          </div>
        </div>

        {selectedTerm ? (
          /* 术语详情 */
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <button
                  onClick={() => setSelectedTerm(null)}
                  className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 mb-4"
                >
                  <span>←</span>
                  <span>返回词典</span>
                </button>

                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedTerm.term}</h2>
                  <p className="text-lg text-gray-600 mb-4">{selectedTerm.pinyin}</p>

                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[selectedTerm.difficulty]}`}>
                      {difficultyText[selectedTerm.difficulty]}
                    </span>
                    <span className="text-sm text-gray-600">类别：{selectedTerm.category}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedTerm.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">定义</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{selectedTerm.definition}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">详细解释</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedTerm.explanation}</p>
                  </div>

                  {selectedTerm.examples.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800">应用示例</h3>
                      <ul className="space-y-2">
                        {selectedTerm.examples.map((example, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-amber-600">•</span>
                            <span className="text-gray-700">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedTerm.related.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800">相关术语</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedTerm.related.map((related, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              const relatedTerm = terms.find(t => t.term === related);
                              if (relatedTerm) setSelectedTerm(relatedTerm);
                            }}
                            className="px-3 py-2 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200 transition-colors"
                          >
                            {related}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* 操作按钮 */}
                <div className="flex space-x-4 mt-8">
                  <button className="flex-1 bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors font-medium">
                    收藏术语
                  </button>
                  <button className="flex-1 border border-amber-600 text-amber-600 py-2 px-4 rounded-lg hover:bg-amber-50 transition-colors font-medium">
                    添加笔记
                  </button>
                </div>
              </div>
            </div>

            {/* 右侧信息 */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-800">学习提示</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start space-x-2">
                    <span className="text-amber-600">•</span>
                    <span>理解术语的基本含义和应用场景</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-amber-600">•</span>
                    <span>注意术语之间的关联和区别</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-amber-600">•</span>
                    <span>通过实际案例加深理解</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-amber-600">•</span>
                    <span>定期复习巩固记忆</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 border border-blue-200">
                <h3 className="text-lg font-bold mb-4 text-blue-800">推荐学习</h3>
                <div className="space-y-3">
                  {terms
                    .filter(t => t.id !== selectedTerm.id && t.category === selectedTerm.category)
                    .slice(0, 3)
                    .map(term => (
                      <div
                        key={term.id}
                        onClick={() => setSelectedTerm(term)}
                        className="p-3 bg-white rounded-lg cursor-pointer hover:bg-blue-50 transition-colors"
                      >
                        <h4 className="font-semibold text-sm text-gray-800 mb-1">{term.term}</h4>
                        <p className="text-xs text-gray-600">{term.definition}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* 术语列表 */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTerms.map(term => (
              <div
                key={term.id}
                onClick={() => setSelectedTerm(term)}
                className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[term.difficulty]}`}>
                    {difficultyText[term.difficulty]}
                  </span>
                  <span className="text-xs text-gray-500">{getFirstLetter(term.pinyin)}</span>
                </div>

                <h3 className="font-bold text-lg mb-2 text-gray-800">{term.term}</h3>
                <p className="text-sm text-gray-600 mb-3">{term.pinyin}</p>
                <p className="text-sm text-gray-700 mb-4 line-clamp-2">{term.definition}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{term.category}</span>
                  <div className="flex space-x-1">
                    {term.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredTerms.length === 0 && !selectedTerm && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📖</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">没有找到相关术语</h3>
            <p className="text-gray-600 mb-4">尝试调整筛选条件或搜索关键词</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLetter('all');
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