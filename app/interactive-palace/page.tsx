'use client';

import { useState } from 'react';

interface PalaceData {
  id: string;
  name: string;
  position: { row: number; col: number };
  bagua: string;
  direction: string;
  element: string;
  number: number;
  color: string;
  description: string;
}

export default function InteractivePalace() {
  const [selectedPalace, setSelectedPalace] = useState<string | null>(null);
  const [hoveredPalace, setHoveredPalace] = useState<string | null>(null);
  const [showNumbers, setShowNumbers] = useState(true);
  const [showElements, setShowElements] = useState(true);
  const [showDirections, setShowDirections] = useState(true);

  const palaces: PalaceData[] = [
    {
      id: 'kun',
      name: '坤二宫',
      position: { row: 0, col: 0 },
      bagua: '坤',
      direction: '西南',
      element: '土',
      number: 2,
      color: 'bg-yellow-100 border-yellow-400',
      description: '坤为地，代表母、土、包容、稳定、厚德载物'
    },
    {
      id: 'li',
      name: '离九宫',
      position: { row: 0, col: 1 },
      bagua: '离',
      direction: '南',
      element: '火',
      number: 9,
      color: 'bg-red-100 border-red-400',
      description: '离为火，代表中女、火、光明、文明、热情向上'
    },
    {
      id: 'xun',
      name: '巽四宫',
      position: { row: 0, col: 2 },
      bagua: '巽',
      direction: '东南',
      element: '木',
      number: 4,
      color: 'bg-green-100 border-green-400',
      description: '巽为风，代表长女、木、柔顺、渐进、温和谦逊'
    },
    {
      id: 'zhong',
      name: '中五宫',
      position: { row: 1, col: 1 },
      bagua: '中',
      direction: '中',
      element: '土',
      number: 5,
      color: 'bg-amber-100 border-amber-400',
      description: '中宫为枢纽，调和八方，统领全局，变化之始'
    },
    {
      id: 'dui',
      name: '兑七宫',
      position: { row: 2, col: 0 },
      bagua: '兑',
      direction: '西',
      element: '金',
      number: 7,
      color: 'bg-gray-100 border-gray-400',
      description: '兑为泽，代表少女、金、喜悦、口才、和谐融洽'
    },
    {
      id: 'kan',
      name: '坎一宫',
      position: { row: 2, col: 1 },
      bagua: '坎',
      direction: '北',
      element: '水',
      number: 1,
      color: 'bg-blue-100 border-blue-400',
      description: '坎为水，代表中男、水、智慧、险陷、包容流动'
    },
    {
      id: 'gen',
      name: '艮八宫',
      position: { row: 2, col: 2 },
      bagua: '艮',
      direction: '东北',
      element: '土',
      number: 8,
      color: 'bg-orange-100 border-orange-400',
      description: '艮为山，代表少男、土、停止、稳重、厚实支撑'
    },
    {
      id: 'qian',
      name: '乾六宫',
      position: { row: 1, col: 0 },
      bagua: '乾',
      direction: '西北',
      element: '金',
      number: 6,
      color: 'bg-purple-100 border-purple-400',
      description: '乾为天，代表父、金、刚健、创造、主动进取'
    },
    {
      id: 'zhen',
      name: '震三宫',
      position: { row: 1, col: 2 },
      bagua: '震',
      direction: '东',
      element: '木',
      number: 3,
      color: 'bg-emerald-100 border-emerald-400',
      description: '震为雷，代表长男、木、震动、行动、威严震慑'
    }
  ];

  const elementColors = {
    '金': 'text-gray-700',
    '木': 'text-green-700',
    '水': 'text-blue-700',
    '火': 'text-red-700',
    '土': 'text-yellow-700'
  };

  const directionIcons = {
    '北': '⬇️',
    '东北': '↙️',
    '东': '⬅️',
    '东南': '↖️',
    '南': '⬆️',
    '西南': '↗️',
    '西': '➡️',
    '西北': '↘️',
    '中': '⭕'
  };

  const selectedPalaceData = palaces.find(p => p.id === selectedPalace);

  const getPalaceRelationship = (palace1: PalaceData, palace2: PalaceData) => {
    // 简化的五行生克关系
    const elements = ['金', '木', '水', '火', '土'];
    const sheng = ['金生水', '水生木', '木生火', '火生土', '土生金'];
    const ke = ['金克木', '木克土', '土克水', '水克火', '火克金'];

    const idx1 = elements.indexOf(palace1.element);
    const idx2 = elements.indexOf(palace2.element);

    if ((idx1 + 1) % 5 === idx2) return sheng[idx1];
    if ((idx2 + 1) % 5 === idx1) return sheng[idx2];
    if ((idx1 + 2) % 5 === idx2) return ke[idx1];
    if ((idx2 + 2) % 5 === idx1) return ke[idx2];
    return '同类';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* 头部 */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">互动式九宫格</h1>
              <p className="text-amber-100">探索奇门遁甲九宫格的奥秘，了解每个宫位的特性</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">洛书九宫</div>
              <div className="text-sm text-amber-200">点击宫位查看详情</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* 控制面板 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-bold mb-4 text-gray-800">显示选项</h3>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showNumbers}
                onChange={(e) => setShowNumbers(e.target.checked)}
                className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
              />
              <span className="text-sm text-gray-700">显示数字</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showElements}
                onChange={(e) => setShowElements(e.target.checked)}
                className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
              />
              <span className="text-sm text-gray-700">显示五行</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showDirections}
                onChange={(e) => setShowDirections(e.target.checked)}
                className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
              />
              <span className="text-sm text-gray-700">显示方位</span>
            </label>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 九宫格主体 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-center text-gray-800">九宫格布局</h3>

              {/* 九宫格 */}
              <div className="max-w-md mx-auto aspect-square">
                <div className="grid grid-cols-3 gap-2 h-full">
                  {Array.from({ length: 9 }, (_, index) => {
                    const row = Math.floor(index / 3);
                    const col = index % 3;
                    const palace = palaces.find(p => p.position.row === row && p.position.col === col);

                    return (
                      <div
                        key={index}
                        className={`relative ${palace ? palace.color : 'bg-gray-50'} border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-lg ${
                          selectedPalace === palace?.id ? 'ring-4 ring-amber-500 scale-105' : ''
                        } ${hoveredPalace === palace?.id ? 'scale-105' : ''}`}
                        onClick={() => palace && setSelectedPalace(palace.id)}
                        onMouseEnter={() => palace && setHoveredPalace(palace.id)}
                        onMouseLeave={() => setHoveredPalace(null)}
                      >
                        {palace && (
                          <>
                            {/* 宫位名称 */}
                            <div className="text-center font-bold text-gray-800 mb-2">
                              {palace.name}
                            </div>

                            {/* 数字 */}
                            {showNumbers && (
                              <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-gray-700 shadow-sm">
                                {palace.number}
                              </div>
                            )}

                            {/* 八卦符号 */}
                            <div className="text-center text-3xl font-bold text-gray-700 mb-2">
                              {palace.bagua}
                            </div>

                            {/* 五行 */}
                            {showElements && (
                              <div className={`text-center text-sm font-medium ${elementColors[palace.element as keyof typeof elementColors]}`}>
                                {palace.element}
                              </div>
                            )}

                            {/* 方位 */}
                            {showDirections && (
                              <div className="absolute bottom-2 right-2 text-lg">
                                {directionIcons[palace.direction as keyof typeof directionIcons]}
                              </div>
                            )}

                            {/* 选中状态指示器 */}
                            {selectedPalace === palace.id && (
                              <div className="absolute top-2 left-2 w-3 h-3 bg-amber-600 rounded-full animate-pulse"></div>
                            )}
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 图例说明 */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">五行属性</h4>
                  <div className="space-y-1 text-xs">
                    {Object.entries(elementColors).map(([element, color]) => (
                      <div key={element} className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded ${color.replace('text', 'bg')}`}></div>
                        <span>{element}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">数字含义</h4>
                  <div className="space-y-1 text-xs text-gray-600">
                    <div>1-9: 洛书数字排列</div>
                    <div>5: 中宫枢纽位置</div>
                    <div>对宫相加为10</div>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">交互说明</h4>
                  <div className="space-y-1 text-xs text-gray-600">
                    <div>• 点击宫位查看详情</div>
                    <div>• 鼠标悬停显示预览</div>
                    <div>• 使用选项控制显示</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧信息面板 */}
          <div className="space-y-6">
            {/* 选中宫位详情 */}
            {selectedPalaceData && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-amber-800">
                  {selectedPalaceData.name}详情
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">八卦：</span>
                    <span className="font-bold text-xl">{selectedPalaceData.bagua}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">方位：</span>
                    <span className="font-medium">{selectedPalaceData.direction}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">五行：</span>
                    <span className={`font-medium ${elementColors[selectedPalaceData.element as keyof typeof elementColors]}`}>
                      {selectedPalaceData.element}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">数字：</span>
                    <span className="font-medium">{selectedPalaceData.number}</span>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-sm mb-2 text-gray-800">特性描述：</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {selectedPalaceData.description}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 宫位关系 */}
            {selectedPalaceData && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-amber-800">宫位关系</h3>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-gray-700">与其他宫位的五行关系：</h4>
                  {palaces.filter(p => p.id !== selectedPalaceData.id).slice(0, 4).map((palace) => (
                    <div key={palace.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">{palace.name}</span>
                      <span className="text-sm text-gray-600">
                        {getPalaceRelationship(selectedPalaceData, palace)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 学习提示 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 border border-blue-200">
              <h3 className="text-lg font-bold mb-4 text-blue-800">学习提示</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>九宫格是奇门遁甲的空间基础，每个宫位都有特定的属性</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>中央中五宫为枢纽，其他八宫围绕排列</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>数字排列遵循洛书格局，对宫相加皆为10</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>五行生克关系是分析宫位关系的重要基础</span>
                </div>
              </div>
            </div>

            {/* 快速导航 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-amber-800">快速导航</h3>
              <div className="grid grid-cols-3 gap-2">
                {palaces.map((palace) => (
                  <button
                    key={palace.id}
                    onClick={() => setSelectedPalace(palace.id)}
                    className={`p-2 text-xs font-medium rounded transition-colors ${
                      selectedPalace === palace.id
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-amber-100'
                    }`}
                  >
                    {palace.bagua}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}