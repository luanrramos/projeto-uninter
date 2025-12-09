import { Search, MapPin, Star, Calendar } from 'lucide-react';
import { useState } from 'react';

const MOCK_DOCTORS = [
  { id: 1, name: 'Dr. João Silva', spec: 'Cardiologista', rating: 4.9, reviews: 120, img: 'https://randomuser.me/api/portraits/men/32.jpg', available: true },
  { id: 2, name: 'Dra. Ana Costa', spec: 'Dermatologista', rating: 5.0, reviews: 85, img: 'https://randomuser.me/api/portraits/women/44.jpg', available: false },
  { id: 3, name: 'Dr. Pedro Santos', spec: 'Clínico Geral', rating: 4.8, reviews: 210, img: 'https://randomuser.me/api/portraits/men/85.jpg', available: true },
  { id: 4, name: 'Dra. Maria Oliveira', spec: 'Pediatra', rating: 4.9, reviews: 150, img: 'https://randomuser.me/api/portraits/women/65.jpg', available: true },
  { id: 5, name: 'Dr. Carlos Lima', spec: 'Ortopedista', rating: 4.7, reviews: 90, img: 'https://randomuser.me/api/portraits/men/22.jpg', available: true },
  { id: 6, name: 'Dra. Julia Souza', spec: 'Ginecologista', rating: 5.0, reviews: 180, img: 'https://randomuser.me/api/portraits/women/28.jpg', available: false },
];

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = MOCK_DOCTORS.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.spec.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">

      {/* Header e Busca */}
      <div className="bg-violet-700 rounded-3xl p-8 text-white shadow-xl shadow-violet-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl font-bold mb-2">Encontre seu Especialista</h1>
          <p className="text-violet-100 mb-6">Agende consultas com os melhores profissionais da rede VidaPlus.</p>

          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por nome ou especialidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-800 focus:ring-4 focus:ring-violet-400/30 outline-none shadow-lg"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doc) => (
          <div key={doc.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">

            <div className="flex items-start justify-between mb-4">
              <div className="relative">
                <img src={doc.img} alt={doc.name} className="w-16 h-16 rounded-full object-cover ring-4 ring-gray-50 group-hover:ring-violet-50 transition-all" />
                <span className={`absolute bottom-0 right-0 w-4 h-4 border-2 border-white rounded-full ${doc.available ? 'bg-teal-400' : 'bg-gray-300'}`}></span>
              </div>
              <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                <span className="text-xs font-bold text-yellow-700">{doc.rating}</span>
                <span className="text-xs text-yellow-600/60">({doc.reviews})</span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-gray-900">{doc.name}</h3>
            <p className="text-violet-600 font-medium text-sm mb-4">{doc.spec}</p>

            <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
              <MapPin size={16} />
              <span>Hospital Central</span>
            </div>

            <button className="w-full py-3 rounded-xl bg-gray-50 text-gray-900 font-semibold hover:bg-violet-600 hover:text-white transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-violet-200">
              <Calendar size={18} />
              Agendar Consulta
            </button>
          </div>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p>Nenhum médico encontrado com esse nome.</p>
        </div>
      )}
    </div>
  );
}
