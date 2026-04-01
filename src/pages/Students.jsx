import React from 'react';
import { 
  Users, Search, Filter, Calendar, BookOpen, UserCheck, 
  ArrowRight, Award, MoreVertical, CheckCircle
} from 'lucide-react';

const StudentCard = ({ name, id, program, status, color, bg, src, gpa }) => (
  <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
    <div style={{ position: 'absolute', right: '1rem', top: '1rem', color: '#CBD5E1', cursor: 'pointer' }}>
      <MoreVertical size={20} />
    </div>

    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <img src={src} alt={name} style={{ width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover' }} />
      <div>
        <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-primary)' }}>{name}</h3>
        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>ID: {id}</p>
      </div>
    </div>

    <div style={{ margin: '0.5rem 0' }}>
      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>PROGRAMA</div>
      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-primary)' }}>{program}</div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ backgroundColor: bg, color: color, padding: '0.25rem 0.5rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: color }} />
          {status}
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontWeight: 600, letterSpacing: '0.5px' }}>GPA</div>
        <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)' }}>{gpa}</div>
      </div>
    </div>
  </div>
);

const Students = () => {
  return (
    <div style={{ padding: '0 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: 'var(--color-primary)' }}>Directorio de Estudiantes</h2>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Gestionando 12,482 estudiantes en todos los programas</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '0.5rem 1rem', width: '300px' }}>
            <Search size={18} color="var(--color-text-muted)" style={{ marginRight: '0.5rem' }} />
            <input type="text" placeholder="Buscar por nombre o ID..." style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.9rem' }} />
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem', backgroundColor: 'var(--color-primary)', border: 'none', borderRadius: '8px', fontWeight: 600, color: 'white' }}>
            <UserCheck size={18} /> Nuevo Alumno
          </button>
        </div>
      </div>

      {/* Top Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6' }}>
            <Users size={24} />
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Total Inscritos</p>
            <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>12,482</h3>
          </div>
        </div>

        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981' }}>
            <CheckCircle size={24} />
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Tasa de Asistencia</p>
            <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>92.4%</h3>
          </div>
        </div>

        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#FEF2F2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EF4444' }}>
            <Calendar size={24} />
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>En Riesgo Acad.</p>
            <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>145</h3>
          </div>
        </div>

        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8B5CF6' }}>
            <Award size={24} />
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Cuadro de Honor</p>
            <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>1,104</h3>
          </div>
        </div>
      </div>

      {/* Student Grid Container */}
      <div className="card" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary)' }}>Estudiantes Destacados (Vista Grid)</h3>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
             <button style={{ backgroundColor: '#F1F5F9', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Filter size={16}/> Filtros</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          <StudentCard 
            name="Mateo Restrepo" id="2024-1045" program="Ingeniería de Sistemas" 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mateo"
            status="Activo" color="#3B82F6" bg="#DBEAFE" gpa="4.2" 
          />
          <StudentCard 
            name="Valeria Gómez" id="2023-4512" program="Arquitectura e Interiores" 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Valeria"
            status="Excelencia" color="#10B981" bg="#D1FAE5" gpa="4.8" 
          />
          <StudentCard 
            name="Santiago Rojas" id="2024-8111" program="Medicina" 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Santiago"
            status="Condicional" color="#F59E0B" bg="#FEF3C7" gpa="3.1" 
          />
          <StudentCard 
            name="Isabella Díaz" id="2022-9908" program="Derecho" 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella"
            status="Activo" color="#3B82F6" bg="#DBEAFE" gpa="4.0" 
          />
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 600, border: '1px solid var(--color-border)', borderRadius: '8px', padding: '0.75rem 1.5rem', backgroundColor: 'transparent' }}>
            Ver Tabla Completa <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Students;
