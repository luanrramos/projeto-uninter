import { useState } from 'react';
import { Search, Mail, Phone, MoreHorizontal } from 'lucide-react';

const USERS_DB = [
  { id: 1, name: 'Carlos Oliveira', cpf: '000.***.***-00', email: 'carlos@email.com', plan: 'Premium', status: 'Ativo' },
  { id: 2, name: 'Mariana Santos', cpf: '111.***.***-11', email: 'mariana@email.com', plan: 'Básico', status: 'Ativo' },
  { id: 3, name: 'Roberto Lima', cpf: '222.***.***-22', email: 'roberto@email.com', plan: 'Premium', status: 'Inadimplente' },
];

export default function AdminPatients() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Base de Pacientes</h1>
        <button className="bg-violet-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-violet-700 transition-colors">
          Exportar CSV
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 text-xs uppercase font-semibold">
            <tr>
              <th className="px-6 py-4">Nome</th>
              <th className="px-6 py-4">Contato</th>
              <th className="px-6 py-4">Plano</th>
              <th className="px-6 py-4">Status Financeiro</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {USERS_DB.map(user => (
              <tr key={user.id} className="hover:bg-gray-50/50">
                <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{user.name}</div>
                    <div className="text-xs text-gray-400">CPF: {user.cpf}</div>
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1"><Mail size={14}/> {user.email}</div>
                    <div className="flex items-center gap-2 text-sm text-gray-600"><Phone size={14}/> (11) 99999-9999</div>
                </td>
                <td className="px-6 py-4">
                    <span className={`text-xs font-bold px-2 py-1 rounded border ${user.plan === 'Premium' ? 'bg-violet-50 text-violet-700 border-violet-100' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                        {user.plan}
                    </span>
                </td>
                <td className="px-6 py-4">
                    {user.status === 'Inadimplente' ? (
                        <span className="text-red-600 text-sm font-semibold flex items-center gap-1">● Pendente</span>
                    ) : (
                        <span className="text-teal-600 text-sm font-semibold flex items-center gap-1">● Em dia</span>
                    )}
                </td>
                <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={20}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
