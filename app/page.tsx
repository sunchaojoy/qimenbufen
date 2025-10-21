'use client';

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* 头部 */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">奇门遁甲基础知识</h1>
              <p className="text-amber-100">探索中华传统智慧，学习古老预测术</p>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="text-2xl font-bold">奇</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 导航菜单 */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-1 py-2">
            {[
              { id: 'overview', name: '概览' },
              { id: 'history', name: '历史源流' },
              { id: 'basics', name: '基础理论' },
              { id: 'symbols', name: '符号系统' },
              { id: 'layout', name: '排盘方法' },
              { id: 'interpretation', name: '断局技巧' },
              { id: 'learning', name: '学习路径' }
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeSection === section.id
                    ? 'bg-amber-600 text-white'
                    : 'text-gray-700 hover:bg-amber-100'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="container mx-auto px-4 py-8">
        {/* 概览部分 */}
        {activeSection === 'overview' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-amber-800">什么是奇门遁甲？</h2>
              <div className="prose prose-amber max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  奇门遁甲是中华优秀传统文化中最重要的预测学之一，被誉为"帝王之学"。它以易经八卦为基础，
                  结合天文学、历法学、阴阳五行学说，形成了一套完整的时空预测体系。
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  奇门遁甲通过分析特定时间空间中的天、地、人、神四盘关系，来预测和指导各种事务的发展趋势，
                  在古代主要用于军事战略，现代则广泛应用于商业决策、人生规划等领域。
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
                    <h3 className="font-bold text-amber-800 mb-3">核心特点</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 时空统一的预测体系</li>
                      <li>• 天地人神四盘合参</li>
                      <li>• 综合性分析方法</li>
                      <li>• 实用性强的应用价值</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-bold text-blue-800 mb-3">主要流派</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 转盘奇门</li>
                      <li>• 法术奇门/道家奇门</li>
                      <li>• 现代应用奇门</li>
                      <li>• 学术研究奇门</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                    <h3 className="font-bold text-green-800 mb-3">应用领域</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 商业决策分析</li>
                      <li>• 人生规划指导</li>
                      <li>• 风水布局调整</li>
                      <li>• 时机选择优化</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-amber-800">知识体系结构</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: '基础理论',
                    desc: '阴阳五行、天干地支、八卦九宫',
                    icon: '📚',
                    path: '/knowledge/basic-theory'
                  },
                  {
                    title: '符号系统',
                    desc: '八门九星八神、三奇六仪',
                    icon: '🔮',
                    path: '/knowledge/symbol-system'
                  },
                  {
                    title: '排盘方法',
                    desc: '时家奇门排盘技巧与工具使用',
                    icon: '📊',
                    path: '/knowledge/chart-method'
                  },
                  {
                    title: '断局技巧',
                    desc: '用神选择、象意解读、吉凶判断',
                    icon: '🎯',
                    path: '/knowledge/interpretation'
                  },
                  {
                    title: '分项占断',
                    desc: '财运、婚姻、事业、健康等专项预测',
                    icon: '💰',
                    path: '/knowledge/special-prediction'
                  },
                  {
                    title: '现代应用',
                    desc: '商业、管理、咨询等实际应用',
                    icon: '🚀',
                    path: '/knowledge/modern-application'
                  }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors group"
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 历史源流 */}
        {activeSection === 'history' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-amber-800">历史源流</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="font-bold text-lg mb-2">起源传说</h3>
                  <p className="text-gray-700">
                    相传奇门遁甲起源于黄帝时期，距今已有四千多年历史。黄帝与蚩尤大战时，
                    九天玄女传授奇门遁甲之术，帮助黄帝取得胜利。这体现了奇门遁甲在古代军事中的重要地位。
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-lg mb-2">发展演变</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>夏商周时期：</strong>主要用于军事战略和天文历法</li>
                    <li><strong>秦汉时期：</strong>理论体系逐步完善，开始向民间传播</li>
                    <li><strong>唐宋时期：</strong>达到鼎盛，出现许多重要著作和名家</li>
                    <li><strong>明清时期：</strong>系统化整理，形成完整理论体系</li>
                    <li><strong>现代：</strong>科学化研究，应用领域不断扩展</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="font-bold text-lg mb-2">重要著作</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { name: '《神奇之门》', author: '张志春', desc: '现代奇门遁甲经典教材' },
                      { name: '《法术奇门笔记》', author: '王凤麟', desc: '道家奇门实战指南' },
                      { name: '《奇门遁甲预测学》', author: '杜新会', desc: '系统预测理论著作' },
                      { name: '《奇门启悟》', author: '刘文元', desc: '实用预测技巧总结' }
                    ].map((book, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-amber-700">{book.name}</h4>
                        <p className="text-sm text-gray-600">作者：{book.author}</p>
                        <p className="text-sm text-gray-700 mt-1">{book.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 基础理论 */}
        {activeSection === 'basics' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-amber-800">基础理论</h2>

              <div className="space-y-8">
                {/* 阴阳五行 */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-blue-700">阴阳五行</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">阴阳理论</h4>
                      <p className="text-gray-700 mb-3">
                        阴阳是宇宙万物的基本规律，体现了事物对立统一的哲学思想。
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li><span className="font-medium">阳：</span>天、日、动、刚、男、上</li>
                        <li><span className="font-medium">阴：</span>地、月、静、柔、女、下</li>
                        <li><span className="font-medium">关系：</span>对立统一、相互转化、消长平衡</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">五行关系</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium text-green-700">五行属性：</p>
                          <div className="grid grid-cols-5 gap-2 text-center text-sm">
                            <div className="bg-green-200 p-2 rounded">金</div>
                            <div className="bg-blue-200 p-2 rounded">水</div>
                            <div className="bg-green-300 p-2 rounded">木</div>
                            <div className="bg-red-200 p-2 rounded">火</div>
                            <div className="bg-yellow-200 p-2 rounded">土</div>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium text-green-700">相生关系：</p>
                          <p className="text-sm">金生水 → 水生木 → 木生火 → 火生土 → 土生金</p>
                        </div>
                        <div>
                          <p className="font-medium text-green-700">相克关系：</p>
                          <p className="text-sm">金克木 → 木克土 → 土克水 → 水克火 → 火克金</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 天干地支 */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-700">天干地支</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">十天干</h4>
                      <div className="grid grid-cols-5 gap-2 text-center mb-3">
                        {['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'].map((gan, index) => (
                          <div key={index} className="bg-purple-200 p-2 rounded font-medium">
                            {gan}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-700">
                        阳干：甲、丙、戊、庚、壬 | 阴干：乙、丁、己、辛、癸
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">十二地支</h4>
                      <div className="grid grid-cols-4 gap-2 text-center mb-3">
                        {['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'].map((zhi, index) => (
                          <div key={index} className="bg-indigo-200 p-2 rounded font-medium">
                            {zhi}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-700">
                        阳支：子、寅、辰、午、申、戌 | 阴支：丑、卯、巳、未、酉、亥
                      </p>
                    </div>
                  </div>
                </div>

                {/* 八卦九宫 */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-amber-700">八卦九宫</h3>
                  <div className="bg-amber-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      九宫格是奇门遁甲的空间基础，每个宫位对应特定的八卦、方位、五行和属性。
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { palace: '巽四宫', trigram: '巽', direction: '东南', element: '木' },
                        { palace: '离九宫', trigram: '离', direction: '南', element: '火' },
                        { palace: '坤二宫', trigram: '坤', direction: '西南', element: '土' },
                        { palace: '震三宫', trigram: '震', direction: '东', element: '木' },
                        { palace: '中五宫', trigram: '中', direction: '中', element: '土' },
                        { palace: '兑七宫', trigram: '兑', direction: '西', element: '金' },
                        { palace: '艮八宫', trigram: '艮', direction: '东北', element: '土' },
                        { palace: '坎一宫', trigram: '坎', direction: '北', element: '水' },
                        { palace: '乾六宫', trigram: '乾', direction: '西北', element: '金' }
                      ].map((palace, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg border border-amber-200 text-center">
                          <div className="font-semibold text-amber-700">{palace.palace}</div>
                          <div className="text-sm text-gray-600">{palace.trigram}卦</div>
                          <div className="text-xs text-gray-500">{palace.direction}方 · {palace.element}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 符号系统 */}
        {activeSection === 'symbols' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-amber-800">核心符号系统</h2>

              <div className="space-y-8">
                {/* 八门 */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-blue-700">八门系统</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { name: '休门', type: '吉门', desc: '休息、安逸、宜休养生息' },
                      { name: '生门', type: '吉门', desc: '生长、发展、宜求财创业' },
                      { name: '伤门', type: '凶门', desc: '伤害、争斗、宜捕猎讨债' },
                      { name: '杜门', type: '凶门', desc: '堵塞、隐匿、宜躲藏避灾' },
                      { name: '景门', type: '吉门', desc: '景致、文书、宜考试求名' },
                      { name: '死门', type: '凶门', desc: '死亡、终结、宜丧葬执法' },
                      { name: '惊门', type: '凶门', desc: '惊恐、官司、宜诉讼惊敌' },
                      { name: '开门', type: '吉门', desc: '开启、顺利、宜出行开业' }
                    ].map((door, index) => (
                      <div key={index} className={`p-4 rounded-lg border-2 ${
                        door.type === '吉门'
                          ? 'bg-green-50 border-green-300'
                          : 'bg-red-50 border-red-300'
                      }`}>
                        <h4 className={`font-bold mb-2 ${
                          door.type === '吉门' ? 'text-green-700' : 'text-red-700'
                        }`}>{door.name}</h4>
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${
                          door.type === '吉门' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                        }`}>{door.type}</span>
                        <p className="text-sm text-gray-700">{door.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 九星 */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-700">九星系统</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { name: '天蓬星', element: '水', desc: '智慧、谋略、宜暗中行事' },
                      { name: '天芮星', element: '土', desc: '病灾、阻碍、宜求医问药' },
                      { name: '天冲星', element: '木', desc: '冲动、激烈、宜武职征讨' },
                      { name: '天辅星', element: '木', desc: '辅助、文昌、宜求学考试' },
                      { name: '天禽星', element: '土', desc: '中正、威严、宜管理统御' },
                      { name: '天心星', element: '金', desc: '医药、将帅、宜治病领导' },
                      { name: '天柱星', element: '金', desc: '破坏、口舌、宜修筑建造' },
                      { name: '天任星', element: '土', desc: '担当、收获、宜农业生产' },
                      { name: '天英星', element: '火', desc: '文明、光明、宜文化艺术' }
                    ].map((star, index) => (
                      <div key={index} className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <h4 className="font-bold text-purple-800 mb-2">{star.name}</h4>
                        <span className="inline-block px-2 py-1 bg-purple-200 text-purple-800 rounded text-xs mb-2">
                          {star.element}星
                        </span>
                        <p className="text-sm text-gray-700">{star.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 八神 */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-indigo-700">八神系统</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { name: '值符', desc: '百神之首，统领八神' },
                      { name: '螣蛇', desc: '虚惊、变化、文书缠绕' },
                      { name: '太阴', desc: '隐秘、阴私、女性之事' },
                      { name: '六合', desc: '和合、婚姻、合作中介' },
                      { name: '白虎', desc: '凶猛、争斗、官司血光' },
                      { name: '玄武', desc: '盗贼、欺骗、暗昧不明' },
                      { name: '九地', desc: '静坤、稳定、宜固守待时' },
                      { name: '九天', desc: '飞扬、升迁、宜远行出征' }
                    ].map((god, index) => (
                      <div key={index} className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                        <h4 className="font-bold text-indigo-800 mb-2">{god.name}</h4>
                        <p className="text-sm text-gray-700">{god.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 三奇六仪 */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-700">三奇六仪</h3>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-3">三奇（吉）</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center font-bold">乙</div>
                            <div>
                              <p className="font-medium">日奇乙木</p>
                              <p className="text-sm text-gray-600">代表文书、谋略、贵人相助</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center font-bold">丙</div>
                            <div>
                              <p className="font-medium">月奇丙火</p>
                              <p className="text-sm text-gray-600">权威、光明、威严显赫</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center font-bold">丁</div>
                            <div>
                              <p className="font-medium">星奇丁火</p>
                              <p className="text-sm text-gray-600">神秘、灵巧、文书信息</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-3">六仪（常）</h4>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          {['戊', '己', '庚', '辛', '壬', '癸'].map((yi, index) => (
                            <div key={index} className="bg-white p-3 rounded-lg border border-green-200">
                              <div className="font-bold text-lg">{yi}</div>
                              <div className="text-xs text-gray-600">
                                {yi === '戊' ? '甲子' :
                                 yi === '己' ? '甲戌' :
                                 yi === '庚' ? '甲申' :
                                 yi === '辛' ? '甲午' :
                                 yi === '壬' ? '甲辰' : '甲寅'}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 排盘方法 */}
        {activeSection === 'layout' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-amber-800">排盘方法</h2>

              <div className="space-y-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-blue-700">什么是排盘？</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    排盘是奇门遁甲预测的第一步，就是根据特定的时间（年月日时）和空间信息，
                    按照固定规则将各种符号排布在九宫格中，形成一个完整的奇门局。
                  </p>
                  <p className="text-gray-700">
                    排盘的准确性直接影响后续的断局结果，因此掌握正确的排盘方法至关重要。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-700">四盘构成</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-3">地盘（基础盘）</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• 固定的九宫格结构</li>
                        <li>• 戊己庚辛壬癸六仪的固定位置</li>
                        <li>• 作为其他三盘的基础</li>
                        <li>• 位置永远不变</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-3">天盘（动态盘）</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• 三奇六仪的动态排列</li>
                        <li>• 根据时间变化而转动</li>
                        <li>• 九星随天干移动</li>
                        <li>• 体现天时的影响</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-3">人盘（人事盘）</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• 八门的排列分布</li>
                        <li>• 代表人事的各种状态</li>
                        <li>• 影响人事的吉凶变化</li>
                        <li>• 与人的行为密切相关</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-indigo-800 mb-3">神盘（神助盘）</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• 八神的排列位置</li>
                        <li>• 代表神秘的辅助力量</li>
                        <li>• 影响事情的微妙变化</li>
                        <li>• 体现神助的作用</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-amber-700">排盘步骤</h3>
                  <div className="space-y-4">
                    {[
                      { step: 1, title: '确定时间', desc: '确定预测的年、月、日、时（农历）' },
                      { step: 2, title: '确定局数', desc: '根据时间和节气确定使用阴遁还是阳遁，以及具体局数（1-9局）' },
                      { step: 3, title: '排地盘', desc: '排出六仪在九宫中的固定位置' },
                      { step: 4, title: '排天盘', desc: '根据局数排出天盘三奇六仪的位置' },
                      { step: 5, title: '排九星', desc: '排出九星在各宫的位置' },
                      { step: 6, title: '排八门', desc: '排出八门在八宫的位置' },
                      { step: 7, title: '排八神', desc: '排出八神在八宫的位置' },
                      { step: 8, title: '检查验证', desc: '检查排盘是否正确，验证关键信息' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors">
                        <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{item.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-bold mb-3 text-yellow-800">💡 学习建议</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 初学者建议使用专业排盘软件，先理解排盘原理</li>
                    <li>• 熟练掌握后再学习手工排盘，加深理解</li>
                    <li>• 多练习不同时间的排盘，熟悉规律</li>
                    <li>• 理解每个步骤的含义，不要机械记忆</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 断局技巧 */}
        {activeSection === 'interpretation' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-amber-800">断局技巧</h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-blue-700">断局基本原则</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-blue-800">分析原则</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span><strong>整体性：</strong>四盘合参，综合分析</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span><strong>用神原则：</strong>围绕核心问题分析</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span><strong>时空结合：</strong>时间空间因素并重</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span><strong>动静结合：</strong>静态动态分析结合</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-indigo-800">判断要素</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-indigo-600 mr-2">•</span>
                          <span><strong>用神旺衰：</strong>判断用神状态强弱</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-600 mr-2">•</span>
                          <span><strong>宫位生克：</strong>分析宫位间的关系</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-600 mr-2">•</span>
                          <span><strong>符号组合：</strong>综合象意解读</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-600 mr-2">•</span>
                          <span><strong>时令影响：</strong>考虑节气旺衰</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-700">用神选择方法</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { type: '财运', yongshen: '戊土、生门', desc: '求财以戊土为财，生门为财源' },
                      { type: '婚姻', yongshen: '乙庚、六合', desc: '乙庚合化，六合为婚姻' },
                      { type: '事业', yongshen: '开门、值符', desc: '开门为事业，值符为领导' },
                      { type: '学业', yongshen: '天辅、景门', desc: '天辅为文昌，景门为考试' },
                      { type: '疾病', yongshen: '天芮、死门', desc: '天芮为病星，死门为疾病' },
                      { type: '出行', yongshen: '景门、九天', desc: '景门为道路，九天为远行' }
                    ].map((item, index) => (
                      <div key={index} className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-2">{item.type}</h4>
                        <p className="text-sm font-medium text-green-700 mb-1">用神：{item.yongshen}</p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-700">象意解读技巧</h3>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-3">解读层次</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">单符号象意</h5>
                          <p className="text-sm text-gray-600">理解每个符号的基本含义和属性</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">符号组合象意</h5>
                          <p className="text-sm text-gray-600">分析多个符号组合产生的复合含义</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">宫位环境影响</h5>
                          <p className="text-sm text-gray-600">考虑宫位五行、八卦对象意的调节作用</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">时令因素调节</h5>
                          <p className="text-sm text-gray-600">结合节气、月令等因素综合判断</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-amber-700">吉凶判断标准</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-3">吉象特征</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• 用神得令，旺相有力</li>
                        <li>• 遇吉门、吉星、吉神</li>
                        <li>• 宫位相生，五行和谐</li>
                        <li>• 三奇得位，格局清奇</li>
                        <li>• 用神宫位无刑冲破害</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-3">凶象特征</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• 用神失令，休囚无力</li>
                        <li>• 遇凶门、凶星、凶神</li>
                        <li>• 宫位相克，五行冲突</li>
                        <li>• 格局混杂，符号悖逆</li>
                        <li>• 用神宫位受刑冲破害</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-bold mb-3 text-yellow-800">⚠️ 注意事项</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 断局需要大量实践，不要急于求成</li>
                    <li>• 理论与实践相结合，多分析经典案例</li>
                    <li>• 保持客观理性，避免主观臆断</li>
                    <li>• 现代奇门遁甲应作为决策参考，不可过分依赖</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 学习路径 */}
        {activeSection === 'learning' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-amber-800">系统学习路径</h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-green-700">学习总览</h3>
                  <p className="text-gray-700 leading-relaxed">
                    奇门遁甲是一门博大精深的传统学问，学习需要循序渐进，不可急于求成。
                    以下学习路径为零基础小白设计，分为五个阶段，帮助您系统性地掌握奇门遁甲知识。
                  </p>
                </div>

                {[
                  {
                    stage: '第一阶段',
                    title: '基础知识入门',
                    duration: '1-2个月',
                    color: 'blue',
                    content: [
                      '奇门遁甲概论：基本概念、历史发展、应用领域',
                      '阴阳五行理论：基本概念、相生相克、对应关系',
                      '天干地支基础：名称属性、生克合冲关系',
                      '八卦九宫认知：基本概念、九宫构成、河图洛书',
                      '奇门符号初识：八门、九星、八神、三奇六仪'
                    ],
                    practice: '熟记天干地支、练习五行生克、熟悉符号象意'
                  },
                  {
                    stage: '第二阶段',
                    title: '排盘方法学习',
                    duration: '2-3个月',
                    color: 'purple',
                    content: [
                      '排盘基础知识：概念意义、阴阳遁局、局数确定',
                      '四盘构成：地盘、天盘、人盘、神盘',
                      '传统排盘方法：步骤流程、注意事项',
                      '现代排盘工具：软件使用、结果验证'
                    ],
                    practice: '每日手工排盘练习、使用软件验证结果'
                  },
                  {
                    stage: '第三阶段',
                    title: '断局基础掌握',
                    duration: '3-4个月',
                    color: 'orange',
                    content: [
                      '断局基本原则：整体性、用神原则、时空结合',
                      '用神选择方法：定义作用、不同预测、旺衰判断',
                      '象意解读技巧：单个符号、符号组合、宫位影响',
                      '宫位分析方法：九宫含义、生克关系、吉凶属性',
                      '五行生克应用：具体应用、属性判断、旺衰状态'
                    ],
                    practice: '每日分析奇门局、记录断局过程、验证准确性'
                  },
                  {
                    stage: '第四阶段',
                    title: '分项占断学习',
                    duration: '4-6个月',
                    color: 'green',
                    content: [
                      '财运占断：用神选择、吉凶判断、不同类型',
                      '婚姻占断：用神选择、宫位关系、注意事项',
                      '疾病占断：用神选择、吉凶判断、发展趋势',
                      '事业占断：用神选择、吉凶判断、发展机会',
                      '学业占断、出行占断、其他专项占断'
                    ],
                    practice: '专项练习、案例分析、结果验证、经验积累'
                  },
                  {
                    stage: '第五阶段',
                    title: '综合应用提高',
                    duration: '6个月以上',
                    color: 'indigo',
                    content: [
                      '不同流派学习：转盘奇门、法术奇门、现代应用',
                      '综合案例分析：复杂案例、多因素判断、准确性提高',
                      '现代应用拓展：商业决策、人事管理、健康咨询',
                      '学习交流提升：群体讨论、心得交流、导师指导'
                    ],
                    practice: '独立完成复杂分析、实际应用项目、指导初学者'
                  }
                ].map((phase, index) => (
                  <div key={index} className={`bg-${phase.color}-50 p-6 rounded-lg border border-${phase.color}-200`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-{phase.color}-800">{phase.stage}：{phase.title}</h3>
                      <span className="px-3 py-1 bg-{phase.color}-200 text-{phase.color}-800 rounded-full text-sm font-medium">
                        {phase.duration}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-{phase.color}-700">学习内容：</h4>
                      <ul className="space-y-1 text-sm text-gray-700 pl-4">
                        {phase.content.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-{phase.color}-600 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 p-3 bg-white rounded-lg">
                      <h4 className="font-semibold text-{phase.color}-700 mb-1">实践练习：</h4>
                      <p className="text-sm text-gray-600">{phase.practice}</p>
                    </div>
                  </div>
                ))}

                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <h3 className="text-lg font-bold mb-4 text-amber-800">学习建议</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-amber-700 mb-2">心态建议</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 保持学习热情，以兴趣为驱动</li>
                        <li>• 设定明确目标，按计划推进</li>
                        <li>• 坚持不懈，持之以恒</li>
                        <li>• 理性对待，避免迷信</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-700 mb-2">方法建议</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 注重实践应用，理论结合实际</li>
                        <li>• 加强交流合作，参与学习群体</li>
                        <li>• 持续学习提高，跟踪发展动态</li>
                        <li>• 总结经验教训，在继承中创新</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-4 text-blue-800">推荐资源</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">经典著作</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 张志春《神奇之门》</li>
                        <li>• 王凤麟《法术奇门笔记》</li>
                        <li>• 杜新会《奇门遁甲预测学》</li>
                        <li>• 刘文元《奇门启悟》</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">学习工具</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 奇门遁甲排盘软件</li>
                        <li>• 学习笔记整理工具</li>
                        <li>• 案例分析工具</li>
                        <li>• 实践记录工具</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 页脚 */}
      {/* 功能导航区 */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">探索更多功能</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <a href="/qimen-chart" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="text-3xl mb-3 text-amber-600">📊</div>
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">排盘演示</h3>
              <p className="text-sm text-gray-600">互动式奇门局演示，深入了解排盘原理</p>
            </a>
            <a href="/learning-progress" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="text-3xl mb-3 text-blue-600">📈</div>
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">学习进度</h3>
              <p className="text-sm text-gray-600">系统化跟踪学习进度，记录成长历程</p>
            </a>
            <a href="/interactive-palace" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="text-3xl mb-3 text-green-600">🎯</div>
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">九宫格互动</h3>
              <p className="text-sm text-gray-600">探索九宫格奥秘，了解每个宫位特性</p>
            </a>
            <a href="/quiz" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="text-3xl mb-3 text-purple-600">📝</div>
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">知识测验</h3>
              <p className="text-sm text-gray-600">检验学习成果，巩固理论知识</p>
            </a>
            <a href="/case-library" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="text-3xl mb-3 text-red-600">📋</div>
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">案例库</h3>
              <p className="text-sm text-gray-600">真实案例分析，学习实战应用技巧</p>
            </a>
            <a href="/dictionary" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="text-3xl mb-3 text-indigo-600">📖</div>
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">术语词典</h3>
              <p className="text-sm text-gray-600">专业术语解释，系统化学习基础知识</p>
            </a>
            <a href="/ai-assistant" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group border-2 border-amber-200 relative">
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                AI智能
              </div>
              <div className="text-3xl mb-3 text-amber-600">🤖</div>
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">AI助手</h3>
              <p className="text-sm text-gray-600">智能问答解答，实时辅导学习难题</p>
            </a>
            <a href="/notes" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="text-3xl mb-3 text-pink-600">📓</div>
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">学习笔记</h3>
              <p className="text-sm text-gray-600">记录学习心得，整理重要知识点</p>
            </a>
            <a href="/favorites" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="text-3xl mb-3 text-orange-600">⭐</div>
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">我的收藏</h3>
              <p className="text-sm text-gray-600">管理收藏内容，快速访问重要资料</p>
            </a>
            <a href="/search" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="text-3xl mb-3 text-cyan-600">🔍</div>
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors">全局搜索</h3>
              <p className="text-sm text-gray-600">快速查找相关内容，高效获取信息</p>
            </a>
            <a href="/profile" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="text-3xl mb-3 text-teal-600">👤</div>
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">个人中心</h3>
              <p className="text-sm text-gray-600">管理个人信息，查看学习成就</p>
            </a>
            <a href="/community" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="text-3xl mb-3 text-lime-600">💬</div>
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-lime-600 transition-colors">学习社区</h3>
              <p className="text-sm text-gray-600">与同道中人交流，分享学习心得</p>
            </a>
            <a href="/ai-assistant" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="text-3xl mb-3 text-emerald-600">🤖</div>
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">AI助手</h3>
              <p className="text-sm text-gray-600">智能问答，实时解答学习疑惑</p>
            </a>
            <a href="/chart-tool" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="text-3xl mb-3 text-violet-600">🛠️</div>
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-violet-600 transition-colors">排盘工具</h3>
              <p className="text-sm text-gray-600">专业排盘工具，精确到分钟</p>
            </a>
            <a href="/courses" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="text-3xl mb-3 text-rose-600">🎓</div>
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">在线课程</h3>
              <p className="text-sm text-gray-600">系统化课程，专业导师指导</p>
            </a>
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3">奇门遁甲</h3>
              <p className="text-gray-300 text-sm mb-4">
                探索中华传统智慧，学习古老预测术，传承千年文化精髓。
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <span className="text-xs">微</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <span className="text-xs">信</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <span className="text-xs">抖</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">快速链接</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/" className="hover:text-amber-400 transition-colors">首页</a></li>
                <li><a href="/qimen-chart" className="hover:text-amber-400 transition-colors">排盘演示</a></li>
                <li><a href="/learning-progress" className="hover:text-amber-400 transition-colors">学习进度</a></li>
                <li><a href="/interactive-palace" className="hover:text-amber-400 transition-colors">九宫格互动</a></li>
                <li><a href="/quiz" className="hover:text-amber-400 transition-colors">知识测验</a></li>
                <li><a href="/case-library" className="hover:text-amber-400 transition-colors">案例库</a></li>
                <li><a href="/dictionary" className="hover:text-amber-400 transition-colors">术语词典</a></li>
                <li><a href="/notes" className="hover:text-amber-400 transition-colors">学习笔记</a></li>
                <li><a href="/favorites" className="hover:text-amber-400 transition-colors">我的收藏</a></li>
                <li><a href="/search" className="hover:text-amber-400 transition-colors">全局搜索</a></li>
                <li><a href="/profile" className="hover:text-amber-400 transition-colors">个人中心</a></li>
                <li><a href="/community" className="hover:text-amber-400 transition-colors">学习社区</a></li>
                <li><a href="/ai-assistant" className="hover:text-amber-400 transition-colors">AI助手</a></li>
                <li><a href="/chart-tool" className="hover:text-amber-400 transition-colors">排盘工具</a></li>
                <li><a href="/courses" className="hover:text-amber-400 transition-colors">在线课程</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">学习资源</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-amber-400 transition-colors">基础理论教程</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">实例案例分析</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">排盘工具推荐</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">学习交流社区</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">视频课程</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">联系我们</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>📧 contact@qimen.com</li>
                <li>📱 400-123-4567</li>
                <li>🏛️ 北京市朝阳区文化大厦</li>
                <li>🕐 周一至周五 9:00-18:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-400 mb-4 md:mb-0">
                © 2024 奇门遁甲基础知识学习平台. 传承文化，启迪智慧.
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-amber-400 transition-colors">隐私政策</a>
                <a href="#" className="hover:text-amber-400 transition-colors">使用条款</a>
                <a href="#" className="hover:text-amber-400 transition-colors">免责声明</a>
                <a href="#" className="hover:text-amber-400 transition-colors">网站地图</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
