'use client';

import { useState } from 'react';

interface ChartData {
  [key: string]: {
    gan: string;
    men: string;
    xing: string;
    shen: string;
    gong: string;
  };
}

export default function QimenChart() {
  const [activeDemo, setActiveDemo] = useState<string>('basic');
  const [chartData, setChartData] = useState<ChartData>({
    '巽四宫': { gan: '戊', men: '杜门', xing: '天辅星', shen: '太阴', gong: '巽' },
    '离九宫': { gan: '己', men: '景门', xing: '天英星', shen: '螣蛇', gong: '离' },
    '坤二宫': { gan: '庚', men: '死门', xing: '天芮星', shen: '玄武', gong: '坤' },
    '震三宫': { gan: '辛', men: '伤门', xing: '天冲星', shen: '九地', gong: '震' },
    '中五宫': { gan: '癸', men: '', xing: '天禽星', shen: '', gong: '中' },
    '兑七宫': { gan: '丁', men: '惊门', xing: '天柱星', shen: '白虎', gong: '兑' },
    '艮八宫': { gan: '丙', men: '生门', xing: '天任星', shen: '九天', gong: '艮' },
    '坎一宫': { gan: '乙', men: '休门', xing: '天蓬星', shen: '值符', gong: '坎' },
    '乾六宫': { gan: '壬', men: '开门', xing: '天心星', shen: '六合', gong: '乾' }
  });

  const gongNames = ['巽四宫', '离九宫', '坤二宫', '震三宫', '中五宫', '兑七宫', '艮八宫', '坎一宫', '乾六宫'];

  const gongPositions = [
    { row: 0, col: 2 }, // 巽四宫
    { row: 0, col: 1 }, // 离九宫
    { row: 0, col: 0 }, // 坤二宫
    { row: 1, col: 2 }, // 震三宫
    { row: 1, col: 1 }, // 中五宫
    { row: 1, col: 0 }, // 兑七宫
    { row: 2, col: 2 }, // 艮八宫
    { row: 2, col: 1 }, // 坎一宫
    { row: 2, col: 0 }, // 乾六宫
  ];

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

  const getXingColor = (xing: string) => {
    const colors: { [key: string]: string } = {
      '天蓬星': 'bg-blue-50 text-blue-700',
      '天芮星': 'bg-red-50 text-red-700',
      '天冲星': 'bg-green-50 text-green-700',
      '天辅星': 'bg-purple-50 text-purple-700',
      '天禽星': 'bg-yellow-50 text-yellow-700',
      '天心星': 'bg-indigo-50 text-indigo-700',
      '天柱星': 'bg-gray-50 text-gray-700',
      '天任星': 'bg-orange-50 text-orange-700',
      '天英星': 'bg-red-50 text-red-700',
    };
    return colors[xing] || 'bg-gray-50 text-gray-700';
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

  const getShenColor = (shen: string) => {
    const colors: { [key: string]: string } = {
      '值符': 'bg-purple-100 text-purple-800',
      '螣蛇': 'bg-orange-100 text-orange-800',
      '太阴': 'bg-blue-100 text-blue-800',
      '六合': 'bg-green-100 text-green-800',
      '白虎': 'bg-red-100 text-red-800',
      '玄武': 'bg-indigo-100 text-indigo-800',
      '九地': 'bg-yellow-100 text-yellow-800',
      '九天': 'bg-cyan-100 text-cyan-800',
    };
    return colors[shen] || 'bg-gray-100 text-gray-800';
  };

  const demoCharts = {
    basic: {
      name: '基础奇门局',
      description: '标准时家奇门局示例',
      time: '甲子年 丙寅月 戊午日 丙辰时',
      dunType: '阳遁一局'
    },
    fortune: {
      name: '财运奇门局',
      description: '专用于财运分析的奇门局',
      time: '丁卯年 癸卯月 辛亥日 己亥时',
      dunType: '阴遁八局'
    },
    marriage: {
      name: '婚姻奇门局',
      description: '专用于婚姻感情分析的奇门局',
      time: '戊辰年 乙卯月 丙申日 庚寅时',
      dunType: '阳遁三局'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* 头部 */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">奇门遁甲排盘演示</h1>
              <p className="text-amber-100">交互式奇门局演示，深入了解排盘原理</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">阳遁一局</div>
              <div className="text-sm text-amber-200">时家奇门演示</div>
            </div>
          </div>
        </div>
      </header>

      {/* 导航标签 */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1 py-3">
            {Object.entries(demoCharts).map(([key, chart]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeDemo === key
                    ? 'bg-amber-600 text-white'
                    : 'text-gray-600 hover:bg-amber-100'
                }`}
              >
                {chart.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 主要内容 */}
      <main className="container mx-auto px-4 py-8">
        {/* 当前演示信息 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-amber-800 mb-2">
                {demoCharts[activeDemo as keyof typeof demoCharts].name}
              </h2>
              <p className="text-gray-600">
                {demoCharts[activeDemo as keyof typeof demoCharts].description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">时间</div>
              <div className="font-mono text-lg">
                {demoCharts[activeDemo as keyof typeof demoCharts].time}
              </div>
              <div className="text-sm text-amber-600 font-medium mt-1">
                {demoCharts[activeDemo as keyof typeof demoCharts].dunType}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 奇门局主体 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-center text-gray-800">奇门局排盘</h3>

              {/* 九宫格 */}
              <div className="max-w-2xl mx-auto">
                <div className="grid grid-cols-3 gap-2 aspect-square">
                  {gongNames.map((gongName, index) => {
                    const position = gongPositions[index];
                    const data = chartData[gongName];

                    return (
                      <div
                        key={gongName}
                        className="relative bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-lg p-4 hover:shadow-lg transition-shadow"
                        style={{
                          gridColumn: position.col + 1,
                          gridRow: position.row + 1,
                        }}
                      >
                        {/* 宫位名称 */}
                        <div className="absolute top-1 right-1">
                          <div className="bg-amber-600 text-white text-xs px-2 py-1 rounded">
                            {gongName}
                          </div>
                        </div>

                        {/* 天干 */}
                        <div className="mb-2">
                          <div className={`text-center font-bold text-lg rounded px-2 py-1 ${getGanColor(data.gan)}`}>
                            {data.gan}
                          </div>
                        </div>

                        {/* 八门 */}
                        {data.men && (
                          <div className="mb-2">
                            <div className={`text-center text-sm font-medium rounded px-2 py-1 border ${getColorByType(data.men)}`}>
                              {data.men}
                            </div>
                          </div>
                        )}

                        {/* 九星 */}
                        <div className="mb-2">
                          <div className={`text-center text-xs rounded px-2 py-1 ${getXingColor(data.xing)}`}>
                            {data.xing}
                          </div>
                        </div>

                        {/* 八神 */}
                        {data.shen && (
                          <div className="mt-auto">
                            <div className={`text-center text-xs rounded px-2 py-1 ${getShenColor(data.shen)}`}>
                              {data.shen}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 图例说明 */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">八门吉凶</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-200 rounded"></div>
                      <span>吉门：休、生、景、开</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-red-200 rounded"></div>
                      <span>凶门：伤、杜、死、惊</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">三奇六仪</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-300 rounded"></div>
                      <span>三奇：乙、丙、丁</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gray-300 rounded"></div>
                      <span>六仪：戊、己、庚、辛、壬、癸</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">九星五行</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-200 rounded"></div>
                      <span>水星：天蓬</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-200 rounded"></div>
                      <span>木星：天冲、天辅</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">八神属性</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-purple-200 rounded"></div>
                      <span>吉神：值符、太阴、六合</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-red-200 rounded"></div>
                      <span>凶神：螣蛇、白虎、玄武</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧信息面板 */}
          <div className="space-y-6">
            {/* 排盘步骤 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-amber-800">排盘步骤解析</h3>
              <div className="space-y-3">
                {[
                  { step: 1, title: '确定时间', desc: '农历戊午年丙辰时', status: 'completed' },
                  { step: 2, title: '确定局数', desc: '阳遁一局', status: 'completed' },
                  { step: 3, title: '排地盘', desc: '六仪固定位置', status: 'completed' },
                  { step: 4, title: '排天盘', desc: '三奇六仪转动', status: 'completed' },
                  { step: 5, title: '排九星', desc: '九星随天干移动', status: 'completed' },
                  { step: 6, title: '排八门', desc: '八门按规律排列', status: 'completed' },
                  { step: 7, title: '排八神', desc: '八神随值符转动', status: 'completed' },
                  { step: 8, title: '完成验证', desc: '检查排盘正确性', status: 'current' }
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      item.status === 'completed'
                        ? 'bg-green-600 text-white'
                        : item.status === 'current'
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 关键分析点 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-amber-800">关键分析点</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-sm text-blue-800 mb-1">值符值使</h4>
                  <p className="text-xs text-gray-700">值符天心星落乾六宫，值使开门落乾六宫</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-sm text-green-800 mb-1">三奇得位</h4>
                  <p className="text-xs text-gray-700">乙奇在坎一宫，丙奇在艮八宫，丁奇在兑七宫</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-sm text-purple-800 mb-1">门星神组合</h4>
                  <p className="text-xs text-gray-700">休门+天蓬星+值符在坎宫，为水局旺相</p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-semibold text-sm text-amber-800 mb-1">时令因素</h4>
                  <p className="text-xs text-gray-700">午月火旺，木生火，火生土的格局</p>
                </div>
              </div>
            </div>

            {/* 操作按钮 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-amber-800">互动操作</h3>
              <div className="space-y-3">
                <button className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors font-medium">
                  查看详细分析
                </button>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  生成分析报告
                </button>
                <button className="w-full border border-amber-600 text-amber-600 py-2 px-4 rounded-lg hover:bg-amber-50 transition-colors font-medium">
                  导出为图片
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  重置排盘
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}