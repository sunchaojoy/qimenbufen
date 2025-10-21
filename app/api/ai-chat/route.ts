import { NextRequest, NextResponse } from 'next/server';
import { ZhipuAI } from 'zhipuai';

// 系统提示词
const SYSTEM_PROMPT = `你是一位资深的奇门遁甲大师和AI教学助手，具有深厚的奇门遁甲理论功底和丰富的实践经验。你专精于：

**核心专业领域：**
1. 奇门遁甲基础理论（阴阳五行、天干地支、八卦九宫）
2. 符号系统详解（八门九星八神、三奇六仪）
3. 排盘方法与技巧（时家奇门、排盘步骤、验证方法）
4. 断局技巧与用神选择（宫位分析、象意解读、吉凶判断）
5. 分项占断应用（财运、婚姻、事业、学业、健康等）
6. 实战案例分析（古现代案例、应用场景、验证方法）

**教学特色：**
- 循序渐进：从基础到高级，适合不同水平学习者
- 案例教学：通过具体实例帮助理解抽象概念
- 实用导向：注重理论与实践相结合
- 因材施教：根据学习者水平调整解释深度

**回答要求：**
- 内容必须准确，基于正统奇门遁甲理论体系
- 解释要层次清晰，先概念后应用
- 适当举例说明，帮助理解复杂理论
- 涉及预测时强调"仅供参考，理性对待"
- 重要决策建议"寻求专业师傅指导"
- 尊重传统文化，倡导科学理性学习态度
- 承认知识边界，不确定时明确说明

**教学策略：**
- 初学者：注重基础概念解释，多用类比
- 进阶者：深入理论分析，提供实战技巧
- 高级者：探讨深层次问题，分享心得体会

请始终用中文回答，保持专业、耐心、友善的教学态度。`;

// 初始化智谱AI客户端
const client = new ZhipuAI({
  apiKey: process.env.AI_AUTH_TOKEN || '',
});

export async function POST(request: NextRequest) {
  try {
    const { message, context = [] } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: '消息内容不能为空' },
        { status: 400 }
      );
    }

    // 构建对话历史
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...context.filter((msg: any) => msg.role === 'user' || msg.role === 'assistant'),
      { role: 'user', content: message }
    ];

    // 使用官方SDK调用GLM-4.6
    const response = await client.chat.completions.create({
      model: 'glm-4.6',
      messages: messages,
      max_tokens: 4000,
      temperature: 0.8,
      top_p: 0.9,
      stream: false,
    });

    if (response.choices && response.choices[0] && response.choices[0].message) {
      return NextResponse.json({
        response: response.choices[0].message.content,
        usage: response.usage,
        model: response.model,
        timestamp: new Date().toISOString()
      });
    } else {
      throw new Error('AI响应格式异常');
    }

  } catch (error) {
    console.error('奇门遁甲AI助手API错误:', error);

    let errorMessage = `抱歉，我目前无法连接到AI服务。

您可以：
1. 稍后再试
2. 检查网络连接
3. 或者尝试浏览我们的学习资料获取答案

如果您有紧急的问题，建议您查阅相关的奇门遁甲教材或咨询专业老师。`;

    // 根据错误类型提供更具体的提示
    if (error instanceof Error) {
      if (error.message.includes('balance') || error.message.includes('余额')) {
        errorMessage = `⚠️ **AI服务余额不足**

很抱歉，当前AI服务余额不足，无法提供智能回答。

您可以：
• 稍后再试
• 联系管理员充值
• 使用本地的专业知识库

充值后即可恢复正常使用。`;
      } else if (error.message.includes('auth') || error.message.includes('token')) {
        errorMessage = `⚠️ **AI服务认证失败**

AI服务认证出现问题，请联系管理员检查配置。

在修复期间，您仍可以使用本地专业知识库功能学习。`;
      } else if (error.message.includes('rate') || error.message.includes('limit')) {
        errorMessage = `⚠️ **API调用频率过高**

请求过于频繁，请稍后再试。

建议您：
• 稍等片刻后重试
• 使用本地知识库功能
• 整理问题后一次性提问`;
      }
    }

    return NextResponse.json({
      response: errorMessage,
      error: true,
      timestamp: new Date().toISOString()
    });
  }
}

// 健康检查端点
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: '奇门遁甲AI助手API服务正常',
    timestamp: new Date().toISOString()
  });
}