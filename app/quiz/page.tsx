'use client';

import { useState } from 'react';

interface Question {
  id: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizResult {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpent: number;
}

export default function Quiz() {
  const [currentCategory, setCurrentCategory] = useState<string>('all');
  const [currentQuiz, setCurrentQuiz] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [showExplanation, setShowExplanation] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      category: '基础理论',
      difficulty: 'easy',
      question: '奇门遁甲被誉为"帝王之学"，主要因为什么？',
      options: [
        '只有皇帝才能学习',
        '在古代主要用于军事战略',
        '预测效果特别准确',
        '理论体系复杂深奥'
      ],
      correctAnswer: 1,
      explanation: '奇门遁甲在古代主要用于军事战略，帮助军事统帅决策，因此被誉为"帝王之学"。'
    },
    {
      id: 2,
      category: '基础理论',
      difficulty: 'easy',
      question: '奇门遁甲的核心基础是什么？',
      options: [
        '四书五经',
        '易经八卦',
        '诸子百家',
        '黄帝内经'
      ],
      correctAnswer: 1,
      explanation: '奇门遁甲以易经八卦为基础，结合天文学、历法学、阴阳五行学说形成。'
    },
    {
      id: 3,
      category: '符号系统',
      difficulty: 'medium',
      question: '以下哪个属于奇门遁甲的吉门？',
      options: [
        '伤门',
        '死门',
        '生门',
        '惊门'
      ],
      correctAnswer: 2,
      explanation: '奇门遁甲的八门中，休门、生门、景门、开门为吉门；伤门、杜门、死门、惊门为凶门。'
    },
    {
      id: 4,
      category: '符号系统',
      difficulty: 'medium',
      question: '三奇指的是哪三个天干？',
      options: [
        '甲、乙、丙',
        '乙、丙、丁',
        '丙、丁、戊',
        '丁、戊、己'
      ],
      correctAnswer: 1,
      explanation: '三奇指的是乙、丙、丁三个天干，分别称为日奇、月奇、星奇。'
    },
    {
      id: 5,
      category: '阴阳五行',
      difficulty: 'easy',
      question: '五行相生的关系中，木生什么？',
      options: [
        '水',
        '火',
        '土',
        '金'
      ],
      correctAnswer: 1,
      explanation: '五行相生关系：木生火、火生土、土生金、金生水、水生木。'
    },
    {
      id: 6,
      category: '阴阳五行',
      difficulty: 'medium',
      question: '以下哪个不属于阳干？',
      options: [
        '甲',
        '丙',
        '乙',
        '戊'
      ],
      correctAnswer: 2,
      explanation: '十天干中，阳干为甲、丙、戊、庚、壬；阴干为乙、丁、己、辛、癸。'
    },
    {
      id: 7,
      category: '八卦九宫',
      difficulty: 'medium',
      question: '离九宫对应的方位是什么？',
      options: [
        '东',
        '南',
        '西',
        '北'
      ],
      correctAnswer: 1,
      explanation: '离九宫对应南方，离卦属火，代表光明、文明。'
    },
    {
      id: 8,
      category: '八卦九宫',
      difficulty: 'hard',
      question: '中五宫在奇门遁甲中有什么特殊意义？',
      options: [
        '最重要的吉位',
        '不用于排盘',
        '枢纽调和作用',
        '总是为凶'
      ],
      correctAnswer: 2,
      explanation: '中五宫作为九宫的枢纽，起调和各方的作用，但通常不直接用于排盘。'
    },
    {
      id: 9,
      category: '排盘方法',
      difficulty: 'hard',
      question: '奇门遁甲排盘时，阳遁和阴遁的主要区别是什么？',
      options: [
        '排盘方法不同',
        '使用符号不同',
        '根据节气和时辰确定',
        '预测结果不同'
      ],
      correctAnswer: 2,
      explanation: '阳遁和阴遁主要根据冬至、夏至等节气和具体时辰来确定，决定了排盘的基本模式。'
    },
    {
      id: 10,
      category: '排盘方法',
      difficulty: 'medium',
      question: '奇门遁甲的四盘不包括以下哪个？',
      options: [
        '天盘',
        '地盘',
        '人盘',
        '风盘'
      ],
      correctAnswer: 3,
      explanation: '奇门遁甲的四盘是：天盘、地盘、人盘、神盘，没有风盘。'
    }
  ];

  const categories = ['all', '基础理论', '符号系统', '阴阳五行', '八卦九宫', '排盘方法'];

  const difficultyColors = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-amber-100 text-amber-800',
    hard: 'bg-red-100 text-red-800'
  };

  const difficultyText = {
    easy: '简单',
    medium: '中等',
    hard: '困难'
  };

  const startQuiz = () => {
    let filteredQuestions = questions;
    if (currentCategory !== 'all') {
      filteredQuestions = questions.filter(q => q.category === currentCategory);
    }
    setCurrentQuiz(filteredQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizResults([]);
    setStartTime(Date.now());
    setShowExplanation(false);
  };

  const selectAnswer = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const submitAnswer = () => {
    if (selectedAnswer === null) return;

    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    const currentQuestion = currentQuiz[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    const result: QuizResult = {
      questionId: currentQuestion.id,
      selectedAnswer: selectedAnswer,
      isCorrect: isCorrect,
      timeSpent: timeSpent
    };

    setQuizResults([...quizResults, result]);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < currentQuiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setStartTime(Date.now());
      setShowExplanation(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuiz([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizResults([]);
    setShowExplanation(false);
  };

  const calculateScore = () => {
    const correct = quizResults.filter(r => r.isCorrect).length;
    return {
      correct: correct,
      total: quizResults.length,
      percentage: Math.round((correct / quizResults.length) * 100)
    };
  };

  if (showResult) {
    const score = calculateScore();
    const totalTime = quizResults.reduce((sum, r) => sum + r.timeSpent, 0);

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-amber-800 mb-4">测验完成！</h1>
                <div className="w-32 h-32 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-800">{score.percentage}%</div>
                    <div className="text-sm text-amber-600">正确率</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{score.correct}</div>
                    <div className="text-sm text-gray-600">答对题数</div>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{score.total - score.correct}</div>
                    <div className="text-sm text-gray-600">答错题数</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{Math.round(totalTime / 60)}分</div>
                    <div className="text-sm text-gray-600">用时</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-4 text-gray-800">答题详情</h3>
                <div className="space-y-3">
                  {quizResults.map((result, index) => {
                    const question = currentQuiz[index];
                    return (
                      <div key={result.questionId} className={`p-4 rounded-lg border ${
                        result.isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-800">题目 {index + 1}</span>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            result.isCorrect ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                          }`}>
                            {result.isCorrect ? '正确' : '错误'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">{question.question}</p>
                        <p className="text-sm text-gray-600">
                          你的答案：{question.options[result.selectedAnswer]}
                          {!result.isCorrect && (
                            <span className="ml-2 text-green-600">
                              正确答案：{question.options[question.correctAnswer]}
                            </span>
                          )}
                        </p>
                        {!result.isCorrect && (
                          <p className="text-sm text-gray-600 mt-2 italic">
                            解释：{question.explanation}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={restartQuiz}
                  className="flex-1 bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                >
                  重新测验
                </button>
                <button
                  onClick={() => window.location.href = '/'}
                  className="flex-1 border border-amber-600 text-amber-600 py-3 px-6 rounded-lg hover:bg-amber-50 transition-colors font-medium"
                >
                  返回首页
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentQuiz.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-2">奇门遁甲知识测验</h1>
              <p className="text-amber-100">检验您的学习成果，巩固理论知识</p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">选择测验类别</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setCurrentCategory(category)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      currentCategory === category
                        ? 'border-amber-500 bg-amber-50'
                        : 'border-gray-200 hover:border-amber-300 hover:bg-gray-50'
                    }`}
                  >
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {category === 'all' ? '全部题目' : category}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {category === 'all'
                        ? `${questions.length} 道题目`
                        : `${questions.filter(q => q.category === category).length} 道题目`
                      }
                    </p>
                  </button>
                ))}
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold mb-4 text-amber-800">测验说明</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 每道题目只有一个正确答案</li>
                  <li>• 选择答案后可以查看解释</li>
                  <li>• 测验完成后会显示详细的答题情况</li>
                  <li>• 建议先学习相关理论知识再进行测验</li>
                </ul>
              </div>

              <div className="text-center">
                <button
                  onClick={startQuiz}
                  className="bg-amber-600 text-white py-3 px-8 rounded-lg hover:bg-amber-700 transition-colors font-medium text-lg"
                >
                  开始测验
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = currentQuiz[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">知识测验</h1>
              <p className="text-amber-100">
                {currentCategory === 'all' ? '综合测验' : currentCategory}
              </p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">
                {currentQuestionIndex + 1} / {currentQuiz.length}
              </div>
              <div className="text-sm text-amber-200">进度</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* 进度条 */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>测验进度</span>
              <span>{Math.round(((currentQuestionIndex + 1) / currentQuiz.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestionIndex + 1) / currentQuiz.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* 题目 */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[currentQuestion.difficulty]}`}>
                  {difficultyText[currentQuestion.difficulty]}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  {currentQuestion.category}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                {currentQuestion.question}
              </h2>
            </div>

            {/* 选项 */}
            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => selectAnswer(index)}
                  disabled={showExplanation}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    showExplanation
                      ? index === currentQuestion.correctAnswer
                        ? 'bg-green-50 border-green-400'
                        : index === selectedAnswer
                        ? 'bg-red-50 border-red-400'
                        : 'bg-gray-50 border-gray-200'
                      : selectedAnswer === index
                      ? 'bg-amber-50 border-amber-400'
                      : 'border-gray-200 hover:border-amber-300 hover:bg-gray-50'
                  } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                      showExplanation
                        ? index === currentQuestion.correctAnswer
                          ? 'bg-green-600 text-white border-green-600'
                          : index === selectedAnswer
                          ? 'bg-red-600 text-white border-red-600'
                          : 'border-gray-300'
                        : selectedAnswer === index
                        ? 'bg-amber-600 text-white border-amber-600'
                        : 'border-gray-300'
                    }`}>
                      {showExplanation
                        ? index === currentQuestion.correctAnswer
                          ? '✓'
                          : index === selectedAnswer
                          ? '✗'
                          : String.fromCharCode(65 + index)
                        : String.fromCharCode(65 + index)
                      }
                    </div>
                    <span className={`${
                      showExplanation && index === currentQuestion.correctAnswer
                        ? 'text-green-700 font-medium'
                        : showExplanation && index === selectedAnswer && index !== currentQuestion.correctAnswer
                        ? 'text-red-700'
                        : 'text-gray-800'
                    }`}>
                      {option}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* 解释 */}
            {showExplanation && (
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h4 className="font-semibold text-blue-800 mb-2">解释：</h4>
                <p className="text-sm text-gray-700">{currentQuestion.explanation}</p>
              </div>
            )}

            {/* 操作按钮 */}
            <div className="flex space-x-4">
              {!showExplanation ? (
                <button
                  onClick={submitAnswer}
                  disabled={selectedAnswer === null}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
                    selectedAnswer === null
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-amber-600 text-white hover:bg-amber-700'
                  }`}
                >
                  提交答案
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  className="flex-1 bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                >
                  {currentQuestionIndex < currentQuiz.length - 1 ? '下一题' : '查看结果'}
                </button>
              )}
              <button
                onClick={restartQuiz}
                className="border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                退出测验
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}