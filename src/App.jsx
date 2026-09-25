import { useState, useEffect } from "react";
import haithemImg from "./assets/assets/photo_2026-09-25_16-35-56.jpg";

const styleSheet = `
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    background-color: #07111f;
  }
  @keyframes floatImage {
    0% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
    100% { transform: translateY(0); }
  }
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .nav-link {
    cursor: pointer;
    transition: color 0.2s ease;
  }
  .nav-link:hover {
    color: #00d4ff;
  }
  .contact-input {
    width: 100%;
    padding: 14px 18px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: white;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s ease;
    box-sizing: border-box;
  }
  .contact-input:focus {
    border-color: #00d4ff;
  }
`;

const translations = {
  ar: {
    nav: { about: "عني", projects: "المشاريع", skills: "المهارات", contact: "تواصل معي" },
    hero: {
      badge: "الذكاء الاصطناعي • الأتمتة • الويب",
      title1: "Building Smart",
      title2: "Digital Experiences",
      desc: "أقوم بإنشاء أنظمة ذكية، مواقع حديثة، وحلول أتمتة للأعمال الطموحة التي تسعى للنمو بشكل أسرع.",
      explore: "تصفح الأعمال",
      contact: "تواصل معي",
    },
    about: {
      title: "About Me",
      desc: "أنا هيثم عبد الوكيل، أعمل على بناء أنظمة ذكية وحلول أتمتة مدعومة بالذكاء الاصطناعي. أدمج البرمجة، تحليل البيانات، والأتمتة لتحويل الأفكار والمشكلات الواقعية إلى منتجات رقمية عملية، حديثة، وقابلة للتوسع.",
    },
    projects: {
      badge: "PORTFOLIO SHOWCASE",
      title: "المشاريع و حلول الأتمتة",
      categories: [
        { id: "all", label: "جميع الأعمال" },
        { id: "web", label: "تطوير المواقع & SaaS" },
        { id: "automation", label: "الأتمتة & الذكاء الاصطناعي" },
      ],
      items: [
        {
          id: 1,
          title: "Noor SaaS Platform",
          category: "web",
          badge: "SaaS & Admin",
          desc: "منصة إدارة شاملة متعددة الصلاحيات (Multi-Tenant) تتيح تتبع الحضور، إدارة الطلاب، وإرسال تنبيهات تلقائية.",
          tags: ["Next.js", "React", "Supabase", "TailwindCSS", "n8n"],
          github: "https://github.com/haithem25-auto",
          demo: "#",
        },
        {
          id: 2,
          title: "Clinic Automation Agent",
          category: "automation",
          badge: "n8n Workflow",
          desc: "نظام أتمتة حجز المواعيد وإرسال تذكيرات عبر WhatsApp والبريد للعيادات باستخدام ربط Webhooks وLLMs.",
          tags: ["n8n", "OpenRouter", "WhatsApp API", "Webhooks"],
          github: "https://github.com/haithem25-auto",
          demo: "#",
        },
        {
          id: 3,
          title: "Coffee POS & Inventory PWA",
          category: "web",
          badge: "Progressive Web App",
          desc: "تطبيق إدارة نقاط البيع والمخزون للمقاهي مع دعم العمل بدون إنترنت (Offline Sync) وتحليلات ذكية.",
          tags: ["React", "TypeScript", "TailwindCSS", "PWA"],
          github: "https://github.com/haithem25-auto",
          demo: "#",
        },
        {
          id: 4,
          title: "Telegram Trade Copier Bot",
          category: "automation",
          badge: "Automation Bot",
          desc: "بوت أتمتة لمعالجة وسحب صفقات التداول فورياً من قنوات تليجرام وتمريرها عبر بروتوكولات الربط البرمجي.",
          tags: ["Python", "Telegram API", "n8n", "Airtable"],
          github: "https://github.com/haithem25-auto",
          demo: "#",
        },
      ],
    },
    skills: {
      badge: "TECHNICAL EXPERTISE",
      title: "المهارات والتقنيات",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "جاهز لبناء شيء ذكي، حديث ومؤثر معاً؟ أرسل رسالة مباشرة أدناه.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      sendButton: "Send Message",
      emailDirect: "Email Direct",
      whatsappDirect: "WhatsApp Direct",
    },
  },
  en: {
    nav: { about: "About", projects: "Projects", skills: "Skills", contact: "Contact" },
    hero: {
      badge: "AI • AUTOMATION • WEB",
      title1: "Building Smart",
      title2: "Digital Experiences",
      desc: "I create intelligent systems, modern websites, and automation solutions for ambitious businesses that want to grow faster.",
      explore: "Explore Work",
      contact: "Contact Me",
    },
    about: {
      title: "About Me",
      desc: "I’m Haithem Abdelwakil, a developer focused on AI, automation, and intelligent digital systems. I turn ideas and real-world challenges into practical, scalable solutions by combining software development, AI automation, and data-driven thinking.",
    },
    projects: {
      badge: "PORTFOLIO SHOWCASE",
      title: "Projects & Automation Solutions",
      categories: [
        { id: "all", label: "All Work" },
        { id: "web", label: "Web Development & SaaS" },
        { id: "automation", label: "Automation & AI" },
      ],
      items: [
        {
          id: 1,
          title: "Noor SaaS Platform",
          category: "web",
          badge: "SaaS & Admin",
          desc: "Comprehensive multi-tenant management platform for attendance tracking, student management, and automated notifications.",
          tags: ["Next.js", "React", "Supabase", "TailwindCSS", "n8n"],
          github: "https://github.com/haithem25-auto",
          demo: "#",
        },
        {
          id: 2,
          title: "Clinic Automation Agent",
          category: "automation",
          badge: "n8n Workflow",
          desc: "Automated appointment booking and notification system via WhatsApp & Email for clinics using Webhooks & LLMs.",
          tags: ["n8n", "OpenRouter", "WhatsApp API", "Webhooks"],
          github: "https://github.com/haithem25-auto",
          demo: "#",
        },
        {
          id: 3,
          title: "Coffee POS & Inventory PWA",
          category: "web",
          badge: "Progressive Web App",
          desc: "Point of Sale and inventory management app for cafes with offline sync support and smart analytics.",
          tags: ["React", "TypeScript", "TailwindCSS", "PWA"],
          github: "https://github.com/haithem25-auto",
          demo: "#",
        },
        {
          id: 4,
          title: "Telegram Trade Copier Bot",
          category: "automation",
          badge: "Automation Bot",
          desc: "Automation bot for real-time trade copying from Telegram channels via custom API protocols.",
          tags: ["Python", "Telegram API", "n8n", "Airtable"],
          github: "https://github.com/haithem25-auto",
          demo: "#",
        },
      ],
    },
    skills: {
      badge: "TECHNICAL EXPERTISE",
      title: "Skills & Technologies",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Ready to build something smart, modern and impactful together? Send a direct message below.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      sendButton: "Send Message",
      emailDirect: "Email Direct",
      whatsappDirect: "WhatsApp Direct",
    },
  },
};

