import React from 'react';
import { Search, Bell, HelpCircle } from 'lucide-react';

const TopBar = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem 2rem',
      backgroundColor: 'var(--color-bg)',
      borderBottom: '1px solid var(--color-border)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      {/* Search Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#E2E8F0',
        borderRadius: '1.5rem',
        padding: '0.5rem 1rem',
        width: '400px',
        color: '#64748B'
      }}>
        <Search size={18} style={{ marginRight: '0.75rem' }} />
        <input 
          type="text" 
          placeholder="Buscar registros institucionales..." 
          style={{
            border: 'none',
            background: 'transparent',
            outline: 'none',
            width: '100%',
            fontSize: '0.9rem',
            fontFamily: 'Inter'
          }}
        />
      </div>

      {/* Right Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <button style={{ color: '#64748B' }}>
          <Bell size={20} />
        </button>
        <button style={{ color: '#64748B' }}>
          <HelpCircle size={20} />
        </button>

        <div style={{ height: '2rem', width: '1px', backgroundColor: '#E2E8F0' }} />

        {/* User Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-primary)' }}>
              Dr. Alistair Vance
            </p>
            <p style={{ margin: 0, fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Decano de Facultad
            </p>
          </div>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#CBD5E1',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFF'
          }}>
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alistair&backgroundColor=e2e8f0" 
              alt="Avatar" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
