import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Stethoscope,
  Pill,
  MessageSquare,
  Calendar,
  Users,
  Settings,
  FileText,
  Activity,
  Clock
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const MENUS = {
  paciente: [
    { label: 'Visão Geral', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Meus Médicos', path: '/doctors', icon: Stethoscope },
    { label: 'Medicação', path: '/medicacao', icon: Pill },
    { label: 'Mensagens', path: '/mensagens', icon: MessageSquare },
    { label: 'Configurações', path: '/configuracao', icon: Settings },
  ],
  medico: [
    { label: 'Painel Médico', path: '/medico/dashboard', icon: Activity },
    { label: 'Pacientes', path: '/medico/pacientes', icon: Users },
    { label: 'Agenda', path: '/medico/agenda', icon: Calendar },
    { label: 'Atendimentos', path: '/medico/atendimento', icon: FileText },
    { label: 'Configurações', path: '/medico/config', icon: Settings },
  ],
  admin: [
    { label: 'Dashboard Adm', path: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Gestão Médicos', path: '/admin/medicos', icon: Stethoscope },
    { label: 'Gestão Pacientes', path: '/admin/pacientes', icon: Users },
    { label: 'Horários', path: '/admin/horarios', icon: Clock },
    { label: 'Agendamentos', path: '/admin/agendamentos', icon: Calendar },
  ]
};

export function Sidebar({ userType, isOpen, onClose }) {
  const currentMenu = MENUS[userType] || MENUS['paciente'];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={twMerge(
        "fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 shadow-xl lg:shadow-none transform transition-transform duration-300 ease-in-out flex flex-col",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>

        <div className="h-20 flex items-center px-8 border-b border-gray-50">
            <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-violet-200">
                <Activity size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-teal-500">
              VidaPlus
            </span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto custom-scrollbar">
          <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Menu Principal
          </p>

          {currentMenu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => window.innerWidth < 1024 && onClose()}
              className={({ isActive }) => clsx(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group font-medium",
                isActive
                  ? "bg-violet-50 text-violet-700 shadow-sm ring-1 ring-violet-200"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              {({ isActive }) => (
                <>
                  <item.icon
                    size={20}
                    className={isActive ? "text-violet-600" : "text-gray-400 group-hover:text-gray-600"}
                  />
                  {item.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-4">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
             <p className="text-xs font-medium text-gray-300 mb-1">Precisa de ajuda?</p>
             <p className="text-sm font-bold">Suporte 24h</p>
          </div>
        </div>
      </aside>
    </>
  );
}
