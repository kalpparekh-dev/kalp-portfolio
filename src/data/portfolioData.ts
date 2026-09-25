export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  category: "Full-Stack SaaS" | "AI & ML" | "Computer Vision";
  highlightMetric: string;
  highlightLabel: string;
  problem: string;
  accomplished: string;
  metrics: string[];
  execution: string[];
  techStack: string[];
  architectureFocus: string;
  github?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  items: string[];
}

export interface TimelineItem {
  year: string;
  role: string;
  organization: string;
  description: string[];
  type: "Leadership" | "Competition" | "Algorithmics" | "Education";
}

export const RESUME_DATA = {
  name: "KALP PAREKH",
  title: "Software Development Engineer & AI Builder",
  location: "Gujarat, India",
  phone: "+91 6353802560",
  email: "kalpparekh22@gmail.com",
  links: {
    github: "https://github.com/kalpparekh-dev",
    linkedin: "https://linkedin.com/in/kalp-parekh-5032b03b7",
  },
  heroHook: "SDE with production experience scaling backend systems from 0→50K concurrent users. Built full-stack SaaS platform processing 200K+ monthly transactions with 99.7% uptime.",
  coreFocus: "Distributed systems optimization, RAG/LLM automation, and cost-efficient architectural resilience.",
  currentlySolving: "High-throughput payment processing reliability (66.78% recovery via predictive analytics).",

  stats: [
    { value: "0→50K", label: "Concurrent Users Scaled", sub: "VendorBridge Architecture" },
    { value: "200K+", label: "Monthly Transactions", sub: "99.7% Uptime Track Record" },
    { value: "66.78%", label: "Payment Recovery Rate", sub: "RECLAIM Predictive ML" },
    { value: "8.01", label: "Engineering GPA", sub: "LDRP-ITR (Top 10%)" }
  ],

  projects: [
    {
      id: "vendor-bridge",
      name: "Vendor Bridge",
      tagline: "Scaled SaaS Platform from MVP → 50K Concurrent Users in 6 Months",
      category: "Full-Stack SaaS",
      highlightMetric: "50K",
      highlightLabel: "Concurrent Users Handled",
      problem: "Manual RFQ processing bottleneck preventing vendor scaling",
      accomplished: "Architected full-stack procurement platform handling 200K+ monthly transactions with sub-100ms API latency.",
      metrics: [
        "99.7% uptime across production (6-month track record)",
        "8-minute quotation turnaround (vs. 2-hour manual process)",
        "Successfully onboarded 50+ concurrent vendors without infrastructure degradation"
      ],
      execution: [
        "Designed PostgreSQL schema with strategic indexing for high-throughput RFQ processing; load-tested to 500+ QPS",
        "Built stateless REST APIs (Node.js/Express) with rate limiting and circuit breakers; implemented distributed tracing for production debugging",
        "Architected approval workflows as finite state machines with immutable audit logs for compliance",
        "Deployment: CI/CD pipeline (GitHub Actions) with automated testing; blue-green deployment strategy on Render",
        "Architecture decision: PostgreSQL (transactional consistency) over MongoDB for payment workflows"
      ],
      techStack: ["Node.js", "Express", "PostgreSQL", "Prisma", "Docker", "Render", "GitHub Actions"],
      architectureFocus: "Stateless REST APIs, Finite State Machines, Circuit Breakers, Strategic Indexing",
      github: "https://github.com/kalpparekh-dev"
    },
    {
      id: "reclaim",
      name: "RECLAIM",
      tagline: "Intelligent Payment Failure Recovery System",
      category: "AI & ML",
      highlightMetric: "66.78%",
      highlightLabel: "Recovery Rate on Test Dataset",
      problem: "Catastrophic silent churn and lost merchant revenue from failed transaction patterns.",
      accomplished: "Developed data-driven payment recovery system identifying high-impact recovery actions from failed transaction patterns.",
      metrics: [
        "Achieved 66.78% recovery rate on historical test dataset (10K+ transactions analyzed)",
        "Prioritized recovery opportunities reducing estimated customer churn by 15% through predictive intervention",
        "Processing 1,000+ transactions per minute with sub-second latency using vectorized operations"
      ],
      execution: [
        "Built analytical pipelines (Python/Pandas) extracting customer, payment method, and transaction features; segmented risk cohorts using clustering",
        "Implemented supervised learning model with feature engineering for predicting recovery success; evaluated precision/recall trade-offs",
        "Deployed analysis on production transaction database with schema design for efficient historical queries and time-series windowing"
      ],
      techStack: ["Python", "Pandas", "Scikit-Learn", "PostgreSQL", "Time-Series Windowing", "REST APIs"],
      architectureFocus: "Vectorized Analytical Pipelines, Risk Cohort Clustering, Precision/Recall Optimization",
      github: "https://github.com/kalpparekh-dev"
    },
    {
      id: "clearsky-ai",
      name: "ClearSky AI",
      tagline: "AI-Powered Environmental Analysis Platform",
      category: "AI & ML",
      highlightMetric: "< 2 min",
      highlightLabel: "Assessment Time (vs 30 min Manual)",
      problem: "Manual environmental assessment delays delaying sustainability insights.",
      accomplished: "Built AI-powered environmental analysis platform enabling image uploads and actionable sustainability insights with audit-ready report generation.",
      metrics: [
        "Processed 500+ image analyses in beta testing with 95%+ user satisfaction on insight accuracy",
        "Reduced manual environmental assessment time from 30 minutes to <2 minutes per image",
        "Generated 100+ downloadable PDF reports with zero formatting errors across all browsers"
      ],
      execution: [
        "Designed REST API (FastAPI) with request validation, error handling, and graceful degradation for LLM rate limits",
        "Implemented modular backend architecture separating image ingestion, AI analysis, and report generation as independent microservices",
        "Built React frontend with image caching strategy and optimistic UI updates; deployed with Vercel CDN for sub-second load times",
        "Database: SQLite for MVP with migration path to PostgreSQL documented for production scaling"
      ],
      techStack: ["FastAPI", "React", "Python", "LLM APIs", "Prompt Engineering", "Vercel", "SQLite"],
      architectureFocus: "Microservices Decoupling, Rate-Limit Graceful Degradation, Optimistic UI Updates",
      github: "https://github.com/kalpparekh-dev"
    },
    {
      id: "toolguard-ai",
      name: "ToolGuard-AI",
      tagline: "Industrial Tool Condition Monitoring System",
      category: "Computer Vision",
      highlightMetric: "0%",
      highlightLabel: "False Negatives for Dulled Class",
      problem: "Tool wear causing replacement expense and downtime without sensor hardware.",
      accomplished: "Developed computer vision classification system predicting industrial cutting-tool conditions from images for predictive maintenance without sensor hardware.",
      metrics: [
        "Achieved 77.50% classification accuracy on held-out test set with stratified k-fold validation (0% false negatives for 'dulled' class)",
        "Reduced tool replacement costs by estimated 18% through early wear detection",
        "Processed 100+ tool images per inference run in batch mode at <50ms per image"
      ],
      execution: [
        "Fine-tuned ResNet18 architecture using transfer learning and data augmentation (rotation, lighting variation) for real-world robustness",
        "Implemented class-balanced training with stratified cross-validation; created evaluation pipelines with per-class precision/recall metrics",
        "Built regression model for wear-measurement estimation with ablation studies comparing feature importance across CNN layers",
        "Deployment: Containerized model (Docker) for easy integration; designed inference API with fallback logic for ambiguous predictions"
      ],
      techStack: ["Python", "ResNet18", "Docker", "Computer Vision", "PyTorch"],
      architectureFocus: "Transfer Learning, Stratified K-Fold Validation, CNN Layer Ablation, Edge Dockerization",
      github: "https://github.com/kalpparekh-dev"
    }
  ] as ProjectItem[],

  skills: [
    {
      title: "Languages",
      subtitle: "Deterministic Logic & Foundational Syntax",
      items: ["Python", "C", "JavaScript", "SQL"]
    },
    {
      title: "AI / LLM",
      subtitle: "Intelligent Systems & Vector Pipelines",
      items: ["Retrieval-Augmented Generation (RAG)", "LLM Automation", "Prompt Engineering", "Embeddings", "Tokenization"]
    },
    {
      title: "Backend",
      subtitle: "Scalable APIs & Resilient State",
      items: ["Flask", "FastAPI", "Node.js", "Express", "Prisma", "REST APIs"]
    },
    {
      title: "Databases",
      subtitle: "ACID Consistency & Storage",
      items: ["PostgreSQL", "MySQL", "SQLite"]
    },
    {
      title: "Frontend",
      subtitle: "Interactive Interfaces & State",
      items: ["React", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Developer Tools",
      subtitle: "Continuous Delivery & Containers",
      items: ["Git", "GitHub", "Docker", "GitHub Actions", "Linux", "VS Code", "Postman", "npm", "Vercel", "Render"]
    },
    {
      title: "Core CS",
      subtitle: "Theoretical Depth & Discipline",
      items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"]
    }
  ] as SkillCategory[],

  milestones: [
    {
      year: "2026 — 2027",
      role: "Google Student Ambassador",
      organization: "Google Developers Program",
      type: "Leadership",
      description: [
        "Led workshops on full-stack development and system design for 200+ students.",
        "Mentored 5 junior developers on production deployment patterns."
      ]
    },
    {
      year: "2026",
      role: "Top 10 Finalist — Smart India Hackathon",
      organization: "Smart India Hackathon 2026",
      type: "Competition",
      description: [
        "Top 10 finalist for waste management optimization platform with 8-document strategic submission."
      ]
    },
    {
      year: "Continuous",
      role: "DSA Problem-Solver",
      organization: "LeetCode",
      type: "Algorithmics",
      description: [
        "Solved 50+ LeetCode problems (focus: Dynamic Programming, Graph Algorithms).",
        "Maintained 85%+ first-attempt success rate on medium/hard difficulty problems."
      ]
    },
    {
      year: "Expected Graduation: May 2028",
      role: "Bachelor of Engineering, Information Technology",
      organization: "LDRP Institute of Technology & Research",
      type: "Education",
      description: [
        "GPA: 8.01/10 (Top 10%)."
      ]
    }
  ] as TimelineItem[]
};