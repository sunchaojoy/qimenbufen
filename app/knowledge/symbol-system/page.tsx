// @ts-nocheck
'use client';

import { useState } from 'react';

export default function SymbolSystem() {
  const [selectedSymbol, setSelectedSymbol] = useState('bameng');

  const symbolCategories = [
    {
      id: 'bameng',
      title: '八门系统',
      icon: '🚪',
      description: '奇门遁甲人事状态的核心'
    },
    {
      id: 'jiuxing',
      title: '九星系统',
      icon: '⭐',
      description: '天时影响的重要符号'
    },
    {
      id: 'bashen',
      title: '八神系统',
      icon: '🎭',
      description: '神秘辅助力量'
    },
    {
      id: 'sanqi',
      title: '三奇六仪',
      icon: '🏮',
      description: '天干组合的核心符号'
    }
  ];

  const symbolData = {
    bameng: {
      title: '八门系统 - 人事活动的核心',
     吉门: [
        {
          name: '休门',
          type: '吉门',
          element: '水',
          description: '休息、安逸、休养生息',
          position: '坎一宫',
          functions: ['休养生息', '调整身心', '隐秘待时', '医疗保健'],
          timing: '冬春季节、夜间',
          industries: ['医疗保健', '休闲旅游', '服务业', '教育培训'],
          personality: '沉稳、内敛、善于观察',
          analysis: '休门为吉门，代表事物处于相对平静或需要调整的状态。休门出现时，适合休整、调养、治疗、策划等活动。'
        },
        {
          name: '生门',
          type: '吉门',
          element: '土',
          description: '生长、发展、求财创业',
          position: '艮八宫',
          functions: ['求财创业', '投资理财', '农业种植', '商业贸易', '生产制造'],
          timing: '春季季节、月满之时',
          industries: ['金融投资', '农业生产', '商业贸易', '制造业', '房地产'],
          personality: '积极进取、富有创造力、重视实际效益',
          analysis: '生门为大吉之门，代表事物处于生长发展的良好状态。生门出现时，特别适合求财、创业、投资、经营等活动。'
        },
        {
          name: '景门',
          type: '吉门',
          element: '火',
          description: '景致、文书、考试求名、信息传播',
          position: '离九宫',
          functions: ['考试求学', '文书工作', '信息传播', '技术研发', '文化活动'],
          timing: '夏季季节、白天',
          industries: ['教育培训', '文化娱乐', '媒体传播', '信息技术', '技术研发'],
          personality: '聪明好学、善于表达、追求知识',
          analysis: '景门为吉门，代表事物明亮、活跃、信息畅通。景门出现时，适合考试、求学、文化传播、技术发展等活动。'
        },
        {
          name: '开门',
          type: '吉门',
          element: '金',
          description: '开启、顺利、出行开业、新开始',
          position: '乾六宫',
          functions: ['开业创业', '出行旅游', '开拓新领域', '求职就业', '事业转型'],
          timing: '秋季季节、早晨',
          industries: ['企业经营管理', '交通运输', '贸易往来', '咨询服务', '人才招聘'],
          personality: '开放、果断、善于把握机会',
          analysis: '开门为大吉之门，代表事物处于开启、顺利、发展的状态。开门出现时，适合开业、创业、出行、求职业等开创性活动。'
        }
      ],
      凶门: [
        {
          name: '伤门',
          type: '凶门',
          element: '木',
          description: '伤害、争斗、捕猎讨债',
          position: '震三宫',
          functions: ['体育运动', '军事行动', '追讨债务', '竞争对抗', '维权打假'],
          timing: '春季季节、冲动之时',
          industries: ['体育竞技', '军事国防', '法律诉讼', '安保行业', '讨债公司'],
          personality: '冲动、急躁、善于行动',
          analysis: '伤门为凶门，代表事物可能受到伤害或产生冲突。但伤门也有其正面作用，在特定情况下可以用来积极行动、解决争端。'
        },
        {
          name: '杜门',
          'type': '凶门',
          element: '木',
          description: '堵塞、隐匿、躲藏避灾',
          'position': '巽四宫',
          functions: ['隐秘工作', '保密安全', '躲避风险', '隐藏真相', '防止泄密'],
          timing: '春季季节、需要隐蔽时',
          industries: ['保密工作', '间谍情报', '安保行业', '风险管理', '安全防护'],
          personality: '谨慎、内向、善于隐藏',
          analysis: '杜门为凶门，代表事物受到阻碍或需要隐藏。杜门在特定情况下可以用来保密、避险、防止信息泄露。'
        },
        {
          name: '死门',
          type: '凶门',
          element: '土',
          description: '死亡、终结、丧葬执法、破旧立新',
          position: '坤二宫',
          functions: ['丧葬事宜', '清理旧物', '破除障碍', '法律执行', '终结关系'],
          timing: '秋季季节、衰败时期',
          industries: ['殡葬服务', '清洁行业', '法律执行', '废物处理', '破产清算'],
          personality: '沉稳、果断、处理终结事务',
          analysis: '死门为大凶之门，代表事物处于终结或需要清理的状态。死门在特定情况下可以用来清理障碍、破旧立新。'
        },
        {
          name: '惊门',
          type: '凶门',
          element: '金',
          description: '惊恐、官司、诉讼惊敌、突发状况',
          position: '兑七宫',
          functions: ['法律诉讼', '官司纠纷', '突发事件', '警报系统', '新闻报道'],
          timing: '秋季季节、震惊之时',
          industries: ['法律行业', '新闻媒体', '安保行业', '咨询服务', '危机处理'],
          personality: '敏感、警觉、反应迅速',
          analysis: '惊门为凶门，代表事物可能受到惊扰或产生突发事件。但惊门也有其正面作用，可以用来及时发现问题、采取预防措施。'
        }
      ]
    },
    jiuxing: {
      title: '九星系统 - 天时影响的重要符号',
      stars: [
        {
          name: '天蓬星',
          element: '水',
          description: '智慧、谋略、暗中行事',
          properties: ['聪明智慧', '善于谋略', '神秘莫测', '适应性强'],
          applications: ['策略制定', '智慧工作', '暗中行动', '适应变化'],
          analysis: '天蓬星为水星，代表智慧、谋略和暗中行动。天蓬星出现时，事物具有智慧性、策略性，适合进行规划、决策等活动。'
        },
        {
          name: '天芮星',
          element: '土',
          description: '病灾、阻碍、求医问药',
          properties: ['代表疾病', '表示阻碍', '需要治疗', '缓慢发展'],
          applications: ['医疗保健', '疾病预测', '问题诊断', '寻求治疗'],
          analysis: '天芮星为土星，代表疾病、阻碍和需要治疗的事物。天芮星出现时，可能预示着健康问题或需要医疗保健。'
        },
        {
          name: '天冲星',
          element: '木',
          description: '冲动、激烈、武职征讨',
          properties: ['行动迅速', '冲动激烈', '勇猛果敢', '积极主动'],
          applications: ['军事行动', '体育运动', '竞争对抗', '紧急应变'],
          analysis: '天冲星为木星，代表冲动、激烈和行动力强。天冲星出现时，事物具有冲动性、行动力强的特点。'
        },
        {
          name: '天辅星',
          element: '木',
          description: '辅助、文昌、考试求学',
          properties: ['辅助帮助', '文昌文曲', '学业有成', '学习能力强'],
          applications: ['教育培训', '考试求学', '知识传播', '学习培训'],
          analysis: '天辅星为木星，代表辅助、文昌和学习能力。天辅星出现时，特别适合求学、考试、培训等学习活动。'
        },
        {
          name: '天禽星',
          element: '土',
          description: '中正、威严、管理统御',
          properties: ['中正平和', '威严庄重', '管理能力强', '统御全局'],
          applications: ['管理领导', '行政管理', '组织协调', '统御全局'],
          analysis: '天禽星为土星，代表中正、威严和管理能力。天禽星出现时，事物具有管理性、组织性的特点。'
        },
        {
          name: '天心星',
          element: '金',
          description: '医药、将帅、治病领导',
          properties: ['医药健康', '领导才能', '医术高明', '威严公正'],
          applications: ['医疗保健', '领导工作', '医药研发', '管理决策'],
          analysis: '天心星为金星，代表医药、健康和领导能力。天心星出现时，特别适合医疗、保健、管理等工作。'
        },
        {
          name: '天柱星',
          element: '金',
          description: '破坏、口舌、修筑建造',
          properties: ['破坏性', '口舌是非', '建设能力', '固执己见'],
          applications: ['工程建设', '拆迁重建', '口才辩论', '技术改造'],
          analysis: '天柱星为金星，代表破坏性和建设能力。天柱星出现时，事物可能面临变动或需要建设性的工作。'
        },
        {
          name: '天任星',
          element: '土',
          description: '担当、收获、农业生产',
          properties: ['责任感强', '脚踏实地', '务实肯干', '收获成果'],
          applications: ['农业生产', '收获成果', '责任承担', '实务工作'],
          analysis: '天任星为土星，代表责任感、担当和收获。天任星出现时，事物具有务实性、责任性和收获性的特点。'
        },
        {
          name: '天英星',
          element: '火',
          description: '文明、光明、文化艺术',
          properties: ['文明进步', '光明正大', '文化繁荣', '艺术天赋'],
          applications: ['文化艺术', '科技创新', '文明建设', '教育工作'],
          analysis: '天英星为火星，代表文明、光明和文化艺术。天英星出现时，事物具有文化性、艺术性和光明性。'
        }
      ]
    },
    bashen: {
      title: '八神系统 - 神秘辅助力量',
      spirits: [
        {
          name: '值符',
          description: '百神之首，统领八神',
          properties: ['至高无上', '统领全局', '权威性', '主导作用'],
          analysis: '值符为八神之首，具有至高无上的地位。值符所在宫位决定了整个奇门局的主导方向，是分析时的重要参考。'
        },
        {
          name: '螣蛇',
          description: '虚惊、变化、文书缠绕',
          properties: ['虚惊假诈', '变化莫测', '文书问题', '纠缠不清'],
          analysis: '螣蛇代表虚惊、变化和纠缠。螣蛇出现时，事物可能出现意外变化或文书类问题，需要谨慎处理。'
        },
        {
          name: '太阴',
          description: '隐秘、阴私、女性之事',
          properties: ['隐秘性', '阴柔属性', '女性特征', '暗中发展'],
          analysis: '太阴代表隐秘和阴柔的事物。太阴出现时，事物具有隐秘性或需要暗中处理的特点。'
        },
        {
          name: '六合',
          description: '和合、婚姻、合作中介',
          properties: ['和谐融洽', '婚姻感情', '合作关系', '中介作用'],
          analysis: '六合代表和谐、合作和感情关系。六合出现时，有利于人际关系、婚姻感情、合作谈判等事务。'
        },
        {
          name: '白虎',
          description: '凶猛、争斗、官司血光',
          properties: ['凶猛威严', '争斗冲突', '官司血光', '威慑作用'],
          analysis: '白虎代表凶猛、威严和冲突。白虎出现时，需要避免争斗冲突，注意安全防范。'
        },
        {
          name: '玄武',
          'description': '盗贼、欺骗、暗昧不明',
          properties: ['暗中行动', '欺骗性质', '盗贼小偷', '暗中侵害'],
          analysis: '玄武代表暗中行动和欺骗行为。玄武出现时，需要防范盗贼、诈骗等暗害行为。'
        },
        {
          name: '九地',
          description: '静坤、稳定、固守待时',
          properties: ['静坤稳定', '防守性强', '保守稳重', '等待时机'],
          analysis: '九地代表稳定、防守和保守。九地出现时，适合保守策略，等待时机。'
        },
        {
          name: '九天',
          description: '飞扬、升迁、远行出征',
          properties: ['飞扬升迁', '远行发展', '高远目标', '积极进取'],
          analysis: '九天代表飞扬、升迁和远行。九天出现时，适合远行发展、追求高远目标。'
        }
      ]
    },
    sanqi: {
      title: '三奇六仪 - 天干组合的核心符号',
      sanqi: [
        {
          name: '乙奇（日奇）',
          element: '木',
          description: '日奇，代表文书、谋略、贵人相助',
          properties: ['文书写作', '策划谋略', '智慧才华', '贵人扶持'],
          symbolism: ['太阳之光', '智慧启蒙', '文化传承', '文明发展'],
          applications: ['文职工作', '策划分析', '文化教育', '咨询服务'],
          analysis: '乙奇为日奇，代表光明和智慧。乙奇出现时，有利于文书工作、策划分析等脑力活动。'
        },
        {
          name: '丙奇（月奇）',
          element: '火',
          description: '月奇，代表权威、光明、威严显赫',
          properties: ['权威地位', '光明正大', '威严显赫', '领导才能'],
          symbolism: ['月亮之光', '权威地位', '领导威严', '权力象征'],
          applications: ['管理工作', '领导职位', '权力行使', '威严展示'],
          analysis: '丙奇为月奇，代表权威和光明。丙奇出现时，有利于管理、领导等事务。'
        },
        {
          name: '丁奇（星奇）',
          element: '火',
          description: '星奇，代表神秘、灵巧、文书信息',
          properties: ['神秘莫测', '灵巧聪慧', '信息传递', '灵感创新'],
          symbolism: ['星星之光', '神秘灵感', '信息传递', '创新思维'],
          applications: ['技术创新', '灵感启发', '信息传播', '创意工作'],
          analysis: '丁奇为星奇，代表神秘和灵巧。丁奇出现时，有利于技术创新、灵感启发等脑力活动。'
        }
      ],
      liuyi: [
        {
          name: '戊仪（甲子）',
          element: '土',
          description: '戊仪，甲子组合，代表开始、基础',
          properties: ['开始阶段', '基础奠定', '根本源头', '初始状态'],
          analysis: '戊仪为甲子组合，代表事物的基础和开始阶段。戊仪出现时，需要从基础开始做起。'
        },
        {
          name: '己仪（甲戌）',
          element: '土',
          description: '己仪，甲戌组合，代表完成、结束',
          properties: ['完成阶段', '收尾工作', '圆满结束', '最终结果'],
          analysis: '己仪为甲戌组合，代表事物的完成和结束阶段。己仪出现时，预示着某个阶段的结束。'
        },
        {
          name: '庚仪（甲申）',
          'element': '金',
          description: '庚仪，甲申组合，变革、改革',
          properties: ['改革变动', '结构调整', '权力更替', '重大变化'],
          analysis: '庚仪为甲申组合，代表变革和改革。庚仪出现时，可能预示着需要改革或调整。'
        },
        {
          name: '辛仪（甲午）',
          element: '金',
          description: '辛仪，甲午组合，精致、完美',
          properties: ['精致完美', '品质优良', '精细工艺', '完美表现'],
          analysis: '辛仪为甲午组合，代表精致和完美。辛仪出现时，事物具有高品质、精细的特点。'
        },
        {
          name: '壬仪（甲辰）',
          element: '水',
          description: '壬仪，甲辰组合，流动、变化',
          properties: ['流动变化', '适应性', '灵活转换', '动态发展'],
          analysis: '壬仪为甲辰组合，代表流动和变化。壬仪出现时，事物具有流动性和适应性。'
        },
        {
          name: '癸仪（甲寅）',
          element: '水',
          description: '癸仪，甲寅组合，隐藏、收藏',
          properties: ['隐藏收藏', '内敛保守', '秘密状态', '潜在价值'],
          analysis: '癸仪为甲寅组合，代表隐藏和收藏。癸仪出现时，事物具有隐藏性或需要保密。'
        }
      ]
    }
  };

  const currentSymbol = symbolData[selectedSymbol as keyof typeof symbolData];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{currentSymbol.title}</h2>
        <p className="text-gray-600 mb-8">{(currentSymbol as any).description}</p>

        {/* 符号类别导航 */}
        <div className="flex flex-wrap gap-2 mb-8 border-b">
          {symbolCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedSymbol(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedSymbol === category.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* 内容展示 */}
        <div className="space-y-6">
          {selectedSymbol === 'bameng' && (
            <div>
              {/* 吉门 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-green-700 mb-4">吉门（代表顺利、发展）</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentSymbol.吉门.map((door, index) => (
                    <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-300">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-green-800">{door.name}</h4>
                        <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium">
                          {door.type}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">描述：</span>{door.description}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">属性：</span>{door.element}星
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">位置：</span>{door.position}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">应用：</span>
                          {door.functions.join('、')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 凶门 */}
              <div>
                <h3 className="text-xl font-bold text-red-700 mb-4">凶门（代表阻碍、挑战）</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentSymbol.凶门.map((door, index) => (
                    <div key={index} className="bg-red-50 p-6 rounded-lg border border-red-300">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-red-800">{door.name}</h4>
                        <span className="px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm font-medium">
                          {door.type}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">描述：</span>{door.description}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">属性：</span>{door.element}星
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">位置：</span>{door.position}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">应用：</span>
                          {door.functions.join('、')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedSymbol === 'jiuxing' && (
            <div>
              <h3 className="text-xl font-bold text-purple-700 mb-4">九星详解</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentSymbol.stars.map((star, index) => (
                  <div key={index} className="bg-purple-50 p-6 rounded-lg border border-purple-300">
                    <h4 className="font-bold text-purple-800 mb-2">{star.name}</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">元素：</span>{star.element}星
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">描述：</span>{star.description}
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">特性：</span>
                        {star.properties.join('、')}
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">应用：</span>
                        {star.applications.join('、')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedSymbol === 'bashen' && (
            <div>
              <h3 className="text-xl font-bold text-indigo-700 mb-4">八神详解</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentSymbol.spirits.map((spirit, index) => (
                  <div key={index} className="bg-indigo-50 p-6 rounded-lg border border-indigo-300">
                    <h4 className="font-bold text-indigo-800 mb-2">{spirit.name}</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-700">
                        {spirit.description}
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">特性：</span>
                        {spirit.properties.join('、')}
                      </p>
                      <p className="text-sm text-gray-700 italic">
                        {spirit.analysis}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedSymbol === 'sanqi' && (
            <div>
              <h3 className="text-xl font-bold text-teal-700 mb-4">三奇六仪详解</h3>

              {/* 三奇 */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-teal-600 mb-4">三奇（吉）</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {currentSymbol.sanqi.map((sanqi, index) => (
                    <div key={index} className="bg-teal-50 p-6 rounded-lg border border-teal-300">
                      <h4 className="font-bold text-teal-800 mb-2">{sanqi.name}</h4>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">元素：</span>{sanqi.element}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">描述：</span>{sanqi.description}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">象征：</span>
                          {sanqi.symbolism.join('、')}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">应用：</span>
                          {sanqi.applications.join('、')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 六仪 */}
              <div>
                <h4 className="text-lg font-bold text-teal-600 mb-4">六仪（常）</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentSymbol.liuyi.map((liuyi, index) => (
                    <div key={index} className="bg-teal-50 p-6 rounded-lg border border-teal-300">
                      <h4 className="font-bold text-teal-800 mb-2">{liuyi.name}</h4>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">描述：</span>{liuyi.description}
                        </p>
                        <p className="text-sm text-gray-700 italic">
                          {liuyi.analysis}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 应用提示 */}
        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h3 className="text-lg font-bold text-amber-800 mb-4">应用要点</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• 符号系统的理解是掌握奇门遁甲的关键</li>
            <li>• 各种符号需要结合具体的时间、空间、人物来分析</li>
            <li>• 吉凶不是绝对的，需要辩证看待</li>
            <li>• 符号之间的配合关系决定最终结果</li>
            <li>• 实践中需要灵活运用，不可机械套用</li>
          </ul>
        </div>
      </div>

      {/* 相关资源 */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6">相关学习资源</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/interactive-palace" className="p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors">
            <h4 className="font-semibold text-gray-800 mb-2">九宫格互动</h4>
            <p className="text-sm text-gray-600">通过互动方式学习符号在九宫中的位置</p>
          </a>
          <a href="/qimen-chart" className="p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors">
            <h4 className="font-semibold text-gray-800 mb-2">排盘演示</h4>
            <p className="text-sm text-gray-600">查看符号在实际排盘中的应用</p>
          </a>
          <a href="/dictionary" className="p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors">
            <h4 className="font-semibold text-gray-800 mb-2">术语词典</h4>
            <p className="text-sm text-gray-600">查看符号系统的详细解释</p>
          </a>
        </div>
      </div>
    </div>
  );
}