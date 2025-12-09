import { User, Clock, Shield, Save } from 'lucide-react';

export default function DoctorSettings() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-2xl font-bold text-gray-800">Configurações do Profissional</h1>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Header Visual */}
        <div className="h-32 bg-gradient-to-r from-violet-600 to-teal-500 relative"></div>

        <div className="px-8 pb-8">
          {/* Avatar com Sobreposição */}
          <div className="relative -mt-12 mb-6 flex justify-between items-end">
             <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-24 h-24 rounded-2xl border-4 border-white shadow-lg bg-white" />
             <button className="bg-violet-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-violet-700 shadow-lg shadow-violet-200 flex items-center gap-2 transition-colors">
               <Save size={18} /> Salvar Tudo
             </button>
          </div>

          <form className="space-y-8">
            {/* Seção Dados Pessoais */}
            <section>
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
                <User size={20} className="text-violet-500" /> Dados Profissionais
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome de Exibição</label>
                  <input type="text" defaultValue="Dr. João Silva" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-100 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Especialidade</label>
                  <input type="text" defaultValue="Cardiologia" disabled className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CRM</label>
                  <input type="text" defaultValue="123456-SP" disabled className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefone Comercial</label>
                  <input type="text" defaultValue="(11) 99999-9999" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-100 outline-none" />
                </div>
              </div>
            </section>

            <div className="border-t border-gray-100"></div>

            {/* Seção Disponibilidade */}
            <section>
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
                <Clock size={20} className="text-teal-500" /> Disponibilidade de Agenda
              </h3>
              <div className="space-y-4">
                 {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'].map(day => (
                   <div key={day} className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:bg-gray-50">
                     <span className="font-medium text-gray-700 w-24">{day}</span>
                     <div className="flex items-center gap-4">
                       <input type="time" defaultValue="08:00" className="border border-gray-200 rounded p-1 text-sm" />
                       <span className="text-gray-400">até</span>
                       <input type="time" defaultValue="18:00" className="border border-gray-200 rounded p-1 text-sm" />
                     </div>
                     <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-500"></div>
                     </label>
                   </div>
                 ))}
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}
