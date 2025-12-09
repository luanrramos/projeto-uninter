import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import { Calendar, Activity, TrendingUp, AlertCircle, Clock } from 'lucide-react';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  export default function Dashboard() {
    const data = {
      labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      datasets: [
        {
          label: 'Pressão Sistólica',
          data: [120, 118, 122, 121, 119, 120, 118],
          backgroundColor: 'rgba(124, 58, 237, 0.1)',
          tension: 0.4,
          fill: true,
        },
        {
          label: 'Pressão Diastólica',
          data: [80, 78, 82, 80, 79, 81, 78],
          backgroundColor: 'rgba(45, 212, 191, 0.1)',
          tension: 0.4,
          fill: true,
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: { display: false },
      },
      scales: {
        y: { grid: { borderDash: [4, 4] } },
        x: { grid: { display: false } }
      }
    };

    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Visão Geral</h1>
            <p className="text-gray-500">Acompanhe seus indicadores de saúde de hoje.</p>
          </div>
          <button className="bg-violet-600 text-white px-5 py-2.5 rounded-xl font-medium shadow-lg shadow-violet-200 hover:bg-violet-700 transition-colors flex items-center gap-2">
            <Activity size={18} />
            Novo Registro
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Próxima Consulta', value: 'Amanhã, 14h', icon: Calendar, color: 'text-violet-600', bg: 'bg-violet-50' },
            { title: 'Medicação Ativa', value: '2 Remédios', icon: AlertCircle, color: 'text-teal-600', bg: 'bg-teal-50' },
            { title: 'Status Geral', value: 'Estável', icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-50' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className={`p-4 rounded-xl ${stat.bg}`}>
                <stat.icon size={24} className={stat.color} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <h3 className="text-xl font-bold text-gray-800">{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Monitoramento de Pressão</h3>
            <div className="h-64 sm:h-80 w-full">
               <Line options={options} data={data} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Agenda do Dia</h3>
            <div className="space-y-6">
              {[
                { time: '08:00', title: 'Tomar Amoxicilina', type: 'med', status: 'Feito' },
                { time: '14:30', title: 'Consulta: Dr. Silva', type: 'app', status: 'Pendente' },
                { time: '20:00', title: 'Tomar Paracetamol', type: 'med', status: 'Pendente' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 relative">
                  {i !== 2 && <div className="absolute left-[19px] top-8 bottom-[-24px] w-0.5 bg-gray-100"></div>}

                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 ${item.status === 'Feito' ? 'bg-teal-100 text-teal-600' : 'bg-gray-100 text-gray-400'}`}>
                    {item.type === 'med' ? <AlertCircle size={18}/> : <Calendar size={18}/>}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-400 flex items-center gap-1">
                      <Clock size={12} /> {item.time}
                    </span>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${item.status === 'Feito' ? 'bg-teal-50 text-teal-700' : 'bg-orange-50 text-orange-700'}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
