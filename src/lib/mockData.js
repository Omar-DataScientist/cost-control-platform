// Mock data for F&B Cost Controller Software

export const currentUser = {
  name: "Sarah Jenkins",
  role: "Lead Auditor",
  avatar: "https://i.pravatar.cc/150?u=sarah",
  company: "F&B Audits Corp"
};

export const clients = [
  { id: "c1", name: "Gourmet Burgers Co.", logo: "🍔" },
  { id: "c2", name: "Sushi Master", logo: "🍣" },
  { id: "c3", name: "The Pasta House", logo: "🍝" }
];

export const recentAudits = [
  {
    id: "a1",
    restaurant: "Gourmet Burgers - Downtown",
    date: "2026-09-16",
    status: "Completed",
    score: 92,
    variance: -1.2, // % COGS variance
    rag: "green"
  },
  {
    id: "a2",
    restaurant: "Sushi Master - Westside",
    date: "2026-09-15",
    status: "Pending Action",
    score: 75,
    variance: 4.5, // Leakage
    rag: "red"
  },
  {
    id: "a3",
    restaurant: "The Pasta House - Mall",
    date: "2026-09-10",
    status: "Completed",
    score: 85,
    variance: 2.1,
    rag: "amber"
  }
];

export const correctiveActions = [
  {
    id: "ca1",
    auditId: "a2",
    task: "Train staff on portion control for salmon",
    assignee: "Mike (Kitchen Manager)",
    deadline: "2026-09-20",
    status: "Open"
  },
  {
    id: "ca2",
    auditId: "a3",
    task: "Recalibrate kitchen weighing scales",
    assignee: "Jane (Store Manager)",
    deadline: "2026-09-12",
    status: "Completed"
  }
];

export const dashboardMetrics = {
  totalAuditsThisMonth: 24,
  averageScore: 84.5,
  totalIdentifiedLeakage: "$4,250",
  openCorrectiveActions: 8
};
