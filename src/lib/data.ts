export const personal = {
  name: "Tharun Gowda P R",
  role: "AI/ML & Software Engineering Intern",
  location: "Bengaluru, India",
  email: "tharungowdapr@gmail.com",
  phone: "+91 7411504315",
  github: "https://github.com/tharungowdapr",
  linkedin: "https://www.linkedin.com/in/tharun-gowda-p-r-836696382",
  resume: "https://drive.google.com/file/d/1PS2vmY9mprKUuZdWGf3nFnKMT_Kf-LKE/view?usp=sharing",
  bio: "B.E. AIML student at RVCE building production-grade AI and full-stack systems — multi-agent pipelines, RAG architectures, computer vision, and scalable web applications with Docker, FastAPI, and Next.js.",
  tagline: "Building intelligent, scalable systems — from AI agents to full-stack applications.",
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C", "SQL", "HTML/CSS", "Shell"],
  },
  {
    category: "ML / AI",
    items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "LightGBM", "LSTM", "Transformers", "SBERT", "FAISS", "Diffusion Models"],
  },
  {
    category: "NLP & GenAI",
    items: ["LangChain", "LangGraph", "RAG", "ChromaDB", "Ollama", "Groq", "Claude API", "OpenAI", "Gemini", "Cohere", "Whisper ASR"],
  },
  {
    category: "Backend & Frameworks",
    items: ["FastAPI", "Flask", "Next.js", "Express", "Node.js", "Streamlit", "Gradio"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "Zustand", "TanStack Query", "Recharts"],
  },
  {
    category: "Databases & Storage",
    items: ["PostgreSQL", "SQLite", "MongoDB", "Supabase", "ChromaDB"],
  },
  {
    category: "DevOps & MLOps",
    items: ["Docker", "Docker Compose", "MLflow", "Prometheus", "Grafana", "DVC", "GitHub Actions", "GCP Cloud Run", "Linux"],
  },
  {
    category: "Data & Vision",
    items: ["Pandas", "NumPy", "OpenCV", "Matplotlib", "Seaborn", "Vision Transformers"],
  },
  {
    category: "Security",
    items: ["JWT", "bcrypt", "Fernet Encryption", "OAuth"],
  },
];

