import { NextRequest, NextResponse } from 'next/server';

// 通用AI助手系统提示词
const GENERAL_AI_SYSTEM_PROMPT = `你是一位专业的AI助手，具有广泛的知识背景和强大的对话能力。你的职责是：

1. 为用户提供准确、全面的知识解答
2. 帮助用户解决各类问题和疑惑
3. 提供实用的建议和指导
4. 进行有意义的对话交流
5. 协助用户完成各种任务

回答要求：
- 内容要准确、专业、易懂
- 保持友好、耐心的态度
- 提供具体可行的建议
- 尊重用户，避免有害内容
- 承认知识的局限性，不确定时主动说明

请始终用中文回答，除非用户明确要求使用其他语言。`;

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
      { role: 'system', content: GENERAL_AI_SYSTEM_PROMPT },
      ...context.filter((msg: any) => msg.role === 'user' || msg.role === 'assistant'),
      { role: 'user', content: message }
    ];

    // 调用GLM AI API
    const response = await fetch(`${process.env.AI_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.AI_AUTH_TOKEN}`
      },
      body: JSON.stringify({
        model: 'glm-4.6',
        max_tokens: 4000,
        messages: messages,
        temperature: 0.7,
        top_p: 0.9,
        thinking: {
          type: 'enabled'
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GLM API调用失败:', response.status, response.statusText);
      console.error('错误详情:', errorText);

      // 检查特定错误类型
      if (errorText.includes('余额不足') || errorText.includes('1113')) {
        throw new Error('AI服务余额不足，请联系管理员充值或稍后再试');
      } else if (errorText.includes('模型不存在') || errorText.includes('1211')) {
        throw new Error('AI服务配置错误，请联系管理员');
      } else if (errorText.includes('令牌过期') || errorText.includes('token')) {
        throw new Error('AI服务认证过期，请重新配置');
      } else {
        throw new Error(`AI API调用失败: ${response.status} ${response.statusText}`);
      }
    }

    const data = await response.json();

    if (data.choices && data.choices[0] && data.choices[0].message) {
      return NextResponse.json({
        response: data.choices[0].message.content,
        usage: data.usage,
        model: data.model,
        timestamp: new Date().toISOString()
      });
    } else {
      throw new Error('AI响应格式异常');
    }

  } catch (error) {
    console.error('通用AI聊天API错误:', error);

    // 根据错误类型返回不同的友好提示
    let errorMessage = `抱歉，我目前无法连接到AI服务。

您可以：
1. 稍后再试
2. 检查网络连接
3. 或者尝试重新表述您的问题

如果问题持续存在，请联系管理员。`;

    if (error instanceof Error) {
      if (error.message.includes('余额不足')) {
        errorMessage = `⚠️ **AI服务余额不足**

很抱歉，当前AI服务余额不足，无法提供智能回答。

您可以：
• 稍后再试
• 联系管理员充值
• 使用其他功能获取信息

充值后即可恢复正常使用。`;
      } else if (error.message.includes('配置错误')) {
        errorMessage = `⚠️ **AI服务配置错误**

AI服务配置出现问题，请联系管理员检查配置。

在修复期间，您可以：
• 浏览我们的学习资料
• 使用其他功能模块
• 稍后再试`;
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
  try {
    // 测试API连接
    const testResponse = await fetch(`${process.env.AI_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.AI_AUTH_TOKEN}`
      },
      body: JSON.stringify({
        model: 'glm-4.6',
        max_tokens: 10,
        messages: [{ role: 'user', content: 'test' }],
        temperature: 0.1
      })
    });

    const status = testResponse.ok ? 'healthy' : 'unhealthy';

    return NextResponse.json({
      status: status,
      message: status === 'healthy' ? 'GLM AI助手服务正常' : 'GLM AI服务异常',
      api_status: testResponse.ok ? 'connected' : 'disconnected',
      model: 'glm-4.6',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: 'GLM AI服务连接失败',
      error: error instanceof Error ? error.message : '未知错误',
      timestamp: new Date().toISOString()
    });
  }
}