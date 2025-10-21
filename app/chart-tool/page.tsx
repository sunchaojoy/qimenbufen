'use client';

import { useState } from 'react';

interface ChartData {
  id: string;
  name: string;
  time: string;
  dunType: string;
  description: string;
  chartData: {
    [key: string]: {
      gan: string;
      men: string;
      xing: string;
      shen: string;
      gong: string;
    };
  };
  analysis: string;
  createdAt: string;
}

export default function ChartTool() {
  const [currentStep, setCurrentStep] = useState(1);
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [savedCharts, setSavedCharts] = useState<ChartData[]>([]);

  // 表单数据
  const [formData, setFormData] = useState({
    year: 2024,
    month: 3,
    day: 20,
    hour: 14,
    minute: 30,
    name: '',
    description: ''
  });

  const gongNames = ['坤二宫', '离九宫', '巽四宫', '震三宫', '中五宫', '兑七宫', '艮八宫', '坎一宫', '乾六宫'];
  const gongPositions = [
    { row: 0, col: 2 }, // 坤二宫
    { row: 0, col: 1 }, // 离九宫
    { row: 0, col: 0 }, // 巽四宫
    { row: 1, col: 2 }, // 震三宫
    { row: 1, col: 1 }, // 中五宫
    { row: 1, col: 0 }, // 兑七宫
    { row: 2, col: 2 }, // 艮八宫
    { row: 2, col: 1 }, // 坎一宫
    { row: 2, col: 0 }, // 乾六宫
  ];

  // 简化的排盘算法
  const generateChart = () => {
    const baseData = {
      '坤二宫': { gan: '乙', men: '死门', xing: '天芮星', shen: '玄武', gong: '坤' },
      '离九宫': { gan: '丁', men: '景门', xing: '天英星', shen: '九天', gong: '离' },
      '巽四宫': { gan: '庚', men: '杜门', xing: '天辅星', shen: '九地', gong: '巽' },
      '震三宫': { gan: '壬', men: '伤门', xing: '天冲星', shen: '六合', gong: '震' },
      '中五宫': { gan: '戊', men: '', xing: '天禽星', shen: '', gong: '中' },
      '兑七宫': { gan: '癸', men: '惊门', xing: '天柱星', shen: '螣蛇', gong: '兑' },
      '艮八宫': { gan: '丙', men: '生门', xing: '天任星', shen: '太阴', gong: '艮' },
      '坎一宫': { gan: '辛', men: '休门', xing: '天蓬星', shen: '值符', gong: '坎' },
      '乾六宫': { gan: '己', men: '开门', xing: '天心星', shen: '白虎', gong: '乾' }
    };

    // 根据时间进行一些变化（简化版本）
    const timeVariation = (formData.hour + formData.minute) % 9;
    const rotatedGongs = [...gongNames];
    for (let i = 0; i < timeVariation; i++) {
      rotatedGongs.push(rotatedGongs.shift()!);
    }

    const newChartData: { [key: string]: any } = {};
    rotatedGongs.forEach((gong, index) => {
      newChartData[gong] = baseData[gongNames[index] as keyof typeof baseData];
    });

    return newChartData;
  };

  const performChart = () => {
    if (!formData.name.trim()) {
      alert('请输入事件名称');
      return;
    }

    const chartDataResult = generateChart();
    const newChart: ChartData = {
      id: Date.now().toString(),
      name: formData.name,
      time: `${formData.year}年${formData.month}月${formData.day}日 ${formData.hour}:${formData.minute.toString().padStart(2, '0')}`,
      dunType: '阳遁一局',
      description: formData.description,
      chartData: chartDataResult,
      analysis: generateAnalysis(chartDataResult),
      createdAt: new Date().toISOString()
    };

    setChartData(newChart);
    setCurrentStep(4);
  };

  const generateAnalysis = (data: any) => {
    const analysisPoints = [];

    // 值符分析
    const zhiFuGong = Object.keys(data).find(gong => data[gong].shen === '值符');
    if (zhiFuGong) {
      analysisPoints.push(`值符落在${zhiFuGong}，代表事情的主动方在此宫位。`);
    }

    // 用神分析
    const shengMenGong = Object.keys(data).find(gong => data[gong].men === '生门');
    if (shengMenGong) {
      analysisPoints.push(`生门在${shengMenGong}，利于求财创业，事业发展前景良好。`);
    }

    // 吉门分析
    const goodDoors = Object.entries(data).filter(([_, val]) =>
      ['休门', '生门', '景门', '开门'].includes((val as any).men)
    );
    if (goodDoors.length > 0) {
      analysisPoints.push(`格局中有${goodDoors.length}个吉门，整体运势较好。`);
    }

    // 九星分析
    const tianXinGong = Object.keys(data).find(gong => data[gong].xing === '天心星');
    if (tianXinGong) {
      analysisPoints.push(`天心星在${tianXinGong}，适合医药、领导类事务。`);
    }

    return analysisPoints.join('\n\n') || '格局较为平稳，需要结合具体情况进一步分析。';
  };

  const saveChart = () => {
    if (!chartData) return;
    setSavedCharts([chartData, ...savedCharts.slice(0, 9)]); // 最多保存10个
  };

  const loadChart = (chart: ChartData) => {
    setChartData(chart);
    setCurrentStep(4);
  };

  const getColorByType = (type: string) => {
    const colors: { [key: string]: string } = {
      '休门': 'bg-blue-100 text-blue-800 border-blue-300',
      '生门': 'bg-green-100 text-green-800 border-green-300',
      '伤门': 'bg-red-100 text-red-800 border-red-300',
      '杜门': 'bg-gray-100 text-gray-800 border-gray-300',
      '景门': 'bg-purple-100 text-purple-800 border-purple-300',
      '死门': 'bg-red-100 text-red-800 border-red-300',
      '惊门': 'bg-orange-100 text-orange-800 border-orange-300',
      '开门': 'bg-green-100 text-green-800 border-green-300',
    };
    return colors[type] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  const getGanColor = (gan: string) => {
    const colors: { [key: string]: string } = {
      '甲': 'bg-green-100 text-green-800',
      '乙': 'bg-green-200 text-green-800',
      '丙': 'bg-red-100 text-red-800',
      '丁': 'bg-red-200 text-red-800',
      '戊': 'bg-yellow-100 text-yellow-800',
      '己': 'bg-yellow-200 text-yellow-800',
      '庚': 'bg-gray-100 text-gray-800',
      '辛': 'bg-gray-200 text-gray-800',
      '壬': 'bg-blue-100 text-blue-800',
      '癸': 'bg-blue-200 text-blue-800',
    };
    return colors[gan] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* 头部 */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">排盘工具</h1>
              <p className="text-amber-100">专业奇门遁甲排盘，获取详细分析</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">在线排盘</div>
              <div className="text-sm text-amber-200">精确到分钟</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* 步骤指示器 */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    currentStep > step
                      ? 'bg-green-600 text-white'
                      : currentStep === step
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {currentStep > step ? '✓' : step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 mx-2 ${
                      currentStep > step ? 'bg-green-600' : 'bg-gray-300'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <span className="text-sm text-gray-600">基本信息</span>
              <span className="text-sm text-gray-600">时间设置</span>
              <span className="text-sm text-gray-600">确认信息</span>
              <span className="text-sm text-gray-600">排盘结果</span>
            </div>
          </div>

          {currentStep === 1 && (
            /* 第一步：基本信息 */
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">基本信息</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">事件名称 *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="请输入要预测的事件名称"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">事件描述</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="请描述事件的详细情况（可选）"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="bg-amber-600 text-white py-3 px-8 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                  >
                    下一步
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            /* 第二步：时间设置 */
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">时间设置</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">日期设置</label>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">年份</label>
                      <input
                        type="number"
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
                        min="1900"
                        max="2100"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">月份</label>
                      <input
                        type="number"
                        value={formData.month}
                        onChange={(e) => setFormData({ ...formData, month: parseInt(e.target.value) })}
                        min="1"
                        max="12"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">日期</label>
                      <input
                        type="number"
                        value={formData.day}
                        onChange={(e) => setFormData({ ...formData, day: parseInt(e.target.value) })}
                        min="1"
                        max="31"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">时间设置</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">小时</label>
                      <input
                        type="number"
                        value={formData.hour}
                        onChange={(e) => setFormData({ ...formData, hour: parseInt(e.target.value) })}
                        min="0"
                        max="23"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">分钟</label>
                      <input
                        type="number"
                        value={formData.minute}
                        onChange={(e) => setFormData({ ...formData, minute: parseInt(e.target.value) })}
                        min="0"
                        max="59"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="border border-gray-300 text-gray-700 py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  上一步
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="bg-amber-600 text-white py-3 px-8 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                >
                  下一步
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            /* 第三步：确认信息 */
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">确认信息</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4">事件信息</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">事件名称：</span>
                        <span className="font-medium">{formData.name}</span>
                      </div>
                      {formData.description && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">事件描述：</span>
                          <span className="font-medium max-w-xs">{formData.description}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4">时间信息</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">日期时间：</span>
                        <span className="font-medium">
                          {formData.year}年{formData.month}月{formData.day}日 {formData.hour}:{formData.minute.toString().padStart(2, '0')}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">排盘类型：</span>
                        <span className="font-medium">阳遁局</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="border border-gray-300 text-gray-700 py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  上一步
                </button>
                <button
                  onClick={performChart}
                  className="bg-amber-600 text-white py-3 px-8 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                >
                  开始排盘
                </button>
              </div>
            </div>
          )}

          {currentStep === 4 && chartData && (
            /* 第四步：排盘结果 */
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">排盘结果</h2>
                  <button
                    onClick={saveChart}
                    className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    保存排盘
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">事件信息</h3>
                    <p className="text-gray-700">{chartData.name}</p>
                    {chartData.description && (
                      <p className="text-sm text-gray-600 mt-1">{chartData.description}</p>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">排盘信息</h3>
                    <p className="text-gray-700">{chartData.time}</p>
                    <p className="text-sm text-gray-600">{chartData.dunType}</p>
                  </div>
                </div>

                {/* 九宫格 */}
                <div className="max-w-md mx-auto mb-8">
                  <div className="grid grid-cols-3 gap-2 aspect-square">
                    {gongNames.map((gongName, index) => {
                      const position = gongPositions[index];
                      const data = chartData.chartData[gongName];

                      return (
                        <div
                          key={gongName}
                          className="relative bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-lg p-4"
                          style={{
                            gridColumn: position.col + 1,
                            gridRow: position.row + 1,
                          }}
                        >
                          <div className="absolute top-1 right-1">
                            <div className="bg-amber-600 text-white text-xs px-2 py-1 rounded">
                              {gongName}
                            </div>
                          </div>

                          <div className="mb-2">
                            <div className={`text-center font-bold text-lg rounded px-2 py-1 ${getGanColor(data.gan)}`}>
                              {data.gan}
                            </div>
                          </div>

                          {data.men && (
                            <div className="mb-2">
                              <div className={`text-center text-sm font-medium rounded px-2 py-1 border ${getColorByType(data.men)}`}>
                                {data.men}
                              </div>
                            </div>
                          )}

                          <div className="text-center text-xs text-purple-700 mb-2">
                            {data.xing}
                          </div>

                          {data.shen && (
                            <div className="text-center text-xs text-indigo-700">
                              {data.shen}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 分析结果 */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4 text-blue-800">简要分析</h3>
                  <p className="text-gray-700 whitespace-pre-line">{chartData.analysis}</p>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="border border-gray-300 text-gray-700 py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    重新排盘
                  </button>
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="bg-amber-600 text-white py-3 px-8 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                  >
                    新的排盘
                  </button>
                </div>
              </div>

              {/* 历史排盘 */}
              {savedCharts.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">历史排盘</h3>
                  <div className="space-y-4">
                    {savedCharts.map((chart) => (
                      <div
                        key={chart.id}
                        onClick={() => loadChart(chart)}
                        className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-amber-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-800">{chart.name}</h4>
                            <p className="text-sm text-gray-600">{chart.time}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-sm text-amber-600 font-medium">{chart.dunType}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}