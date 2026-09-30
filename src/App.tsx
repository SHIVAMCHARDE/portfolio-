import { useRef, useState } from "react";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Briefcase,
  Check,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  X,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Multi-Agent AI System for YouTube Comment Automation",
    category: "AI AUTOMATION · MULTI-AGENT SYSTEMS",
    description:
      "A production-minded n8n workflow that uses YouTube Data API and LLMs to analyze comments, detect intent, and filter content—then drafts contextual replies with a RAG-powered agent.",
    tags: ["n8n", "YouTube Data API", "LLMs", "RAG", "Automation"],
    link: "https://medium.com/@shivamcharde12/building-a-multi-agent-ai-system-to-automate-youtube-comment-engagement-from-scratch-4924cc9f313a",
    linkLabel: "Read the article",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "AI Knowledge Agent Chat Application",
    category: "RETRIEVAL-AUGMENTED GENERATION",
    description:
      "A knowledge assistant designed to provide grounded answers from embedded documents, with persistent conversation memory, semantic search, and an agentic LangChain workflow.",
    tags: ["RAG", "LangChain", "Embeddings", "Semantic Search", "AI Agents"],
    link: "#contact",
    linkLabel: "Ask me about it",
    icon: Bot,
  },
  {
    number: "03",
    title: "AI-Powered Journal Chat App",
    category: "FULL-STACK · GENERATIVE AI",
    description:
      "A MERN journaling app where people can chat with Gemini, revisit saved conversations, and receive thoughtful summaries and motivational insights. Includes JWT authentication and user-specific history.",
    tags: ["MERN", "Gemini API", "MongoDB", "JWT"],
    link: "https://github.com/SHIVAMCHARDE/AI-Powered-Journal-Chat-App",
    linkLabel: "View on GitHub",
    icon: MessageSquareText,
  },
  {
    number: "04",
    title: "Umeed — Mental Wellness Platform",
    category: "FULL-STACK · SOCIAL IMPACT",
    description:
      "A collaborative self-help platform for mental wellness, with community resources and supportive experiences built using React and MongoDB.",
    tags: ["React", "MongoDB", "Wellness"],
    link: "https://github.com/BhaveshAnandpara/Umeed",
    linkLabel: "View on GitHub",
    icon: Code2,
  },
  {
    number: "05",
    title: "Cafe Management System",
    category: "FULL-STACK WEB APPLICATION",
    description:
      "A team-built cafe ordering experience with QR-based customer ordering and interactive React interfaces.",
    tags: ["React", "JavaScript", "Web App"],
    link: "https://github.com/SHIVAMCHARDE/Cafe-management-System",
    linkLabel: "View on GitHub",
    icon: Code2,
  },
  {
    number: "06",
    title: "Bajaj Science Education Center",
    category: "PRODUCTION WEBSITE",
    description:
      "Developed website components with React Hooks and connected the frontend to backend data and services.",
    tags: ["React", "REST APIs", "Production"],
    link: "https://www.bajajsciencecenter.co.in/",
    linkLabel: "Visit website",
    icon: Code2,
  },
];

