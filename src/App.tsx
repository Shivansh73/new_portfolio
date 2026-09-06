import { useState, useEffect } from "react";
import profilePhoto from "@/imports/image.png";
import resumePDF from "@/imports/Shivansh_dubey.pdf";

/* ─── Nav ─────────────────────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["About", "Experience", "Projects", "Skills", "Resume", "Contact"];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-strong py-3 shadow-[0_1px_0_rgba(0,212,255,0.08)]" : "py-5"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <span className="font-display font-bold text-xl tracking-[0.15em] text-white">
          SD<span className="text-[#00d4ff]">.</span>
        </span>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="font-mono text-[10px] tracking-[0.14em] text-[#606078] hover:text-[#00d4ff] transition-colors duration-200">
              {item.toUpperCase()}
            </a>
          ))}
        </div>

        <a href={resumePDF} download="Shivansh_Dubey_Resume.pdf"
          className="hidden md:flex font-mono text-[10px] tracking-[0.1em] px-4 py-2 border border-[rgba(0,212,255,0.4)] text-[#00d4ff] hover:bg-[rgba(0,212,255,0.08)] transition-all duration-200 rounded items-center gap-2">
          <span>↓</span> RESUME
        </a>

        {/* Mobile burger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#a0a0b8]">
          <div className="space-y-1.5">
            <div className={`w-5 h-px bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-5 h-px bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass-strong border-t border-[rgba(0,212,255,0.08)] px-6 py-5 flex flex-col gap-4">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              className="font-mono text-xs tracking-[0.14em] text-[#a0a0b8] hover:text-[#00d4ff] transition-colors">
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#7b2fff] opacity-[0.05] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#00d4ff] opacity-[0.06] blur-[120px] pointer-events-none" />

      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[500, 660, 830].map((s, i) => (
          <div key={i} className="absolute rounded-full border border-[rgba(0,212,255,0.04)]" style={{ width: s, height: s }} />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center pt-24">
        {/* Left */}
        <div style={{ animation: "slide-up 0.8s ease forwards" }}>
          <div className="font-mono text-[#00d4ff] text-[10px] tracking-[0.22em] mb-5 flex items-center gap-3">
            <span className="w-10 h-px bg-[#00d4ff] inline-block" />
            SOFTWARE DEVELOPER
          </div>
          <h1 className="font-display text-6xl md:text-[5.5rem] font-bold tracking-[0.03em] text-white leading-[0.9] mb-6">
            SHIVANSH
            <br />
            <span className="text-[#00d4ff] text-glow">DUBEY</span>
          </h1>
          <p className="text-[#8080a0] text-[15px] leading-relaxed max-w-md mb-10 font-light">
            Building fast, responsive web applications with React.js, TypeScript & Node.js.
            Currently crafting fintech solutions at{" "}
            <span className="text-[#00d4ff] font-normal">Portalwiz</span>.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="#projects"
              className="font-display font-semibold text-sm tracking-[0.12em] px-7 py-3 bg-[#00d4ff] text-[#050508] hover:bg-white transition-colors duration-200 rounded">
              VIEW PROJECTS
            </a>
            <a href={resumePDF} download="Shivansh_Dubey_Resume.pdf"
              className="font-display font-semibold text-sm tracking-[0.12em] px-7 py-3 border border-[rgba(0,212,255,0.35)] text-[#e8e8f0] hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all duration-200 rounded flex items-center gap-2">
              ↓ RESUME
            </a>
          </div>

          <div className="flex gap-10 mt-12 pt-10 border-t border-[rgba(0,212,255,0.1)]">
            {[
              { val: "1+", label: "Yr. Experience" },
              { val: "3", label: "Projects" },
              { val: "7.66", label: "CGPA" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold text-[#00d4ff]">{s.val}</div>
                <div className="font-mono text-[10px] tracking-[0.15em] text-[#505068] mt-1">{s.label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: portrait */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-[340px] h-[340px] rounded-full border border-[rgba(0,212,255,0.1)] animate-float" />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-[rgba(123,47,255,0.06)]" />

          <div className="relative portrait-frame rounded-full animate-float" style={{ animationDelay: "0.4s" }}>
            <div className="w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden glow-cyan">
              <img src={profilePhoto} alt="Shivansh Dubey" className="w-full h-full object-cover object-center" />
            </div>
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none scan-effect" />
          </div>

          {/* Name badge */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 glass-strong px-5 py-2 rounded-full holo-border text-center whitespace-nowrap">
            <div className="font-mono text-[10px] tracking-[0.18em] text-[#00d4ff]">SHIVANSH DUBEY</div>
            <div className="font-mono text-[9px] tracking-[0.12em] text-[#505068] mt-0.5">SOFTWARE DEVELOPER</div>
          </div>

          {[
            { label: "⬡ React.js", color: "#00d4ff", top: "10%", left: "-8%", delay: "0.8s" },
            { label: "⬡ TypeScript", color: "#4ec9b0", top: "18%", right: "-10%", delay: "1.6s" },
            { label: "⬡ Node.js", color: "#b06eff", bottom: "22%", left: "-10%", delay: "2.2s" },
          ].map((chip) => (
            <div key={chip.label}
              className="absolute glass px-3 py-1.5 rounded-full border border-[rgba(0,212,255,0.15)] animate-float"
              style={{ top: chip.top, left: chip.left, right: (chip as any).right, bottom: chip.bottom, animationDelay: chip.delay }}>
              <span className="font-mono text-[10px] tracking-wide" style={{ color: chip.color }}>{chip.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#606078]">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#00d4ff] to-transparent" />
      </div>
    </section>
  );
}

/* ─── About ─────────────────────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[rgba(123,47,255,0.025)] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-16 items-center relative z-10">
        {/* Portrait */}
        <div className="md:col-span-2 relative">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-[rgba(0,212,255,0.03)] to-[rgba(123,47,255,0.05)] rounded-2xl" />
            <div className="absolute -top-2 -left-2 w-7 h-7 border-t-2 border-l-2 border-[#00d4ff] opacity-50 rounded-tl" />
            <div className="absolute -bottom-2 -right-2 w-7 h-7 border-b-2 border-r-2 border-[#7b2fff] opacity-50 rounded-br" />
            <div className="relative overflow-hidden rounded-xl" style={{ filter: "drop-shadow(0 24px 60px rgba(0,212,255,0.12))" }}>
              <img src={profilePhoto} alt="Shivansh Dubey"
                className="w-full aspect-[3/4] object-cover object-top"
                style={{ filter: "contrast(1.04) brightness(0.96)" }} />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#050508] to-transparent" />
              <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
            </div>
            <div className="absolute -bottom-5 -right-3 glass-strong px-4 py-3 rounded-xl holo-border">
              <div className="font-mono text-[9px] tracking-[0.15em] text-[#505068] mb-1">STATUS</div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
                <span className="font-display font-semibold text-xs text-[#00d4ff] tracking-wide">OPEN TO WORK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="md:col-span-3">
          <div className="font-mono text-[#00d4ff] text-[10px] tracking-[0.22em] mb-5 flex items-center gap-3">
            <span className="w-10 h-px bg-[#00d4ff] inline-block" /> ABOUT ME
          </div>
          <h2 className="font-display text-5xl font-bold text-white tracking-[0.03em] mb-8 leading-tight">
            BUILDING THE<br />
            <span className="text-[#7b2fff]">WEB FORWARD</span>
          </h2>
          <div className="space-y-4 text-[#8080a0] leading-relaxed font-light text-[15px]">
            <p>
              Software Developer based in <span className="text-[#c0c0d8]">Pune, Maharashtra</span> with hands-on experience
              building responsive web applications. Currently at <span className="text-[#00d4ff]">Portalwiz</span>,
              developing scalable modules for fintech and booking platforms.
            </p>
            <p>
              I specialise in React.js, TypeScript, and REST API integration — turning complex requirements
              into clean, performant interfaces. B.Tech in Computer Science from LNCT Bhopal (CGPA 7.66).
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-9">
            {["React.js", "TypeScript", "Node.js / Express", "MySQL", "REST APIs", "Tailwind CSS", "Redux", "Git / GitHub"].map((skill) => (
              <div key={skill} className="flex items-center gap-3 glass px-4 py-2.5 rounded-lg border border-[rgba(0,212,255,0.06)] hover:border-[rgba(0,212,255,0.18)] transition-colors duration-200">
                <div className="w-1 h-1 rounded-full bg-[#00d4ff] flex-shrink-0" />
                <span className="font-mono text-[11px] text-[#b0b0c8] tracking-wide">{skill}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-5 mt-8">
            <a href="mailto:shivanshdubey73@gmail.com"
              className="font-mono text-[10px] tracking-[0.12em] text-[#00d4ff] hover:underline">
              shivanshdubey73@gmail.com
            </a>
            <span className="text-[#303040]">·</span>
            <span className="font-mono text-[10px] tracking-[0.12em] text-[#606078]">+91 8109996164</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Experience ────────────────────────────────────────────────────────── */
function ExperienceSection() {
  const bullets = [
    "Developed and maintained scalable web application modules using React.js, JavaScript, TypeScript, and Node.js.",
    "Designed and integrated RESTful APIs, collaborating with backend developers on system architecture and MySQL database queries.",
    "Implemented secure payment workflows and third-party integrations, building reusable UI components with form validation.",
    "Debugged production issues, performed testing, and improved application performance through code optimisation.",
    "Followed Agile practices and software quality standards while collaborating with cross-functional teams.",
  ];

  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="font-mono text-[#00d4ff] text-[10px] tracking-[0.22em] mb-5 flex items-center gap-3">
          <span className="w-10 h-px bg-[#00d4ff] inline-block" /> PROFESSIONAL EXPERIENCE
        </div>
        <h2 className="font-display text-5xl font-bold text-white tracking-[0.03em] mb-14 leading-tight">
          WHERE I'VE<br /><span className="text-[#00d4ff]">WORKED</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff] via-[rgba(0,212,255,0.3)] to-transparent" />

          <div className="pl-10 relative">
            <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#00d4ff] -translate-x-0.5 shadow-[0_0_10px_#00d4ff]" />

            <div className="glass border border-[rgba(0,212,255,0.1)] rounded-2xl p-8 hover:border-[rgba(0,212,255,0.2)] transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white tracking-[0.05em] mb-1">SOFTWARE DEVELOPER</h3>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-[#00d4ff] tracking-wide">Portalwiz</span>
                    <span className="w-1 h-1 rounded-full bg-[#303050]" />
                    <span className="font-mono text-[10px] text-[#505068] tracking-wide">Pune, Maharashtra</span>
                  </div>
                </div>
                <div className="glass px-4 py-2 rounded-lg border border-[rgba(0,212,255,0.15)] flex-shrink-0">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-[#00d4ff]">MARCH 2025 – PRESENT</span>
                </div>
              </div>

              <ul className="space-y-3">
                {bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[#8080a0] text-[14px] leading-relaxed font-light">
                    <span className="text-[#00d4ff] mt-1 flex-shrink-0 text-xs">▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-[rgba(0,212,255,0.08)]">
                {["React.js", "TypeScript", "Node.js", "MySQL", "REST API", "Agile"].map((t) => (
                  <span key={t} className="font-mono text-[9px] tracking-[0.1em] px-3 py-1 rounded-full bg-[rgba(0,212,255,0.06)] text-[#00d4ff] border border-[rgba(0,212,255,0.15)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-10 pl-10 relative">
          <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#7b2fff] -translate-x-0.5 shadow-[0_0_10px_#7b2fff]" />
          <div className="glass border border-[rgba(123,47,255,0.12)] rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-bold text-white tracking-[0.05em] mb-1">B.TECH — COMPUTER SCIENCE</h3>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-[#b06eff] tracking-wide">LNCT, Bhopal</span>
                  <span className="w-1 h-1 rounded-full bg-[#303050]" />
                  <span className="font-mono text-[10px] text-[#505068] tracking-wide">CGPA: 7.66</span>
                </div>
              </div>
              <div className="glass px-4 py-2 rounded-lg border border-[rgba(123,47,255,0.2)] flex-shrink-0">
                <span className="font-mono text-[10px] tracking-[0.12em] text-[#b06eff]">GRADUATED 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ──────────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: "01",
    title: "FINEDGE PLATFORM",
    category: "Fintech · React.js",
    desc: "Enterprise fintech platform with modules for customer and transaction workflows. Secure authentication, CRUD operations against MySQL, and optimised REST API integration.",
    accent: "#00d4ff",
    tags: ["React.js", "TypeScript", "REST API", "MySQL"],
    bullets: [
      "Built reusable React components with state management & secure auth",
      "Implemented CRUD against MySQL with collaborative API design",
      "Optimised performance for high-volume transaction workflows",
    ],
  },
  {
    id: "02",
    title: "TABLESERVE",
    category: "Restaurant · Booking",
    desc: "Full-stack booking and onboarding platform for restaurants. Payment processing via Node.js/Express, MySQL persistence for user profiles, bookings, and transaction logs.",
    accent: "#7b2fff",
    tags: ["React.js", "Node.js", "Express.js", "MySQL"],
    bullets: [
      "Frontend booking & payment workflow modules with REST API integration",
      "Node.js/Express backend endpoints for auth & payment processing",
      "MySQL schema for profiles, bookings, and transactions",
    ],
  },
  {
    id: "03",
    title: "SMARTFIND",
    category: "AI Search · Full-Stack",
    desc: "AI-assisted search application with natural-language query processing. React.js frontend with Node.js/Express backend, integrated AI model for improved result relevance.",
    accent: "#00d4ff",
    tags: ["React.js", "Node.js", "AI Integration", "REST API"],
    bullets: [
      "Responsive React frontend with REST API search integration",
      "Node.js/Express backend supporting core application logic",
      "AI-assisted NLP feature improving query relevance and accuracy",
    ],
  },
];

function ProjectsSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-28">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-r from-[rgba(0,212,255,0.025)] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex items-end justify-between mb-14">
          <div>
            <div className="font-mono text-[#00d4ff] text-[10px] tracking-[0.22em] mb-5 flex items-center gap-3">
              <span className="w-10 h-px bg-[#00d4ff] inline-block" /> SELECTED WORK
            </div>
            <h2 className="font-display text-5xl font-bold text-white tracking-[0.03em] leading-tight">
              PROJECTS
            </h2>
          </div>
          {/* Holographic portrait */}
          <div className="hidden md:block relative w-16 h-16 holo-border rounded-xl overflow-hidden scan-effect flex-shrink-0">
            <img src={profilePhoto} alt="Shivansh Dubey" className="w-full h-full object-cover object-top"
              style={{ filter: "grayscale(0.3) contrast(1.1)" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,212,255,0.2)] to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="space-y-5">
          {PROJECTS.map((project, idx) => (
            <div key={project.id}
              className="glass border border-[rgba(0,212,255,0.07)] rounded-2xl overflow-hidden hover:border-[rgba(0,212,255,0.16)] transition-all duration-300 group cursor-pointer"
              onClick={() => setExpanded(expanded === project.id ? null : project.id)}>

              <div className="p-7 grid md:grid-cols-[auto_1fr_auto] gap-6 items-start">
                <div className="font-mono text-4xl font-bold opacity-10 text-[#00d4ff] leading-none select-none pt-1">
                  {project.id}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="font-mono text-[10px] tracking-[0.15em]" style={{ color: project.accent }}>
                      {project.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#303050]" />
                    {idx === 0 && (
                      <span className="font-mono text-[9px] tracking-[0.1em] px-2 py-0.5 rounded-full bg-[rgba(0,212,255,0.08)] text-[#00d4ff] border border-[rgba(0,212,255,0.2)]">
                        CURRENT EMPLOYER
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white tracking-[0.05em] mb-3">{project.title}</h3>
                  <p className="text-[#707088] text-sm leading-relaxed font-light max-w-2xl">{project.desc}</p>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <div className="w-8 h-8 rounded-full border border-[rgba(0,212,255,0.2)] flex items-center justify-center text-[#00d4ff] text-sm group-hover:scale-110 transition-transform duration-200">
                    {expanded === project.id ? "−" : "+"}
                  </div>
                  <div className="flex gap-1.5 flex-wrap justify-end">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[9px] tracking-[0.1em] px-2.5 py-1 rounded-full"
                        style={{ background: `${project.accent}0d`, color: project.accent, border: `1px solid ${project.accent}20` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {expanded === project.id && (
                <div className="px-7 pb-7 pt-0 border-t border-[rgba(0,212,255,0.06)]">
                  <div className="pt-5 space-y-2.5">
                    {project.bullets.map((b, i) => (
                      <div key={i} className="flex gap-3 text-[#8080a0] text-sm leading-relaxed font-light">
                        <span className="mt-1 flex-shrink-0" style={{ color: project.accent }}>▸</span>
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Skills ────────────────────────────────────────────────────────────── */
function SkillsSection() {
  const categories = [
    {
      label: "LANGUAGES",
      color: "#00d4ff",
      items: ["JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3"],
    },
    {
      label: "FRONTEND",
      color: "#7b2fff",
      items: ["React.js", "Tailwind CSS", "Material UI", "Redux", "Responsive Design"],
    },
    {
      label: "BACKEND & DB",
      color: "#00d4ff",
      items: ["Node.js", "Express.js", "REST API Integration", "MySQL"],
    },
    {
      label: "TOOLS & PRACTICES",
      color: "#7b2fff",
      items: ["Git & GitHub", "VS Code", "Postman", "Agile / SDLC", "Unit Testing", "OOP"],
    },
  ];

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: categories */}
          <div>
            <div className="font-mono text-[#00d4ff] text-[10px] tracking-[0.22em] mb-5 flex items-center gap-3">
              <span className="w-10 h-px bg-[#00d4ff] inline-block" /> TECHNICAL SKILLS
            </div>
            <h2 className="font-display text-5xl font-bold text-white tracking-[0.03em] mb-10 leading-tight">
              SKILLS &<br /><span className="text-[#00d4ff]">STACK</span>
            </h2>

            <div className="space-y-7">
              {categories.map((cat) => (
                <div key={cat.label}>
                  <div className="font-mono text-[9px] tracking-[0.18em] mb-3" style={{ color: cat.color }}>
                    {cat.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="font-mono text-[10px] tracking-[0.08em] px-3 py-1.5 rounded-lg glass border hover:border-opacity-50 transition-colors duration-200"
                        style={{ borderColor: `${cat.color}22`, color: "#c0c0d8" }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: portrait card + profile card */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-52">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(0,212,255,0.06)] to-[rgba(123,47,255,0.06)] blur-xl" />
              <div className="relative rounded-2xl overflow-hidden holo-border scan-effect"
                style={{ boxShadow: "0 0 50px rgba(0,212,255,0.1)" }}>
                <img src={profilePhoto} alt="Shivansh Dubey" className="w-full aspect-square object-cover object-top"
                  style={{ filter: "grayscale(0.2) contrast(1.06)" }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,212,255,0.1)] pointer-events-none" />
                <div className="absolute top-2 left-2 font-mono text-[8px] text-[#00d4ff] tracking-widest opacity-60">DEV:2025</div>
                <div className="absolute top-2 right-2 font-mono text-[8px] text-[#7b2fff] tracking-widest opacity-60">ACTIVE</div>
              </div>
            </div>

            {/* Profile card */}
            <div className="glass-strong border border-[rgba(0,212,255,0.15)] rounded-2xl p-5 w-56 holo-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0" style={{ boxShadow: "0 0 14px rgba(0,212,255,0.3)" }}>
                  <img src={profilePhoto} alt="Shivansh Dubey" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <div className="font-display font-bold text-xs text-white tracking-[0.05em]">SHIVANSH DUBEY</div>
                  <div className="font-mono text-[8px] tracking-[0.1em] text-[#00d4ff] mt-0.5">Software Developer</div>
                </div>
              </div>
              <div className="font-mono text-[8px] tracking-[0.08em] text-[#505068] mb-3 leading-relaxed">
                React • TypeScript • Node.js
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse flex-shrink-0" />
                <span className="font-mono text-[8px] tracking-[0.1em] text-[#8080a0]">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Resume ────────────────────────────────────────────────────────────── */
function ResumeSection() {
  return (
    <section id="resume" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,212,255,0.02)] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="font-mono text-[#00d4ff] text-[10px] tracking-[0.22em] mb-5 flex items-center gap-3">
          <span className="w-10 h-px bg-[#00d4ff] inline-block" /> RESUME
        </div>
        <h2 className="font-display text-5xl font-bold text-white tracking-[0.03em] mb-14 leading-tight">
          DOWNLOAD<br /><span className="text-[#00d4ff]">MY CV</span>
        </h2>

        <div className="glass border border-[rgba(0,212,255,0.12)] rounded-2xl p-8 md:p-12 holo-border">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: info */}
            <div>
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0" style={{ boxShadow: "0 0 24px rgba(0,212,255,0.25)" }}>
                  <img src={profilePhoto} alt="Shivansh Dubey" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-white tracking-[0.05em]">SHIVANSH DUBEY</div>
                  <div className="font-mono text-[10px] text-[#00d4ff] tracking-[0.12em] mt-0.5">Software Developer</div>
                  <div className="font-mono text-[9px] text-[#505068] tracking-[0.1em] mt-1">Pune, Maharashtra</div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  { label: "CURRENT ROLE", val: "Software Developer @ Portalwiz" },
                  { label: "EDUCATION", val: "B.Tech CSE — LNCT Bhopal" },
                  { label: "EMAIL", val: "shivanshdubey73@gmail.com" },
                  { label: "PHONE", val: "+91 8109996164" },
                ].map((row) => (
                  <div key={row.label} className="flex gap-3 items-baseline">
                    <span className="font-mono text-[9px] tracking-[0.14em] text-[#404058] w-32 flex-shrink-0">{row.label}</span>
                    <span className="font-mono text-[10px] text-[#a0a0b8]">{row.val}</span>
                  </div>
                ))}
              </div>

              <a href={resumePDF} download="Shivansh_Dubey_Resume.pdf"
                className="inline-flex items-center gap-3 font-display font-bold text-sm tracking-[0.14em] px-8 py-4 bg-[#00d4ff] text-[#050508] hover:bg-white transition-colors duration-200 rounded-lg">
                <span className="text-lg">↓</span>
                DOWNLOAD RESUME
              </a>
            </div>

            {/* Right: skills summary */}
            <div className="space-y-5">
              {[
                { label: "React.js / Frontend", pct: 88 },
                { label: "TypeScript / JavaScript", pct: 85 },
                { label: "Node.js / Express", pct: 72 },
                { label: "MySQL / Databases", pct: 70 },
                { label: "REST API Integration", pct: 90 },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="font-mono text-[10px] text-[#b0b0c8] tracking-[0.08em]">{s.label}</span>
                    <span className="font-mono text-[10px] text-[#00d4ff]">{s.pct}%</span>
                  </div>
                  <div className="h-px bg-[rgba(0,212,255,0.08)] rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: "linear-gradient(90deg, #00d4ff, #7b2fff)" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ───────────────────────────────────────────────────────────── */
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(123,47,255,0.025)] to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-7 mb-16 text-center md:text-left">
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-full overflow-hidden" style={{ boxShadow: "0 0 28px rgba(0,212,255,0.25)" }}>
              <img src={profilePhoto} alt="Shivansh Dubey" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#00d4ff] border-2 border-[#050508]" />
          </div>
          <div>
            <div className="font-mono text-[#00d4ff] text-[10px] tracking-[0.22em] mb-3 flex items-center gap-3 justify-center md:justify-start">
              <span className="w-10 h-px bg-[#00d4ff] inline-block" /> GET IN TOUCH
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-[0.03em] leading-tight">
              LET'S BUILD SOMETHING<br />
              <span className="text-[#00d4ff] text-glow">AMAZING.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Form */}
          <div className="md:col-span-3">
            {sent ? (
              <div className="glass border border-[rgba(0,212,255,0.2)] rounded-xl p-12 text-center">
                <div className="font-display text-2xl font-bold text-[#00d4ff] mb-3 tracking-wide">MESSAGE SENT ✓</div>
                <p className="text-[#8080a0] font-light">Thanks for reaching out. I'll get back within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: "name", label: "NAME", type: "text", placeholder: "Your name" },
                  { id: "email", label: "EMAIL", type: "email", placeholder: "your@email.com" },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="font-mono text-[9px] tracking-[0.18em] text-[#505068] block mb-2">{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder}
                      value={form[f.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      className="w-full glass border border-[rgba(0,212,255,0.1)] rounded-lg px-4 py-3 font-mono text-sm text-[#e8e8f0] placeholder-[#353548] outline-none focus:border-[rgba(0,212,255,0.4)] transition-colors duration-200 bg-transparent"
                      required />
                  </div>
                ))}
                <div>
                  <label className="font-mono text-[9px] tracking-[0.18em] text-[#505068] block mb-2">MESSAGE</label>
                  <textarea rows={5} placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full glass border border-[rgba(0,212,255,0.1)] rounded-lg px-4 py-3 font-mono text-sm text-[#e8e8f0] placeholder-[#353548] outline-none focus:border-[rgba(0,212,255,0.4)] transition-colors duration-200 bg-transparent resize-none"
                    required />
                </div>
                <button type="submit"
                  className="w-full font-display font-bold text-sm tracking-[0.15em] py-4 bg-[#00d4ff] text-[#050508] hover:bg-white transition-colors duration-200 rounded-lg">
                  SEND MESSAGE →
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="md:col-span-2 space-y-5">
            <div className="glass border border-[rgba(0,212,255,0.08)] rounded-xl p-6">
              <div className="font-mono text-[9px] tracking-[0.18em] text-[#505068] mb-4">DIRECT CONTACT</div>
              <div className="space-y-4">
                {[
                  { label: "EMAIL", val: "shivanshdubey73@gmail.com", href: "mailto:shivanshdubey73@gmail.com" },
                  { label: "PHONE", val: "+91 8109996164", href: "tel:+918109996164" },
                  { label: "LOCATION", val: "Pune, Maharashtra", href: null },
                ].map((c) => (
                  <div key={c.label}>
                    <div className="font-mono text-[8px] text-[#353548] tracking-widest mb-0.5">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="font-mono text-[10px] text-[#00d4ff] hover:underline">{c.val}</a>
                    ) : (
                      <div className="font-mono text-[10px] text-[#8080a0]">{c.val}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass border border-[rgba(123,47,255,0.15)] rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
                <span className="font-mono text-[9px] tracking-[0.15em] text-[#a0a0b8]">AVAILABLE NOW</span>
              </div>
              <p className="font-light text-[13px] text-[#707088] leading-relaxed">
                Open to full-time roles and exciting projects. Quick to onboard, fast learner.
              </p>
            </div>

            <a href={resumePDF} download="Shivansh_Dubey_Resume.pdf"
              className="flex items-center justify-center gap-3 w-full font-mono text-[10px] tracking-[0.14em] py-3 border border-[rgba(0,212,255,0.3)] text-[#00d4ff] hover:bg-[rgba(0,212,255,0.06)] transition-colors duration-200 rounded-xl">
              ↓ DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-[rgba(0,212,255,0.07)] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-lg text-white tracking-[0.15em]">
          SD<span className="text-[#00d4ff]">.</span>
        </span>
        <span className="font-mono text-[9px] tracking-[0.15em] text-[#353548]">
          © 2025 SHIVANSH DUBEY — SOFTWARE DEVELOPER, PUNE
        </span>
        <div className="flex gap-6">
          {[
            { label: "EMAIL", href: "mailto:shivanshdubey73@gmail.com" },
            { label: "LINKEDIN", href: "#" },
            { label: "GITHUB", href: "#" },
          ].map((s) => (
            <a key={s.label} href={s.href}
              className="font-mono text-[9px] tracking-[0.12em] text-[#505068] hover:text-[#00d4ff] transition-colors">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─── App ───────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-full bg-[#050508] text-[#e8e8f0]">
      <Nav />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
