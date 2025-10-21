'use client';

import { useState } from 'react';

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  avatar: string;
  category: string;
  tags: string[];
  likes: number;
  replies: number;
  views: number;
  createdAt: string;
  isPinned: boolean;
  isLiked: boolean;
}

interface Reply {
  id: string;
  content: string;
  author: string;
  avatar: string;
  likes: number;
  createdAt: string;
  isLiked: boolean;
}

export default function Community() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      title: '初学者如何快速掌握奇门遁甲基础？',
      content: '大家好，我是奇门遁甲的初学者，想请教一下大家有什么好的学习方法能够快速掌握基础知识？特别是关于八门九星的理解，感觉很难记住。希望有经验的学长学姐能够分享一些学习心得。',
      author: '新手小白',
      avatar: '/avatar1.png',
      category: '学习交流',
      tags: ['初学者', '学习方法', '基础'],
      likes: 23,
      replies: 15,
      views: 156,
      createdAt: '2024-03-15 14:30',
      isPinned: true,
      isLiked: false
    },
    {
      id: '2',
      title: '分享一个商业决策的奇门遁甲实战案例',
      content: '最近遇到一个商业投资决策的案例，通过奇门遁甲分析后做出了正确的选择。在这里分享一下整个过程，希望能对大家有所帮助。具体情况是这样的...',
      author: '商业奇门师',
      avatar: '/avatar2.png',
      category: '案例分享',
      tags: ['商业', '实战', '投资'],
      likes: 45,
      replies: 8,
      views: 289,
      createdAt: '2024-03-14 09:15',
      isPinned: false,
      isLiked: true
    },
    {
      id: '3',
      title: '关于排盘软件的讨论',
      content: '现在市面上有很多奇门遁甲排盘软件，想和大家讨论一下各自的体验。你们都用什么软件？觉得哪个最准确、最方便使用？我个人比较偏好手动排盘，但有时候时间紧张会使用软件辅助。',
      author: '排盘达人',
      avatar: '/avatar3.png',
      category: '工具讨论',
      tags: ['排盘', '软件', '工具'],
      likes: 18,
      replies: 22,
      views: 134,
      createdAt: '2024-03-13 16:45',
      isPinned: false,
      isLiked: false
    }
  ]);

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const [showNewPostModal, setShowNewPostModal] = useState(false);

  const categories = [
    { value: 'all', label: '全部板块', color: 'bg-gray-100 text-gray-800' },
    { value: '学习交流', label: '学习交流', color: 'bg-blue-100 text-blue-800' },
    { value: '案例分享', label: '案例分享', color: 'bg-green-100 text-green-800' },
    { value: '工具讨论', label: '工具讨论', color: 'bg-purple-100 text-purple-800' },
    { value: '心得分享', label: '心得分享', color: 'bg-amber-100 text-amber-800' },
    { value: '问答求助', label: '问答求助', color: 'bg-red-100 text-red-800' }
  ];

  const sortOptions = [
    { value: 'latest', label: '最新发布' },
    { value: 'popular', label: '最多回复' },
    { value: 'liked', label: '最多点赞' }
  ];

  const filteredPosts = posts
    .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.replies - a.replies;
        case 'liked':
          return b.likes - a.likes;
        case 'latest':
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });

  const likePost = (postId: string) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked }
        : post
    ));
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}天前`;
    if (hours > 0) return `${hours}小时前`;
    return '刚刚';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* 头部 */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">学习社区</h1>
              <p className="text-amber-100">与同道中人交流学习心得，分享实战经验</p>
            </div>
            <button
              onClick={() => setShowNewPostModal(true)}
              className="bg-white text-amber-600 px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors font-medium"
            >
              发布新帖
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* 筛选和排序 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.value
                      ? category.color
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">排序：</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {selectedPost ? (
          /* 帖子详情 */
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 mb-6"
                >
                  <span>←</span>
                  <span>返回社区</span>
                </button>

                <div className="mb-6">
                  {selectedPost.isPinned && (
                    <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      <span>📌</span>
                      <span>置顶</span>
                    </div>
                  )}
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedPost.title}</h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                      {selectedPost.category}
                    </span>
                    <span>作者：{selectedPost.author}</span>
                    <span>发布时间：{formatTime(selectedPost.createdAt)}</span>
                    <span>浏览：{selectedPost.views}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedPost.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="prose prose-amber max-w-none mb-8">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedPost.content}
                  </p>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg mb-8">
                  <button
                    onClick={() => likePost(selectedPost.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      selectedPost.isLiked
                        ? 'bg-red-100 text-red-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <svg className="w-5 h-5" fill={selectedPost.isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>{selectedPost.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>{selectedPost.replies}</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 3.12-9.032 7.326m0 0A9.001 9.001 0 0012 21c4.474 0 8.268-3.12 9.032-7.326" />
                    </svg>
                    <span>分享</span>
                  </button>
                </div>

                {/* 回复区域 */}
                <div className="border-t pt-8">
                  <h3 className="text-lg font-bold mb-6 text-gray-800">回复 ({selectedPost.replies})</h3>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <textarea
                      placeholder="写下您的回复..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none"
                      rows={4}
                    />
                    <div className="flex justify-end mt-3">
                      <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors font-medium">
                        发布回复
                      </button>
                    </div>
                  </div>

                  {/* 模拟回复列表 */}
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span>学</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-semibold text-gray-800">学者A</span>
                            <span className="text-sm text-gray-600">2小时前</span>
                          </div>
                          <p className="text-gray-700">很好的问题！我建议从基础理论开始，先理解阴阳五行和天干地支的关系，然后再学习八门九星。记忆方面可以用口诀和联想记忆法。</p>
                          <div className="flex items-center space-x-4 mt-3">
                            <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-amber-600">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .014.009.028.011.042a1.5 1.5 0 11-2.992 0 1.5 1.5 0 01-.011-.042A2 2 0 005 5v11a2 2 0 002 2h12z" />
                              </svg>
                              <span>5</span>
                            </button>
                            <button className="text-sm text-gray-600 hover:text-amber-600">回复</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧相关推荐 */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-800">相关帖子</h3>
                <div className="space-y-3">
                  {posts
                    .filter(p => p.id !== selectedPost.id && p.category === selectedPost.category)
                    .slice(0, 4)
                    .map(post => (
                      <div
                        key={post.id}
                        onClick={() => setSelectedPost(post)}
                        className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-amber-50 transition-colors"
                      >
                        <h4 className="font-semibold text-sm text-gray-800 mb-1 line-clamp-1">{post.title}</h4>
                        <div className="flex items-center justify-between text-xs text-gray-600">
                          <span>{post.author}</span>
                          <span>{post.replies} 回复</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 border border-blue-200">
                <h3 className="text-lg font-bold mb-4 text-blue-800">社区规则</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>保持友善，互相尊重</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>分享有价值的内容</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>遵守社区规范</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>禁止发布广告和垃圾信息</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* 帖子列表 */
          <div className="space-y-6">
            {filteredPosts.map(post => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {post.isPinned && (
                      <div className="flex items-center space-x-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                        <span>📌</span>
                        <span>置顶</span>
                      </div>
                    )}
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>👁 {post.views}</span>
                    <span>💬 {post.replies}</span>
                    <span>❤️ {post.likes}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-700 mb-4 line-clamp-3">
                  {post.content}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs">{post.author.charAt(0)}</span>
                    </div>
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{formatTime(post.createdAt)}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      likePost(post.id);
                    }}
                    className={`flex items-center space-x-1 px-3 py-1 rounded-lg transition-colors ${
                      post.isLiked
                        ? 'bg-red-100 text-red-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <svg className="w-4 h-4" fill={post.isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>{post.likes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">暂无相关帖子</h3>
            <p className="text-gray-600 mb-6">成为第一个发布帖子的人吧！</p>
            <button
              onClick={() => setShowNewPostModal(true)}
              className="bg-amber-600 text-white py-2 px-6 rounded-lg hover:bg-amber-700 transition-colors font-medium"
            >
              发布新帖
            </button>
          </div>
        )}
      </div>

      {/* 新建帖子模态框 */}
      {showNewPostModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">发布新帖</h2>
              <button
                onClick={() => setShowNewPostModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">帖子标题</label>
                <input
                  type="text"
                  placeholder="请输入帖子标题..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">选择板块</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                  {categories.slice(1).map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">帖子内容</label>
                <textarea
                  placeholder="请输入帖子内容..."
                  rows={8}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">标签</label>
                <input
                  type="text"
                  placeholder="请输入标签，用空格分隔..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setShowNewPostModal(false)}
                  className="flex-1 bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                >
                  发布帖子
                </button>
                <button
                  onClick={() => setShowNewPostModal(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}