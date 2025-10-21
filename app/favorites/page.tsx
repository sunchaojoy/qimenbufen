'use client';

import { useState } from 'react';

interface FavoriteItem {
  id: string;
  type: 'content' | 'case' | 'term' | 'chart';
  title: string;
  description: string;
  category: string;
  dateAdded: string;
  tags: string[];
  content?: any;
}

export default function Favorites() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date');

  // 模拟收藏数据
  const [favorites, setFavorites] = useState<FavoriteItem[]>([
    {
      id: '1',
      type: 'content',
      title: '奇门遁甲基础知识概览',
      description: '奇门遁甲是中华优秀传统文化中最重要的预测学之一，被誉为"帝王之学"',
      category: '基础理论',
      dateAdded: '2024-01-15',
      tags: ['基础', '核心概念'],
      content: { section: 'overview' }
    },
    {
      id: '2',
      type: 'case',
      title: '商业投资决策分析',
      description: '某企业家面临重大投资决策，通过奇门遁甲分析项目可行性',
      category: '商业决策',
      dateAdded: '2024-01-20',
      tags: ['投资', '商业', '案例'],
      content: { caseId: 1 }
    },
    {
      id: '3',
      type: 'term',
      title: '八门',
      description: '奇门遁甲人盘的八个门，代表人事的各种状态',
      category: '符号系统',
      dateAdded: '2024-02-01',
      tags: ['符号', '人盘', '基础'],
      content: { termId: 2 }
    },
    {
      id: '4',
      type: 'chart',
      title: '财运奇门局演示',
      description: '专用于财运分析的奇门局排盘示例',
      category: '排盘演示',
      dateAdded: '2024-02-10',
      tags: ['排盘', '财运', '演示'],
      content: { chartType: 'fortune' }
    },
    {
      id: '5',
      type: 'content',
      title: '阴阳五行理论详解',
      description: '阴阳五行是奇门遁甲的理论基础，理解其关系对学习至关重要',
      category: '基础理论',
      dateAdded: '2024-02-15',
      tags: ['理论', '五行', '阴阳'],
      content: { section: 'basics' }
    }
  ]);

  const types = [
    { value: 'all', label: '全部类型', icon: '📚' },
    { value: 'content', label: '学习内容', icon: '📖' },
    { value: 'case', label: '案例分析', icon: '📋' },
    { value: 'term', label: '术语解释', icon: '📝' },
    { value: 'chart', label: '排盘演示', icon: '📊' }
  ];

  const categories = ['all', '基础理论', '符号系统', '排盘演示', '商业决策', '学习内容'];

  const sortOptions = [
    { value: 'date', label: '按收藏时间' },
    { value: 'title', label: '按标题' },
    { value: 'category', label: '按类别' }
  ];

  const typeColors = {
    content: 'bg-blue-100 text-blue-800',
    case: 'bg-green-100 text-green-800',
    term: 'bg-purple-100 text-purple-800',
    chart: 'bg-amber-100 text-amber-800'
  };

  const typeLabels = {
    content: '内容',
    case: '案例',
    term: '术语',
    chart: '排盘'
  };

  const filteredAndSortedFavorites = favorites
    .filter(item => {
      const matchesType = selectedType === 'all' || item.type === selectedType;
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesType && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  const exportFavorites = () => {
    const dataStr = JSON.stringify(favorites, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    const exportFileDefaultName = `qimen-favorites-${new Date().toISOString().split('T')[0]}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const getTypeIcon = (type: string) => {
    const typeInfo = types.find(t => t.value === type);
    return typeInfo ? typeInfo.icon : '📚';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* 头部 */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">我的收藏</h1>
              <p className="text-amber-100">管理您的学习收藏，快速访问重要内容</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{favorites.length}</div>
              <div className="text-sm text-amber-200">收藏项目</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* 筛选和排序 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">类型筛选</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                {types.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.icon} {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">类别筛选</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">排序方式</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={exportFavorites}
                className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors font-medium"
              >
                导出收藏
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
            <span>找到 {filteredAndSortedFavorites.length} 个收藏项目</span>
            <div className="flex space-x-4">
              {types.slice(1).map(type => (
                <span key={type.value} className="flex items-center space-x-1">
                  <span>{type.icon}</span>
                  <span>{typeLabels[type.value as keyof typeof typeLabels]}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 收藏列表 */}
        {filteredAndSortedFavorites.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedFavorites.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[item.type]}`}>
                      {typeLabels[item.type]}
                    </span>
                  </div>
                  <button
                    onClick={() => removeFavorite(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{item.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{item.category}</span>
                  <span>收藏于 {item.dateAdded}</span>
                </div>

                {/* 操作按钮 */}
                <div className="mt-4 pt-4 border-t flex space-x-2">
                  <button className="flex-1 bg-amber-600 text-white py-2 px-3 rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium">
                    查看
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                    分享
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">暂无收藏内容</h3>
            <p className="text-gray-600 mb-6">开始浏览和学习，收藏您感兴趣的内容</p>
            <div className="flex justify-center space-x-4">
              <a
                href="/"
                className="bg-amber-600 text-white py-2 px-6 rounded-lg hover:bg-amber-700 transition-colors font-medium"
              >
                开始学习
              </a>
              <a
                href="/case-library"
                className="border border-amber-600 text-amber-600 py-2 px-6 rounded-lg hover:bg-amber-50 transition-colors font-medium"
              >
                浏览案例
              </a>
            </div>
          </div>
        )}

        {/* 收藏统计 */}
        {favorites.length > 0 && (
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6 text-gray-800">收藏统计</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">{favorites.length}</div>
                <div className="text-sm text-gray-600">总收藏数</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {favorites.filter(f => f.type === 'content').length}
                </div>
                <div className="text-sm text-gray-600">学习内容</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {favorites.filter(f => f.type === 'case').length}
                </div>
                <div className="text-sm text-gray-600">案例分析</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {favorites.filter(f => f.type === 'term').length}
                </div>
                <div className="text-sm text-gray-600">术语收藏</div>
              </div>
            </div>

            {/* 收藏分类分布 */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">收藏分类分布</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from(new Set(favorites.map(f => f.category))).map(category => {
                  const count = favorites.filter(f => f.category === category).length;
                  const percentage = Math.round((count / favorites.length) * 100);
                  return (
                    <div key={category} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">{category}</span>
                        <span className="text-sm text-gray-600">{count}项</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-amber-500 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}