'use client';

import { useState } from 'react';

interface LearningModule {
  id: string;
  title: string;
  description: string;
  chapters: Chapter[];
  totalProgress: number;
  estimatedTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

interface Chapter {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  progress: number;
  topics: Topic[];
}

interface Topic {
  id: string;
  title: string;
  completed: boolean;
  type: 'video' | 'reading' | 'practice' | 'quiz';
}

export default function LearningProgress() {
  const [selectedModule, setSelectedModule] = useState<string>('basics');
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(new Set());

  const learningModules: LearningModule[] = [
    {
      id: 'basics',
      title: '基础知识入门',
      description: '学习奇门遁甲的基本概念和理论体系',
      totalProgress: 75,
      estimatedTime: '1-2个月',
      difficulty: 'beginner',
      chapters: [
        {
          id: 'ch1',
          title: '奇门遁甲概论',
          duration: '2小时',
          completed: true,
          progress: 100,
          topics: [
            { id: 't1', title: '什么是奇门遁甲', completed: true, type: 'video' },
            { id: 't2', title: '历史发展脉络', completed: true, type: 'reading' },
            { id: 't3', title: '应用领域介绍', completed: true, type: 'video' },
            { id: 't4', title: '基础知识测验', completed: true, type: 'quiz' }
          ]
        },
        {
          id: 'ch2',
          title: '阴阳五行理论',
          duration: '3小时',
          completed: true,
          progress: 100,
          topics: [
            { id: 't5', title: '阴阳基本概念', completed: true, type: 'video' },
            { id: 't6', title: '五行相生相克', completed: true, type: 'reading' },
            { id: 't7', title: '五行与自然对应', completed: true, type: 'practice' },
            { id: 't8', title: '五行关系练习', completed: true, type: 'practice' }
          ]
        },
        {
          id: 'ch3',
          title: '天干地支基础',
          duration: '4小时',
          completed: true,
          progress: 100,
          topics: [
            { id: 't9', title: '十天干详解', completed: true, type: 'video' },
            { id: 't10', title: '十二地支详解', completed: true, type: 'video' },
            { id: 't11', title: '干支组合规律', completed: true, type: 'reading' },
            { id: 't12', title: '干支练习题', completed: true, type: 'practice' }
          ]
        },
        {
          id: 'ch4',
          title: '八卦九宫认知',
          duration: '3小时',
          completed: false,
          progress: 60,
          topics: [
            { id: 't13', title: '八卦基本概念', completed: true, type: 'video' },
            { id: 't14', title: '九宫格构成', completed: true, type: 'reading' },
            { id: 't15', title: '河图洛书介绍', completed: false, type: 'video' },
            { id: 't16', title: '九宫练习', completed: false, type: 'practice' }
          ]
        },
        {
          id: 'ch5',
          title: '奇门符号初识',
          duration: '5小时',
          completed: false,
          progress: 20,
          topics: [
            { id: 't17', title: '八门系统介绍', completed: true, type: 'video' },
            { id: 't18', title: '九星系统介绍', completed: false, type: 'video' },
            { id: 't19', title: '八神系统介绍', completed: false, type: 'reading' },
            { id: 't20', title: '三奇六仪介绍', completed: false, type: 'reading' }
          ]
        }
      ]
    },
    {
      id: 'layout',
      title: '排盘方法学习',
      description: '掌握奇门遁甲的排盘技巧和方法',
      totalProgress: 30,
      estimatedTime: '2-3个月',
      difficulty: 'intermediate',
      chapters: [
        {
          id: 'ch6',
          title: '排盘基础知识',
          duration: '3小时',
          completed: true,
          progress: 100,
          topics: [
            { id: 't21', title: '排盘基本概念', completed: true, type: 'video' },
            { id: 't22', title: '阴阳遁局划分', completed: true, type: 'reading' },
            { id: 't23', title: '局数确定方法', completed: true, type: 'practice' }
          ]
        },
        {
          id: 'ch7',
          title: '四盘构成详解',
          duration: '4小时',
          completed: false,
          progress: 50,
          topics: [
            { id: 't24', title: '地盘详解', completed: true, type: 'video' },
            { id: 't25', title: '天盘详解', completed: false, type: 'video' },
            { id: 't26', title: '人盘详解', completed: false, type: 'reading' },
            { id: 't27', title: '神盘详解', completed: false, type: 'reading' }
          ]
        }
      ]
    },
    {
      id: 'interpretation',
      title: '断局技巧掌握',
      description: '学习奇门遁甲的断局方法和分析技巧',
      totalProgress: 0,
      estimatedTime: '3-4个月',
      difficulty: 'advanced',
      chapters: [
        {
          id: 'ch8',
          title: '断局基本原则',
          duration: '3小时',
          completed: false,
          progress: 0,
          topics: [
            { id: 't28', title: '整体性原则', completed: false, type: 'reading' },
            { id: 't29', title: '用神原则', completed: false, type: 'video' },
            { id: 't30', title: '时空结合原则', completed: false, type: 'reading' }
          ]
        }
      ]
    }
  ];

  const currentModule = learningModules.find(m => m.id === selectedModule);

  const toggleChapter = (chapterId: string) => {
    const newExpanded = new Set(expandedChapters);
    if (newExpanded.has(chapterId)) {
      newExpanded.delete(chapterId);
    } else {
      newExpanded.add(chapterId);
    }
    setExpandedChapters(newExpanded);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-amber-100 text-amber-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '入门';
      case 'intermediate': return '进阶';
      case 'advanced': return '高级';
      default: return '未知';
    }
  };

