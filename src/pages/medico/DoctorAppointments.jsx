import { FileText, Download, Eye } from 'lucide-react';

const HISTORY = [
  { id: 102, date: '12/12/2024', patient: 'Carlos Silva', diagnosis: 'Hipertensão Leve', prescription: 'Losartana 50mg' },
  { id: 101, date: '11/12/2024', patient: 'Maria Souza', diagnosis: 'Gripe Sazonal', prescription: 'Paracetamol, Repouso' },
  { id: 99, date: '10/12/2024', patient: 'João Pedro', diagnosis: 'Check-up Rotina', prescription: '-' },
];

export default function DoctorAppointments() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h1 className="text-2xl font-bold text-gray-800">Histórico de Atendimentos</h1>

      <div className="grid gap-4">
        {HISTORY.map((record) => (
          <div key={record.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

            <div className="flex items-start gap-4">
              <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
                <FileText size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <span>#{record.id}</span>
                  <span>•</span>
                  <span>{record.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{record.patient}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  <span className="font-semibold">Diagnóstico:</span> {record.diagnosis}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
               <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors">
                 <Eye size={18} /> Detalhes
               </button>
               <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 text-violet-600 bg-violet-50 hover:bg-violet-100 rounded-lg font-medium transition-colors">
                 <Download size={18} /> Receita
               </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
