"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, CheckSquare, Receipt, FileKey, LogOut } from "lucide-react";
import { currentUser } from "@/lib/mockData";

export default function AuditorLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", path: "/auditor/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Visits & Audits", path: "/auditor/visits", icon: <FileText size={20} /> },
    { name: "Checklists", path: "/auditor/checklists", icon: <CheckSquare size={20} /> },
    { name: "Invoices & OCR", path: "/auditor/invoices", icon: <Receipt size={20} /> },
    { name: "Master Templates", path: "/auditor/templates", icon: <FileKey size={20} /> },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Sidebar Navigation */}
      <aside className="glass-panel" style={{ 
        width: '280px', 
        borderRight: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 0,
        borderLeft: 'none',
        borderTop: 'none',
        borderBottom: 'none',
        zIndex: 10
      }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)' }}>
          <h2 className="gradient-text" style={{ fontSize: '1.25rem', fontWeight: 700 }}>F&B Auditor Pro</h2>
        </div>
        
        <nav style={{ flex: 1, padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.path);
            return (
              <Link key={item.path} href={item.path} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  color: isActive ? 'white' : 'var(--text-muted)',
                  background: isActive ? 'linear-gradient(90deg, rgba(59,130,246,0.2) 0%, transparent 100%)' : 'transparent',
                  borderLeft: isActive ? '3px solid var(--brand-primary)' : '3px solid transparent',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}>
                  <div style={{ color: isActive ? 'var(--brand-primary)' : 'inherit' }}>
                    {item.icon}
                  </div>
                  <span style={{ fontWeight: isActive ? 600 : 400 }}>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={currentUser.avatar} alt="Avatar" style={{ width: 40, height: 40, borderRadius: '50%' }} />
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
              {currentUser.name}
            </p>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{currentUser.role}</p>
          </div>
          <Link href="/">
            <button className="btn" style={{ padding: '0.5rem', background: 'transparent', color: 'var(--text-muted)' }}>
              <LogOut size={18} />
            </button>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflowY: 'auto' }}>
        {/* Top Header Placeholder */}
        <header style={{ 
          height: '70px', 
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 2rem',
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(10px)',
          position: 'sticky',
          top: 0,
          zIndex: 5
        }}>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Internal Operations</h1>
        </header>
        <div style={{ padding: '2rem', flex: 1 }} className="animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
}
