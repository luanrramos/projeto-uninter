import { Pill, Clock, CheckCircle2, AlertTriangle, Plus } from 'lucide-react';

const MEDICATIONS = [
  { id: 1, name: 'Amoxicilina', dosage: '500mg', freq: '8 em 8 horas', next: '14:00', stock: 'Alto', type: 'Antibiótico' },
  { id: 2, name: 'Paracetamol', dosage: '750mg', freq: 'Se houver dor', next: 'Sob demanda', stock: 'Baixo', type: 'Analgésico' },
  { id: 3, name: 'Vitamina D', dosage: '2000UI', freq: '1x ao dia', next: '08:00 (Amanhã)', stock: 'Médio', type: 'Suplemento' },
];

export default function Medications() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Minha Medicação</h1>
          <p className="text-gray-500">Gerencie seus tratamentos e horários.</p>
        </div>
        <button className="bg-violet-600 text-white p-3 rounded-xl shadow-lg shadow-violet-200 hover:bg-violet-700 transition-all">
          <Plus size={24} />
        </button>
      </div>

      <div className="space-y-4">
        {MEDICATIONS.map((med) => (
          <div key={med.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:border-violet-100 transition-colors">

            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="w-14 h-14 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                <Pill size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">{med.name}</h3>
                <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600 mt-1">
                  {med.type} • {med.dosage}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-start">
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 font-medium uppercase">Frequência</span>
                <span className="text-sm font-semibold text-gray-700">{med.freq}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 font-medium uppercase flex items-center gap-1">
                   <Clock size={10} /> Próxima Dose
                </span>
                <span className="text-sm font-bold text-violet-600">{med.next}</span>
              </div>
            </div>

            <div className="flex gap-2 w-full md:w-auto">
               <button className="flex-1 md:flex-none px-4 py-2 rounded-lg bg-teal-50 text-teal-700 font-medium hover:bg-teal-100 transition-colors flex items-center justify-center gap-2 text-sm">
                 <CheckCircle2 size={16} />
                 Tomar
               </button>
               {med.stock === 'Baixo' && (
                 <div className="p-2 rounded-lg bg-orange-50 text-orange-600 tooltip" title="Estoque Baixo">
                   <AlertTriangle size={20} />
                 </div>
               )}
            </div>

          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 text-white flex items-center justify-between shadow-lg shadow-blue-200/50">
        <div>
           <h4 className="font-bold text-lg mb-1">Precisa renovar a receita?</h4>
           <p className="opacity-90 text-sm">Agende uma teleconsulta rápida para renovação.</p>
        </div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors">
          Solicitar
        </button>
      </div>

    </div>
  );
}
