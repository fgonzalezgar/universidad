import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Users, BookOpen, GraduationCap, Star, Settings } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { path: '/dashboard', name: 'Panel de Control', icon: <Grid size={20} /> },
    { path: '/estudiantes', name: 'Estudiantes', icon: <Users size={20} /> },
    { path: '/cursos', name: 'Cursos', icon: <BookOpen size={20} /> },
    { path: '/profesores', name: 'Profesores', icon: <Users size={20} /> }, // Can use GraduationCap or Users, the image uses a cap-like or list icon, but let's stick to standard lucide for now.
    { path: '/calificaciones', name: 'Calificaciones', icon: <Star size={20} /> },
  ];

  return (
    <div style={{
      width: '260px',
      backgroundColor: '#F8FAFC',
      borderRight: '1px solid var(--color-border)',
      height: '100vh',
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-primary)'
    }}>
      {/* Brand */}
      <div style={{ padding: '2rem 1.5rem', marginBottom: '1rem' }}>
        <h1 style={{ color: 'var(--color-primary)', fontSize: '1.25rem', fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>
          Academic Atelier
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '1px', marginTop: '0.25rem', textTransform: 'uppercase' }}>
          Portal Institucional
        </p>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: '0 1rem' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
                  backgroundColor: isActive ? 'white' : 'transparent',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
                  position: 'relative',
                })}
              >
                {({ isActive }) => (
                  <>
                    <span style={{ color: isActive ? 'var(--color-accent)' : 'inherit' }}>
                      {item.icon}
                    </span>
                    {item.name}
                    {isActive && (
                      <div style={{
                        position: 'absolute',
                        right: '-1rem', // Attached to the right side of sidebar
                        width: '4px',
                        height: '24px',
                        backgroundColor: 'var(--color-primary)',
                        borderTopLeftRadius: '4px',
                        borderBottomLeftRadius: '4px'
                      }} />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Nav */}
      <div style={{ padding: '1.5rem 1rem' }}>
        <NavLink 
          to="/configuracion"
          style={({ isActive }) => ({
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '0.75rem 1rem',
            borderRadius: '12px',
            color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
            backgroundColor: isActive ? 'white' : 'transparent',
            fontWeight: isActive ? 600 : 500,
            fontSize: '0.9rem',
            transition: 'all 0.2s ease',
          })}
        >
          <Settings size={20} />
          Configuración
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
