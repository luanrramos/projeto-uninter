import { Calendar as CalIcon, Clock, CheckCircle2, XCircle } from 'lucide-react';

const AGENDA = [
  { time: '08:00', patient: 'Carlos Silva', type: 'Primeira Consulta', status: 'Concluído' },
  { time: '09:00', patient: 'Mariana Souza', type: 'Retorno', status: 'Concluído' },
  { time: '10:30', patient: 'Pedro Alves', type: 'Exames', status: 'Cancelado' },
  { time: '14:00', patient: 'Ana Costa', type: 'Retorno', status: 'Agendado' },
  { time: '15:30', patient: 'Julia Roberts', type: 'Rotina', status: 'Agendado' },
];

export default function DoctorAgenda() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Agenda de Hoje</h1>
        <div className="bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm flex items-center gap-2 text-gray-600 font-medium">
          <CalIcon size={18} className="text-violet-600" />
          12 de Dezembro, 2024
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-8 bottom-8 w-px bg-gray-100"></div>

        <div className="space-y-8">
          {AGENDA.map((slot, i) => (
            <div key={i} className="relative pl-10 flex items-start group">
              {/* Dot */}
              <div className={`absolute left-[-5px] top-1.5 w-3 h-3 rounded-full border-2 border-white shadow-sm z-10
                ${slot.status === 'Agendado' ? 'bg-violet-500 ring-4 ring-violet-100' :
                  slot.status === 'Cancelado' ? 'bg-red-400' : 'bg-teal-400'}`}>
              </div>

              <div className="flex-1 flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-sm font-bold text-violet-600 bg-violet-50 px-2 py-0.5 rounded">
                      {slot.time}
                    </span>
                    <h3 className="font-bold text-gray-800">{slot.patient}</h3>
                  </div>
                  <p className="text-sm text-gray-500">{slot.type}</p>
                </div>

                <div className="text-right">
                  {slot.status === 'Agendado' && (
                    <button className="text-sm bg-violet-600 text-white px-3 py-1.5 rounded-lg hover:bg-violet-700 transition-colors">
                      Atender
                    </button>
                  )}
                  {slot.status === 'Concluído' && (
                    <span className="flex items-center gap-1 text-teal-600 text-sm font-medium">
                      <CheckCircle2 size={16} /> Finalizado
                    </span>
                  )}
                  {slot.status === 'Cancelado' && (
                    <span className="flex items-center gap-1 text-red-400 text-sm font-medium opacity-75">
                      <XCircle size={16} /> Cancelado
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
