"use client";

import { dashboardMetrics, recentAudits, correctiveActions } from "@/lib/mockData";
import { TrendingDown, TrendingUp, AlertTriangle, CheckCircle2, Clock } from "lucide-react";

export default function AuditorDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Multi-Tenant Dashboard</h2>
          <p style={{ color: 'var(--text-muted)' }}>Overview across all assigned brands and outlets.</p>
        </div>
        <button className="btn btn-primary">
          Generate Master Report
        </button>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        <div className="glass-panel hover-scale" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Total Audits (Month)</h3>
            <CheckCircle2 size={20} color="var(--brand-primary)" />
          </div>
          <p style={{ fontSize: '2rem', fontWeight: 700 }}>{dashboardMetrics.totalAuditsThisMonth}</p>
          <p style={{ color: 'var(--rag-green)', fontSize: '0.75rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <TrendingUp size={14} /> +12% from last month
          </p>
        </div>

        <div className="glass-panel hover-scale" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Average Score</h3>
            <TrendingUp size={20} color="var(--rag-green)" />
          </div>
          <p style={{ fontSize: '2rem', fontWeight: 700 }}>{dashboardMetrics.averageScore}%</p>
          <div style={{ width: '100%', height: '4px', background: 'var(--bg-secondary)', borderRadius: '2px', marginTop: '1rem' }}>
            <div style={{ width: `${dashboardMetrics.averageScore}%`, height: '100%', background: 'var(--rag-green)', borderRadius: '2px' }} />
          </div>
        </div>

        <div className="glass-panel hover-scale" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Identified Leakage</h3>
            <TrendingDown size={20} color="var(--rag-red)" />
          </div>
          <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--rag-red)' }}>{dashboardMetrics.totalIdentifiedLeakage}</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.5rem' }}>Across 5 recent reports</p>
        </div>

        <div className="glass-panel hover-scale" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Open Corrective Actions</h3>
            <AlertTriangle size={20} color="var(--rag-amber)" />
          </div>
          <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--rag-amber)' }}>{dashboardMetrics.openCorrectiveActions}</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.5rem' }}>3 require immediate attention</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        {/* Recent Audits Table */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Recent Audits & Variance</h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Restaurant</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Score</th>
                  <th>Variance</th>
                </tr>
              </thead>
              <tbody>
                {recentAudits.map(audit => (
                  <tr key={audit.id}>
                    <td style={{ fontWeight: 500 }}>{audit.restaurant}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{audit.date}</td>
                    <td>
                      <span className={`badge badge-${audit.status === 'Completed' ? 'green' : 'amber'}`}>
                        {audit.status}
                      </span>
                    </td>
                    <td>{audit.score}%</td>
                    <td>
                      <span className={`badge badge-${audit.rag}`}>
                        {audit.variance > 0 ? '+' : ''}{audit.variance}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Corrective Actions */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Open Action Items</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {correctiveActions.map(action => (
              <div key={action.id} style={{ 
                padding: '1rem', 
                background: 'var(--bg-primary)', 
                borderRadius: 'var(--radius-md)',
                borderLeft: `3px solid ${action.status === 'Completed' ? 'var(--rag-green)' : 'var(--rag-amber)'}`
              }}>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>{action.task}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <UserCircle size={14} /> {action.assignee}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={14} /> {action.deadline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Ensure UserCircle is imported
import { UserCircle } from "lucide-react";