export const projects = [
  {
    id: "eipr-agent",
    title: "EIPR-Agent",
    subtitle: "Multi-Agent AI for IP Rights Analysis",
    description:
      "Multi-agent AI system with 5 specialized agents (Research, Legal, Strategy, Recommendation, Report) that automates Entrepreneurship & IP Rights analysis. Uses LangGraph for agent orchestration with supervisor-specialist architecture.",
    highlights: [
      "5 specialized agents with LangGraph orchestration",
      "Supervisor-specialist architecture for task routing",
      "Automated IP research and legal analysis",
      "Structured report generation with recommendations",
    ],
    stack: ["LangGraph", "FastAPI", "Claude API", "ChromaDB", "Docker"],
    github: "https://github.com/Tharungowdapr/Entrepreneurial-and-Financial-Decision-Support-System-for-Startup-Evaluation-and-Investment-Feasibil",
    demo: "https://eipr-phi.vercel.app",
    type: "AI System",
  },
  {
    id: "microsr",
    title: "MicroSR",
    subtitle: "Physics-Constrained Super-Resolution",
    description:
      "Physics-constrained microscopy super-resolution diffusion model under development. DDPM-based architecture that enforces physical priors for realistic image enhancement beyond conventional SR.",
    highlights: [
      "DDPM-based super-resolution with physical constraints",
      "Physics-informed loss functions for realistic output",
      "Microscopy-specific image enhancement pipeline",
      "State-of-the-art super-resolution for scientific imaging",
    ],
    stack: ["PyTorch", "Diffusion Models", "Python", "MLflow", "DVC"],
    github: "https://github.com/tharungowdapr/MicroSR",
    demo: "https://tharungowadpr-microsr.hf.space",
    type: "Vision",
  },
  {
    id: "aaharai",
    title: "AaharAI NutriSync",
    subtitle: "AI Nutritional Assistant",
    description:
      "Multi-stage retrieval-augmented generation pipeline with intent classification for context-aware dietary recommendations. Streaming chat interface with recipe generation, adaptive meal planning, and longitudinal macronutrient analytics based on ICMR-NIN 2024 & IFCT 2017 data.",
    highlights: [
      "Multi-stage RAG pipeline with intent classification",
      "Dual-LLM backend — local Ollama + Groq cloud fallback",
      "Streaming chat with real-time recipe generation",
      "Analytics dashboard for nutrient gap tracking",
    ],
    stack: ["FastAPI", "Next.js", "RAG", "ChromaDB", "Ollama", "Groq", "Docker"],
    github: "https://github.com/tharungowdapr/Nutritional-Assistant",
    demo: "https://frontend-azure-omega-45f4cqwbni.vercel.app",
    type: "AI System",
  },
  {
    id: "krishisync",
    title: "KrishiVigyan AI",
    subtitle: "Agricultural Intelligence Platform",
    description:
      "Multi-agent agricultural intelligence hub with supervisor-specialist architecture for Karnataka farmers. Integrates Google Gemini Vision for crop disease detection, chat for agronomic advice, and TTS for multilingual rural accessibility.",
    highlights: [
      "Supervisor-specialist multi-agent architecture",
      "Gemini Vision for crop disease classification",
      "Multilingual voice I/O for rural accessibility",
      "Weather and market data integration",
    ],
    stack: ["LangChain", "FastAPI", "Gemini API", "Whisper ASR", "Docker"],
    github: "https://github.com/tharungowdapr/AGRI-AI",
    demo: "https://krishivigyan.vercel.app/",
    type: "AI System",
  },
  {
    id: "research-ide",
    title: "Research-IDE",
    subtitle: "AI-Powered Research Assistant",
    description:
      "End-to-end AI research assistant that automates literature review, identifies research gaps, generates novel ideas, scaffolds code, and exports IEEE-format papers. Integrates Zotero and arXiv APIs for live paper retrieval.",
    highlights: [
      "Automated literature review with gap analysis",
      "AI-powered novel idea generation",
      "Code scaffolding from research papers",
      "IEEE-format paper export",
    ],
    stack: ["LangChain", "FastAPI", "Next.js", "Zotero API", "arXiv API", "Docker"],
    github: "https://github.com/tharungowdapr/Research-IDE",
    demo: "https://research-ide-frontend-175420668218.asia-south1.run.app",
    type: "NLP",
  },
  {
    id: "travel-go",
    title: "Travel-Go",
    subtitle: "AI Travel Booking Platform",
    description:
      "Full-stack AI travel booking application with Google Gemini for intelligent recommendations. Features itinerary planning, destination discovery, and real-time booking with a modern React frontend.",
    highlights: [
      "Gemini-powered travel recommendations",
      "Intelligent itinerary planning",
      "Real-time booking integration",
      "Modern full-stack React architecture",
    ],
    stack: ["React", "Node.js", "Express", "Gemini API", "PostgreSQL", "Docker"],
    github: "https://github.com/tharungowdapr/Travel-Go",
    type: "AI System",
  },
  {
    id: "text-to-speech",
    title: "PDF to Audio",
    subtitle: "Desktop Text-to-Speech App",
    description:
      "Electron desktop application that converts PDFs to audio using OCR and TTS. Extracts text from both digital and scanned PDFs, then reads them aloud. Built with React, TypeScript, and Tesseract.js.",
    highlights: [
      "OCR support for scanned PDF documents",
      "Real-time text-to-speech playback",
      "Cross-platform Electron desktop app",
      "Zustand state management with React",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Tesseract.js", "Zustand"],
    github: "https://github.com/tharungowdapr/text_to_speech",
    demo: "https://sage-cucurucho-68e9f8.netlify.app/",
    type: "NLP",
  },
  {
    id: "traffic",
    title: "Traffic Monitoring System",
    subtitle: "Computer Vision",
    description:
      "Real-time vehicle detection and traffic-flow analysis for live video streams with configurable ROI zones. Frame-level directional vehicle counting with exportable analytics for signal optimization.",
    highlights: [
      "Real-time vehicle detection on live streams",
      "Configurable ROI zones per deployment",
      "Directional counting with exportable analytics",
      "Traffic pattern studies for signal optimization",
    ],
    stack: ["Python", "OpenCV", "NumPy"],
    github: "https://github.com/tharungowdapr",
    type: "Vision",
  },
  {
    id: "rl-security",
    title: "RL Agent for Security",
    subtitle: "Vulnerability Triage Agent",
    description:
      "Reinforcement learning environment for automated security vulnerability triage. Trains agents to prioritize and classify security issues using custom reward functions and state representations.",
    highlights: [
      "Custom RL environment for security triage",
      "Reward functions optimized for severity prioritization",
      "Automated vulnerability classification pipeline",
      "Scalable agent training framework",
    ],
    stack: ["Python", "JavaScript", "RL", "Docker"],
    github: "https://github.com/tharungowdapr/RL-Agent-for-Security",
    demo: "https://huggingface.co/spaces/tharungowadpr/RL_FOR_SECURITY",
    type: "AI System",
  },
  {
    id: "rural-microgrid",
    title: "Rural AI Microgrid",
    subtitle: "Smart Energy Simulation",
    description:
      "AI-powered decentralized smart-grid simulation for 5 rural villages. Uses LSTM-based load forecasting to optimize energy distribution, reduce waste, and improve renewable integration in off-grid communities.",
    highlights: [
      "LSTM-based energy load forecasting",
      "Decentralized microgrid simulation",
      "Renewable energy optimization",
      "Real-time monitoring dashboard",
    ],
    stack: ["Python", "LSTM", "TensorFlow", "React", "FastAPI", "Docker"],
    github: "https://github.com/tharungowdapr/rural-ai-microgrid-",
    type: "AI System",
  },
];

export const experience = [
  {
    role: "Junior Under Officer (JUO)",
    org: "National Cadet Corps (NCC), RVCE Wing",
    period: "2023 – Feb 2026",
    description: "Promoted to JUO through demonstrated leadership and consistent performance. Led and mentored junior cadets in drill sessions, training camps, and national service activities.",
    type: "leadership",
  },
  {
    role: "Core Organizer",
    org: "Lakshya 2025 — Inter-College Shooting Sports Event",
    period: "2025",
    description: "Led end-to-end planning and execution of large-scale inter-college shooting competition. Managed scheduling, logistics, and volunteer coordination across multiple colleges.",
    type: "event",
  },
];

export const education = [
  {
    degree: "B.E. in Artificial Intelligence & Machine Learning",
    institution: "RV College of Engineering, Bengaluru",
    affiliation: "Visvesvaraya Technological University (VTU)",
    period: "2023 – 2027 (Expected)",
    gpa: "8.12 / 10",
    coursework: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning", "DSA", "DBMS", "OS"],
    examScores: [
      { name: "KCET", rank: "502" },
      { name: "JEE Mains", rank: "~26k" },
    ],
  },
  {
    degree: "PUC (PCMC)",
    institution: "Expert PU College, Vallachil",
    affiliation: "Pre-University Course",
    period: "2021 – 2023",
    gpa: "92.8%",
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    examScores: null,
    note: "IIT-JEE aspirant",
  },
  {
    degree: "ICSE (Class 10)",
    institution: "Gnana Deepa Academy (GDARS)",
    affiliation: "ICSE Board",
    period: "2019 – 2021",
    gpa: "91%",
    coursework: ["English", "Mathematics", "Science", "Social Studies", "Computer Applications"],
    examScores: null,
  },
];

export const certifications = [
  { name: "AIML One Stop", issuer: "Industry Certification", year: "2024" },
  { name: "Data Analysis in R", issuer: "NPTEL", year: "2024" },
  { name: "Design, Technology & Innovation", issuer: "NPTEL", year: "2024" },
];

export const achievements = [
  {
    title: "KCET Rank 502",
    subtitle: "Karnataka CET",
    description:
      "Secured an All India rank of 502 in the Karnataka Common Entrance Test (KCET) among thousands of candidates across the state.",
  },
  {
    title: "JEE Mains ~26k Rank",
    subtitle: "National Engineering Entrance",
    description:
      "Achieved a rank of approximately 26,000 in JEE Mains, one of India's most competitive engineering entrance examinations.",
  },
  {
    title: "National-Level Rifle Shooter",
    subtitle: "50m 3-Position",
    description:
      "Represented Karnataka NCC Directorate at the National Shooting Championship (Dec 2024) in 50m 3-Position rifle. All India GVSM participant. Consistent high-pressure performer with discipline and precision.",
    link: "https://drive.google.com/drive/folders/19c7aU28W4TUc-opag7M9Yuyv7Jy3PUfF?usp=sharing",
  },
];
