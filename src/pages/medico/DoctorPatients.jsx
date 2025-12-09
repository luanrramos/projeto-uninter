import { useState } from 'react';
import { Search, MoreHorizontal, Phone, FileText } from 'lucide-react';

const PATIENTS = [
  { id: 1, name: 'Ana Costa', age: 34, lastVisit: '10/03/2024', status: 'Em Tratamento', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 2, name: 'Carlos Oliveira', age: 45, lastVisit: '05/02/2024', status: 'Alta', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 3, name: 'Mariana Santos', age: 28, lastVisit: '12/03/2024', status: 'Aguardando Exames', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { id: 4, name: 'Roberto Lima', age: 52, lastVisit: '11/01/2024', status: 'Crônico', img: 'https://randomuser.me/api/portraits/men/85.jpg' },
];

export default function DoctorPatients() {
  const [term, setTerm] = useState('');

  const filtered = PATIENTS.filter(p => p.name.toLowerCase().includes(term.toLowerCase()));

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Meus Pacientes</h1>
          <p className="text-gray-500">Gerencie os prontuários e históricos.</p>
        </div>
        <div className="relative">
          <input
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-100 outline-none w-64"
            placeholder="Buscar paciente..."
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
              <th className="px-6 py-4">Paciente</th>
              <th className="px-6 py-4">Idade</th>
              <th className="px-6 py-4">Última Visita</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map(p => (
              <tr key={p.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img src={p.img} className="w-10 h-10 rounded-full" />
                  <span className="font-semibold text-gray-800">{p.name}</span>
                </td>
                <td className="px-6 py-4 text-gray-600">{p.age} anos</td>
                <td className="px-6 py-4 text-gray-600">{p.lastVisit}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold
                    ${p.status === 'Alta' ? 'bg-green-50 text-green-700' :
                      p.status === 'Crônico' ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-700'}`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-gray-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg"><Phone size={18} /></button>
                    <button className="p-2 text-gray-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg"><FileText size={18} /></button>
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