  const getTopicIcon = (type: string) => {
    switch (type) {
      case 'video': return '🎥';
      case 'reading': return '📖';
      case 'practice': return '✏️';
      case 'quiz': return '📝';
      default: return '📚';
    }
  };

  const totalLearningProgress = Math.round(
    learningModules.reduce((sum, module) => sum + module.totalProgress, 0) / learningModules.length
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* 头部 */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">学习进度跟踪</h1>
              <p className="text-amber-100">系统化学习奇门遁甲，记录您的成长历程</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{totalLearningProgress}%</div>
              <div className="text-sm text-amber-200">总体进度</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* 总体进度概览 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-6 text-gray-800">学习概览</h2>

          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {learningModules.reduce((sum, m) => sum + m.chapters.length, 0)}
              </div>
              <div className="text-sm text-gray-600">总章节数</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {learningModules.reduce((sum, m) =>
                  sum + m.chapters.filter(ch => ch.completed).length, 0
                )}
              </div>
              <div className="text-sm text-gray-600">已完成章节</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {learningModules.reduce((sum, m) =>
                  sum + m.chapters.reduce((s, ch) => s + ch.topics.length, 0), 0
                )}
              </div>
              <div className="text-sm text-gray-600">总学习内容</div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                {learningModules.reduce((sum, m) =>
                  sum + m.chapters.reduce((s, ch) =>
                    s + ch.topics.filter(t => t.completed).length, 0
                  ), 0
                )}
              </div>
              <div className="text-sm text-gray-600">已完成内容</div>
            </div>
          </div>

          {/* 总体进度条 */}
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>总体学习进度</span>
              <span>{totalLearningProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${totalLearningProgress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 左侧模块列表 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-gray-800">学习模块</h3>
              <div className="space-y-3">
                {learningModules.map((module) => (
                  <div
                    key={module.id}
                    onClick={() => setSelectedModule(module.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedModule === module.id
                        ? 'border-amber-500 bg-amber-50'
                        : 'border-gray-200 hover:border-amber-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">{module.title}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(module.difficulty)}`}>
                        {getDifficultyText(module.difficulty)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{module.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>进度</span>
                        <span>{module.totalProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-amber-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${module.totalProgress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>预计时间</span>
                        <span>{module.estimatedTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧详细内容 */}
          <div className="lg:col-span-2">
            {currentModule && (
              <div className="space-y-6">
                {/* 模块详情 */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">{currentModule.title}</h2>
                      <p className="text-gray-600">{currentModule.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-amber-600">{currentModule.totalProgress}%</div>
                      <div className="text-sm text-gray-500">模块进度</div>
                    </div>
                  </div>

                  {/* 章节列表 */}
                  <div className="space-y-4">
                    {currentModule.chapters.map((chapter) => (
                      <div key={chapter.id} className="border rounded-lg overflow-hidden">
                        <div
                          className="p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                          onClick={() => toggleChapter(chapter.id)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                chapter.completed
                                  ? 'bg-green-600 text-white'
                                  : chapter.progress > 0
                                  ? 'bg-amber-600 text-white'
                                  : 'bg-gray-300 text-gray-600'
                              }`}>
                                {chapter.completed ? '✓' : chapter.progress > 0 ? '○' : ''}
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800">{chapter.title}</h4>
                                <p className="text-sm text-gray-600">预计时间：{chapter.duration}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="text-right">
                                <div className="text-sm font-medium text-gray-700">{chapter.progress}%</div>
                                <div className="w-20 bg-gray-200 rounded-full h-2">
                                  <div
                                    className="bg-amber-500 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${chapter.progress}%` }}
                                  ></div>
                                </div>
                              </div>
                              <div className="text-gray-400">
                                {expandedChapters.has(chapter.id) ? '▼' : '▶'}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 章节详情 */}
                        {expandedChapters.has(chapter.id) && (
                          <div className="p-4 bg-white border-t">
                            <div className="space-y-3">
                              {chapter.topics.map((topic) => (
                                <div key={topic.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                  <div className="flex items-center space-x-3">
                                    <div className={`w-5 h-5 rounded flex items-center justify-center text-xs ${
                                      topic.completed
                                        ? 'bg-green-500 text-white'
                                        : 'bg-gray-300 text-gray-600'
                                    }`}>
                                      {topic.completed ? '✓' : ''}
                                    </div>
                                    <span className="text-lg mr-2">{getTopicIcon(topic.type)}</span>
                                    <span className={`text-sm ${topic.completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                                      {topic.title}
                                    </span>
                                  </div>
                                  <button className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                                    topic.completed
                                      ? 'bg-gray-200 text-gray-600'
                                      : 'bg-amber-600 text-white hover:bg-amber-700'
                                  }`}>
                                    {topic.completed ? '已完成' : '开始学习'}
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 学习统计 */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold mb-4 text-gray-800">学习统计</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-600">
                        {currentModule.chapters.filter(ch => ch.completed).length}
                      </div>
                      <div className="text-sm text-gray-600">已完成章节</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {currentModule.chapters.reduce((sum, ch) => sum + ch.topics.filter(t => t.completed).length, 0)}
                      </div>
                      <div className="text-sm text-gray-600">已完成内容</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {currentModule.chapters.reduce((sum, ch) => sum + ch.topics.filter(t => t.type === 'quiz' && t.completed).length, 0)}
                      </div>
                      <div className="text-sm text-gray-600">通过测验</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {Math.round(currentModule.chapters.reduce((sum, ch) => sum + ch.progress, 0) / currentModule.chapters.length)}%
                      </div>
                      <div className="text-sm text-gray-600">平均进度</div>
                    </div>
                  </div>
                </div>

                {/* 学习建议 */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 border border-blue-200">
                  <h3 className="text-lg font-bold mb-4 text-blue-800">学习建议</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <p className="text-sm text-gray-700">
                        建议每天保持1-2小时的学习时间，循序渐进，不要急于求成
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <p className="text-sm text-gray-700">
                        理论学习与实践练习相结合，完成每个主题后及时做练习巩固
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <p className="text-sm text-gray-700">
                        定期复习已学内容，建议每周回顾一次本周学习要点
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}