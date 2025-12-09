import { Calendar as CalendarIcon, Clock, Plus } from 'lucide-react';

export default function AdminSchedules() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Horários e Salas</h1>
          <p className="text-gray-500">Configure o funcionamento da clínica.</p>
        </div>
        <button className="bg-violet-600 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-violet-700 transition-colors">
          <Plus size={16} /> Adicionar Bloqueio
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Funcionamento Geral */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Clock className="text-violet-600" size={20} /> Horário de Funcionamento
            </h3>
            <div className="space-y-3">
                {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'].map(day => (
                    <div key={day} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-700">{day}</span>
                        <span className="text-sm text-gray-600 font-mono">08:00 - 20:00</span>
                    </div>
                ))}
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg opacity-75">
                    <span className="font-medium text-gray-700">Sábado</span>
                    <span className="text-sm text-gray-600 font-mono">08:00 - 14:00</span>
                </div>
            </div>
            <button className="mt-4 w-full text-violet-600 font-semibold text-sm hover:underline">Editar Horários</button>
        </div>

        {/* Feriados e Bloqueios */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <CalendarIcon className="text-red-500" size={20} /> Bloqueios Globais
            </h3>
            <div className="space-y-4">
                <div className="p-4 border-l-4 border-red-400 bg-red-50 rounded-r-xl">
                    <h4 className="font-bold text-red-800">25 de Dezembro</h4>
                    <p className="text-sm text-red-600">Natal - Clínica Fechada</p>
                </div>
                <div className="p-4 border-l-4 border-red-400 bg-red-50 rounded-r-xl">
                    <h4 className="font-bold text-red-800">01 de Janeiro</h4>
                    <p className="text-sm text-red-600">Ano Novo - Clínica Fechada</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
