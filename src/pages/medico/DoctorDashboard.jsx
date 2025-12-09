import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import { Users, Calendar, Clock, Activity, ArrowRight, FileText } from 'lucide-react';

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  export default function DoctorDashboard() {
    // Mock Data: Atendimentos na semana
    const chartData = {
      labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
      datasets: [
        {
          label: 'Consultas Realizadas',
          data: [12, 19, 15, 17, 14],
          backgroundColor: '#7c3aed',
          borderRadius: 8,
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { x: { grid: { display: false } }, y: { grid: { borderDash: [4, 4] } } },
    };

    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

        {/* Welcome & Quick Action */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Olá, Dr. João Silva</h1>
            <p className="text-gray-500">Você tem 4 consultas pendentes para hoje.</p>
          </div>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-xl font-medium shadow-lg shadow-teal-200 transition-all flex items-center gap-2">
            <Activity size={18} />
            Iniciar Atendimento
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Pacientes Hoje', val: '12', icon: Users, color: 'text-violet-600', bg: 'bg-violet-50' },
            { label: 'Agendados', val: '04', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Em Espera', val: '02', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
            { label: 'Laudos', val: '08', icon: FileText, color: 'text-teal-600', bg: 'bg-teal-50' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon size={24} className={stat.color} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-800">{stat.val}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Produtividade Semanal</h3>
            <div className="h-64">
              <Bar data={chartData} options={options} />
            </div>
          </div>

          {/* Next Patient Card */}
          <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-6 text-white relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

            <div>
              <span className="bg-white/20 text-xs font-semibold px-2 py-1 rounded text-white mb-4 inline-block">
                Próximo Paciente • 14:00
              </span>
              <div className="flex items-center gap-4 mb-2">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-16 h-16 rounded-full border-4 border-white/20" />
                <div>
                  <h3 className="text-xl font-bold">Ana Costa</h3>
                  <p className="text-violet-200 text-sm">Retorno • Cardiologia</p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="bg-white/10 p-3 rounded-lg text-sm backdrop-blur-sm">
                <p className="opacity-80 text-xs uppercase font-bold mb-1">Última queixa</p>
                <p>Dores de cabeça frequentes e tontura.</p>
              </div>
              <button className="w-full bg-white text-violet-700 font-bold py-3 rounded-xl hover:bg-violet-50 transition-colors flex items-center justify-center gap-2">
                Ver Prontuário <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
