import Image from "next/image";

export default function Home() {
return ( <main className="min-h-screen bg-slate-950 text-white">

 {/* Navbar */}
<nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
 <div className="fixed top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full -z-10"></div>

<div className="fixed bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full -z-10"></div>
 <div className="max-w-6xl mx-auto flex justify-center items-center gap-8 p-5">

    <div className="flex items-center gap-6">

     <a href="#about" className="hover:text-cyan-400 transition duration-300">
  About
</a>

      <a href="#fyp" className="hover:text-cyan-400 transition duration-300">
        FYP
      </a>

      <a href="#projects" className="hover:text-cyan-400 transition duration-300">
        Projects
      </a>

      <a href="#contact" className="hover:text-cyan-400 transition duration-300">
        Contact
      </a>

      <a
        href="/resume.pdf"
        download
        className="bg-cyan-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-cyan-400 transition"
      >
        Resume
      </a>

    </div>

  </div>
</nav>

  {/* Hero */}
  <section className="text-center py-16 px-6">

<Image
  src="/profilepicture.png"
  alt="Alshifa Khan Khan"
  width={280}
  height={280}
  quality={100}
  priority
  unoptimized
  className="mx-auto rounded-full object-cover border-4 border-cyan-400 shadow-xl hover:scale-105 transition duration-500"
/>
<p className="mt-3 text-cyan-400 font-medium">
  BS Computer Science Graduate | COMSATS Abbottabad
</p>

    <h1 className="text-6xl font-bold text-cyan-400 mt-8">
      Alshifa Khan
    </h1>

    <h2 className="text-2xl mt-4">
      Computer Science Graduate
    </h2>

   <p className="max-w-2xl mx-auto mt-6 text-gray-300">
  Passionate about Artificial Intelligence,
  Software Development, QA Testing,
  Project Coordination and Web Technologies.
</p>
<p className="mt-4 text-cyan-400 font-semibold">
  Open to Internships and Entry-Level Opportunities
</p>

    <div className="mt-8 flex justify-center gap-4">

      <a
        href="/resume.pdf"
        download
        className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl"
      >
        Download Resume
      </a>

      <a
        href="#contact"
        className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black"
      >
        Contact Me
      </a>

    </div>

  </section>
<div className="flex flex-wrap justify-center gap-4 mt-12">

  <div className="bg-slate-800 px-5 py-3 rounded-full hover:bg-cyan-500 hover:text-black transition duration-300 cursor-pointer">
    🎓 BS Computer Science Graduate
  </div>

  <div className="bg-slate-800 px-5 py-3 rounded-full hover:bg-cyan-500 hover:text-black transition duration-300 cursor-pointer">
    💻 3+ Academic Projects
  </div>

  <div className="bg-slate-800 px-5 py-3 rounded-full hover:bg-cyan-500 hover:text-black transition duration-300 cursor-pointer">
    🤖 AI Career Coach (FYP)
  </div>

<div className="bg-slate-800 px-5 py-3 rounded-full hover:bg-cyan-500 hover:text-black transition duration-300 cursor-pointer">
    📍 Abbottabad, Pakistan
  </div>

</div>
  {/* About */}
<section
  id="about"
  className="py-16 px-8 text-center"
>

    <h2 className="text-4xl font-bold text-cyan-400">
      About Me
    </h2>

    <p className="mt-6 max-w-3xl mx-auto text-gray-300">
      I am a Computer Science graduate from COMSATS University Islamabad,
      Abbottabad Campus. My Final Year Project is Job Sensei – AI Career Coach,
      an AI-powered platform designed to help students and job seekers with
      career planning, resume generation and interview preparation.
    </p>

  </section>
 {/* Education */}
  <section className="py-10 px-8">

    <h2 className="text-4xl text-center font-bold text-cyan-400">
      Education
    </h2>

    <div className="bg-slate-800 p-8 rounded-xl mt-10 max-w-3xl mx-auto">

      <h3 className="text-2xl font-bold">
        BS Computer Science
      </h3>

      <p className="mt-3 text-gray-300">
        COMSATS University Islamabad, Abbottabad Campus
      </p>

      <p className="mt-2 text-gray-400">
        2022 – 2026
      </p>

    </div>

  </section>
  {/* FYP */}
  <section id="fyp" className="py-10 px-8">

    <h2 className="text-5xl text-center font-bold text-cyan-400">
      ⭐ Featured Project
    </h2>

    <div className="max-w-5xl mx-auto mt-10 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-10 rounded-3xl shadow-2xl hover:scale-[1.02] transition duration-500">

      <h3 className="text-3xl font-bold">
        Job Sensei – AI Career Coach
      </h3>

      <p className="mt-6 text-lg">
        AI-powered platform built as a Final Year Project to help students
        and job seekers with professional career guidance.
      </p>
      

      <ul className="mt-6 space-y-3">
        <li>✓ AI Resume Generation</li>
        <li>✓ Cover Letter Assistance</li>
        <li>✓ Mock Interview Preparation</li>
        <li>✓ Career Planning Roadmaps</li>
        <li>✓ Job Market Guidance</li>
      </ul>

      <h4 className="text-xl font-semibold mt-8">
        Technologies & Concepts
      </h4>
      <p className="mt-4 font-semibold">
  Designed to assist students and fresh graduates
  in career planning and professional growth.
</p>

      <p className="mt-2">
        AI Integration • Web Platform • Career Guidance • Resume Builder
      </p>

    </div>
    

  </section>

  {/* Projects */}
  <section id="projects" className="py-10 px-8">

    <h2 className="text-4xl text-center font-bold text-cyan-400">
      Other Academic Projects
    </h2>

    <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">

      <div className="bg-slate-800 p-6 rounded-xl">
        <h3 className="font-bold text-xl">
          Airport Management System
        </h3>

        <p className="mt-2 text-gray-300">
          Desktop Application using C#
        </p>
      </div>

      <div className="bg-slate-800 p-6 rounded-xl">
        <h3 className="font-bold text-xl">
          Unity Game Development
        </h3>

        <p className="mt-2 text-gray-300">
          3D Game Development Projects
        </p>
      </div>

    </div>

  </section>

  {/* Skills */}
  <section className="py-10 px-8">

    <h2 className="text-4xl text-center font-bold text-cyan-400">
      Skills
    </h2>

    <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">

      <div className="bg-slate-800 p-5 rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-300 cursor-pointer">💻 HTML & CSS</div>
      <div className="bg-slate-800 p-5 rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-300 cursor-pointer">⚡ Basic JavaScript</div>
      <div className="bg-slate-800 p-5 rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-300 cursor-pointer">🌐 Basic ASP.NET</div>

      <div className="bg-slate-800 p-5 rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-300 cursor-pointer">🖥️ C# Programming</div>
      <div className="bg-slate-800 p-5 rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-300 cursor-pointer">🗄️ SQL Databases</div>
      <div className="bg-slate-800 p-5 rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-300 cursor-pointer">🎮 Unity Development</div>

      <div className="bg-slate-800 p-5 rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-300 cursor-pointer">🧪 Manual Testing</div>
      <div className="bg-slate-800 p-5 rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-300 cursor-pointer">📋 Project Documentation</div>
      <div className="bg-slate-800 p-5 rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-300 cursor-pointer">📅 Project Coordination</div>

      <div className="bg-slate-800 p-5 rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-300 cursor-pointer">📝 Microsoft Word</div>
      <div className="bg-slate-800 p-5 rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-300 cursor-pointer">📊 Microsoft PowerPoint</div>
      <div className="bg-slate-800 p-5 rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-300 cursor-pointer">🤖 Machine Learning Fundamentals</div>

      <div className="bg-slate-800 p-5 rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-300 cursor-pointer">🤝 Team Collaboration</div>
      <div className="bg-slate-800 p-5 rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-300 cursor-pointer">💬 Communication Skills</div>
      <div className="bg-slate-800 p-5 rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-300 cursor-pointer">🎯 Problem Solving</div>

    </div>

  </section>



  {/* Career Interests */}
  <section className="py-10 px-8">

    <h2 className="text-4xl text-center font-bold text-cyan-400">
      Career Interests
    </h2>

    <div className="flex flex-wrap justify-center gap-4 mt-8">

      <span className="bg-cyan-500 text-black px-4 py-2 rounded-full">
        Software Development
      </span>

      <span className="bg-cyan-500 text-black px-4 py-2 rounded-full">
        QA Testing
      </span>

      <span className="bg-cyan-500 text-black px-4 py-2 rounded-full">
        Technical Support
      </span>

      <span className="bg-cyan-500 text-black px-4 py-2 rounded-full">
        Project Coordination
      </span>

      <span className="bg-cyan-500 text-black px-4 py-2 rounded-full">
        AI Applications
      </span>

    </div>

  </section>

  {/* Contact */}
  <section id="contact" className="py-20 px-6 text-center">

  <h2 className="text-5xl font-bold text-cyan-400">
    Let's Connect
  </h2>

  <p className="mt-6 text-gray-300 text-lg">
    Open to internships and entry-level opportunities.
  </p>

  <div className="mt-10 space-y-5 text-lg">

    <p>
      📧{" "}
      <a
        href="mailto:alshifakhan1411@gmail.com"
       className="border border-green-500 px-6 py-3 rounded-xl hover:bg-green-500 hover:text-black hover:scale-105 transition duration-300"
      >
       alshifakhan1411@gmail.com
      </a>
    </p>

    <p>
      📱{" "}
      <a
        href="tel:+923715266136"
        className="border border-green-500 px-6 py-3 rounded-xl hover:bg-green-500 hover:text-black hover:scale-105 transition duration-300"
      >
        03715266136
      </a>
    </p>

    <p>
      💬{" "}
      <a
        href="https://wa.me/923715266136"
        target="_blank"
        rel="noopener noreferrer"
       className="border border-green-500 px-6 py-3 rounded-xl hover:bg-green-500 hover:text-black hover:scale-105 transition duration-300"
      >
        Chat on WhatsApp
      </a>
    </p>

    <p>
      📍 Abbottabad, Pakistan
    </p>

  </div>

  <div className="mt-10 flex flex-wrap justify-center gap-4">

    <a
      href="mailto:alshifakhan1411@gmail.com"
      className="bg-cyan-500 px-6 py-3 rounded-xl text-black font-semibold hover:bg-cyan-400"
    >
      Send Email
    </a>

    <a
      href="https://wa.me/923715266136"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-green-500 px-6 py-3 rounded-xl hover:bg-green-500 hover:text-black transition"
    >
      WhatsApp Me
    </a>

  </div>

</section>

<div className="mt-12 flex justify-center">

  <div className="bg-cyan-500/10 border border-cyan-400 rounded-full px-8 py-4">

    <span className="text-cyan-300 font-semibold text-lg">
      ✨ Available for Internships • Entry-Level Roles • Tech Projects
    </span>

  </div>

</div>
 <footer className="text-center py-6 border-t border-slate-800">

  <p className="text-gray-400">
    © 2026 Alshifa Khan
  </p>

  <p className="text-gray-500 mt-2">
    Computer Science Graduate | Open to Internships
  </p>

</footer>

</main>
)};
