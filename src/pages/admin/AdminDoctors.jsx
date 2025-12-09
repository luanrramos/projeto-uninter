import { useState } from 'react';
import { Search, MoreVertical, ShieldCheck, Ban, Edit } from 'lucide-react';

const DOCTORS_DB = [
  { id: 1, name: 'Dr. João Silva', crm: '123456-SP', spec: 'Cardiologia', status: 'Ativo', joined: '12/01/2024' },
  { id: 2, name: 'Dra. Ana Costa', crm: '987654-RJ', spec: 'Dermatologia', status: 'Pendente', joined: '10/04/2024' },
  { id: 3, name: 'Dr. Pedro Santos', crm: '456789-MG', spec: 'Clínico Geral', status: 'Inativo', joined: '15/11/2023' },
  { id: 4, name: 'Dra. Julia Souza', crm: '321654-SP', spec: 'Pediatria', status: 'Ativo', joined: '05/03/2024' },
];

export default function AdminDoctors() {
  const [term, setTerm] = useState('');

  const filtered = DOCTORS_DB.filter(d =>
    d.name.toLowerCase().includes(term.toLowerCase()) ||
    d.crm.includes(term)
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Gestão de Médicos</h1>
          <p className="text-gray-500">Gerencie o corpo clínico e aprovações.</p>
        </div>
        <div className="relative w-full sm:w-72">
          <input
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-100 outline-none"
            placeholder="Buscar por nome ou CRM..."
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 text-xs uppercase font-semibold">
            <tr>
              <th className="px-6 py-4">Nome Profissional</th>
              <th className="px-6 py-4">Especialidade</th>
              <th className="px-6 py-4">CRM</th>
              <th className="px-6 py-4">Data Cadastro</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map(doc => (
              <tr key={doc.id} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-6 py-4 font-medium text-gray-900">{doc.name}</td>
                <td className="px-6 py-4 text-gray-600">{doc.spec}</td>
                <td className="px-6 py-4 font-mono text-xs bg-gray-50 rounded w-max px-2 py-1 text-gray-600">{doc.crm}</td>
                <td className="px-6 py-4 text-gray-500 text-sm">{doc.joined}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold
                    ${doc.status === 'Ativo' ? 'bg-green-100 text-green-700' :
                      doc.status === 'Pendente' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-600'}`}>
                    {doc.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button title="Editar" className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg"><Edit size={16} /></button>
                    {doc.status !== 'Ativo' && (
                        <button title="Aprovar/Ativar" className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg"><ShieldCheck size={16} /></button>
                    )}
                    <button title="Suspender" className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"><Ban size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
