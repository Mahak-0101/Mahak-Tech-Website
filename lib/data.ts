import { Brain, Cloud, Code2, Cpu, Database, LayoutDashboard, Lock, Rocket, ShieldCheck, Smartphone, Wrench, Zap } from "lucide-react";

export const services = [
  { slug: "web-development", title: "Web Development", icon: Code2, blurb: "Conversion-focused websites, portals, and commerce experiences built with Next.js.", tech: ["Next.js", "React", "PostgreSQL", "Stripe"] },
  { slug: "app-development", title: "App Development", icon: Smartphone, blurb: "Native-grade iOS, Android, and cross-platform apps with resilient APIs.", tech: ["React Native", "Node.js", "Prisma", "Firebase"] },
  { slug: "ai-development", title: "AI Development", icon: Brain, blurb: "AI copilots, automation agents, RAG workflows, and production ML integrations.", tech: ["Python", "OpenAI", "TensorFlow", "Vector DB"] },
  { slug: "machine-learning", title: "Machine Learning", icon: Cpu, blurb: "Forecasting, classification, computer vision, and decision intelligence systems.", tech: ["PyTorch", "MLOps", "AWS", "Docker"] },
  { slug: "cybersecurity", title: "Cybersecurity", icon: ShieldCheck, blurb: "Security audits, hardening, monitoring, and compliance-ready engineering.", tech: ["Zero Trust", "SIEM", "OWASP", "IAM"] },
  { slug: "cloud", title: "Cloud", icon: Cloud, blurb: "Cloud architecture, migration, cost optimization, and reliable infrastructure.", tech: ["AWS", "Azure", "GCP", "Kubernetes"] },
  { slug: "devops", title: "DevOps", icon: Rocket, blurb: "CI/CD, observability, release automation, and platform engineering.", tech: ["Docker", "Terraform", "GitHub Actions", "Grafana"] },
  { slug: "ui-ux", title: "UI UX", icon: LayoutDashboard, blurb: "Premium interfaces, design systems, product strategy, and prototyping.", tech: ["Figma", "Framer", "Design Systems", "Research"] },
  { slug: "iot", title: "IoT", icon: Zap, blurb: "Connected devices, telemetry platforms, dashboards, and edge automation.", tech: ["MQTT", "Edge", "Embedded", "Analytics"] },
  { slug: "automation", title: "Automation", icon: Wrench, blurb: "Workflow automation for operations, sales, support, and reporting.", tech: ["RPA", "APIs", "AI Agents", "Zapier"] },
  { slug: "erp", title: "ERP", icon: Database, blurb: "Custom ERP modules for inventory, finance, HR, procurement, and operations.", tech: ["PostgreSQL", "RBAC", "Analytics", "Integrations"] },
  { slug: "crm", title: "CRM", icon: Lock, blurb: "Sales pipelines, customer records, support workflows, and revenue dashboards.", tech: ["Automation", "Email", "Dashboards", "Payments"] },
  { slug: "pos", title: "POS", icon: Cpu, blurb: "Fast retail billing, inventory, multi-branch reporting, and payment integrations.", tech: ["Inventory", "Offline Sync", "Razorpay", "Analytics"] },
  { slug: "consulting", title: "Consulting", icon: Brain, blurb: "Technical roadmaps, architecture reviews, vendor selection, and delivery strategy.", tech: ["Discovery", "Roadmaps", "Architecture", "Governance"] },
  { slug: "maintenance", title: "Maintenance", icon: Wrench, blurb: "SLA-backed support, performance tuning, security patches, and continuous improvement.", tech: ["SLA", "Monitoring", "Backups", "Support"] }
];

export const industries = ["Healthcare", "Education", "Retail", "Finance", "Manufacturing", "Construction", "Agriculture", "Government", "Logistics", "Real Estate"];
export const technologies = ["React", "Next.js", "Node.js", "Python", "AI", "TensorFlow", "Docker", "AWS", "Azure", "Firebase", "MongoDB", "PostgreSQL"];
export const process = ["Discovery", "Planning", "Design", "Development", "Testing", "Deployment", "Maintenance"];
export const products = ["Software", "AI", "SaaS", "IoT", "Robotics", "Hardware", "Embedded Systems", "Machines"];
export const portfolio = [
  { slug: "aurora-health-ai", title: "Aurora Health AI", sector: "Healthcare", outcome: "42% faster triage with secure AI decision support", tech: ["AI", "Next.js", "HIPAA-ready Cloud"] },
  { slug: "nexus-retail-cloud", title: "Nexus Retail Cloud", sector: "Retail", outcome: "Unified POS, inventory, and analytics across 38 locations", tech: ["POS", "PostgreSQL", "Razorpay"] },
  { slug: "terra-iot-ops", title: "Terra IoT Ops", sector: "Manufacturing", outcome: "Real-time machine telemetry lowered downtime by 31%", tech: ["IoT", "MQTT", "AWS"] }
];
export const testimonials = [
  { name: "Aarav Mehta", role: "COO, FinEdge", quote: "MahakTech turned a complex platform vision into a polished, secure product our teams love using.", rating: 5 },
  { name: "Priya Shah", role: "Founder, LearnPilot", quote: "The strategy, execution quality, and communication felt like working with a top global product studio.", rating: 5 },
  { name: "Neel Kapoor", role: "Director, BuildGrid", quote: "Their automation work gave us measurable ROI within the first month after launch.", rating: 5 }
];
