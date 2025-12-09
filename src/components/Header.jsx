import { Menu, Bell, LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export function Header({ onMenuClick }) {
  const { user, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 flex items-center justify-between sticky top-0 z-30">

      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg lg:hidden"
        >
          <Menu size={24} />
        </button>
        <h2 className="text-lg font-semibold text-gray-800 hidden sm:block">
          Bem-vindo, {user.name.split(' ')[0]}
        </h2>
      </div>

      <div className="flex items-center gap-4">

        <button className="relative p-2 text-gray-400 hover:text-violet-600 transition-colors rounded-full hover:bg-violet-50">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>

        <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>

        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-3 hover:bg-gray-50 p-1.5 pr-3 rounded-full transition-all border border-transparent hover:border-gray-200"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm"
            />
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold text-gray-700 leading-none">{user.name}</p>
              <p className="text-xs text-gray-500 mt-1 capitalize">{user.type}</p>
            </div>
            <ChevronDown size={16} className="text-gray-400 hidden md:block" />
          </button>

          {showProfileMenu && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowProfileMenu(false)}
              />
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-20 animate-in fade-in zoom-in-95 duration-200">
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                >
                  <LogOut size={16} />
                  Sair da Conta
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
