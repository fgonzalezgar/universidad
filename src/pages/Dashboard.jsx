import React from 'react';
import { 
  Users, Book, Briefcase, Award, 
  ArrowUpRight, Download, Plus, 
  ChevronRight, Calendar, Bell, Shield, 
  UserPlus, Megaphone, FileText, Clock
} from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const dataBar = [
  { name: 'SCI', value: 45 },
  { name: 'ARTS', value: 55 },
  { name: 'ENG', value: 30 },
  { name: 'MED', value: 40 },
  { name: 'LAW', value: 65 },
];

const dataPie = [
  { name: 'Retention', value: 89 },
  { name: 'Attrition', value: 11 }
];

const COLORS = ['#0F1D38', '#F1F5F9'];

const StatCard = ({ title, value, icon, change, changeLabel, color }) => (
  <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', overflow: 'hidden' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ backgroundColor: color + '20', padding: '0.75rem', borderRadius: '12px', color: color }}>
        {icon}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: change.includes('+') ? 'var(--color-success)' : 'var(--color-text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>
        {change.includes('+') && <ArrowUpRight size={14} />}
        {change}
      </div>
    </div>
    <div>
      <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.85rem', fontWeight: 500 }}>{title}</p>
      <h3 style={{ margin: '0.25rem 0 0 0', fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-primary)' }}>{value}</h3>
    </div>
    {/* Deco Graphic placeholder based on the image */}
    <div style={{ position: 'absolute', right: '-10px', bottom: '-10px', opacity: 0.05, zoom: 2.5 }}>
      {icon}
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div style={{ padding: '0 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: 'var(--color-primary)' }}>Resumen Institucional</h2>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Año Académico 2023 / 2024 • Semestre II</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem', backgroundColor: 'white', border: '1px solid var(--color-border)', borderRadius: '8px', fontWeight: 600, color: 'var(--color-primary)' }}>
            <Download size={18} /> Exportar Reporte
          </button>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem', backgroundColor: 'var(--color-primary)', border: 'none', borderRadius: '8px', fontWeight: 600, color: 'white' }}>
            <Plus size={18} /> Nueva Inscripción
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        <StatCard title="Total de Estudiantes" value="12,482" icon={<Users />} change="+ 4.2%" color="#3B82F6" />
        <StatCard title="Cursos Activos" value="486" icon={<Book />} change="Estable" color="#64748B" />
        <StatCard title="Miembros del Personal" value="1,120" icon={<Briefcase />} change="+ 12" color="#F97316" />
        <StatCard title="Tasa de Graduación" value="94.5%" icon={<Award />} change="+ 1.8%" color="#8B5CF6" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '1.5rem' }}>
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Announcements */}
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary)' }}>Anuncios Institucionales</h3>
              <a href="#" style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>Ver Todos</a>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: '#E0F2FE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Bell size={24} color="#0284C7" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary)' }}>Proyecto de Modernización de Biblioteca Fase I</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>hace 2h</span>
                  </div>
                  <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    La construcción comenzará en el Ala Este a partir del lunes. Todos los recursos digitales permanecen accesibles...
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 600, backgroundColor: '#EFF6FF', color: '#1D4ED8', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>NOTICIAS DEL CAMPUS</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 600, backgroundColor: '#F1F5F9', color: '#475569', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>INSTALACIONES</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Shield size={24} color="#D97706" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary)' }}>Becas de Investigación Docente: Envíos de Primavera</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>hace 5h</span>
                  </div>
                  <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    Convocatoria para propuestas en CTI (STEM) y Humanidades. La junta ha incrementado los fondos agregados en un 15%...
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 600, backgroundColor: '#FFF7ED', color: '#C2410C', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>INVESTIGACIÓN</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 600, backgroundColor: '#F1F5F9', color: '#475569', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>FACULTAD</span>
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Book size={24} color="#7E22CE" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary)' }}>Taller Semestral de Integridad Académica</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Ayer</span>
                  </div>
                  <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    Sesión obligatoria para todos los estudiantes de posgrado de primer año sobre ética de investigación y citación...
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 600, backgroundColor: '#FAF5FF', color: '#7E22CE', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>TALLER</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 600, backgroundColor: '#F1F5F9', color: '#475569', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>ACADÉMICO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="card">
              <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary)' }}>Distribución de Inscripciones</h3>
              <div style={{ height: '200px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dataBar} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748B', fontWeight: 600 }} />
                    <Tooltip cursor={{fill: '#F1F5F9'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: 'var(--shadow-md)' }} />
                    <Bar dataKey="value" fill="var(--color-primary)" radius={[4, 4, 0, 0]} barSize={24} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="card">
              <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary)' }}>Resumen de Retención</h3>
              <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={dataPie}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      startAngle={90}
                      endAngle={-270}
                      dataKey="value"
                      stroke="none"
                    >
                      {dataPie.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div style={{ position: 'absolute', textAlign: 'center' }}>
                  <h2 style={{ margin: 0, fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>89%</h2>
                  <p style={{ margin: 0, fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-text-muted)', letterSpacing: '1px' }}>ANUAL</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Quick Actions */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary)' }}>Acciones Rápidas</h3>
            
            <button style={{ backgroundColor: '#F1F5F9', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-primary)', fontWeight: 600 }}>
              <UserPlus size={18} /> Nuevo Estudiante
            </button>
            <button style={{ backgroundColor: '#F1F5F9', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-primary)', fontWeight: 600 }}>
              <Megaphone size={18} /> Publicar Anuncio
            </button>
            <button style={{ backgroundColor: '#F1F5F9', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-primary)', fontWeight: 600 }}>
              <FileText size={18} /> Auditoría de Calificaciones
            </button>
            <button style={{ backgroundColor: '#F1F5F9', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-primary)', fontWeight: 600 }}>
              <Clock size={18} /> Planificación de Semestre
            </button>
          </div>

          {/* System Status */}
          <div className="card" style={{ backgroundColor: 'var(--color-primary)', color: 'white', border: 'none' }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', fontWeight: 600 }}>Estado del Sistema</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-success)' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.5px' }}>TODOS LOS SISTEMAS OPERATIVOS</span>
            </div>
            
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                <span style={{ color: '#CBD5E1' }}>Acceso LMS</span>
                <span style={{ fontWeight: 600 }}>100%</span>
              </div>
              <div style={{ height: '4px', backgroundColor: '#334155', borderRadius: '2px' }}>
                <div style={{ height: '100%', width: '100%', backgroundColor: 'white', borderRadius: '2px' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                <span style={{ color: '#CBD5E1' }}>Almacenamiento en Nube</span>
                <span style={{ fontWeight: 600 }}>78%</span>
              </div>
              <div style={{ height: '4px', backgroundColor: '#334155', borderRadius: '2px' }}>
                <div style={{ height: '100%', width: '78%', backgroundColor: 'white', borderRadius: '2px' }} />
              </div>
            </div>
          </div>

          {/* Key Dates */}
          <div className="card">
            <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary)' }}>Fechas Clave</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ backgroundColor: '#FEE2E2', color: '#B91C1C', padding: '0.5rem', borderRadius: '8px', textAlign: 'center', width: '48px' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700 }}>MAR</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>24</div>
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary)' }}>Evaluaciones Parciales</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Entrega de Docentes</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ backgroundColor: '#E0F2FE', color: '#0369A1', padding: '0.5rem', borderRadius: '8px', textAlign: 'center', width: '48px' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700 }}>ABR</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>02</div>
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary)' }}>Simposio de Posgrado</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Salón de Asambleas Principal</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
