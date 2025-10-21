'use client';

import { useState } from 'react';

export default function BasicTheory() {
  const [selectedSection, setSelectedSection] = useState('yinyang');

  const sections = [
    {
      id: 'yinyang',
      title: '阴阳理论',
      icon: '☯️',
      description: '奇门遁甲的核心理论基础'
    },
    {
      id: 'wuxing',
      title: '五行学说',
      icon: '🌟',
      description: '五行生克关系及其应用'
    },
    {
      id: 'tiangan',
      title: '天干地支',
      icon: '🎯',
      description: '十天干与十二地支详解'
    },
    {
      id: 'bagua',
      title: '八卦九宫',
      icon: '🎴',
      description: '八卦概念与九宫格结构'
    },
    {
      id: 'hetu',
      title: '河图洛书',
      icon: '📊',
      description: '河图洛书的起源与作用'
    }
  ];

  const content = {
    yinyang: {
      title: '阴阳理论 - 奇门遁甲的哲学基础',
      content: [
        {
          subtitle: '阴阳的基本概念',
          text: '阴阳是中国古代哲学的核心概念，它描述了宇宙万物相互对立又相互依存的两个方面。在奇门遁甲中，阴阳理论是整个体系的基础。'
        },
        {
          subtitle: '阴阳的属性',
          text: '阳：代表天、日、动、刚、男、上、外、南、火、暑、昼、明、扩张等积极、向上的属性。\n阴：代表地、月、静、柔、女、下、内、北、水、寒、夜、暗、收缩等消极、向下的属性。'
        },
        {
          subtitle: '阴阳的对立统一',
          text: '阴阳之间存在着对立统一的关系：\n1. 对立性：阴阳相互排斥，如天与地、动与静\n2. 统一性：阴阳相互依存，互为根基\n3. 转化性：阴阳在一定条件下可以相互转化\n4. 平衡性：阴阳之间需要保持相对平衡'
        },
        {
          subtitle: '阴阳在奇门遁甲中的应用',
          text: '1. **时间划分**：将一天时间分为阴阳两段，以确定排盘的阴阳遁局\n2. **符号分类**：八门、九星、八神等符号都有阴阳属性\n3. **方位属性**：不同的方位具有不同的阴阳特性\n4. **吉凶判断**：通过阴阳的配合关系来判断事物的吉凶'
        }
      ]
    },
    wuxing: {
      title: '五行学说 - 万物运行的基本规律',
      content: [
        {
          subtitle: '五行的基础概念',
          text: '五行（金、木、水、火、土）是中国古代哲学中描述宇宙万物构成和变化规律的基本要素。每种元素都有其独特的性质和象征意义。'
        },
        {
          subtitle: '五行的基本属性',
          text: '**木**：生长、升发、条达、舒畅\n    季节：春天\n    方位：东方\n    色彩：青色\n    器官：肝\n    情志：怒\n\n**火**：温热、上炎、光明、变化\n    季节：夏天\n    方位：南方\n    色彩：红色\n    器官：心\n    情志：喜\n\n**土**：承载、生化、包容、稳定\n    季节：长夏（每个季节末尾的18天）\n    方位：中央\n    色彩：黄色\n    器官：脾\n    情志：思\n\n**金**：收敛、肃杀、清洁、刚健\n    季节：秋天\n    方位：西方\n    色彩：白色\n    器官：肺\n    情志：悲\n\n**水**：滋润、下行、寒凉、闭藏\n    季节：冬天\n    方位：北方\n    色彩：黑色\n    器官：肾\n    情志：恐'
        },
        {
          subtitle: '五行相生关系',
          text: '五行相生表示事物之间的相互促进和生成关系：\n• 木生火：木能生火（木材可以燃烧产生火）\n• 火生土：火能生土（燃烧后形成灰烬即土）\n• 土生金：土中生金（土中蕴藏金属矿石）\n• 金生水：金能生水（金属在低温下会产生水汽）\n• 水生木：水能生木（水能滋养树木生长）\n\n相生关系体现了自然界中万物相互依存、相互促进的规律。'
        },
        {
          subtitle: '五行相克关系',
          text: '五行相克表示事物之间的相互制约和克制关系：\n• 木克土：木能克土（树根能穿透土壤）\n• 土克水：土能克水（土能阻挡和吸收水分）\n• 水克火：水能克火（水能熄灭火焰）\n• 火克金：火能克金（火能熔化金属）\n• 金克木：金能克木（金属工具能砍伐树木）\n\n相克关系体现了自然界中事物相互制约、相互控制的一面。'
        },
        {
          title: '五行在奇门遁甲中的应用',
          text: '1. **符号分类**：将八门、九星、八神等符号按照五行属性分类\n2. **生克分析**：通过分析符号之间的五行生克关系来判断吉凶\n3. **旺衰判断**：根据季节时令判断五行的旺衰状态\n4. **用神选择**：选择与预测事物五行属性相符的符号作为用神\n5. **化解方法**：利用五行相生相克的原理来制定化解策略'
        }
      ]
    },
    tiangan: {
      title: '天干地支 - 时空坐标系统',
      content: [
        {
          subtitle: '十天干详解',
          text: '十天干是中国古代用来记录时间的符号系统：\n\n**阳干**：\n• 甲：草木破土而出，阳木之性\n• 丙：炳然着火，阳火之性\n• 戊：茂盛于土，阳土之性\n• 庚：质地坚硬，阳金之性\n• 壬：阳水，生命之源\n\n**阴干**：\n• 乙：草木初生，阴木之性\n• 丁：灯火之火，阴火之性\n• 己：已盛之土，阴土之性\n• 辛：金属制成品，阴金之性\n• 癸：阴水，收藏之水\n\n天干不仅用于记时，还代表着不同的阴阳属性和五行特性。'
        },
        {
          subtitle: '十二地支详解',
          text: '十二地支也是记录时间的符号系统：\n\n**阳支**：\n• 子：子时（23:00-01:00），鼠，北方水\n• 寅：寅时（03:00-05:00），虎，东方木\n• 辰：辰时（07:00-09:00），龙，中央土\n• 午：午时（11:00-13:00），马，南方火\n• 申：申时（15:00-17:00），猴，西方金\n• 戌：戌时（19:00-21:00），狗，中央土\n\n**阴支**：\n• 丑：丑时（01:00-03:00），牛，中央土\n• 卯：卯时（05:00-07:00），兔，东方木\n• 巳：巳时（09:00-11:00），蛇，南方火\n• 未：未时（13:00-15:00），羊，中央土\n• 酉：酉时（17:00-19:00），鸡，西方金\n• 亥：亥时（21:00-23:00），猪，北方水'
        },
        {
          subtitle: '天干地支的关系',
          text: '1. **阴阳组合**：天干地支组合成六十甲子，用于纪年、纪月、纪日、纪时\n2. **相合关系**：甲己合化土、乙庚合化金、丙辛合化水、丁壬合化木、戊癸合化火\n3. **相冲关系**：子午相冲、卯酉相冲、寅申相冲、巳亥相冲、辰戌相冲、丑未相冲\n4. **相害关系**：甲戌相害、乙巳相害、丙申相害、丁亥相害、戊丑相害、己寅相害、庚卯相害、辛辰相害、癸巳相害\n5. **相刑关系**：寅巳申三刑、丑戌未三刑、子卯相刑'
        }
      ]
    },
    bagua: {
      title: '八卦九宫 - 空间结构模型',
      content: [
        {
          subtitle: '八卦的基本概念',
          text: '八卦是《易经》中的基本符号，由阳爻和阴爻组合而成，代表了宇宙万物的八种基本形态：\n\n**乾卦**（☰）：三根阳爻，纯阳之象，代表天、父、君、西北方、秋季\n**坤卦**（☷）：三根阴爻，纯阴之象，代表地、母、臣、西南方、秋季\n**震卦**（☳）：一根阳爻在下，两根阴爻在上，雷震之象，代表雷、长男、东方、春季\n**巽卦**（☴）：两根阴爻在下，一根阳爻在上，风行之象，代表风、长女、东南方、春季\n**坎卦**（☵）：上下各一根阴爻，中间一根阳爻，水流之象，代表水、中男、北方、冬季\n**离卦**（☲）：上下各一根阳爻，中间一根阴爻，火明之象，代表火、中女、南方、夏季\n**艮卦**（☶）：一根阴爻在下，两根阳爻在上，山止之象，代表山、少男、东北方、冬季\n**兑卦**（☱）：两根阳爻在下，一根阴爻在上，泽悦之象，代表泽、少女、西方、秋季'
        },
        {
          suffix: '九宫格结构',
          text: '九宫格是奇门遁甲的空间基础，由九个格子组成，每个格子对应特定的八卦、方位、五行和数字：\n\n**标准排列**（后天八卦方位）：\n```\n巽四  离九  坤二\n震三  中五  兑七\n艮八  坎一  乾六\n```\n\n**数字对应**：\n巽四宫：4  离九宫：9  坤二宫：2\n震三宫：3  中五宫：5  兑七宫：7\n艮八宫：8  坎一宫：1  乾六宫：6\n\n**数字规律**：\n• 横向：4+9+2=15，3+5+7=15，8+1+6=15\n• 纵向：4+3+8=15，9+5+1=15，2+7+6=15\n• 对宫相加皆为10：4+6=10，9+1=10，2+8=10，3+7=10'
        },
        {
          subtitle: '八卦的象征意义',
          text: '每个八卦都有丰富的象征意义：\n\n**乾**：天、父、君主、领导、创造、刚健\n**坤**：地、母、臣民、包容、柔顺、滋养\n**震**：雷、长子、行动、震动、威严、决断\n**巽**：风、长女、柔顺、渐进、谦逊、渗透\n**坎**：水、中男、智慧、险陷、流动、包容\n**离**：火、中女、光明、文明、热情、美丽\n**艮**：山、少男、停止、稳重、厚实、支撑\n**兑**：泽、少女、喜悦、口才、和谐、交流'
        }
      ]
    },
    hetu: {
      title: '河图洛书 - 数理宇宙观',
      content: [
        {
          subtitle: '河图',
          text: '河图是中国古代传说中的神秘图案，相传为龙马背负从黄河中出现。河图揭示了宇宙生成和演化的基本规律。\n\n**河图结构**：\n• 由白点和黑点组成，代表阴阳二气\n• 数字排列：1-6在下，2-7在上，3-8在左，4-9在右，5-10居中\n• 白点为阳数：1、3、5、7、9\n• 黑点为阴数：2、4、6、8、10\n• 对应关系：1与6、2与7、3与8、4与9、5与10\n• 总和：白点总和25，黑点总和30，总和55\n\n河图体现了天地之数和阴阳和谐的基本原理。'
        },
        {
          subtitle: '洛书',
          text: '洛书也是中国古代传说中的神秘图案，相传为神龟背负从洛水出现。洛书揭示了宇宙空间的和谐秩序。\n\n**洛书结构**：\n• 数字排列：戴九履一，左三右七，二四为肩，六八为足，五居中央\n• 具体排列：4-9-2在上，3-5-7在中，8-1-6在下\n• 对宫相加：4+6=10，9+1=10，2+8=10，3+7=10\n• 总和：45\n\n洛书体现了空间方位的和谐平衡和数理规律。'
        },
        {
          subtitle: '河图洛书在奇门遁甲中的应用',
          text: '1. **九宫格基础**：洛书的九宫格结构成为奇门遁甲的空间基础\n2. **数字体系**：河图洛书的数字对应奇门遁甲的九宫数字\n3. **方位定位**：河图洛书提供了方位确定的理论依据\n4. **数理分析**：通过数字的生克关系分析奇门局的吉凶\n5. **和谐原理**：河图洛书体现了宇宙和谐的哲学思想\n\n河图洛书为奇门遁甲提供了坚实的数理基础和哲学支撑，使奇门遁甲不仅是一种技术，更是一种体现宇宙和谐的整体性学说。'
        }
      ]
    }
  };

  const currentContent = content[selectedSection];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{currentContent.title}</h2>

        {/* 导航标签 */}
        <div className="flex flex-wrap gap-2 mb-8 border-b">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setSelectedSection(section.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedSection === section.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-xl">{section.icon}</span>
              <span>{section.title}</span>
            </button>
          ))}
        </div>

        {/* 内容区域 */}
        <div className="space-y-6">
          {currentContent.content.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              {item.subtitle && (
                <h3 className="text-lg font-bold text-amber-700 mb-3">{item.subtitle}</h3>
              )}
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {item.text}
              </div>
            </div>
          ))}
        </div>

        {/* 相关提示 */}
        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h3 className="text-lg font-bold text-amber-800 mb-3">学习提示</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• 理解基础理论是掌握奇门遁甲的关键</li>
            <li>• 建议按顺序学习：阴阳五行 → 天干地支 → 八卦九宫 → 河图洛书</li>
            <li>• 结合实际案例来加深理解</li>
            <li>多做练习题巩固知识点</li>
          </ul>
        </div>
      </div>

      {/* 相关资源 */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6">相关学习资源</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/dictionary" className="p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors">
            <h4 className="font-semibold text-gray-800 mb-2">术语词典</h4>
            <p className="text-sm text-gray-600">查看基础理论相关术语解释</p>
          </a>
          <a href="/notes" className="p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors">
            <h4 className="font-semibold text-gray-800 mb-2">学习笔记</h4>
            <p className="text-sm text-gray-600">记录基础理论学习心得</p>
          </a>
          <a href="/quiz" className="p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors">
            <h4 className="font-semibold text-gray-800 mb-2">知识测验</h4>
            <p className="text-sm text-gray-600">检验基础理论掌握程度</p>
          </a>
        </div>
      </div>
    </div>
  );
}