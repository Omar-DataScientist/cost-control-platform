"use client";

import Link from "next/link";
import { LogIn, UserCircle, Building2 } from "lucide-react";

export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'radial-gradient(circle at top, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
      padding: '2rem'
    }}>
      <div className="glass-panel animate-fade-in" style={{
        maxWidth: '450px',
        width: '100%',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
            F&B Cost Controller
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>
            Select your portal to continue
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Link href="/auditor/dashboard" style={{ textDecoration: 'none' }}>
            <div className="glass-panel hover-scale" style={{ 
              padding: '1.5rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              cursor: 'pointer',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)'
            }}>
              <UserCircle size={32} color="var(--brand-primary)" />
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Internal Auditor Portal</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Manage audits, checklists & invoices</p>
              </div>
            </div>
          </Link>

          <Link href="/client/dashboard" style={{ textDecoration: 'none' }}>
            <div className="glass-panel hover-scale" style={{ 
              padding: '1.5rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              cursor: 'pointer',
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.3)'
            }}>
              <Building2 size={32} color="var(--brand-accent)" />
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Client Dashboard</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>View AI reports & executive metrics</p>
              </div>
            </div>
          </Link>
        </div>

        <div style={{ marginTop: '2.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          <p>This is a simulated login environment.</p>
        </div>
      </div>
    </main>
  );
}
