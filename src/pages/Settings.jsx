import { useState } from 'react';
import { User, Bell, Shield, Info, Save, ChevronRight, Globe, Lock } from 'lucide-react';
import { clsx } from 'clsx';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Meu Perfil', icon: User },
    { id: 'notifications', label: 'Notificações', icon: Bell },
    { id: 'security', label: 'Segurança', icon: Shield },
    { id: 'about', label: 'Sobre a VidaPlus', icon: Info },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-2xl font-bold text-gray-800">Configurações</h1>

      <div className="flex flex-col md:flex-row gap-8 items-start">

        {/* Menu Lateral */}
        <div className="w-full md:w-64 flex flex-col gap-1 bg-white p-2 rounded-2xl shadow-sm border border-gray-100 shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                activeTab === tab.id
                  ? "bg-violet-50 text-violet-700 shadow-sm"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              )}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Área de Conteúdo */}
        <div className="flex-1 w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 min-h-[500px]">

          {/* TAB: PERFIL */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-4">Informações Pessoais</h2>

              <div className="flex items-center gap-6 mb-8">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="w-24 h-24 rounded-full ring-4 ring-gray-50" />
                <div>
                  <button className="bg-violet-50 text-violet-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-violet-100 transition-colors">
                    Alterar Foto
                  </button>
                  <p className="text-xs text-gray-400 mt-2">JPG, GIF ou PNG. Max 800K</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Nome Completo</label>
                  <input type="text" defaultValue="Carlos Silva" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-100 focus:border-violet-400 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input type="email" defaultValue="carlos.silva@email.com" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-100 focus:border-violet-400 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Telefone</label>
                  <input type="tel" defaultValue="(11) 99999-9999" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-100 focus:border-violet-400 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">CPF</label>
                  <input type="text" defaultValue="000.000.000-00" disabled className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed" />
                </div>
              </div>

              <div className="pt-6 flex justify-end">
                <button className="flex items-center gap-2 bg-violet-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-violet-700 shadow-lg shadow-violet-200 transition-all">
                  <Save size={18} /> Salvar Alterações
                </button>
              </div>
            </div>
          )}

          {/* TAB: NOTIFICAÇÕES */}
          {activeTab === 'notifications' && (
            <div className="space-y-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-4">Preferências de Notificação</h2>

              <div className="space-y-6">
                {[
                  { title: 'Lembretes de Consulta', desc: 'Receba avisos 1 dia e 1 hora antes.', email: true, sms: true },
                  { title: 'Resultados de Exames', desc: 'Seja notificado quando um resultado sair.', email: true, sms: false },
                  { title: 'Novidades e Dicas', desc: 'Dicas de saúde semanais da equipe.', email: false, sms: false },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between pb-6 border-b border-gray-50 last:border-0">
                    <div>
                      <h3 className="font-medium text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" defaultChecked={item.email} className="rounded text-violet-600 focus:ring-violet-500 border-gray-300" />
                        <span className="text-sm text-gray-600">Email</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" defaultChecked={item.sms} className="rounded text-violet-600 focus:ring-violet-500 border-gray-300" />
                        <span className="text-sm text-gray-600">SMS</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: SEGURANÇA (Placeholder Simples) */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-4">Segurança da Conta</h2>
              <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex gap-4 items-start">
                 <Shield className="text-orange-600 mt-1" />
                 <div>
                   <h3 className="text-orange-800 font-bold text-sm">Autenticação de Dois Fatores (2FA)</h3>
                   <p className="text-orange-700 text-sm mt-1">Recomendamos ativar o 2FA para maior segurança dos seus dados médicos.</p>
                   <button className="mt-3 text-sm font-bold text-orange-800 underline">Ativar agora</button>
                 </div>
              </div>

              <div className="space-y-4 pt-4">
                 <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-all group">
                    <span className="font-medium text-gray-700 group-hover:text-violet-700">Alterar Senha</span>
                    <ChevronRight size={18} className="text-gray-400 group-hover:text-violet-500" />
                 </button>
                 <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-all group">
                    <span className="font-medium text-gray-700 group-hover:text-violet-700">Dispositivos Conectados</span>
                    <ChevronRight size={18} className="text-gray-400 group-hover:text-violet-500" />
                 </button>
              </div>
            </div>
          )}

          {/* TAB: SOBRE A VIDAPLUS */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-8 text-white relative overflow-hidden mb-8">
                 <div className="relative z-10">
                   <h2 className="text-3xl font-bold mb-2">VidaPlus</h2>
                   <p className="text-violet-100 opacity-90 font-medium">Powered by VidaPlus®</p>
                 </div>
                 {/* Decorative circles */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              </div>

              <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
                <p>
                  Bem-vindo ao <strong>VidaPlus</strong>, a interface de nova geração desenvolvida pela <strong>VidaPlus Healthcare Solutions</strong>.
                </p>
                <p>
                  Nossa missão na VidaPlus sempre foi conectar pacientes e médicos com eficiência.
                  Com o projeto VidaPlus, elevamos essa experiência através de design centrado no usuário,
                  acessibilidade e tecnologia de ponta.
                </p>

                <h3 className="text-gray-800 font-bold text-lg mt-6">Informações Legais</h3>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center gap-2">
                    <Globe size={16} className="text-violet-600" />
                    <a href="#" className="text-violet-600 hover:underline">Termos de Uso</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lock size={16} className="text-violet-600" />
                    <a href="#" className="text-violet-600 hover:underline">Políticas de Privacidade e Dados (LGPD)</a>
                  </li>
                </ul>

                <div className="border-t border-gray-100 pt-6 mt-8">
                  <p className="text-xs text-gray-400">
                    Versão 2.4.0 (Build 2024)<br/>
                    © 2024 VidaPlus Tecnologia em Saúde Ltda. Todos os direitos reservados.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
