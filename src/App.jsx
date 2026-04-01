import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Courses from './pages/Courses';
import Professors from './pages/Professors';
import Grades from './pages/Grades';
import './App.css';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <main style={{ padding: '2rem', flex: 1, backgroundColor: 'var(--color-bg)' }}>
          {children}
        </main>
      </div>
    </div>
  );
};

const PlaceholderPage = ({ title }) => (
  <div style={{ textAlign: 'center', marginTop: '10%' }}>
    <h2>{title}</h2>
    <p style={{ color: 'var(--color-text-muted)' }}>Módulo en construcción o pendiente de diseño.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/estudiantes" element={<Students />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/profesores" element={<Professors />} />
          <Route path="/calificaciones" element={<Grades />} />
          <Route path="/configuracion" element={<PlaceholderPage title="Configuración" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
