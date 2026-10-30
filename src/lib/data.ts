export const personal = {
  name: "Tharun Gowda P R",
  role: "AI/ML & Software Engineering Intern",
  location: "Bengaluru, India",
  email: "tharungowdapr@gmail.com",
  phone: "+91 7411504315",
  github: "https://github.com/tharungowdapr",
  linkedin: "https://linkedin.com/in/tharun-gowda-p-r",
  resume: "https://drive.google.com/file/d/1PS2vmY9mprKUuZdWGf3nFnKMT_Kf-LKE/view?usp=sharing",
  bio: "Fourth-year B.E. Artificial Intelligence & Machine Learning student at RV College of Engineering, Bengaluru (2023–2027), building AI systems across multi-agent workflows, retrieval-augmented generation, computer vision, and applied machine learning.",
  tagline: "Building intelligent, scalable systems — from AI agents to full-stack applications.",
};

export const skills = [
  { category: "Languages & Web Fundamentals", items: ["Python", "C", "JavaScript", "SQL", "HTML", "CSS", "Shell"] },
  { category: "Machine Learning & AI", items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "LightGBM", "LSTM", "Transformers", "SBERT", "Diffusion Models"] },
  { category: "NLP & Generative AI", items: ["LangChain", "LangGraph", "RAG", "FAISS", "ChromaDB", "Ollama", "Groq", "Claude API", "OpenAI", "Gemini", "Whisper ASR"] },
  { category: "Backend & APIs", items: ["FastAPI", "Flask", "Express", "Node.js", "Django", "Streamlit", "Gradio"] },
  { category: "Databases & Storage", items: ["PostgreSQL", "SQLite", "MongoDB", "Supabase", "ChromaDB"] },
  { category: "DevOps & MLOps", items: ["Docker", "Docker Compose", "MLflow", "Prometheus", "Grafana", "DVC", "GitHub Actions", "GCP Cloud Run", "Linux"] },
  { category: "Data Science & Computer Vision", items: ["Pandas", "NumPy", "OpenCV", "Matplotlib", "Seaborn", "Vision Transformers"] },
  { category: "Security", items: ["JWT", "bcrypt", "Fernet Encryption", "OAuth"] },
];