const experience = [
  {
    role: "Associate Software Engineer",
    company: "Definedge",
    location: "Pune",
    period: "Oct 2025 — Present",
    logo: "/definedge-logo.svg",
    summary: "Software Development, agentic automation",
    points: [
      "Designed and built an end-to-end internal stock-market MCP server with FastMCP, connecting 70+ financial APIs and tools for market data and portfolio automation. Added JWT-authenticated sessions and secure buy, sell, modify, and cancel order workflows.",
      "Engineered agentic AI workflows with RAG and multi-agent systems in n8n, integrating LLMs, Pinecone vector databases, external REST APIs, and custom tools for context-aware internal automation.",
      "Developed a KYC document-verification solution using DocTR OCR for accurate text extraction and document understanding, automating identity-verification workflows.",
      "Contribute and working with stakeholders and cross-functional Agile teams to shape requirements, design scalable architectures, and deliver secure software and AI solutions.",
      "Build end-to-end AI applications with React, Python, and AI services; optimize inference performance and help deploy reliable, production-ready systems.",
      "Worked on n8n automation workflows to automate business processes, API integrations, data processing, notifications, and AI-powered tasks, reducing manual effort and improving workflow efficiency.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "MaxScripts Technologies",
    location: "Nagpur",
    period: "Mar 2025 — Aug 2025",
    summary: "React.js, TypeScript & full-stack product engineering",
    points: [
      "Developed responsive web application interfaces with React.js and TypeScript, shaping product requirements into clean, maintainable user experiences.",
      "Created reusable UI components and styled consistent layouts with Tailwind CSS, helping features stay cohesive across screen sizes.",
      "Integrated frontend views with APIs and collaborated with teammates across the application stack to deliver complete product features.",
      "Worked in cross-functional Agile sprints, contributing to planning, implementation, feedback cycles, and maintainable releases.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Virtuebyte Pvt Ltd",
    location: "Pune",
    period: "Jan 2024 — Jun 2024",
    summary: "Responsive web applications",
    points: [
      "Built responsive client-facing projects using React.js, JavaScript, HTML/CSS, and Tailwind CSS.",
      "Contributed to feature delivery, testing, technical reviews, and code reviews with cross-functional teams.",
    ],
  },
];

const skillGroups = [
  {
    title: "AI & Agent Engineering",
    skills: ["Python", "LangChain", "RAG", "AI Agents", "MCP", "FastMCP", "n8n", "Pinecone"],
  },
  {
    title: "Backend & Data",
    skills: ["FastAPI", "Node.js", "Express", "MongoDB", "REST APIs", "JWT", "Postman"],
  },
  {
    title: "Frontend & Tools",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "Git", "GitHub"],
  },
];

const navigation = ["About", "Experience", "Projects", "Skills", "Contact"];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const portraitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: portraitScrollProgress } = useScroll({
    target: portraitRef,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(portraitScrollProgress, [0, 1], [26, -26]);
  const portraitRotation = useTransform(portraitScrollProgress, [0, 0.5, 1], [-1.5, 0, 1.2]);
  const portraitSaturation = useTransform(
    portraitScrollProgress,
    [0, 0.5, 1],
    ["saturate(0.76) contrast(1.02)", "saturate(0.92) contrast(1.025)", "saturate(1) contrast(1.03)"],
  );
  const sunlightX = useTransform(portraitScrollProgress, [0, 0.5, 1], [-260, 0, 260]);
  const sunlightOpacity = useTransform(portraitScrollProgress, [0, 0.28, 0.5, 0.72, 1], [0, 0.18, 0.72, 0.18, 0]);

  const scrollToSection = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="nav-wrap" aria-label="Main navigation">
          <a className="brand" href="#about" onClick={() => setIsMenuOpen(false)}>
            <span className="brand-mark">SC<span>.</span></span>
            <span>Shivam Charde</span>
          </a>
          <div className={`nav-links ${isMenuOpen ? "nav-links-open" : ""}`}>
            {navigation.map((item) => (
              <button key={item} onClick={() => scrollToSection(item)}>
                {item}
              </button>
            ))}
            <a className="nav-cta" href="/Resume.pdf" download="Shivam_Charde_Resume.pdf">
              <ArrowDownToLine size={15} /> Resume
            </a>
          </div>
          <button
            className="menu-toggle"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="about">
          <div className="hero-grid" aria-hidden="true" />
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="availability"><span /> SOFTWARE ENGINEER · APPLIED AI</div>
            <h1>
              I build thoughtful <span>software</span> and practical AI systems.
            </h1>
            <p className="hero-description">
              I&apos;m Shivam, a software developer working across full-stack products and applied AI. I turn complex ideas into dependable applications, intelligent workflows, and useful experiences.
            </p>
            <div className="hero-domains" aria-label="Areas of focus">
              <span><Bot size={15} /> AI & agent engineering</span>
              <i />
              <span><Code2 size={15} /> Full-stack software</span>
            </div>
            <div className="hero-actions">
              <button className="button-primary" onClick={() => scrollToSection("Projects")}>
                Explore my work <ArrowRight size={17} />
              </button>
              <a className="button-secondary" href="/Resume.pdf" download="Shivam_Charde_Resume.pdf">
                <ArrowDown size={16} /> Download resume
              </a>
            </div>
            <div className="hero-socials" aria-label="Social links">
              <a href="https://github.com/SHIVAMCHARDE" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/shivamcharde/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="mailto:shivamcharde12@gmail.com" aria-label="Email"><Mail size={18} /></a>
              <span className="social-divider" />
              <span className="hero-location"><MapPin size={14} /> Pune, India</span>
            </div>
          </motion.div>
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <motion.div
              className="portrait-frame"
              ref={portraitRef}
              style={{ y: portraitY, rotate: portraitRotation }}
            >
              <motion.img src="/profile.png" alt="Portrait of Shivam Charde" style={{ filter: portraitSaturation }} />
              <motion.div className="portrait-sunlight" aria-hidden="true" style={{ x: sunlightX, opacity: sunlightOpacity }} />
              <div className="portrait-caption"><span>My focus</span><strong>AI + software, built thoughtfully.</strong></div>
            </motion.div>
            <div className="floating-card"><span className="floating-icon"><Bot size={18} /></span><span><small>BUILDING ACROSS</small><strong>AI systems + software</strong></span><span className="live-dot" /></div>
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
          </motion.div>
          <div className="hero-bottom"><span>SCROLL TO DISCOVER</span><div /></div>
        </section>

        <section className="intro-strip" aria-label="Introduction">
          <div className="section-wrap intro-inner">
            <span className="eyebrow">A LITTLE ABOUT ME</span>
            <p>From smart workflows to full-stack products, I enjoy making AI <em>useful, dependable, and ready for the real world.</em></p>
            <span className="intro-icon"><Code2 size={23} /></span>
          </div>
        </section>

        <section className="section-wrap section-block" id="experience">
          <div className="section-heading">
            <div><span className="eyebrow">WHERE I&apos;VE MADE AN IMPACT</span><h2>Experience<span>.</span></h2></div>
            <p>Building dependable software, one thoughtful iteration at a time.</p>
          </div>
          <div className="experience-list">
            {experience.map((job, index) => (
              <motion.article
                className="experience-card"
                key={job.company}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="experience-date">{job.period}</div>
                <div className="experience-main">
                  <div className="experience-title-row">
                    {job.logo ? <img className="company-logo" src={job.logo} alt="Definedge logo" /> : <span className="company-icon"><Briefcase size={19} /></span>}
                    <div><h3>{job.role}</h3><p>{job.company} <span>·</span> {job.location}</p></div>
                  </div>
                  <p className="experience-summary">{job.summary}</p>
                  <ul>{job.points.map((point) => <li key={point}><Check size={15} /><span>{point}</span></li>)}</ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-wrap section-block">
            <div className="section-heading">
              <div><span className="eyebrow">SELECTED WORK · 2024—2026</span><h2>Projects<span>.</span></h2></div>
              <p>Experiments and products at the intersection of AI and everyday workflows.</p>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => {
                const ProjectIcon = project.icon;
                return (
                  <motion.article
                    className="project-card"
                    key={project.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: (index % 2) * 0.1 }}
                  >
                    <div className="project-topline"><span>{project.number}</span><span className="project-icon"><ProjectIcon size={19} /></span></div>
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <a className="project-link" href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel={project.link.startsWith("http") ? "noreferrer" : undefined}>
                      {project.linkLabel} <ExternalLink size={15} />
                    </a>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-wrap section-block skills-section" id="skills">
          <div className="section-heading">
            <div><span className="eyebrow">MY TOOLKIT</span><h2>Skills & tools<span>.</span></h2></div>
            <p>The right tool for the problem—grounded in solid engineering fundamentals.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <motion.article className="skill-card" key={group.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </motion.article>
            ))}
          </div>
          <div className="education-card"><div className="education-icon"><Code2 size={19} /></div><div><span className="eyebrow">EDUCATION</span><h3>B.Tech, Computer Engineering</h3><p>Bajaj Institute of Technology <span>·</span> 2024 <span>·</span> 7.98 CGPA</p></div></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div><span className="eyebrow">HAVE A GOOD PROBLEM TO SOLVE?</span><h2>Let&apos;s build something<br /><span>meaningful.</span></h2><p>Open to conversations about AI engineering, agentic systems, and full-stack product work.</p></div>
            <div className="contact-actions">
              <a className="button-primary" href="mailto:shivamcharde12@gmail.com">Say hello <ArrowUpRight size={17} /></a>
              <a href="mailto:shivamcharde12@gmail.com" className="contact-email">shivamcharde12@gmail.com</a>
              <span><MapPin size={15} /> Pune, Maharashtra, India</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand" href="#about"><span className="brand-mark">SC<span>.</span></span><span>Shivam Charde</span></a>
        <span>Designed & built with care <span className="footer-heart">♥</span></span>
        <div className="footer-links"><a href="https://github.com/SHIVAMCHARDE" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="https://www.linkedin.com/in/shivamcharde/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a></div>
      </footer>
    </div>
  );
}

export default App;
