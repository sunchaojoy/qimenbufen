'use client';

import { useState } from 'react';

interface UserProfile {
  id: string;
  username: string;
  email: string;
  displayName: string;
  avatar: string;
  level: string;
  joinDate: string;
  studyDays: number;
  completedModules: number;
  totalNotes: number;
  favoriteCount: number;
  quizScore: number;
  achievements: Achievement[];
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: string;
}

export default function Profile() {
  const [user, setUser] = useState<UserProfile>({
    id: '1',
    username: 'qimen_learner',
    email: 'learner@example.com',
    displayName: '奇门学习者',
    avatar: '/avatar-placeholder.png',
    level: '中级学者',
    joinDate: '2024-01-15',
    studyDays: 45,
    completedModules: 12,
    totalNotes: 28,
    favoriteCount: 15,
    quizScore: 85,
    achievements: [
      {
        id: '1',
        title: '初学者',
        description: '完成第一个学习模块',
        icon: '🌱',
        unlockedAt: '2024-01-15'
      },
      {
        id: '2',
        title: '理论家',
        description: '掌握基础理论知识',
        icon: '📚',
        unlockedAt: '2024-02-01'
      },
      {
        id: '3',
        title: '排盘新手',
        description: '成功完成10次排盘练习',
        icon: '🎯',
        unlockedAt: '2024-02-20'
      }
    ]
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    displayName: user.displayName,
    email: user.email
  });

  const levels = [
    { name: '初学者', min: 0, color: 'bg-green-100 text-green-800' },
    { name: '入门学者', min: 10, color: 'bg-blue-100 text-blue-800' },
    { name: '中级学者', min: 30, color: 'bg-purple-100 text-purple-800' },
    { name: '高级学者', min: 60, color: 'bg-amber-100 text-amber-800' },
    { name: '大师', min: 100, color: 'bg-red-100 text-red-800' }
  ];

  const getUserLevel = () => {
    return levels.find(level => user.completedModules >= level.min) || levels[0];
  };

  const getNextLevel = () => {
    const currentLevelIndex = levels.findIndex(level => level.name === getUserLevel().name);
    return levels[currentLevelIndex + 1];
  };

  const getProgressToNextLevel = () => {
    const currentLevel = getUserLevel();
    const nextLevel = getNextLevel();
    if (!nextLevel) return 100;

    const currentProgress = user.completedModules - currentLevel.min;
    const neededProgress = nextLevel.min - currentLevel.min;
    return (currentProgress / neededProgress) * 100;
  };

  const saveProfile = () => {
    setUser({
      ...user,
      displayName: editForm.displayName,
      email: editForm.email
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* 头部 */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">个人中心</h1>
              <p className="text-amber-100">管理您的学习档案和个人信息</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{user.displayName}</div>
              <div className="text-sm text-amber-200">{getUserLevel().name}</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 左侧个人信息 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{user.displayName}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getUserLevel().color}`}>
                  {getUserLevel().name}
                </span>
              </div>

              {!isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600">用户名</label>
                    <p className="font-medium">{user.username}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">邮箱</label>
                    <p className="font-medium">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">加入时间</label>
                    <p className="font-medium">{user.joinDate}</p>
                  </div>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                  >
                    编辑资料
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">显示名称</label>
                    <input
                      type="text"
                      value={editForm.displayName}
                      onChange={(e) => setEditForm({ ...editForm, displayName: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={saveProfile}
                      className="flex-1 bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                    >
                      保存
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                      取消
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 成就徽章 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-gray-800">成就徽章</h3>
              <div className="space-y-3">
                {user.achievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-gray-800">{achievement.title}</h4>
                      <p className="text-xs text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧学习统计 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 学习进度概览 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-800">学习统计</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{user.studyDays}</div>
                  <div className="text-sm text-gray-600">学习天数</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">{user.completedModules}</div>
                  <div className="text-sm text-gray-600">完成模块</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{user.totalNotes}</div>
                  <div className="text-sm text-gray-600">学习笔记</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-3xl font-bold text-amber-600 mb-2">{user.quizScore}%</div>
                  <div className="text-sm text-gray-600">测验得分</div>
                </div>
              </div>

              {/* 等级进度 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800">等级进度</span>
                  <span className="text-sm text-gray-600">
                    {user.completedModules} / {getNextLevel()?.min || 100}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${getProgressToNextLevel()}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>{getUserLevel().name}</span>
                  <span>{getNextLevel()?.name || '最高等级'}</span>
                </div>
              </div>
            </div>

            {/* 学习活动 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">最近活动</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">完成了《基础理论》模块</p>
                    <p className="text-sm text-gray-600">2小时前</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">创建了学习笔记《八门系统详解》</p>
                    <p className="text-sm text-gray-600">5小时前</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">通过了知识测验，得分85分</p>
                    <p className="text-sm text-gray-600">1天前</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">收藏了《商业投资决策分析》案例</p>
                    <p className="text-sm text-gray-600">2天前</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 快速操作 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">快速操作</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/learning-progress" className="flex items-center space-x-3 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
                  <span className="text-2xl">📈</span>
                  <div>
                    <p className="font-semibold text-gray-800">查看学习进度</p>
                    <p className="text-sm text-gray-600">继续您的学习之旅</p>
                  </div>
                </a>
                <a href="/notes" className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-2xl">📝</span>
                  <div>
                    <p className="font-semibold text-gray-800">管理笔记</p>
                    <p className="text-sm text-gray-600">记录学习心得</p>
                  </div>
                </a>
                <a href="/quiz" className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-semibold text-gray-800">参加测验</p>
                    <p className="text-sm text-gray-600">检验学习成果</p>
                  </div>
                </a>
                <a href="/favorites" className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="font-semibold text-gray-800">我的收藏</p>
                    <p className="text-sm text-gray-600">查看收藏内容</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}