import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  } from 'chart.js';
  import { Line, Doughnut } from 'react-chartjs-2';
  import { Users, Stethoscope, Calendar, TrendingUp, AlertTriangle } from 'lucide-react';

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

  export default function AdminDashboard() {
    // Mock Data: Crescimento da Plataforma
    const lineData = {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
      datasets: [
        {
          label: 'Novos Usuários',
          data: [65, 78, 90, 115, 145, 180],
          borderColor: '#7c3aed',
          backgroundColor: 'rgba(124, 58, 237, 0.1)',
          tension: 0.4,
          fill: true,
        }
      ],
    };

    // Mock Data: Distribuição de Usuários
    const doughnutData = {
      labels: ['Pacientes', 'Médicos', 'Staff'],
      datasets: [
        {
          data: [300, 50, 20],
          backgroundColor: ['#7c3aed', '#2dd4bf', '#f59e0b'],
          borderWidth: 0,
        },
      ],
    };

    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h1 className="text-2xl font-bold text-gray-800">Painel Administrativo</h1>

        {/* Cards de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: 'Total Pacientes', val: '3,240', icon: Users, color: 'text-violet-600', bg: 'bg-violet-50' },
            { title: 'Médicos Ativos', val: '85', icon: Stethoscope, color: 'text-teal-600', bg: 'bg-teal-50' },
            { title: 'Agendamentos/Mês', val: '1,204', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50' },
            { title: 'Receita Mensal', val: 'R$ 145k', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon size={24} className={stat.color} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-800">{stat.val}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Gráfico de Crescimento */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Crescimento da Plataforma</h3>
            <div className="h-72">
              <Line options={{ responsive: true, maintainAspectRatio: false }} data={lineData} />
            </div>
          </div>

          {/* Distribuição e Alertas */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <h3 className="text-lg font-bold text-gray-800 mb-4">Base de Usuários</h3>
               <div className="h-48 flex justify-center">
                 <Doughnut data={doughnutData} options={{ plugins: { legend: { position: 'bottom' } } }} />
               </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="text-orange-600" size={24} />
                <h3 className="text-orange-800 font-bold">Atenção Necessária</h3>
              </div>
              <p className="text-sm text-orange-700 mb-4">Existem 3 novos médicos aguardando aprovação de cadastro.</p>
              <button className="w-full bg-white text-orange-700 font-bold py-2 rounded-lg text-sm hover:bg-orange-100 transition-colors">
                Revisar Cadastros
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
