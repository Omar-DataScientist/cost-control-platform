"use client";

import { recentAudits, dashboardMetrics } from "@/lib/mockData";
import { PieChart, BarChart3, TrendingDown, ArrowUpRight, DollarSign } from "lucide-react";

export default function ClientDashboard() {
  // Filter audits for this specific client (mocking Gourmet Burgers Co.)
  const clientAudits = recentAudits.filter(a => a.restaurant.includes("Gourmet"));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>Executive Overview</h2>
          <p style={{ color: 'var(--text-muted)' }}>Financial variance and audit performance for Q3 2026</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <select className="input-field" style={{ minWidth: '200px' }}>
            <option>All Outlets</option>
            <option>Downtown Branch</option>
            <option>Westside Mall</option>
          </select>
          <button className="btn btn-primary">
            Export Report
          </button>
        </div>
      </div>

      {/* RAG Variance Highlights */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        <div className="glass-panel hover-scale" style={{ padding: '2rem', borderTop: '4px solid var(--rag-green)' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ padding: '0.75rem', background: 'var(--rag-green-bg)', borderRadius: '50%', color: 'var(--rag-green)' }}>
              <TrendingDown size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Food Cost Variance</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>1.2%</p>
            </div>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--rag-green)' }}>Below 2% target. Optimal performance.</p>
        </div>

        <div className="glass-panel hover-scale" style={{ padding: '2rem', borderTop: '4px solid var(--rag-amber)' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ padding: '0.75rem', background: 'var(--rag-amber-bg)', borderRadius: '50%', color: 'var(--rag-amber)' }}>
              <PieChart size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Beverage Variance</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>2.8%</p>
            </div>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--rag-amber)' }}>Slight leakage identified in Draft Beer.</p>
        </div>

        <div className="glass-panel hover-scale" style={{ padding: '2rem', borderTop: '4px solid var(--rag-red)' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ padding: '0.75rem', background: 'var(--rag-red-bg)', borderRadius: '50%', color: 'var(--rag-red)' }}>
              <DollarSign size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Value Leakage</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>$1,240</p>
            </div>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--rag-red)' }}>Requires immediate action at Downtown.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Recent AI Audit Reports</h3>
            <button className="btn btn-secondary">View All</button>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {clientAudits.map(audit => (
              <div key={audit.id} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '1.25rem',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)'
              }}>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 500 }}>{audit.restaurant}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Conducted on {audit.date}</p>
                </div>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Score</p>
                    <p style={{ fontWeight: 600 }}>{audit.score}%</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Status</p>
                    <span className={`badge badge-${audit.rag}`} style={{ marginTop: '0.25rem' }}>
                      {audit.variance}% Variance
                    </span>
                  </div>
                  <button className="btn" style={{ background: 'var(--bg-secondary)', padding: '0.5rem' }}>
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            ))}
            
            {clientAudits.length === 0 && (
               <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem' }}>No audits available for this brand.</p>
            )}
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '2rem' }}>Cost Breakdown</h3>
          
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Placeholder for Chart */}
            <div style={{ 
              width: '200px', 
              height: '200px', 
              borderRadius: '50%', 
              background: 'conic-gradient(var(--brand-primary) 0% 45%, var(--brand-accent) 45% 75%, var(--text-muted) 75% 100%)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 30px rgba(0,0,0,0.5)'
            }}>
              <div style={{ width: '120px', height: '120px', background: 'var(--bg-primary)', borderRadius: '50%' }}></div>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', background: 'var(--brand-primary)', borderRadius: '2px' }}></div>
                Food COGS
              </span>
              <span>45%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', background: 'var(--brand-accent)', borderRadius: '2px' }}></div>
                Beverage COGS
              </span>
              <span>30%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', background: 'var(--text-muted)', borderRadius: '2px' }}></div>
                Consumables
              </span>
              <span>25%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
