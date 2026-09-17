"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, Settings, LogOut, Building2 } from "lucide-react";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Executive Dashboard", path: "/client/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Audit Reports", path: "/client/reports", icon: <FileText size={20} /> },
    { name: "Settings", path: "/client/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Top Navigation Bar */}
      <header className="glass-panel" style={{ 
        height: '70px', 
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 2rem',
        borderRadius: 0,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ 
            background: 'var(--brand-primary)',
            padding: '0.5rem',
            borderRadius: '8px'
          }}>
            <Building2 size={24} color="white" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>Gourmet Burgers Co.</h1>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Client Portal</p>
          </div>
        </div>

        <nav style={{ display: 'flex', gap: '2rem' }}>
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.path);
            return (
              <Link key={item.path} href={item.path} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 0',
                  color: isActive ? 'var(--brand-primary)' : 'var(--text-secondary)',
                  borderBottom: isActive ? '2px solid var(--brand-primary)' : '2px solid transparent',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}>
                  {item.icon}
                  <span style={{ fontWeight: isActive ? 600 : 400 }}>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
           <Link href="/">
            <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>
              <LogOut size={16} /> Exit
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '2rem', maxWidth: '1400px', margin: '0 auto', width: '100%' }} className="animate-fade-in">
        {children}
      </main>
    </div>
  );
}
