import React from 'react';
import { Download, CheckCircle, ChevronDown, Edit2, ChevronLeft, ChevronRight, X, Filter } from 'lucide-react';

const ProgressBar = ({ value, max = 100, color = "#0F1D38" }) => (
  <div style={{ height: '8px', backgroundColor: '#E2E8F0', borderRadius: '4px', width: '100%', marginTop: '0.5rem' }}>
    <div style={{ height: '100%', width: `${(value / max) * 100}%`, backgroundColor: color, borderRadius: '4px' }} />
  </div>
);

const StudentRow = ({ initials, name, email, id, currentGrade, newInput, status, statusColor, color, bg }) => (
  <tr style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'transparent', transition: 'background-color 0.2s' }}>
    <td style={{ padding: '1.25rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: bg, color: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.9rem' }}>
        {initials}
      </div>
      <div>
        <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.95rem' }}>{name}</div>
        <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>{email}</div>
      </div>
    </td>
    <td style={{ padding: '1.25rem 0', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{id}</td>
    <td style={{ padding: '1.25rem 0', fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary)' }}>{currentGrade}</td>
    <td style={{ padding: '1.25rem 0' }}>
      <div style={{ 
        backgroundColor: newInput === 'Grade' ? '#E2E8F0' : '#E2E8F080', 
        padding: '0.5rem 1rem', 
        borderRadius: '6px', 
        display: 'inline-block', 
        color: newInput === 'Grade' ? '#94A3B8' : 'var(--color-primary)', 
        fontWeight: 600,
        minWidth: '60px',
        textAlign: 'center',
        border: '1px solid transparent',
        transition: 'all 0.2s',
        cursor: 'text'
      }}>
        {newInput}
      </div>
    </td>
    <td style={{ padding: '1.25rem 0', fontSize: '0.9rem', color: 'var(--color-primary)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: statusColor }} />
        {status}
      </div>
    </td>
    <td style={{ padding: '1.25rem 0', color: 'var(--color-text-muted)' }}>
      <Edit2 size={18} style={{ cursor: 'pointer', transition: 'color 0.2s' }} />
    </td>
  </tr>
);

const Grades = () => {
  return (
    <div style={{ padding: '0 1rem', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: 'var(--color-primary)' }}>Ingreso y Gestión de Calificaciones</h2>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Semestre II: Teoría Arquitectónica Avanzada — Sección B</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem', backgroundColor: 'transparent', border: '1px solid var(--color-border)', borderRadius: '8px', fontWeight: 600, color: 'var(--color-primary)' }}>
            <Download size={18} /> Exportar CSV
          </button>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem', backgroundColor: 'var(--color-primary)', border: 'none', borderRadius: '8px', fontWeight: 600, color: 'white' }}>
            <CheckCircle size={18} /> Finalizar Todas las Notas
          </button>
        </div>
      </div>

      {/* Top Cards row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '1.5rem', marginBottom: '2rem' }}>
        {/* Course Health */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Salud del Curso</h3>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '1rem' }}>
            <span style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>Promedio de la Clase</span>
            <span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1 }}>3.82</span>
          </div>
          <ProgressBar value={85} />
          
          <div style={{ display: 'flex', gap: '3rem', marginTop: '0.5rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>CALIFICADOS</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)' }}>24 / 28</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>PENDIENTES</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#C2410C' }}>4</div>
            </div>
          </div>
        </div>

        {/* Section Announcements */}
        <div className="card" style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Anuncios de la Sección</h3>
              <button style={{ backgroundColor: '#EEF2FF', color: '#4F46E5', border: 'none', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>Actualizar</button>
            </div>
            <p style={{ margin: '0 0 1rem 0', fontSize: '0.95rem', color: 'var(--color-primary)', fontStyle: 'italic', lineHeight: 1.5 }}>
              "Revisar la última entrega para el módulo de Planificación Urbana. Varios estudiantes han solicitado extensiones para la revisión del expediente final."
            </p>
            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
              <div style={{ width: '12px', height: '1px', backgroundColor: '#94A3B8' }} /> Nota Administrativa
            </div>
          </div>
          <div style={{ width: '160px', height: '100%', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#F1F5F9' }}>
            <img src="https://images.unsplash.com/photo-1541888046425-d81bb19240f5?q=80&w=160&h=160&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} alt="Architectural drawings" />
          </div>
        </div>
      </div>

      {/* Roster Table */}
      <div style={{ backgroundColor: 'var(--color-surface)', borderRadius: '16px', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
        {/* Table Header Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
          <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary)' }}>Lista de Estudiantes e Ingreso de Notas</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#F1F5F9', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer' }}>
            <Filter size={16} color="var(--color-text-muted)" />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)' }}>Filtrar por Estado: Todos</span>
            <ChevronDown size={16} color="var(--color-text-muted)" />
          </div>
        </div>

        {/* Table Content */}
        <div style={{ padding: '0 1.5rem', position: 'relative' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ padding: '1rem 0', color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Detalles del Estudiante</th>
                <th style={{ padding: '1rem 0', color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>ID del Estudiante</th>
                <th style={{ padding: '1rem 0', color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Nota Actual</th>
                <th style={{ padding: '1rem 0', color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Nuevo Ingreso</th>
                <th style={{ padding: '1rem 0', color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Estado</th>
                <th style={{ padding: '1rem 0', color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', width: '80px' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <StudentRow 
                initials="AA" name="Amara Akintola" email="a.akintola@atelier.edu" 
                id="#2024-8842" currentGrade="A-" newInput="A" 
                status="Activo" statusColor="#3B82F6" color="#1E40AF" bg="#DBEAFE" 
              />
              <StudentRow 
                initials="ES" name="Elias Sterling" email="e.sterling@atelier.edu" 
                id="#2024-9102" currentGrade="B+" newInput="Grade" 
                status="Atrasado" statusColor="#EF4444" color="#9A3412" bg="#FFEDD5" 
              />
              <StudentRow 
                initials="LW" name="Lydia Wu" email="l.wu@atelier.edu" 
                id="#2024-3421" currentGrade="C" newInput="C+" 
                status="Activo" statusColor="#3B82F6" color="#3730A3" bg="#E0E7FF" 
              />
              <StudentRow 
                initials="MK" name="Marcus Kael" email="m.kael@atelier.edu" 
                id="#2024-7719" currentGrade="A+" newInput="A" 
                status="Activo" statusColor="#3B82F6" color="#0F766E" bg="#CCFBF1" 
              />
            </tbody>
          </table>

          {/* Toast / Notification Popover (as per design bottom right of table) */}
          <div style={{ position: 'absolute', right: '3rem', top: '150px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', padding: '1.5rem', width: '380px', border: '1px solid var(--color-border)', zIndex: 10 }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#D1FAE5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CheckCircle size={20} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', fontWeight: 600, color: 'var(--color-primary)' }}>Auto-guardado Activo</h4>
                <p style={{ margin: '0 0 1rem 0', fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  Las actualizaciones de Elias Sterling y Amara Akintola han sido almacenadas en el libro mayor institucional.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.85rem', padding: 0 }}>Ver Historial</button>
                  <button style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', fontWeight: 600, fontSize: '0.85rem', padding: 0 }}>Descartar</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Footer */}
        <div style={{ padding: '1.25rem 1.5rem', backgroundColor: '#F8FAFC', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            MOSTRANDO 1-4 DE 28 ESTUDIANTES INSCRITOS
          </span>
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            <button style={{ width: '36px', height: '36px', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)' }}><ChevronLeft size={16} /></button>
            <button style={{ width: '36px', height: '36px', borderRadius: '4px', border: 'none', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600 }}>1</button>
            <button style={{ width: '36px', height: '36px', borderRadius: '4px', border: 'none', backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', fontWeight: 600 }}>2</button>
            <button style={{ width: '36px', height: '36px', borderRadius: '4px', border: 'none', backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', fontWeight: 600 }}>3</button>
            <button style={{ width: '36px', height: '36px', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)' }}><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades;