function App() {
  const [lang, setLang] = useState("ar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [filter, setFilter] = useState("all");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:haithembakhouche23@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)} (Email: ${formData.email})`;
    window.location.href = mailtoUrl;
  };

  const navItems = ["about", "projects", "skills", "contact"];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "⚡",
      skills: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "HTML5 / CSS3"],
    },
    {
      title: "AI & Automation",
      icon: "🤖",
      skills: ["n8n Workflows", "OpenRouter / LLM APIs", "Webhooks Integration", "AI Image & Prompt Design", "WhatsApp / Telegram Bots"],
    },
    {
      title: "Backend & Cloud",
      icon: "🗄️",
      skills: ["Supabase (PostgreSQL)", "REST APIs & Webhooks", "Netlify Deployment", "Airtable Backend", "Row Level Security (RLS)"],
    },
    {
      title: "Core & Business Tools",
      icon: "💡",
      skills: ["Git / GitHub Workflow", "Google Places API", "System Architecture", "SaaS Product Design", "Problem Solving & Logic"],
    },
  ];

  const filteredProjects = filter === "all" ? t.projects.items : t.projects.items.filter((p) => p.category === filter);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #07111f, #0d1b2a)",
        color: "white",
        padding: "20px",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <style>{styleSheet}</style>

      {/* Navbar المصحح */}
      <nav
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: "1200px",
          padding: "14px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 100,
          background: scrolled ? "rgba(7, 17, 31, 0.85)" : "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "18px",
          transition: "background 0.3s ease",
          direction: "ltr",
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ color: "#00d4ff", margin: 0, fontSize: "1.5rem", fontWeight: "800", flexShrink: 0 }}>
          Haithem
        </h2>

        {isMobile ? (
          <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              style={{
                background: "rgba(0, 212, 255, 0.15)",
                color: "#00d4ff",
                border: "1px solid rgba(0, 212, 255, 0.4)",
                padding: "6px 14px",
                borderRadius: "20px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "0.85rem",
              }}
            >
              {lang === "en" ? "العربية" : "EN"}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "1.8rem",
                cursor: "pointer",
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

            {menuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "50px",
                  right: "0",
                  minWidth: "180px",
                  background: "rgba(13, 27, 42, 0.95)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "14px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  textAlign: "left",
                }}
              >
                {navItems.map((item) => (
                  <span
                    key={item}
                    className="nav-link"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => scrollToSection(item)}
                  >
                    {t.nav[item]}
                  </span>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
            {navItems.map((item) => (
              <span
                key={item}
                className="nav-link"
                style={{ textTransform: "capitalize", fontWeight: "500" }}
                onClick={() => scrollToSection(item)}
              >
                {t.nav[item]}
              </span>
            ))}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              style={{
                background: "rgba(0, 212, 255, 0.15)",
                color: "#00d4ff",
                border: "1px solid rgba(0, 212, 255, 0.4)",
                padding: "6px 14px",
                borderRadius: "20px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "0.85rem",
                transition: "all 0.2s ease",
              }}
            >
              {lang === "en" ? "العربية" : "EN"}
            </button>
          </div>
        )}
      </nav>

      {/* Background Blur Effect */}
      <div
        style={{
          position: "absolute",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "#00d4ff",
          filter: "blur(140px)",
          opacity: "0.15",
          top: "120px",
          left: "-60px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Hero Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "140px",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1.2", minWidth: "300px" }}>
          <p style={{ color: "#00d4ff", letterSpacing: "2px", marginBottom: "14px", fontWeight: "600" }}>
            {t.hero.badge}
          </p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: "1.1",
              marginBottom: "22px",
              fontWeight: "800",
              letterSpacing: "-1px",
              animation: "fadeUp 1.1s ease",
            }}
          >
            {t.hero.title1}<br />{t.hero.title2}
          </h1>
          <p style={{ color: "#94a3b8", lineHeight: "1.8", maxWidth: "560px", fontSize: "1.1rem" }}>
            {t.hero.desc}
          </p>
          <div style={{ marginTop: "34px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button
              onClick={() => scrollToSection("projects")}
              style={{
                background: "#00d4ff",
                color: "black",
                border: "none",
                padding: "14px 28px",
                borderRadius: "30px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {t.hero.explore}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid #00d4ff",
                padding: "14px 28px",
                borderRadius: "30px",
                cursor: "pointer",
              }}
            >
              {t.hero.contact}
            </button>
          </div>
        </div>

        <div style={{ flex: "1", minWidth: "300px", display: "flex", justifyContent: "center", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background: "#00d4ff",
              filter: "blur(120px)",
              opacity: "0.15",
              pointerEvents: "none",
            }}
          />
          <img
            src={haithemImg}
            alt="Haithem Abdelwakil"
            style={{
              width: "380px",
              maxWidth: "100%",
              height: "460px",
              objectFit: "cover",
              borderRadius: "28px",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.45)",
              animation: "floatImage 4s ease-in-out infinite",
              padding: "6px",
              background: "rgba(255, 255, 255, 0.03)",
            }}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ maxWidth: "900px", margin: "0 auto", padding: "100px 0", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", color: "#00d4ff", marginBottom: "20px" }}>{t.about.title}</h2>
        <p style={{ color: "#94a3b8", lineHeight: "1.9", fontSize: "1.08rem" }}>
          {t.about.desc}
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 0", textAlign: "center" }}>
        <p style={{ color: "#00d4ff", letterSpacing: "2px", fontSize: "0.9rem", fontWeight: "bold", textTransform: "uppercase" }}>
          {t.projects.badge}
        </p>
        <h2 style={{ fontSize: "2.8rem", color: "#ffffff", marginBottom: "30px", fontWeight: "800" }}>
          {t.projects.title}
        </h2>

        {/* Filter Tabs */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "50px" }}>
          {t.projects.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              style={{
                background: filter === cat.id ? "#00d4ff" : "rgba(255, 255, 255, 0.05)",
                color: filter === cat.id ? "#000" : "#ffffff",
                border: filter === cat.id ? "1px solid #00d4ff" : "1px solid rgba(255, 255, 255, 0.1)",
                padding: "10px 22px",
                borderRadius: "30px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "0.95rem",
                transition: "all 0.3s ease",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(10px)",
                padding: "30px",
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: lang === "ar" ? "right" : "left",
                position: "relative",
                transition: "all 0.35s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.4)";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 212, 255, 0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div>
                <span
                  style={{
                    display: "inline-block",
                    background: "rgba(0, 212, 255, 0.1)",
                    color: "#00d4ff",
                    padding: "4px 12px",
                    borderRadius: "12px",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    marginBottom: "16px",
                    border: "1px solid rgba(0, 212, 255, 0.2)",
                  }}
                >
                  {project.badge}
                </span>

                <h3 style={{ fontSize: "1.5rem", color: "#fff", marginBottom: "12px", fontWeight: "700" }}>
                  {project.title}
                </h3>

                <p style={{ color: "#94a3b8", lineHeight: "1.7", fontSize: "0.98rem", marginBottom: "20px" }}>
                  {project.desc}
                </p>
              </div>

              <div>
                {/* Tech Stack Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px", justifyContent: lang === "ar" ? "flex-end" : "flex-start" }}>
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        color: "#cbd5e1",
                        padding: "4px 10px",
                        borderRadius: "8px",
                        fontSize: "0.8rem",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: "flex", gap: "12px" }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      flex: 1,
                      textAlign: "center",
                      background: "#00d4ff",
                      color: "#000",
                      padding: "10px 0",
                      borderRadius: "14px",
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                    }}
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      flex: 1,
                      textAlign: "center",
                      border: "1px solid rgba(0, 212, 255, 0.5)",
                      color: "#fff",
                      padding: "10px 0",
                      borderRadius: "14px",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 0", textAlign: "center" }}>
        <p style={{ color: "#00d4ff", letterSpacing: "2px", fontSize: "0.9rem", fontWeight: "bold", textTransform: "uppercase" }}>
          {t.skills.badge}
        </p>
        <h2 style={{ fontSize: "2.8rem", color: "#ffffff", marginBottom: "50px", fontWeight: "800" }}>
          {t.skills.title}
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "25px" }}>
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(12px)",
                padding: "30px 24px",
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                textAlign: "left",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <span style={{ fontSize: "1.8rem" }}>{cat.icon}</span>
                <h3 style={{ fontSize: "1.25rem", color: "#00d4ff", margin: 0, fontWeight: "700" }}>
                  {cat.title}
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      color: "#cbd5e1",
                      padding: "10px 14px",
                      borderRadius: "12px",
                      fontSize: "0.92rem",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{skill}</span>
                    <span style={{ height: "6px", width: "6px", borderRadius: "50%", background: "#00d4ff", boxShadow: "0 0 8px #00d4ff" }}></span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ maxWidth: "700px", margin: "0 auto", padding: "100px 0", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", color: "#00d4ff", marginBottom: "15px" }}>{t.contact.title}</h2>
        <p style={{ color: "#94a3b8", lineHeight: "1.8", marginBottom: "40px" }}>
          {t.contact.subtitle}
        </p>

        <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder={t.contact.namePlaceholder}
            className="contact-input"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder={t.contact.emailPlaceholder}
            className="contact-input"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            rows="5"
            placeholder={t.contact.messagePlaceholder}
            className="contact-input"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button
            type="submit"
            style={{
              background: "#00d4ff",
              color: "black",
              padding: "14px 24px",
              borderRadius: "12px",
              border: "none",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "opacity 0.2s ease",
            }}
          >
            {t.contact.sendButton}
          </button>
        </form>

        <div style={{ display: "flex", gap: "18px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="mailto:haithembakhouche23@gmail.com"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "white",
              padding: "12px 24px",
              borderRadius: "30px",
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            {t.contact.emailDirect}
          </a>
          <a
            href="https://wa.me/213562954676"
            target="_blank"
            rel="noreferrer"
            style={{
              border: "1px solid #00d4ff",
              color: "#00d4ff",
              padding: "12px 24px",
              borderRadius: "30px",
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            {t.contact.whatsappDirect}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 0 20px 0",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          color: "#64748b",
          fontSize: "0.9rem",
        }}
      >
        <span>© {new Date().getFullYear()} Haithem Abdelwakil. All rights reserved.</span>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="https://github.com/haithem25-auto" target="_blank" rel="noreferrer" style={{ color: "#94a3b8", textDecoration: "none" }}>
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;