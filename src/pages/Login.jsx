import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Eye, EyeOff, Activity, ArrowRight } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ cpf: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCpf = (e) => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 11);
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setFormData({ ...formData, cpf: v });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.cpf.length !== 14 || formData.password.length < 6) {
      setError('Verifique seus dados e tente novamente.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const mockUsers = [
        { cpf: '000.000.000-00', pass: '123456', role: 'paciente', name: 'Paciente' },
        { cpf: '111.111.111-11', pass: '123456', role: 'medico', name: 'Dr. João' },
        { cpf: '222.222.222-22', pass: '123456', role: 'admin', name: 'Administrador' }
      ];

      const found = mockUsers.find(u => u.cpf === formData.cpf && u.pass === formData.password);

      if (found) {
        login({
          role: found.role,
          name: found.name,
          avatar: 'https://i.pravatar.cc/150?img=11'
        });

        const routes = {
          admin: '/admin/dashboard',
          medico: '/medico/dashboard',
          paciente: '/dashboard'
        };
        navigate(routes[found.role]);
      } else {
        setError('Credenciais inválidas.');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="hidden lg:flex flex-col justify-between w-5/12 bg-gradient-to-br from-violet-700 to-indigo-900 p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
            <Activity size={32} className="text-teal-300" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">VidaPlus</h1>
        </div>

        <div className="relative z-10 space-y-4">
          <blockquote className="text-xl font-medium leading-relaxed opacity-90">
            "A tecnologia que conecta vidas. Transforme a gestão da sua saúde com simplicidade e elegância."
          </blockquote>
          <p className="text-sm opacity-60">© 2024 VidaPlus Health Tech</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 lg:p-24">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900">Bem-vindo de volta</h2>
            <p className="mt-2 text-gray-500">Acesse sua conta para continuar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">CPF</label>
              <input
                type="text"
                value={formData.cpf}
                onChange={handleCpf}
                placeholder="000.000.000-00"
                maxLength={14}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all bg-gray-50 focus:bg-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Senha</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={formData.password}
                  onChange={e => setFormData({...formData, password: e.target.value})}
                  placeholder="••••••"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all bg-gray-50 focus:bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-600"
                >
                  {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                <input type="checkbox" className="rounded border-gray-300 text-violet-600 focus:ring-violet-500" />
                Lembrar-me
              </label>
              <a href="#" className="font-medium text-violet-600 hover:text-violet-500">Esqueci a senha</a>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm font-medium text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-violet-200 hover:shadow-violet-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Entrar na Plataforma <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
