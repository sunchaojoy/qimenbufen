'use client';

import { useState } from 'react';

interface SearchResult {
  id: string;
  type: 'content' | 'case' | 'term' | 'note' | 'chart';
  title: string;
  description: string;
  category: string;
  content: string;
  url: string;
  tags: string[];
  relevanceScore: number;
}

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([
    '奇门遁甲基础',
    '八门系统',
    '排盘方法',
    '五行相生相克'
  ]);

  // 模拟搜索数据
  const allContent = [
    {
      id: '1',
      type: 'content' as const,
      title: '奇门遁甲基础知识概览',
      description: '奇门遁甲是中华优秀传统文化中最重要的预测学之一，被誉为"帝王之学"',
      category: '基础理论',
      content: '奇门遁甲以易经八卦为基础，结合天文学、历法学、阴阳五行学说，形成了一套完整的时空预测体系。通过分析特定时间空间中的天、地、人、神四盘关系，来预测和指导各种事务的发展趋势。',
      url: '/',
      tags: ['基础', '核心概念', '帝王之学']
    },
    {
      id: '2',
      type: 'content' as const,
      title: '八门系统详解',
      description: '奇门遁甲人盘的八个门，代表人事的各种状态',
      category: '符号系统',
      content: '八门包括休门、生门、伤门、杜门、景门、死门、惊门、开门。其中休、生、景、开为吉门；伤、杜、死、惊为凶门。每个门都有特定的象征意义和适用范围。',
      url: '/#symbols',
      tags: ['八门', '人盘', '吉凶']
    },
    {
      id: '3',
      type: 'case' as const,
      title: '商业投资决策分析',
      description: '某企业家面临重大投资决策，通过奇门遁甲分析项目可行性',
      category: '商业决策',
      content: '某企业家计划投资500万元建设新能源项目，需要判断项目前景和投资时机。通过排盘分析，值符天心星落乾六宫，生门在艮八宫，戊土财星得令，项目前景良好。',
      url: '/case-library',
      tags: ['投资', '商业', '决策', '实战案例']
    },
    {
      id: '4',
      type: 'term' as const,
      title: '用神',
      description: '奇门遁甲预测中代表预测事物的核心符号',
      category: '断局技巧',
      content: '用神是奇门遁甲预测的核心，根据预测内容的不同，选择相应的符号作为用神。用神的状态、位置、与其他符号的关系是判断吉凶的主要依据。',
      url: '/dictionary',
      tags: ['用神', '预测', '核心', '断局']
    },
    {
      id: '5',
      type: 'note' as const,
      title: '五行相生相克关系学习笔记',
      description: '个人学习五行关系的总结和记忆方法',
      category: '基础理论',
      content: '五行相生关系：木生火 → 火生土 → 土生金 → 金生水 → 水生木。五行相克关系：木克土 → 土克水 → 水克火 → 火克金 → 金克木。在奇门遁甲中用于判断符号间的生克关系。',
      url: '/notes',
      tags: ['五行', '生克', '基础', '笔记']
    },
    {
      id: '6',
      type: 'chart' as const,
      title: '财运奇门局演示',
      description: '专用于财运分析的奇门局排盘示例',
      category: '排盘演示',
      content: '财运奇门局展示如何通过奇门遁甲分析财运状况。演示值符、值使的配合，三奇六仪的排列，以及如何从奇门局中解读财运信息。',
      url: '/qimen-chart',
      tags: ['财运', '排盘', '演示', '实战']
    }
  ];

  const contentTypes = [
    { value: 'all', label: '全部类型', icon: '🔍' },
    { value: 'content', label: '学习内容', icon: '📖' },
    { value: 'case', label: '案例分析', icon: '📋' },
    { value: 'term', label: '术语词典', icon: '📝' },
    { value: 'note', label: '学习笔记', icon: '📓' },
    { value: 'chart', label: '排盘演示', icon: '📊' }
  ];

  const typeColors = {
    content: 'bg-blue-100 text-blue-800',
    case: 'bg-green-100 text-green-800',
    term: 'bg-purple-100 text-purple-800',
    note: 'bg-amber-100 text-amber-800',
    chart: 'bg-red-100 text-red-800'
  };

  const typeLabels = {
    content: '内容',
    case: '案例',
    term: '术语',
    note: '笔记',
    chart: '排盘'
  };

  const calculateRelevance = (content: any, query: string) => {
    if (!query) return 0;

    const queryLower = query.toLowerCase();
    let score = 0;

    // 标题匹配权重最高
    if (content.title.toLowerCase().includes(queryLower)) {
      score += 10;
    }

    // 描述匹配
    if (content.description.toLowerCase().includes(queryLower)) {
      score += 5;
    }

    // 内容匹配
    if (content.content.toLowerCase().includes(queryLower)) {
      score += 3;
    }

    // 标签匹配
    content.tags?.forEach((tag: string) => {
      if (tag.toLowerCase().includes(queryLower)) {
        score += 2;
      }
    });

    // 类别匹配
    if (content.category.toLowerCase().includes(queryLower)) {
      score += 1;
    }

    return score;
  };

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);

    // 模拟搜索延迟
    setTimeout(() => {
      const results = allContent
        .map(content => ({
          ...content,
          relevanceScore: calculateRelevance(content, query)
        }))
        .filter(content => content.relevanceScore > 0)
        .sort((a, b) => b.relevanceScore - a.relevanceScore)
        .filter(content => selectedType === 'all' || content.type === selectedType);

      setSearchResults(results);
      setIsSearching(false);

      // 添加到搜索历史
      if (query && !searchHistory.includes(query)) {
        setSearchHistory([query, ...searchHistory.slice(0, 9)]);
      }
    }, 300);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchQuery);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  const getTypeIcon = (type: string) => {
    const typeInfo = contentTypes.find(t => t.value === type);
    return typeInfo ? typeInfo.icon : '📄';
  };

  const highlightText = (text: string, query: string) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-amber-200 text-amber-900 px-1 rounded">
          {part}
        </mark>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* 头部 */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">全局搜索</h1>
            <p className="text-amber-100">快速查找奇门遁甲相关的学习内容</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* 搜索框 */}
        <div className="max-w-3xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="输入关键词搜索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="bg-amber-600 text-white px-8 py-4 rounded-xl hover:bg-amber-700 transition-colors font-medium disabled:bg-gray-400"
              >
                {isSearching ? '搜索中...' : '搜索'}
              </button>
            </div>

            {/* 类型筛选 */}
            <div className="flex flex-wrap gap-2">
              {contentTypes.map(type => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setSelectedType(type.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedType === type.value
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type.icon} {type.label}
                </button>
              ))}
            </div>
          </form>
        </div>

        {/* 搜索历史 */}
        {searchHistory.length > 0 && searchResults.length === 0 && (
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-gray-800">搜索历史</h3>
              <div className="flex flex-wrap gap-2">
                {searchHistory.map((query, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchQuery(query);
                      performSearch(query);
                    }}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-amber-100 hover:text-amber-700 transition-colors"
                  >
                    <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {query}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 搜索结果 */}
        {searchResults.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">
                  搜索结果 ({searchResults.length})
                </h2>
                <span className="text-sm text-gray-600">
                  关键词："{searchQuery}"
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{getTypeIcon(result.type)}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[result.type]}`}>
                        {typeLabels[result.type]}
                      </span>
                      <span className="text-sm text-gray-600">{result.category}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">相关度：{result.relevanceScore}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    <a href={result.url} className="hover:text-amber-600 transition-colors">
                      {highlightText(result.title, searchQuery)}
                    </a>
                  </h3>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {highlightText(result.description, searchQuery)}
                  </p>

                  {result.content && (
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {highlightText(result.content.substring(0, 200), searchQuery)}...
                      </p>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {result.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs">
                          #{highlightText(tag, searchQuery)}
                        </span>
                      ))}
                    </div>
                    <a
                      href={result.url}
                      className="text-amber-600 hover:text-amber-700 font-medium text-sm"
                    >
                      查看详情 →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 无搜索结果 */}
        {searchQuery && searchResults.length === 0 && !isSearching && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-lg p-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">没有找到相关内容</h3>
              <p className="text-gray-600 mb-6">
                尝试使用不同的关键词，或者检查拼写是否正确
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">推荐搜索：</p>
                  <div className="flex justify-center space-x-2">
                    {['奇门遁甲', '八门', '排盘', '五行'].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => {
                          setSearchQuery(suggestion);
                          performSearch(suggestion);
                        }}
                        className="px-4 py-2 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200 transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 搜索建议 */}
        {!searchQuery && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">搜索建议</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">热门搜索</h4>
                  <div className="space-y-2">
                    {['奇门遁甲基础', '八门系统', '排盘步骤', '用神选择', '五行关系'].map((term) => (
                      <button
                        key={term}
                        onClick={() => {
                          setSearchQuery(term);
                          performSearch(term);
                        }}
                        className="block w-full text-left px-4 py-2 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">搜索技巧</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 使用具体的关键词，如"八门"而非"门"</li>
                    <li>• 可以搜索术语、案例、笔记等各种内容</li>
                    <li>• 尝试使用同义词或相关词汇</li>
                    <li>• 使用类型筛选可以精确定位特定内容</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}