export const projects = [
  {
    id: "aurora-3d",
    title: "AURORA — Mission 01",
    subtitle: "Cinematic 3D Spacecraft Launch Experience",
    description: "An immersive 3D website presenting a fictional orbital spacecraft mission through spacecraft visuals, mission-control status panels, flight telemetry, and scroll-driven storytelling.",
    highlights: ["Interactive 3D spacecraft experience", "Mission-control interface with system status", "Telemetry for altitude, velocity, mission time, and flight stage", "Cinematic scroll-driven mission presentation"],
    stack: ["Three.js", "React Three Fiber", "Drei", "TypeScript", "Vite"],
    github: "https://github.com/Tharungowdapr/3D-Website",
    demo: "https://aurora-launch-seq.lovable.app/",
    type: "3D Web",
  },
  {
    id: "eipr-agent",
    title: "EIPR-Agent",
    subtitle: "Multi-Agent Startup & IP Rights Analysis",
    description: "A deployed multi-agent decision-support platform that evaluates startup ideas through specialized agents for opportunity discovery, intellectual-property strategy, business planning, financial feasibility, and report generation.",
    highlights: ["Five specialized agents with supervisor-led orchestration", "Structured startup and IP-rights analysis", "Financial feasibility and business-plan generation", "Exportable case-study reports"],
    stack: ["LangGraph", "FastAPI", "Next.js", "PostgreSQL", "Groq", "Docker"],
    github: "https://github.com/Tharungowdapr/Entrepreneurship-IP-Rights-analysis-using-AI",
    demo: "https://eipr-phi.vercel.app",
    type: "AI System",
  },
  {
    id: "microsr",
    title: "MicroSR",
    subtitle: "Physics-Constrained Microscopy Super-Resolution",
    description: "A trained diffusion-based microscopy super-resolution model that enhances low-resolution fluorescence images while enforcing optical point-spread-function consistency.",
    highlights: ["Conditional U-Net diffusion model with DDPM scheduler", "Physics-informed PSF consistency loss", "Trained on the BioSR microscopy dataset", "Published inference demo and pretrained checkpoints"],
    stack: ["Python", "PyTorch", "Diffusion Models", "MLflow", "DVC"],
    github: "https://github.com/Tharungowdapr/MicroSR-",
    demo: "https://tharungowadpr-microsr.hf.space",
    type: "Vision",
  },
  {
    id: "aaharai",
    title: "AaharAI NutriSync",
    subtitle: "Clinically-Grounded Indian Nutrition Assistant",
    description: "A hybrid RAG nutrition assistant grounded in IFCT 2017 and ICMR-NIN 2024 guidelines, combining keyword retrieval, semantic search, reranking, and clinical context for Indian-diet-aware nutrition guidance.",
    highlights: ["Three-stage hybrid retrieval with BM25, vector search, and reranking", "Clinical context for dietary conditions and user profiles", "Multi-agent workflow with citation verification", "Deployed frontend, backend API, and API documentation"],
    stack: ["Python", "FastAPI", "Next.js", "RAG", "ChromaDB", "Ollama", "Groq", "Docker"],
    github: "https://github.com/Tharungowdapr/Nutritional-Assistant",
    demo: "https://frontend-azure-omega-45f4cqwbni.vercel.app",
    type: "AI System",
  },
  {
    id: "krishivigyan",
    title: "KrishiVigyan AI",
    subtitle: "Agricultural Intelligence for Karnataka Farmers",
    description: "A full-stack agricultural intelligence platform combining crop recommendations, land and soil analysis, weather forecasts, market insights, disease detection, and a Kannada-capable multi-agent farming assistant.",
    highlights: ["Multi-agent Vani AI farming assistant with Kannada support", "GPS-based land analysis and crop suitability", "Crop disease scanning and predictive guidance", "Weather, market-price, and farming intelligence modules"],
    stack: ["Python", "Flask", "PostgreSQL", "React", "OpenRouter", "RAG"],
    github: "https://github.com/Tharungowdapr/KrishiVigyan-AI",
    demo: "https://krishivigyan.vercel.app",
    type: "AI System",
  },
  {
    id: "research-ide",
    title: "Research-IDE",
    subtitle: "AI-Powered Research Assistant",
    description: "An end-to-end research workflow that retrieves academic papers, identifies research gaps, generates and critiques research ideas, plans experiments, scaffolds code, and exports IEEE-style papers.",
    highlights: ["Multi-source retrieval from arXiv, Semantic Scholar, OpenAlex, and Papers with Code", "Research-gap analysis and critic-defender idea generation", "Streaming workflow with configurable LLM providers", "IEEE paper export with citations and DOCX/PDF output"],
    stack: ["Python", "FastAPI", "Next.js", "LangChain", "LLM APIs", "Docker"],
    github: "https://github.com/Tharungowdapr/Research-IDE",
    demo: "https://research-ide-frontend.vercel.app",
    type: "NLP",
  },
  {
    id: "pdf-to-audio",
    title: "PDF to Audio",
    subtitle: "Multilingual Document-to-Audiobook Platform",
    description: "A deployed document-to-speech application for PDF, DOCX, and PPTX files, with OCR for scanned documents, synchronized word-level highlighting, multilingual neural voices, chapter navigation, and audiobook export.",
    highlights: ["OCR and document text extraction", "Word-level synchronized audio highlighting", "38 neural voices across 13 languages", "Chapter-wise audiobook ZIP export and reading-progress sync"],
    stack: ["Python", "Django", "JavaScript", "PDF.js", "Tesseract", "Edge TTS"],
    github: "https://github.com/Tharungowdapr/text_to_speech",
    demo: "https://texttospeech-omega.vercel.app",
    type: "Application",
  },
  {
    id: "rl-security",
    title: "RL Agent for Security",
    subtitle: "Security Vulnerability Triage Environment",
    description: "A containerized vulnerability-triage environment with a FastAPI backend and interactive dashboard for monitoring vulnerability data and experimenting with agent-based prioritization.",
    highlights: ["Gym-like environment for vulnerability triage", "FastAPI backend and interactive monitoring interface", "Sample agent for vulnerability prioritization", "Docker-based deployment"],
    stack: ["Python", "FastAPI", "Reinforcement Learning", "Docker"],
    github: "https://github.com/Tharungowdapr/RL-Agent-for-Security",
    demo: "https://huggingface.co/spaces/tharungowadpr/RL_FOR_SECURITY",
    type: "AI System",
  },
  {
    id: "travel-go",
    title: "Travel-Go",
    subtitle: "AI-Powered Travel Planning & Booking",
    description: "A full-stack travel platform bringing destination discovery, personalized itinerary recommendations, hotel browsing, authentication, and booking workflows into one application.",
    highlights: ["Gemini-powered recommendations from natural-language prompts", "User authentication and profile management", "Hotel discovery and booking workflows", "Backend services with persistent data storage"],
    stack: ["JavaScript", "React", "Node.js", "Express", "Gemini API", "MongoDB", "Supabase"],
    github: "https://github.com/Tharungowdapr/Travel-Go",
    type: "Application",
  },
  {
    id: "rural-microgrid",
    title: "Rural AI Microgrid",
    subtitle: "Decentralized Smart-Energy Simulation",
    description: "A full-stack simulation of a five-village microgrid. An energy-management system coordinates power sharing while an LSTM forecaster estimates demand and generation for operational decisions.",
    highlights: ["Five-village network topology and power-transfer simulation", "LSTM load forecasting with heuristic fallback", "WebSocket-based real-time updates and reconnect handling", "Scenario controls for weather events, demand spikes, and outages"],
    stack: ["Python", "FastAPI", "TensorFlow", "LSTM", "Next.js", "WebSockets", "SQLite"],
    github: "https://github.com/Tharungowdapr/rural-ai-microgrid-",
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
    gpa: "8.16 / 10",
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
    period: "2020 – 2021",
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
