'use client';

import { useState } from 'react';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorAvatar: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  lessons: number;
  students: number;
  rating: number;
  price: number;
  image: string;
  category: string;
  tags: string[];
  isEnrolled: boolean;
  progress: number;
}

interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'practice' | 'quiz';
  isCompleted: boolean;
  isLocked: boolean;
}

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);

  const courses: Course[] = [
    {
      id: '1',
      title: '奇门遁甲基础入门',
      description: '从零开始学习奇门遁甲，掌握基本概念和理论体系。适合完全没有基础的学员，系统化讲解阴阳五行、天干地支、八卦九宫等核心知识。',
      instructor: '张志春',
      instructorAvatar: '/instructor1.png',
      level: 'beginner',
      duration: '8小时',
      lessons: 24,
      students: 1234,
      rating: 4.8,
      price: 299,
      image: '/course1.jpg',
      category: '基础课程',
      tags: ['入门', '基础理论', '系统学习'],
      isEnrolled: true,
      progress: 65
    },
    {
      id: '2',
      title: '排盘实战技巧',
      description: '深入学习奇门遁甲排盘方法，掌握各种排盘技巧和注意事项。通过大量实例练习，提高排盘准确性和效率。',
      instructor: '王凤麟',
      instructorAvatar: '/instructor2.png',
      level: 'intermediate',
      duration: '12小时',
      lessons: 36,
      students: 856,
      rating: 4.9,
      price: 599,
      image: '/course2.jpg',
      category: '进阶课程',
      tags: ['排盘', '实战', '技巧'],
      isEnrolled: false,
      progress: 0
    },
    {
      id: '3',
      title: '断局高级技法',
      description: '学习高级断局技巧，掌握复杂案例分析方法。涵盖财运、婚姻、事业、健康等各个领域的专业断局方法。',
      instructor: '刘文元',
      instructorAvatar: '/instructor3.png',
      level: 'advanced',
      duration: '16小时',
      lessons: 48,
      students: 423,
      rating: 4.7,
      price: 999,
      image: '/course3.jpg',
      category: '高级课程',
      tags: ['断局', '高级', '专业'],
      isEnrolled: false,
      progress: 0
    },
    {
      id: '4',
      title: '商业应用奇门',
      description: '专门针对商业应用的奇门遁甲课程，包括投资决策、项目管理、人事管理等实际应用案例。',
      instructor: '杜新会',
      instructorAvatar: '/instructor4.png',
      level: 'intermediate',
      duration: '10小时',
      lessons: 30,
      students: 667,
      rating: 4.6,
      price: 799,
      image: '/course4.jpg',
      category: '应用课程',
      tags: ['商业', '实战', '应用'],
      isEnrolled: true,
      progress: 30
    }
  ];

  const categories = [
    { value: 'all', label: '全部课程' },
    { value: '基础课程', label: '基础课程' },
    { value: '进阶课程', label: '进阶课程' },
    { value: '高级课程', label: '高级课程' },
    { value: '应用课程', label: '应用课程' }
  ];

  const levels = [
    { value: 'all', label: '全部级别' },
    { value: 'beginner', label: '初级' },
    { value: 'intermediate', label: '中级' },
    { value: 'advanced', label: '高级' }
  ];

  const levelColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-amber-100 text-amber-800',
    advanced: 'bg-red-100 text-red-800'
  };

  const levelLabels = {
    beginner: '初级',
    intermediate: '中级',
    advanced: '高级'
  };

  const lessons: Lesson[] = [
    { id: '1', title: '课程介绍与学习目标', duration: '15分钟', type: 'video', isCompleted: true, isLocked: false },
    { id: '2', title: '奇门遁甲的历史背景', duration: '25分钟', type: 'video', isCompleted: true, isLocked: false },
    { id: '3', title: '阴阳五行理论基础', duration: '45分钟', type: 'video', isCompleted: true, isLocked: false },
    { id: '4', title: '天干地支详解', duration: '35分钟', type: 'video', isCompleted: false, isLocked: false },
    { id: '5', title: '八卦九宫认知', duration: '40分钟', type: 'video', isCompleted: false, isLocked: false },
    { id: '6', title: '基础知识测验', duration: '20分钟', type: 'quiz', isCompleted: false, isLocked: false },
    { id: '7', title: '八门系统详解', duration: '50分钟', type: 'video', isCompleted: false, isLocked: true },
    { id: '8', title: '九星系统介绍', duration: '45分钟', type: 'video', isCompleted: false, isLocked: true }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesCategory && matchesLevel;
  });

  const handleEnroll = (course: Course) => {
    setSelectedCourse(course);
    setShowEnrollmentModal(true);
  };

  const confirmEnrollment = () => {
    if (selectedCourse) {
      // 模拟报名逻辑
      alert(`成功报名课程：${selectedCourse.title}`);
      setShowEnrollmentModal(false);
      setSelectedCourse(null);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return '🎥';
      case 'reading': return '📖';
      case 'practice': return '✏️';
      case 'quiz': return '📝';
      default: return '📚';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* 头部 */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">在线课程</h1>
              <p className="text-amber-100">系统化学习奇门遁甲，专业导师在线指导</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{courses.length}</div>
              <div className="text-sm text-amber-200">精品课程</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* 筛选栏 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.value
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">难度：</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                {levels.map(level => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {selectedCourse ? (
          /* 课程详情 */
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 mb-6"
                >
                  <span>←</span>
                  <span>返回课程列表</span>
                </button>

                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedCourse.title}</h2>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${levelColors[selectedCourse.level]}`}>
                      {levelLabels[selectedCourse.level]}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {selectedCourse.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm text-gray-700">{selectedCourse.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{selectedCourse.description}</p>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600 mb-1">{selectedCourse.duration}</div>
                    <div className="text-sm text-gray-600">课程时长</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{selectedCourse.lessons}</div>
                    <div className="text-sm text-gray-600">课程数量</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">{selectedCourse.students}</div>
                    <div className="text-sm text-gray-600">学习人数</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">¥{selectedCourse.price}</div>
                    <div className="text-sm text-gray-600">课程价格</div>
                  </div>
                </div>

                {/* 课程内容 */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">课程内容</h3>
                  <div className="space-y-3">
                    {lessons.map((lesson, index) => (
                      <div
                        key={lesson.id}
                        className={`flex items-center justify-between p-4 rounded-lg border ${
                          lesson.isCompleted
                            ? 'bg-green-50 border-green-300'
                            : lesson.isLocked
                            ? 'bg-gray-50 border-gray-300'
                            : 'bg-white border-gray-200 hover:bg-amber-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            lesson.isCompleted
                              ? 'bg-green-600 text-white'
                              : lesson.isLocked
                              ? 'bg-gray-400 text-white'
                              : 'bg-amber-600 text-white'
                          }`}>
                            {lesson.isCompleted ? '✓' : lesson.isLocked ? '🔒' : index + 1}
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{getTypeIcon(lesson.type)}</span>
                            <div>
                              <h4 className="font-semibold text-gray-800">{lesson.title}</h4>
                              <p className="text-sm text-gray-600">{lesson.duration}</p>
                            </div>
                          </div>
                        </div>
                        <button
                          disabled={lesson.isLocked}
                          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            lesson.isLocked
                              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                              : lesson.isCompleted
                              ? 'bg-green-100 text-green-700'
                              : 'bg-amber-600 text-white hover:bg-amber-700'
                          }`}
                        >
                          {lesson.isCompleted ? '已完成' : lesson.isLocked ? '未解锁' : '开始学习'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 讲师信息 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-4 text-gray-800">授课导师</h3>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👨‍🏫</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{selectedCourse.instructor}</h4>
                      <p className="text-sm text-gray-600">资深奇门遁甲导师，20年教学经验</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧信息 */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-800">学习进度</h3>
                {selectedCourse.isEnrolled ? (
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>完成进度</span>
                      <span>{selectedCourse.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                      <div
                        className="bg-amber-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${selectedCourse.progress}%` }}
                      ></div>
                    </div>
                    <button className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors font-medium">
                      继续学习
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="text-3xl font-bold text-amber-600 mb-4">¥{selectedCourse.price}</div>
                    <button
                      onClick={() => handleEnroll(selectedCourse)}
                      className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                    >
                      立即报名
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-800">课程特色</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start space-x-2">
                    <span className="text-amber-600">•</span>
                    <span>专业导师一对一指导</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-amber-600">•</span>
                    <span>实战案例深度解析</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-amber-600">•</span>
                    <span>学习群答疑解惑</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-amber-600">•</span>
                    <span>终身免费更新</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 border border-blue-200">
                <h3 className="text-lg font-bold mb-4 text-blue-800">学习保障</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span>7天无理由退款</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span>学习效果保证</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span>专业认证证书</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* 课程列表 */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <div
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <span className="text-6xl text-white">📚</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[course.level]}`}>
                      {levelLabels[course.level]}
                    </span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500 text-sm">⭐</span>
                      <span className="text-sm text-gray-700">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-2 text-gray-800">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{course.instructor}</span>
                    <span>{course.students}人学习</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-amber-600">¥{course.price}</div>
                      <div className="text-xs text-gray-500">{course.duration} · {course.lessons}节课</div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEnroll(course);
                      }}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        course.isEnrolled
                          ? 'bg-green-100 text-green-700'
                          : 'bg-amber-600 text-white hover:bg-amber-700'
                      }`}
                    >
                      {course.isEnrolled ? '继续学习' : '立即报名'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">暂无相关课程</h3>
            <p className="text-gray-600 mb-6">尝试调整筛选条件查看更多课程</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}
              className="bg-amber-600 text-white py-2 px-6 rounded-lg hover:bg-amber-700 transition-colors font-medium"
            >
              重置筛选
            </button>
          </div>
        )}
      </div>

      {/* 报名模态框 */}
      {showEnrollmentModal && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full mx-4">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">🎓</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">确认报名</h2>
              <p className="text-gray-600">{selectedCourse.title}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">课程价格：</span>
                <span className="text-xl font-bold text-amber-600">¥{selectedCourse.price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">课程时长：</span>
                <span className="font-medium">{selectedCourse.duration}</span>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={confirmEnrollment}
                className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors font-medium"
              >
                确认报名
              </button>
              <button
                onClick={() => setShowEnrollmentModal(false)}
                className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}