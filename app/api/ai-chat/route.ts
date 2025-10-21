import { NextRequest, NextResponse } from 'next/server';

// 系统提示词
const SYSTEM_PROMPT = `你是一位专业的奇门遁甲AI助手，具有深厚的奇门遁甲理论知识和实践经验。你的职责是：

1. 为用户提供准确、专业的奇门遁甲知识解答
2. 帮助用户理解奇门遁甲的基础理论、符号系统、排盘方法等
3. 提供实用的学习建议和指导
4. 以专业、友好、耐心的态度回答问题

回答要求：
- 内容要准确，基于正统奇门遁甲理论
- 解释要清晰易懂，适合不同水平的学习者
- 涉及预测时要强调仅供参考，理性对待
- 重要决策建议用户寻求专业指导
- 尊重传统文化，倡导科学理性学习

请始终用中文回答。`;

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

    // 调用AI API
    const response = await fetch('https://open.bigmodel.cn/api/anthropic/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ANTHROPIC_AUTH_TOKEN}`,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 2000,
        messages: messages,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      console.error('AI API调用失败:', response.status, response.statusText);
      throw new Error('AI API调用失败');
    }

    const data = await response.json();

    if (data.content && data.content[0] && data.content[0].text) {
      return NextResponse.json({
        response: data.content[0].text,
        usage: data.usage
      });
    } else {
      throw new Error('AI响应格式异常');
    }

  } catch (error) {
    console.error('AI聊天API错误:', error);

    // 如果API调用失败，返回一个友好的错误回复
    return NextResponse.json({
      response: `抱歉，我目前无法连接到AI服务。这可能是由于网络问题或服务暂时不可用。

您可以：
1. 稍后再试
2. 检查网络连接
3. 或者尝试浏览我们的学习资料获取答案

如果您有紧急的问题，建议您查阅相关的奇门遁甲教材或咨询专业老师。`,
      error: true
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