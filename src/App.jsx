import './index.css'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import MainLayout from './layouts/MainLayout';

import Dashboard from './pages/Dashboard';
import Doctors from './pages/Doctors';
import Medications from './pages/Medications';
import Messages from './pages/Messages';
import Settings from './pages/Settings';

import DoctorDashboard from './pages/medico/DoctorDashboard';
import DoctorPatients from './pages/medico/DoctorPatients';
import DoctorAgenda from './pages/medico/DoctorAgenda';
import DoctorAppointments from './pages/medico/DoctorAppointments';
import DoctorSettings from './pages/medico/DoctorSettings';

import AdminDashboard from './pages/admin/AdminDashboard';
import AdminDoctors from './pages/admin/AdminDoctors';
import AdminPatients from './pages/admin/AdminPatients';
import AdminSchedules from './pages/admin/AdminSchedules';
import AdminAppointments from './pages/admin/AdminAppointments';

const PrivateRoute = ({ allowedTypes }) => {
  const { user } = useAuth();

  if (!user || user.type === 'guest') {
    return <Navigate to="/login" replace />;
  }

  if (allowedTypes && !allowedTypes.includes(user.type)) {
    if (user.type === 'medico') return <Navigate to="/medico/dashboard" />;
    if (user.type === 'admin') return <Navigate to="/admin/dashboard" />;
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route element={<MainLayout userType="paciente" />}>
        <Route element={<PrivateRoute allowedTypes={['paciente']} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/medicacao" element={<Medications />} />
          <Route path="/mensagens" element={<Messages />} />
          <Route path="/configuracao" element={<Settings />} />
          <Route path="/minhasconsultas" element={<div className="p-8">Histórico de Consultas</div>} />
        </Route>
      </Route>

      <Route element={<MainLayout userType="medico" />}>
        <Route element={<PrivateRoute allowedTypes={['medico']} />}>
          <Route path="/medico/dashboard" element={<DoctorDashboard />} />
          <Route path="/medico/pacientes" element={<DoctorPatients />} />
          <Route path="/medico/agenda" element={<DoctorAgenda />} />
          <Route path="/medico/atendimento" element={<DoctorAppointments />} />
          <Route path="/medico/config" element={<DoctorSettings />} />
        </Route>
      </Route>

      <Route element={<MainLayout userType="admin" />}>
        <Route element={<PrivateRoute allowedTypes={['admin']} />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/medicos" element={<AdminDoctors />} />
          <Route path="/admin/pacientes" element={<AdminPatients />} />
          <Route path="/admin/horarios" element={<AdminSchedules />} />
          <Route path="/admin/agendamentos" element={<AdminAppointments />} />
        </Route>
      </Route>

    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
