'use client';

import { useState } from 'react';

interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  isFavorite: boolean;
}

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: '八门系统学习笔记',
      content: '奇门遁甲的八门分为吉门和凶门：\n\n吉门：\n- 休门：休息、安逸，宜休养生息\n- 生门：生长、发展，宜求财创业\n- 景门：景致、文书，宜考试求名\n- 开门：开启、顺利，宜出行开业\n\n凶门：\n- 伤门：伤害、争斗，宜捕猎讨债\n- 杜门：堵塞、隐匿，宜躲藏避灾\n- 死门：死亡、终结，宜丧葬执法\n- 惊门：惊恐、官司，宜诉讼惊敌\n\n记忆口诀：休生景开为吉门，伤杜死惊为凶门。',
      category: '符号系统',
      tags: ['八门', '吉凶', '记忆'],
      createdAt: '2024-01-15',
      updatedAt: '2024-01-20',
      isFavorite: true
    },
    {
      id: '2',
      title: '五行相生相克关系',
      content: '五行相生关系：\n木生火 → 火生土 → 土生金 → 金生水 → 水生木\n\n五行相克关系：\n木克土 → 土克水 → 水克火 → 火克金 → 金克木\n\n记忆技巧：\n相生：顺时针方向\n相克：隔位相克\n\n在奇门遁甲中的应用：\n- 判断符号间的生克关系\n- 分析运势的强弱变化\n- 选择合适的时间和行动',
      category: '基础理论',
      tags: ['五行', '生克', '基础'],
      createdAt: '2024-01-18',
      updatedAt: '2024-01-18',
      isFavorite: false
    },
    {
      id: '3',
      title: '排盘步骤总结',
      content: '奇门遁甲排盘的八个步骤：\n\n1. 确定时间：年、月、日、时（农历）\n2. 确定局数：根据时间确定阴遁/阳遁和具体局数\n3. 排地盘：六仪在九宫中的固定位置\n4. 排天盘：三奇六仪的动态排列\n5. 排九星：九星在各宫的位置\n6. 排八门：八门在八宫的位置\n7. 排八神：八神在八宫的位置\n8. 检查验证：确保排盘正确\n\n注意事项：\n- 初学者建议使用排盘软件\n- 理解每步的原理很重要\n- 多练习不同时间的排盘',
      category: '排盘方法',
      tags: ['排盘', '步骤', '技巧'],
      createdAt: '2024-01-22',
      updatedAt: '2024-01-25',
      isFavorite: true
    }
  ]);

  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFavorites, setShowFavorites] = useState(false);

  const categories = ['all', '基础理论', '符号系统', '排盘方法', '断局技巧', '案例心得'];

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || note.category === selectedCategory;
    const matchesFavorite = !showFavorites || note.isFavorite;

    return matchesSearch && matchesCategory && matchesFavorite;
  });

  const createNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: '新建笔记',
      content: '',
      category: '基础理论',
      tags: [],
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      isFavorite: false
    };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
    setIsEditing(true);
  };

  const saveNote = () => {
    if (!selectedNote) return;

    const updatedNotes = notes.map(note =>
      note.id === selectedNote.id
        ? { ...selectedNote, updatedAt: new Date().toISOString().split('T')[0] }
        : note
    );
    setNotes(updatedNotes);
    setIsEditing(false);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
    if (selectedNote?.id === id) {
      setSelectedNote(null);
      setIsEditing(false);
    }
  };

  const toggleFavorite = (id: string) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, isFavorite: !note.isFavorite } : note
    );
    setNotes(updatedNotes);
    if (selectedNote?.id === id) {
      setSelectedNote({ ...selectedNote, isFavorite: !selectedNote.isFavorite });
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* 头部 */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">学习笔记</h1>
              <p className="text-amber-100">记录学习心得，整理重要知识点</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-2xl font-bold">{notes.length}</div>
                <div className="text-sm text-amber-200">学习笔记</div>
              </div>
              <button
                onClick={createNote}
                className="bg-white text-amber-600 px-4 py-2 rounded-lg hover:bg-amber-50 transition-colors font-medium"
              >
                新建笔记
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* 搜索和筛选 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">搜索笔记</label>
              <input
                type="text"
                placeholder="输入关键词..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">笔记类别</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? '全部类别' : cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">显示选项</label>
              <div className="flex items-center space-x-2 h-10">
                <input
                  type="checkbox"
                  id="favorites"
                  checked={showFavorites}
                  onChange={(e) => setShowFavorites(e.target.checked)}
                  className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
                />
                <label htmlFor="favorites" className="text-sm text-gray-700 cursor-pointer">
                  只显示收藏
                </label>
              </div>
            </div>
            <div className="flex items-end">
              <div className="text-sm text-gray-600">
                找到 {filteredNotes.length} 个笔记
              </div>
            </div>
          </div>
        </div>

        {selectedNote ? (
          /* 笔记详情/编辑 */
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => {
                      setSelectedNote(null);
                      setIsEditing(false);
                    }}
                    className="flex items-center space-x-2 text-amber-600 hover:text-amber-700"
                  >
                    <span>←</span>
                    <span>返回笔记列表</span>
                  </button>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleFavorite(selectedNote.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        selectedNote.isFavorite
                          ? 'bg-amber-100 text-amber-600'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <svg className="w-5 h-5" fill={selectedNote.isFavorite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => deleteNote(selectedNote.id)}
                      className="p-2 bg-red-100 rounded-lg hover:bg-red-200 transition-colors text-red-600"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>

                {isEditing ? (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">笔记标题</label>
                      <input
                        type="text"
                        value={selectedNote.title}
                        onChange={(e) => setSelectedNote({ ...selectedNote, title: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">笔记类别</label>
                      <select
                        value={selectedNote.category}
                        onChange={(e) => setSelectedNote({ ...selectedNote, category: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      >
                        {categories.slice(1).map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">笔记内容</label>
                      <textarea
                        value={selectedNote.content}
                        onChange={(e) => setSelectedNote({ ...selectedNote, content: e.target.value })}
                        rows={12}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="在这里输入您的学习笔记..."
                      />
                    </div>
                    <div className="flex space-x-4">
                      <button
                        onClick={saveNote}
                        className="bg-amber-600 text-white py-2 px-6 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                      >
                        保存笔记
                      </button>
                      <button
                        onClick={() => {
                          setIsEditing(false);
                          setSelectedNote(notes.find(n => n.id === selectedNote.id) || null);
                        }}
                        className="border border-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      >
                        取消
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedNote.title}</h2>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>类别：{selectedNote.category}</span>
                        <span>创建：{formatDate(selectedNote.createdAt)}</span>
                        <span>更新：{formatDate(selectedNote.updatedAt)}</span>
                      </div>
                    </div>

                    {selectedNote.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {selectedNote.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-4 text-gray-800">笔记内容</h3>
                      <div className="prose prose-amber max-w-none">
                        {selectedNote.content.split('\n').map((paragraph, index) => (
                          <p key={index} className="text-gray-700 leading-relaxed mb-3">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 右侧信息 */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-800">学习建议</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start space-x-2">
                    <span className="text-amber-600">•</span>
                    <span>定期整理学习笔记，加深理解</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-amber-600">•</span>
                    <span>使用标签分类，便于查找</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-amber-600">•</span>
                    <span>记录自己的理解和思考</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-amber-600">•</span>
                    <span>配合实践，理论联系实际</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 border border-blue-200">
                <h3 className="text-lg font-bold mb-4 text-blue-800">笔记统计</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-700">总字数</span>
                    <span className="text-sm font-medium">{selectedNote.content.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-700">段落数</span>
                    <span className="text-sm font-medium">{selectedNote.content.split('\n').filter(p => p.trim()).length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-700">标签数</span>
                    <span className="text-sm font-medium">{selectedNote.tags.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* 笔记列表 */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map(note => (
              <div
                key={note.id}
                onClick={() => setSelectedNote(note)}
                className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {note.isFavorite && (
                      <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">{note.category}</span>
                </div>

                <h3 className="font-bold text-lg mb-2 text-gray-800">{note.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {note.content.substring(0, 100)}...
                </p>

                {note.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {note.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                    {note.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{note.tags.length - 2}
                      </span>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>更新于 {formatDate(note.updatedAt)}</span>
                  <span>{note.content.length} 字</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredNotes.length === 0 && !selectedNote && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">暂无笔记</h3>
            <p className="text-gray-600 mb-6">开始记录您的学习心得和重要知识点</p>
            <button
              onClick={createNote}
              className="bg-amber-600 text-white py-2 px-6 rounded-lg hover:bg-amber-700 transition-colors font-medium"
            >
              创建第一个笔记
            </button>
          </div>
        )}
      </div>
    </div>
  );
}