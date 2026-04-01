import React from 'react';
import { 
  Filter, UserPlus, MoreVertical, Calendar, MessageSquare, 
  ArrowRight, Search, Settings, SearchCode, Eye, Edit2
} from 'lucide-react';

const ProgressBar = ({ value, max = 100, color = "#0F1D38" }) => (
  <div style={{ height: '4px', backgroundColor: '#E2E8F0', borderRadius: '2px', width: '100%', marginTop: '0.5rem' }}>
    <div style={{ height: '100%', width: `${(value / max) * 100}%`, backgroundColor: color, borderRadius: '2px' }} />
  </div>
);

const Tag = ({ text, color = "#475569", bg = "#F1F5F9" }) => (
  <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '0.25rem 0.5rem', backgroundColor: bg, color: color, borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
    {text}
  </span>
);

const ProfessorCard = ({ name, title, role, tags, email, course, hours, maxHours, src, statusColor = "#3B82F6" }) => (
  <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
    <div style={{ position: 'absolute', right: '1rem', top: '1rem', color: '#CBD5E1', cursor: 'pointer' }}>
      <MoreVertical size={20} />
    </div>

    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <div style={{ position: 'relative' }}>
        <img src={src} alt={name} style={{ width: '64px', height: '64px', borderRadius: '12px', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '12px', height: '12px', backgroundColor: statusColor, border: '2px solid white', borderRadius: '50%' }} />
      </div>
      <div>
        <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary)' }}>{name}</h3>
        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{title}</p>
      </div>
    </div>

    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      {tags.map((tag, idx) => <Tag key={idx} {...tag} />)}
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: '0.5rem 0' }}>
      <MessageSquare size={16} /> {email}
    </div>

    <div style={{ marginTop: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
        <span>CARGA ACTUAL</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
        <span>{course}</span>
        <span>{hours} / {maxHours} hrs</span>
      </div>
      <ProgressBar value={hours} max={maxHours} />
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
      <button style={{ color: 'var(--color-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
        Ver Expediente <ArrowRight size={16} />
      </button>
      <div style={{ display: 'flex', gap: '0.75rem', color: '#94A3B8' }}>
        <Calendar size={18} />
        <MessageSquare size={18} />
      </div>
    </div>
  </div>
);

const Professors = () => {
  return (
    <div style={{ padding: '0 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: 'var(--color-primary)' }}>Directorio de Profesores</h2>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Curando 142 Docentes en 12 Departamentos</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem', backgroundColor: 'white', border: '1px solid var(--color-border)', borderRadius: '8px', fontWeight: 600, color: 'var(--color-primary)' }}>
            <Filter size={18} /> Filtros Avanzados
          </button>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem', backgroundColor: 'var(--color-primary)', border: 'none', borderRadius: '8px', fontWeight: 600, color: 'white' }}>
            <UserPlus size={18} /> Incorporar Docente
          </button>
        </div>
      </div>

      {/* Top Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>CAPACIDAD TOTAL</span>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
            <h3 style={{ margin: 0, fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>88%</h3>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>+2.4% vs Año Ant.</span>
          </div>
          <ProgressBar value={88} color="#0F1D38" />
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>INVESTIGACIÓN ACTIVA</span>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
            <h3 style={{ margin: 0, fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>64</h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Proyectos</span>
          </div>
          <div style={{ display: 'flex', marginTop: '0.5rem' }}>
            {/* Mock avatars avatar group stack */}
            {[1,2,3].map(i => (
              <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=P${i}`} style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#E2E8F0', border: '2px solid white', marginLeft: i > 1 ? '-10px' : '0' }} />
            ))}
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#F1F5F9', border: '2px solid white', marginLeft: '-10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-primary)' }}>
              +12
            </div>
          </div>
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>NUEVAS SOLICITUDES</span>
          <h3 style={{ margin: 0, fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>12</h3>
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Esperando revisión del Decano</p>
        </div>

        <div className="card" style={{ backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>LÍDER DE DEPARTAMENTO</span>
          <h3 style={{ margin: '0.5rem 0', fontSize: '1.25rem', fontWeight: 600, color: 'white' }}>Arquitectura y Diseño</h3>
          <a href="#" style={{ color: 'white', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'underline', marginTop: 'auto' }}>Gestionar Departamento</a>
        </div>
      </div>

      {/* Professor Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
        <ProfessorCard 
          name="Dra. Elena Rodriguez" 
          title="Neurociencia Cognitiva" 
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
          tags={[{text: 'PHD: STANFORD'}, {text: 'TITULAR', color: '#10B981', bg: '#D1FAE5'}]}
          email="e.rodriguez@atelier.edu"
          course="Sistemas Neuronales 402"
          hours={12} maxHours={16}
        />
        <ProfessorCard 
          name="Prof. Alistair Thorne" 
          title="Economía Global" 
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alistair"
          tags={[{text: 'MSC: OXFORD'}, {text: 'AÑO SABÁTICO', color: '#EF4444', bg: '#FEE2E2'}]}
          email="a.thorne@atelier.edu"
          course="Sin Cursos Activos"
          hours={0} maxHours={16}
          statusColor="#EF4444"
        />
        <ProfessorCard 
          name="Dra. Sarah Jenkins" 
          title="Física Cuántica" 
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
          tags={[{text: 'PHD: MIT'}, {text: 'VISITANTE', color: '#6366F1', bg: '#E0E7FF'}]}
          email="s.jenkins@atelier.edu"
          course="Mecánica Cuántica Avz."
          hours={16} maxHours={16}
        />
        <ProfessorCard 
          name="Prof. Marcus Chen" 
          title="Arquitectura Moderna" 
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
          tags={[{text: 'M.ARCH: HARVARD'}, {text: 'DIRECTOR', color: '#F59E0B', bg: '#FEF3C7'}]}
          email="m.chen@atelier.edu"
          course="Síntesis Urbana"
          hours={8} maxHours={16}
        />

        {/* Highlight Card */}
        <div className="card" style={{ gridColumn: 'span 2', display: 'flex', padding: 0, overflow: 'hidden' }}>
          <div style={{ flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <span style={{ alignSelf: 'flex-start', fontSize: '0.65rem', fontWeight: 700, backgroundColor: 'var(--color-primary)', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px', textTransform: 'uppercase', marginBottom: '1rem' }}>
              DESTACADO DE CONTRATACIÓN
            </span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', margin: '0 0 1rem 0', lineHeight: 1.2 }}>
              Departamento de Humanidades Digitales busca Expertos
            </h2>
            <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Nuestro grupo más reciente busca dos posiciones tenure-track en Lingüística guiada por IA e Investigación de Historia Virtual.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
              <button style={{ padding: '0.75rem 1.25rem', backgroundColor: '#E2E8F0', color: 'var(--color-primary)', border: 'none', borderRadius: '8px', fontWeight: 600 }}>
                Ver Requisitos
              </button>
              <button style={{ padding: '0.75rem 1.25rem', backgroundColor: 'transparent', color: 'var(--color-primary)', border: '1px solid var(--color-border)', borderRadius: '8px', fontWeight: 600 }}>
                Compartir Publicación
              </button>
            </div>
          </div>
          <div style={{ width: '220px', backgroundColor: '#0F1D38', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.1 }}>
              <SearchCode size={200} color="white" />
            </div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
               <SearchCode size={64} style={{ color: '#3B82F6' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Roster View */}
      <div className="card" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-primary)' }}>Vista de Plantilla Docente</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div style={{ padding: '0.5rem', backgroundColor: '#F1F5F9', borderRadius: '6px', color: 'var(--color-primary)', cursor: 'pointer' }}><Filter size={20} /></div>
            <div style={{ padding: '0.5rem', backgroundColor: '#E2E8F0', borderRadius: '6px', color: 'var(--color-text-muted)', cursor: 'pointer' }}><Search size={20} /></div>
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <th style={{ padding: '1rem 0', color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Miembro del Personal</th>
              <th style={{ padding: '1rem 0', color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Departamento</th>
              <th style={{ padding: '1rem 0', color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Estado</th>
              <th style={{ padding: '1rem 0', color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Carga Docente</th>
              <th style={{ padding: '1rem 0', color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', width: '80px' }}>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: '1rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#0F1D38', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem' }}>DM</div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.9rem' }}>Dr. David Miller</div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>Antropólogo Social</div>
                </div>
              </td>
              <td style={{ padding: '1rem 0', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Ciencias Humanas</td>
              <td style={{ padding: '1rem 0', fontSize: '0.9rem', color: 'var(--color-primary)' }}><span style={{ color: '#3B82F6', marginRight: '6px' }}>●</span> Activo</td>
              <td style={{ padding: '1rem 0', width: '200px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>85%</span>
                  <div style={{ flex: 1 }}><ProgressBar value={85} /></div>
                </div>
              </td>
              <td style={{ padding: '1rem 0', color: 'var(--color-text-muted)' }}><Edit2 size={16} style={{ cursor: 'pointer' }} /></td>
            </tr>

            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: '1rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#E2E8F0', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem' }}>LL</div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.9rem' }}>Prof. Linda Lawson</div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>Bioquímica</div>
                </div>
              </td>
              <td style={{ padding: '1rem 0', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Ciencias de la Vida</td>
              <td style={{ padding: '1rem 0', fontSize: '0.9rem', color: 'var(--color-primary)' }}><span style={{ color: '#3B82F6', marginRight: '6px' }}>●</span> Activo</td>
              <td style={{ padding: '1rem 0', width: '200px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>40%</span>
                  <div style={{ flex: 1 }}><ProgressBar value={40} /></div>
                </div>
              </td>
              <td style={{ padding: '1rem 0', color: 'var(--color-text-muted)' }}><Edit2 size={16} style={{ cursor: 'pointer' }} /></td>
            </tr>

            <tr>
              <td style={{ padding: '1rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#F1F5F9', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem' }}>JW</div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.9rem' }}>Dr. Jonathan Wu</div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>Matemática Computacional</div>
                </div>
              </td>
              <td style={{ padding: '1rem 0', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Ciencias de la Computación</td>
              <td style={{ padding: '1rem 0', fontSize: '0.9rem', color: 'var(--color-primary)' }}><span style={{ color: '#EF4444', marginRight: '6px' }}>●</span> Licencia de Inves.</td>
              <td style={{ padding: '1rem 0', width: '200px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>0%</span>
                  <div style={{ flex: 1 }}><ProgressBar value={0} /></div>
                </div>
              </td>
              <td style={{ padding: '1rem 0', color: 'var(--color-text-muted)' }}><Edit2 size={16} style={{ cursor: 'pointer' }} /></td>
            </tr>
          </tbody>
        </table>
        
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button style={{ backgroundColor: '#F8FAFC', padding: '0.75rem 2rem', color: 'var(--color-primary)', border: '1px solid var(--color-border)', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.5px' }}>
            CARGAR 138 DOCENTES RESTANTES
          </button>
        </div>
      </div>
    </div>
  );
};

export default Professors;
