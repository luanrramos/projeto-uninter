import { useState } from 'react';
import { Search, Send, Paperclip, MoreVertical, Phone, Video, CheckCheck } from 'lucide-react';
import { clsx } from 'clsx';

// Dados Mockados de Conversas
const MOCK_CHATS = [
  {
    id: 1,
    name: 'Dr. João Silva',
    role: 'Cardiologista',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    online: true,
    lastMessage: 'Os resultados dos exames estão ótimos!',
    time: '10:30',
    unread: 2,
    messages: [
      { id: 1, text: 'Bom dia, Dr. João. Já saíram os resultados?', sender: 'me', time: '10:15' },
      { id: 2, text: 'Bom dia! Sim, acabei de analisar.', sender: 'other', time: '10:20' },
      { id: 3, text: 'Os resultados dos exames estão ótimos! Pode ficar tranquilo.', sender: 'other', time: '10:30' },
    ]
  },
  {
    id: 2,
    name: 'Suporte VidaPlus',
    role: 'Atendimento',
    avatar: 'https://ui-avatars.com/api/?name=Suporte&background=0D8ABC&color=fff',
    online: false,
    lastMessage: 'Sua solicitação #4092 foi resolvida.',
    time: 'Ontem',
    unread: 0,
    messages: [
      { id: 1, text: 'Olá, preciso de ajuda com o agendamento.', sender: 'me', time: 'Ontem 14:00' },
      { id: 2, text: 'Sua solicitação #4092 foi resolvida. Tente novamente agora.', sender: 'other', time: 'Ontem 16:00' },
    ]
  },
  {
    id: 3,
    name: 'Dra. Maria Oliveira',
    role: 'Nutricionista',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    online: true,
    lastMessage: 'Lembre-se de beber água!',
    time: 'Seg',
    unread: 0,
    messages: []
  }
];

export default function Messages() {
  const [activeChatId, setActiveChatId] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const activeChat = MOCK_CHATS.find(c => c.id === activeChatId);

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    // Aqui entraria a lógica de enviar para o backend
    // Como é mock, apenas limpamos o input visualmente
    setNewMessage('');
  };

  return (
    <div className="h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-sm border border-gray-100 flex overflow-hidden animate-in fade-in zoom-in-95 duration-500">

      {/* Sidebar - Lista de Conversas */}
      <div className="w-full md:w-80 border-r border-gray-100 flex flex-col bg-gray-50/50">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Mensagens</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar conversa..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
          {MOCK_CHATS.map(chat => (
            <button
              key={chat.id}
              onClick={() => setActiveChatId(chat.id)}
              className={clsx(
                "w-full p-3 rounded-xl flex items-center gap-3 transition-all text-left group",
                activeChatId === chat.id ? "bg-white shadow-md shadow-gray-100 ring-1 ring-gray-100" : "hover:bg-white hover:shadow-sm"
              )}
            >
              <div className="relative">
                <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover" />
                {chat.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="font-semibold text-gray-900 truncate">{chat.name}</h3>
                  <span className="text-xs text-gray-400">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-500 truncate group-hover:text-gray-700">{chat.lastMessage}</p>
              </div>
              {chat.unread > 0 && (
                <span className="bg-violet-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[1.2rem] text-center">
                  {chat.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Área do Chat */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="h-20 px-6 border-b border-gray-100 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <img src={activeChat.avatar} className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="font-bold text-gray-900">{activeChat.name}</h3>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                {activeChat.online ? <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block"/> : null}
                {activeChat.role}
              </p>
            </div>
          </div>
          <div className="flex gap-2 text-gray-400">
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors"><Phone size={20} /></button>
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors"><Video size={20} /></button>
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors"><MoreVertical size={20} /></button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-[#F8FAFC]">
          {activeChat.messages.map((msg) => (
            <div key={msg.id} className={clsx("flex", msg.sender === 'me' ? "justify-end" : "justify-start")}>
              <div className={clsx(
                "max-w-[70%] px-5 py-3 rounded-2xl shadow-sm relative text-sm",
                msg.sender === 'me'
                  ? "bg-violet-600 text-white rounded-tr-none"
                  : "bg-white text-gray-700 border border-gray-100 rounded-tl-none"
              )}>
                <p>{msg.text}</p>
                <div className={clsx(
                  "text-[10px] mt-1 flex items-center gap-1 justify-end",
                  msg.sender === 'me' ? "text-violet-200" : "text-gray-400"
                )}>
                  {msg.time}
                  {msg.sender === 'me' && <CheckCheck size={12} />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 p-2 pr-2 rounded-xl border border-gray-200 focus-within:ring-2 focus-within:ring-violet-100 focus-within:border-violet-300 transition-all">
            <button type="button" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200/50 rounded-lg transition-colors">
              <Paperclip size={20} />
            </button>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-gray-800 placeholder-gray-400"
            />
            <button
              type="submit"
              className={clsx(
                "p-2 rounded-lg transition-all duration-300",
                newMessage.trim()
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-200 hover:scale-105"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              )}
            >
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
