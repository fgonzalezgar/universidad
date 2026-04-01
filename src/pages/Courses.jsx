import React from 'react';
import { 
  BookOpen, Search, Filter, Plus, FileText, LayoutList, 
  MoreVertical, BookCheck, ClipboardList, TrendingUp
} from 'lucide-react';

const ProgressBar = ({ value, max = 100, color = "#10B981" }) => (
  <div style={{ height: '6px', backgroundColor: '#E2E8F0', borderRadius: '3px', width: '100%', marginTop: '0.5rem' }}>
    <div style={{ height: '100%', width: `${(value / max) * 100}%`, backgroundColor: color, borderRadius: '3px' }} />
  </div>
);

const CourseCard = ({ title, code, credits, professor, enrolled, maxCapacity, status, progress, color, bg }) => (
  <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderLeft: `4px solid ${color}` }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span style={{ backgroundColor: bg, color: color, padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>{code}</span>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>{credits} CRÉDITOS</span>
        </div>
        <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary)', lineHeight: 1.3 }}>{title}</h3>
      </div>
      <div style={{ color: '#CBD5E1', cursor: 'pointer' }}><MoreVertical size={20} /></div>
    </div>

    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <FileText size={16} /> Prof. {professor}
    </div>

    <div style={{ marginTop: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>
        <span>AVANCE DEL TEMARIO</span>
        <span style={{ color: 'var(--color-primary)' }}>{progress}%</span>
      </div>
      <ProgressBar value={progress} color={progress === 100 ? '#10B981' : '#3B82F6'} />
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
        Inscritos: <span style={{ color: 'var(--color-primary)' }}>{enrolled}</span> / {maxCapacity}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.8rem', color: status === 'Activo' ? '#10B981' : '#F59E0B' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: status === 'Activo' ? '#10B981' : '#F59E0B' }} />
        {status}
      </div>
    </div>
  </div>
);

const Courses = () => {
  return (
    <div style={{ padding: '0 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: 'var(--color-primary)' }}>Catálogo de Cursos</h2>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Planes de estudio y asignaturas 2023 / 2024</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '0.5rem 1rem', width: '300px' }}>
            <Search size={18} color="var(--color-text-muted)" style={{ marginRight: '0.5rem' }} />
            <input type="text" placeholder="Buscar asignatura..." style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.9rem' }} />
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem', backgroundColor: 'var(--color-primary)', border: 'none', borderRadius: '8px', fontWeight: 600, color: 'white' }}>
            <Plus size={18} /> Crear Curso
          </button>
        </div>
      </div>

      {/* Top Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}><BookOpen size={16} style={{ display: 'inline', marginBottom: '-3px' }}/> Cursos Activos</span>
          <h3 style={{ margin: 0, fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>486</h3>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#10B981', fontWeight: 600 }}>+ 5 este semestre</p>
        </div>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}><BookCheck size={16} style={{ display: 'inline', marginBottom: '-3px' }}/> Módulos Terminados</span>
          <h3 style={{ margin: 0, fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>1,204</h3>
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Histórico anual</p>
        </div>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}><ClipboardList size={16} style={{ display: 'inline', marginBottom: '-3px' }}/> Capacidad Ocupada</span>
          <h3 style={{ margin: 0, fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>94%</h3>
          <div style={{ marginTop: '0.25rem' }}><ProgressBar value={94} color="#0F1D38" /></div>
        </div>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', backgroundColor: 'var(--color-primary)', color: 'white' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase' }}><TrendingUp size={16} style={{ display: 'inline', marginBottom: '-3px' }}/> Próximo Semestre</span>
          <h3 style={{ margin: '0.5rem 0', fontSize: '1.1rem', fontWeight: 600, color: 'white' }}>Planificación de Verano ABIERTA</h3>
          <a href="#" style={{ color: '#3B82F6', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', marginTop: 'auto' }}>Revisar Solicitudes →</a>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-primary)' }}>Malla Curricular por Departamento</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
           <button style={{ backgroundColor: 'white', border: '1px solid var(--color-border)', padding: '0.5rem 1rem', borderRadius: '6px', color: 'var(--color-text-muted)', fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><LayoutList size={16}/> Lista</button>
           <button style={{ backgroundColor: '#F1F5F9', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Filter size={16}/> Filtros</button>
        </div>
      </div>

      {/* Courses Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        <CourseCard 
          title="Teoría Arquitectónica Avanzada" code="ARQ-402" credits="4" 
          professor="Marcus Chen" enrolled={28} maxCapacity={30} status="Activo" progress={65} 
          color="#F59E0B" bg="#FEF3C7"
        />
        <CourseCard 
          title="Sistemas Neuronales" code="NEU-301" credits="5" 
          professor="Elena Rodriguez" enrolled={45} maxCapacity={50} status="Activo" progress={40} 
          color="#3B82F6" bg="#DBEAFE"
        />
        <CourseCard 
          title="Mecánica Cuántica Aplicada" code="FIS-505" credits="6" 
          professor="Sarah Jenkins" enrolled={18} maxCapacity={20} status="Pausado" progress={0} 
          color="#8B5CF6" bg="#EDE9FE"
        />
        <CourseCard 
          title="Microeconomía II" code="ECO-202" credits="3" 
          professor="Alistair Thorne" enrolled={120} maxCapacity={150} status="Activo" progress={90} 
          color="#10B981" bg="#D1FAE5"
        />
        <CourseCard 
          title="Derecho Internacional" code="DER-410" credits="4" 
          professor="Isabella Díaz" enrolled={60} maxCapacity={60} status="Activo" progress={100} 
          color="#EF4444" bg="#FEE2E2"
        />
        <CourseCard 
          title="Introducción a la Algoritmia" code="SIS-101" credits="4" 
          professor="Jonathan Wu" enrolled={80} maxCapacity={100} status="Activo" progress={20} 
          color="#0EA5E9" bg="#E0F2FE"
        />
      </div>
    </div>
  );
};

export default Courses;
