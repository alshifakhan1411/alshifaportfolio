"use client";

import Image from "next/image";
import { useEffect } from "react";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#timeline", label: "Timeline" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  useReveal();

  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[var(--paper)]/90 backdrop-blur-md border-b border-[var(--line)]">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-6 px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-[var(--ink)] text-[var(--paper)] flex items-center justify-center text-xs font-mono font-semibold">
              AK
            </span>
            <span className="font-medium hidden sm:block tracking-tight">
              Alshifa Khan
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-mono uppercase tracking-widest text-[var(--slate)] hover:text-[var(--ink)] transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="status-badge hidden sm:flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--teal)] bg-[var(--teal-soft)] border border-[var(--teal)]/30 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--teal)] pulse-dot"></span>
              Open to work
            </span>
            <a
              href="/resume.pdf"
              download
              className="bg-[var(--ink)] text-[var(--paper)] text-sm font-medium px-4 py-2 rounded-full hover:bg-[var(--brass)] transition"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-dot-grid border-b border-[var(--line)]">
        <div
          className="glow-orb w-[460px] h-[460px] -top-40 right-0"
          style={{ background: "rgba(169, 118, 46, 0.20)" }}
        ></div>
        <div
          className="glow-orb w-[380px] h-[380px] bottom-0 -left-24"
          style={{ background: "rgba(60, 108, 96, 0.18)" }}
        ></div>
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1.05fr_0.95fr] gap-16 items-center px-6 py-20 md:py-28">
          {/* Text column */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[var(--brass)]">
              <span className="w-6 h-px bg-[var(--brass)]"></span>
              Ref · CS-2026 · COMSATS Abbottabad
            </p>

            <h1 className="font-display text-5xl md:text-6xl font-medium mt-6 leading-[1.05]">
              Alshifa Khan
            </h1>

            <h2 className="font-display italic text-xl md:text-2xl mt-4 text-[var(--slate)]">
              Aspiring Project Manager — Coordination, Planning &amp; Delivery
            </h2>

            <p className="mt-6 text-[15px] text-[var(--slate)] max-w-xl mx-auto md:mx-0 leading-relaxed">
              Computer Science graduate with hands-on experience planning,
              coordinating and delivering software projects end-to-end. I
              enjoy turning ideas into organized, executable plans — and
              I&apos;m now looking to bring that same ownership to Project
              Management, Project Coordination and PMO roles.
            </p>

            <p className="mt-5 inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wide text-[var(--brass)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brass)]"></span>
              Open to internships &amp; entry-level PM opportunities
            </p>

            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
              <a
                href="https://github.com/alshifakhan1411"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--line)] px-6 py-3 rounded-full hover:border-[var(--ink)] transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/alshifa1411"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--line)] px-6 py-3 rounded-full hover:border-[var(--ink)] transition"
              >
                LinkedIn
              </a>
              <a
                href="#contact"
                className="border border-[var(--line)] px-6 py-3 rounded-full hover:border-[var(--ink)] transition"
              >
                Contact
              </a>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-2.5 mt-10">
              {[
                "Project Planning & Coordination",
                "Led AI Career Coach (FYP)",
                "Abbottabad, Pakistan",
              ].map((chip) => (
                <div
                  key={chip}
                  className="bg-[var(--card)] border border-[var(--line)] shadow-sm px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wide text-[var(--slate)]"
                >
                  {chip}
                </div>
              ))}
            </div>
          </div>

          {/* Photo column */}
          <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-72 h-80 md:w-80 md:h-96">
              <div
                className="absolute -left-6 top-0 bottom-0 w-px bg-[var(--line)]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, var(--slate) 0, var(--slate) 4px, transparent 4px, transparent 10px)",
                }}
              ></div>
              <span className="absolute -left-9 -top-3 text-[10px] font-mono uppercase tracking-widest text-[var(--slate)]">
                2026
              </span>
              <span className="absolute -left-9 -bottom-3 text-[10px] font-mono uppercase tracking-widest text-[var(--teal)]">
                Now
              </span>

              <Image
                src="/profilepicture.png"
                alt="Alshifa Khan"
                width={320}
                height={384}
                quality={100}
                priority
                unoptimized
                className="w-full h-full rounded-[1.75rem] object-cover border border-[var(--line)] shadow-xl"
              />

              <div className="status-badge absolute -bottom-5 left-6 bg-[var(--teal-soft)] border border-[var(--teal)]/30 shadow-md px-4 py-2.5 rounded-2xl text-xs font-mono">
                <p className="uppercase tracking-widest text-[var(--teal)]">
                  Status
                </p>
                <p className="mt-1 flex items-center gap-2 font-semibold text-[var(--ink)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--teal)] pulse-dot"></span>
                  Open to Work
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative overflow-hidden py-24 px-6 border-b border-[var(--line)]">
        <div
          className="glow-orb w-[360px] h-[360px] top-10 right-0"
          style={{ background: "rgba(169, 118, 46, 0.18)" }}
        ></div>
        <div className="relative max-w-5xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
          <div className="reveal">
            <p className="text-xs font-mono tracking-widest uppercase text-[var(--brass)]">
              About
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium mt-3">
              About Me
            </h2>

            <p className="mt-6 text-[var(--slate)] leading-relaxed">
              I&apos;m a Computer Science graduate from COMSATS University
              Islamabad, Abbottabad Campus (2026). My technical background
              gave me a solid foundation in software development, but along
              the way I discovered what I actually enjoy most: planning the
              work, coordinating with people, tracking progress and making
              sure ideas actually get shipped — not just written in code.
            </p>

            <p className="mt-4 text-[var(--slate)] leading-relaxed">
              For my Final Year Project,{" "}
              <span className="text-[var(--ink)] font-semibold">
                Job Sensei – AI Career Coach
              </span>
              , built with a team, I took the lead on project documentation
              and kept our progress organized — tracking milestones,
              maintaining clear records of decisions and requirements, and
              coordinating with teammates to keep the build on schedule. That
              experience, alongside several personal Next.js projects,
              confirmed that I want to build a career in{" "}
              <span className="text-[var(--ink)] font-semibold">
                Project Management and Project Coordination
              </span>{" "}
              — roles where I can apply the planning, organizing and
              communication skills I already use, while learning from
              experienced teams.
            </p>
          </div>

          {/* Project-brief style card */}
          <div className="reveal surface border border-[var(--line)] rounded-2xl p-7">
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono uppercase tracking-widest text-[var(--slate)]">
                Profile Brief
              </p>
              <p className="text-xs font-mono text-[var(--slate)]">#AK-01</p>
            </div>

            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-mono uppercase text-[11px] tracking-widest text-[var(--brass)]">
                  Objective
                </dt>
                <dd className="mt-1 text-[var(--ink)]">
                  Entry-level role in Project Management, Coordination or PMO
                </dd>
              </div>
              <div>
                <dt className="font-mono uppercase text-[11px] tracking-widest text-[var(--brass)]">
                  Background
                </dt>
                <dd className="mt-1 text-[var(--ink)]">
                  BS Computer Science, COMSATS Abbottabad (2026)
                </dd>
              </div>
              <div>
                <dt className="font-mono uppercase text-[11px] tracking-widest text-[var(--brass)]">
                  Focus Areas
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {["Project Management", "Coordination", "PMO", "Operations", "Tech Consulting"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="bg-[var(--brass-soft)] text-[var(--brass)] px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Timeline — alternating milestone signature element */}
      <section id="timeline" className="relative overflow-hidden bg-dot-grid py-24 px-6">
        <div
          className="glow-orb w-[420px] h-[420px] -top-32 -left-24"
          style={{ background: "rgba(169, 118, 46, 0.22)" }}
        ></div>
        <div
          className="glow-orb w-[380px] h-[380px] bottom-0 right-0"
          style={{ background: "rgba(60, 108, 96, 0.22)" }}
        ></div>

        <div className="relative max-w-4xl mx-auto">
          <p className="text-xs font-mono tracking-widest uppercase text-[var(--brass)] text-center">
            Timeline
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-center mt-3">
            The Plan So Far
          </h2>
          <p className="text-center text-[var(--slate)] mt-3 max-w-lg mx-auto text-sm">
            Milestones, not just dates — the way I&apos;d map any project.
          </p>

          <div className="relative mt-16">
            {/* connecting line */}
            <div
              className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2"
              style={{
                background:
                  "linear-gradient(to bottom, var(--brass), var(--slate), var(--teal))",
              }}
            ></div>
            <div
              className="md:hidden absolute left-[19px] top-2 bottom-2 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, var(--brass), var(--slate), var(--teal))",
              }}
            ></div>

            <div className="space-y-10 md:space-y-6">
              {[
                {
                  tag: "Mar 2022",
                  title: "Started BS Computer Science",
                  place: "COMSATS University Islamabad, Abbottabad",
                  icon: "🎓",
                  color: "var(--brass)",
                },
                {
                  tag: "2025",
                  title: "Job Sensei — Documentation & Coordination Lead",
                  place: "Final Year Project, built with a team",
                  icon: "🧭",
                  color: "var(--slate)",
                },
                {
                  tag: "2023 – 2025",
                  title: "Freelance Builds",
                  place: "Orbit Consultants · Restaurant Demo · Mah Roz Salon · Airport Mgmt",
                  icon: "🛠️",
                  color: "var(--slate)",
                },
                {
                  tag: "Jan 2026",
                  title: "Graduated — BS Computer Science",
                  place: "COMSATS Abbottabad",
                  icon: "🎓",
                  color: "var(--brass)",
                },
                {
                  tag: "Now",
                  title: "Open to PM & Coordination Roles",
                  place: "Internships & entry-level opportunities",
                  icon: "🚀",
                  color: "var(--teal)",
                  current: true,
                },
              ].map((m, i) => (
                <div
                  key={m.tag}
                  className="reveal relative md:grid md:grid-cols-[1fr_44px_1fr] md:items-center md:gap-6"
                >
                  {/* mobile layout */}
                  <div className="flex md:hidden gap-4">
                    <span
                      className={`relative z-10 flex-none w-10 h-10 rounded-full flex items-center justify-center text-base border-4 border-[var(--paper)] ${
                        m.current ? "pulse-dot" : ""
                      }`}
                      style={{ background: m.color }}
                    >
                      {m.icon}
                    </span>
                    <div
                      className={`surface flex-1 rounded-2xl p-5 border ${
                        m.current ? "border-[var(--teal)]/40" : "border-[var(--line)]"
                      }`}
                    >
                      <span
                        className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full"
                        style={{ background: `${m.color}1A`, color: m.color }}
                      >
                        {m.tag}
                      </span>
                      <p className="font-medium mt-2 text-sm">{m.title}</p>
                      <p className="text-[var(--slate)] text-sm mt-1">{m.place}</p>
                    </div>
                  </div>

                  {/* desktop alternating layout */}
                  <div
                    className={`hidden md:block ${
                      i % 2 === 0 ? "text-right" : "col-start-3 text-left"
                    }`}
                  >
                    <div
                      className={`surface inline-block text-left rounded-2xl p-5 border max-w-sm ${
                        m.current ? "border-[var(--teal)]/40" : "border-[var(--line)]"
                      }`}
                    >
                      <span
                        className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full"
                        style={{ background: `${m.color}1A`, color: m.color }}
                      >
                        {m.tag}
                      </span>
                      <p className="font-medium mt-2 text-sm">{m.title}</p>
                      <p className="text-[var(--slate)] text-sm mt-1">{m.place}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex justify-center">
                    <span
                      className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-sm border-4 border-[var(--paper)] shadow-sm ${
                        m.current ? "pulse-dot" : ""
                      }`}
                      style={{ background: m.color }}
                    >
                      {m.icon}
                    </span>
                  </div>

                  {i % 2 === 0 && <div className="hidden md:block"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative overflow-hidden bg-dot-grid py-24 px-6 border-t border-[var(--line)]">
        <div
          className="glow-orb w-[400px] h-[400px] top-0 left-1/2 -translate-x-1/2"
          style={{ background: "rgba(60, 108, 96, 0.16)" }}
        ></div>
        <p className="relative text-xs font-mono tracking-widest uppercase text-[var(--brass)] text-center">
          Projects
        </p>
        <h2 className="relative font-display text-4xl md:text-5xl font-medium text-center mt-3">
          Selected Work
        </h2>

        {/* Featured Project */}
        <div className="reveal relative max-w-5xl mx-auto mt-14 surface border border-[var(--line)] rounded-3xl shadow-sm p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 bg-[var(--teal-soft)] text-[var(--teal)] text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--teal)]"></span>
              Shipped
            </span>
            <span className="text-xs font-mono text-[var(--slate)]">
              PRJ-01 · Final Year Project
            </span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-medium mt-4">
            Job Sensei – AI Career Coach
          </h3>

          <p className="mt-5 text-[var(--slate)] leading-relaxed">
            An AI-powered platform built to help students and job seekers
            with resume generation, mock interviews and career planning
            roadmaps.
          </p>

          <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm text-[var(--ink)]">
            {[
              "AI Resume Generation",
              "Cover Letter Assistance",
              "Mock Interview Preparation",
              "Career Planning Roadmaps",
              "Job Market Guidance",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brass)]"></span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 bg-[var(--card)] rounded-xl p-5 border-l-2 border-[var(--brass)]">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--brass)]">
              My Role — Documentation &amp; Coordination
            </p>
            <p className="mt-2 text-[var(--slate)] leading-relaxed">
              Built as a team project. I led the project documentation —
              maintaining the scope, requirements and milestone records
              (resume builder → interview prep → career roadmap) — and
              coordinated with teammates and our supervisor to keep everyone
              aligned and the timeline on track from proposal to final
              delivery.
            </p>
          </div>

          <p className="mt-6 text-[11px] font-mono uppercase tracking-widest text-[var(--slate)]">
            Technologies
          </p>
          <p className="mt-1 text-sm text-[var(--ink)]">
            Next.js • AI Integration • Web Platform • Resume Builder
          </p>

          <div className="mt-6">
            <a
              href="https://github.com/alshifakhan1411"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--line)] px-5 py-2 rounded-full hover:border-[var(--ink)] transition text-sm font-medium"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-5xl mx-auto">
          {[
            {
              id: "PRJ-02",
              title: "Orbit Consultants",
              desc: "A modern consulting business website built for a professional services brand.",
              note: "Planned the site's information architecture first — mapping Navbar, Hero, Services, Projects, About, Why Us and Contact as separate sections — then coordinated the build order into one consistent client-ready site.",
              tech: "Next.js • TypeScript • CSS",
              link: "https://orbit-consultant.vercel.app",
            },
            {
              id: "PRJ-03",
              title: "Restaurant Demo",
              desc: "A responsive cafe website showcasing a menu, ambiance and contact details.",
              note: "Planned the page structure around real cafe needs (menu, hero, about, contact) and prioritized a clean, mobile-friendly layout to match how a customer would actually browse the site.",
              tech: "Next.js • React.js • CSS • JavaScript",
              link: "https://restuarent-demo-project.vercel.app/",
            },
            {
              id: "PRJ-04",
              title: "Mah Roz Salon",
              desc: "A responsive salon landing page with service showcase, gallery and testimonials.",
              note: "Planned the content sections (services, gallery, testimonials, contact) to match how a real salon would want to present itself, then coordinated each section's design and build in sequence.",
              tech: "React • JavaScript • CSS • HTML",
              link: "https://mah-roz-salon-rzf8.vercel.app/",
            },
            {
              id: "PRJ-05",
              title: "Airport Management System",
              desc: "Desktop application built in C# to manage flights, staff and passenger records.",
              note: "Planned the database schema and module breakdown before development, then coordinated build order across each module (flights → staff → passengers).",
              tech: null,
              link: null,
            },
          ].map((p) => (
            <div
              key={p.id}
              className="reveal surface border border-[var(--line)] rounded-2xl hover:shadow-md hover:-translate-y-1 transition p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <span className="text-[11px] font-mono text-[var(--slate)]">
                  {p.id}
                </span>
              </div>
              <p className="mt-2 text-[var(--slate)] text-sm leading-relaxed">
                {p.desc}
              </p>
              <div className="mt-4 bg-[var(--card)] rounded-lg p-4 border-l-2 border-[var(--teal)]">
                <p className="text-sm text-[var(--slate)] leading-relaxed">
                  {p.note}
                </p>
              </div>
              {p.tech && (
                <p className="mt-4 text-[11px] font-mono uppercase tracking-widest text-[var(--slate)]">
                  {p.tech}
                </p>
              )}
              {p.link && (
                <div className="mt-4">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--ink)] font-medium text-sm hover:text-[var(--brass)] transition"
                  >
                    View Demo →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative overflow-hidden bg-dot-grid py-24 px-6">
        <div
          className="glow-orb w-[380px] h-[380px] -bottom-24 -left-16"
          style={{ background: "rgba(169, 118, 46, 0.20)" }}
        ></div>
        <p className="relative text-xs font-mono tracking-widest uppercase text-[var(--brass)] text-center">
          Skills
        </p>
        <h2 className="relative font-display text-3xl md:text-4xl font-medium text-center mt-3">
          What I Bring
        </h2>

        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mt-14">
          {/* PM Toolkit column */}
          <div className="reveal surface border border-[var(--line)] rounded-2xl p-6">
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--brass)]">
              Column · PM Toolkit
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Project Management",
                "Project Planning",
                "Project Coordination",
                "Meeting Planning",
                "Meeting Coordination",
                "Task Coordination",
                "Process Coordination",
                "Scheduling",
                "Cross-functional Coordination",
                "Time Management",
                "Organization Skills",
                "Administrative Assistance",
                "Documentation",
                "Communication",
                "Team Collaboration",
                "Problem Solving",
                "Attention to Detail",
                "Research Skills",
                "Google Sheets",
                "Microsoft Excel",
                "Microsoft Word",
                "Microsoft PowerPoint",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[var(--brass-soft)] text-[var(--ink)] px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ease-out cursor-default hover:-translate-y-0.5 hover:scale-105 hover:bg-[var(--brass)] hover:text-white hover:shadow-md hover:shadow-[var(--brass)]/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Technical column */}
          <div className="reveal surface border border-[var(--line)] rounded-2xl p-6">
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--slate)]">
              Column · Technical
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Next.js",
                "C#",
                "SQL Databases",
                "Git & GitHub",
                "Manual Testing",
                "MS PowerPoint",
                "MS Word",
                "ML Fundamentals",
                "Vercel",
                "VS Code",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[var(--teal-soft)] text-[var(--ink)] px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ease-out cursor-default hover:-translate-y-0.5 hover:scale-105 hover:bg-[var(--teal)] hover:text-white hover:shadow-md hover:shadow-[var(--teal)]/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[var(--ink)] text-[var(--paper)] py-24 px-6 text-center">
        <p className="text-xs font-mono tracking-widest uppercase text-[var(--brass)]">
          Contact
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium mt-3">
          Let&apos;s Connect
        </h2>

        <p className="mt-6 text-white/70 text-lg max-w-xl mx-auto">
          Open to internships and entry-level opportunities in Project
          Management, Project Coordination, PMO and Operations.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 text-sm">
          <a
            href="mailto:alshifakhan1411@gmail.com"
            className="border border-white/15 px-6 py-3 rounded-full hover:bg-white hover:text-[var(--ink)] transition"
          >
            alshifakhan1411@gmail.com
          </a>
          <a
            href="tel:+923715266136"
            className="border border-white/15 px-6 py-3 rounded-full hover:bg-white hover:text-[var(--ink)] transition"
          >
            03715266136
          </a>
          <a
            href="https://wa.me/923715266136"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/15 px-6 py-3 rounded-full hover:bg-white hover:text-[var(--ink)] transition"
          >
            Chat on WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/alshifa1411"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/15 px-6 py-3 rounded-full hover:bg-white hover:text-[var(--ink)] transition"
          >
            LinkedIn
          </a>
          <p className="text-white/40 text-xs font-mono uppercase tracking-widest mt-2">
            Abbottabad, Pakistan
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:alshifakhan1411@gmail.com"
            className="bg-[var(--brass)] text-[var(--ink)] font-semibold px-6 py-3 rounded-full hover:bg-[var(--paper)] transition"
          >
            Send Email
          </a>
          <a
            href="https://wa.me/923715266136"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/25 px-6 py-3 rounded-full hover:bg-white hover:text-[var(--ink)] transition"
          >
            WhatsApp Me
          </a>
        </div>
      </section>

      <footer className="bg-[#0B1120] text-center py-8">
        <p className="text-white/60 text-sm">© 2026 Alshifa Khan</p>
        <p className="text-white/35 mt-2 text-xs font-mono uppercase tracking-widest">
          Aspiring Project Manager · Open to Internships &amp; Entry-Level Roles
        </p>
      </footer>
    </main>
  );
}