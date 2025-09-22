import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrainCircuit , Workflow , Eye , Download } from "lucide-react";
import UpworkReviews from "./UpworkReviews"; 

import {
  Github,
  Linkedin,
  Mail,
  Globe,
  MapPin,
  Briefcase,
  Calendar,
  Sparkles,
  Sun,
  Moon,
  ExternalLink,
  Phone,
} from "lucide-react";

// ✅ Import tech icons
import {
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiDjango,
  SiFlask,   
  SiPhp,
  SiTypescript,
  SiLaravel,
  SiJquery,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiVite,
  SiGit,
  SiGithub,
  SiDocker,      
  SiRender,     
  SiVercel,      
  SiFastapi,    
  SiTensorflow,  
  SiPytorch,   
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

// ------------------------- CONFIG --------------------------
const PROFILE = {
  name: "Ghulam Mustafa",
  title: "Full Stack Developer",
  location: "Lahore, Pakistan",
  email: "yunusbutt676@gmail.com",
  phone: "+92-304-5478602",
  summary:
    "Results-driven developer with 2+ years of Full Stack and 1 year of Frontend experience, skilled in building scalable web applications using MERN, MEAN, Laravel, Python (Flask/Django), and RESTful APIs. Proficient in AI/ML integrations with FastAPI, as well as Docker and containerization. Experienced in deploying applications on Vercel and Render. Delivered projects across course management, expense tracking, inventory dashboards, AI Smart Assistant, job portals, and e-commerce platforms. Recognized for problem-solving, adaptability, and writing clean, efficient code.",
  avatar:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=600&auto=format&fit=crop",
};

const LINKS = {
  github: "https://github.com/dashboard",
  linkedin: "https://www.linkedin.com/in/ghulam-mustafa-620142380/",
};

// ------------------------- ICON MAP --------------------------
const SKILL_ICONS = {
  "React (with Vite)": <SiReact className="text-blue-500" />,
  React: <SiReact className="text-blue-500" />,
  Angular: <SiAngular className="text-red-600" />,
  "Node.js": <SiNodedotjs className="text-green-600" />,
  Express: <SiExpress className="text-gray-700" />,
  "Express.js": <SiExpress className="text-gray-700" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Python: <SiPython className="text-purple-500" />,
  Django: <SiDjango className="text-green-700" />,
  Flask: <SiFlask className="text-gray-700" />,           
  FastAPI: <SiFastapi className="text-green-500" />,
  PHP: <SiPhp className="text-indigo-600" />,
  "Core-PHP": <SiPhp className="text-indigo-400" />,
  JQuery: <SiJquery className="text-blue-400" />,
  Laravel: <SiLaravel className="text-red-500" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  MySQL: <SiMysql className="text-blue-600" />,
  TailwindCSS: <SiTailwindcss className="text-sky-500" />,
  Bootstrap: <SiBootstrap className="text-purple-600" />,
  Postman: <SiPostman className="text-orange-500" />,
  Vite: <SiVite className="text-yellow-400" />,
  Gitbash: <SiGit className="text-red-500" />,
  GitHub: <SiGithub className="text-gray-900 dark:text-white" />,
  Docker: <SiDocker className="text-blue-500" />,          
  Render: <SiRender className="text-purple-600" />,       
  Vercel: <SiVercel className="text-black dark:text-white" />, 
  TensorFlow: <SiTensorflow className="text-orange-500" />,  
  "RESTful APIs": <Workflow className="text-purple-500" />, 
  PyTorch: <SiPytorch className="text-red-600" />, 
  "Computer Vision": <Sparkles className="text-pink-500" />,
  "Scikit-learn": <SiScikitlearn className="text-blue-400" />,
  Pandas: <SiPandas className="text-purple-500" />,
  NumPy: <SiNumpy className="text-blue-500" />,
  NLP: <BrainCircuit className="text-pink-500" />,
  "JavaScript (ES6+)": <SiJavascript className="text-yellow-400" />,
  HTML5: <SiHtml5 className="text-orange-500" />,
  CSS3: <SiCss3 className="text-blue-500" />,
};

// ------------------------- SKILLS --------------------------
const SKILLS = {
  frontend: [
    "React (with Vite)",
    "Angular",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "Bootstrap",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "TypeScript",
    "Python",
    "Django",
    "Flask",      
    "FastAPI",   
    "PHP",
    "Core-PHP",
    "JQuery",
    "Laravel",
    "RESTful APIs",
  ],
  database: ["MongoDB", "MySQL"],
  tools: ["Gitbash", "GitHub", "Vite", "Vercel", "Render", "Docker", "Postman"],
  ai_ml: ["TensorFlow", "PyTorch", "Computer Vision", "Scikit-learn", "Pandas", "NumPy", "NLP"],
};

// ------------------------- PROJECTS --------------------------
const PROJECTS = [
  {
    name: "MEAN-SET",
    description:
      "Smart Expenses Tracker is a full-stack application built with Angular 19 on the frontend and Node.js + Express + MongoDB on the backend. It provides role-based access control where admins can manage expenses and users can view their dashboard. The app demonstrates modern Angular features, token-based authentication, and secure API integration.",
    stack: ["Angular", "Node.js", "Express.js", "MongoDB"],
    links: { code: "https://github.com/yunusbutt676-commits/mean-SET.git" },
  },
  {
    name: "MERN-Courses-Management",
    description:
      "A full-featured MERN (MongoDB, Express, React, Node.js) stack application with role-based authentication and authorization, providing a smooth user experience with modern UI and robust backend features.",
    stack: ["React (with Vite)", "Node.js", "Express.js", "MongoDB"],
    links: { code: "https://github.com/yunusbutt676-commits/mern-courses-management.git" },
  },
  {
    name: "Python-Django",
    description:
      "A real-time inventory and sales dashboard built with Django, Tailwind CSS, and Chart.js.Tracks orders, stock levels, and top-selling products.",
    stack: ["Python", "Django", "MySQL"],
    links: { code: "https://github.com/yunusbutt676-commits/Python-Django.git" },
  },
  {
    name: "Advanced-Api",
    description:
      "A full-featured, multi-tenant, role-based project management RESTful API built with Node.js, Express, and MongoDB.Supports real-time notifications via Server-Sent Events (SSE) and secure JWT authentication with role-based authorization.",
    stack: ["Node.js", "Express.js", "MongoDB"],
    links: { code: "https://github.com/yunusbutt676-commits/Advanced-Api.git" },
  },
  {
    name: "E-Commerce",
    description:
      "Laravel e-commerce platform with Stripe payments, social login (Google/Facebook), and a fully functional cart system.",
    stack: ["Laravel", "PHP", "MySQL"],
    links: { code: "#" },
  },
  {
    name: "NovaLearn-AI",
    description:
      "A full-stack AI-powered learning platform with role-based dashboards, course management, and secure payments via Stripe (subscribe/cancel with webhooks). It integrates AI services like an AI tutor (LLM chat), quiz generator, and text summarizer.",
    stack: ["Node.js", "Express.js", "MongoDB", "TypeScript", "FastAPI", "React"],
    links: { code: "https://github.com/yunusbutt676-commits/NovaLearn-AI" },
  },
  {
    name: "Job Portal",
    description:
      "A full-stack Job Portal built with Flask (backend), React (frontend), and MySQL (database). It supports role-based authentication (Admin/User), CRUD operations on jobs, and an AI-powered job recommendation system using NLP and cosine similarity.",
    stack: ["React", "Flask", "MySQL"],
    links: { code: "https://github.com/yunusbutt676-commits/Flask-React" },
  },
  {
    name: "AI Smart Assistant",
    description:
      "An advanced AI-powered assistant that blends Computer Vision and LLMs.It detects age, gender, and emotions in real-time via webcam or images.Supports face registration & recognition using embeddings stored in MongoDB.Integrates a context-aware chatbot powered by Groq LLM that adapts to identity & emotions.",
    stack: ["HTML5", "TailwindCSS", "FastAPI", "MongoDB", "JavaScript (ES6+)", "TensorFlow", "PyTorch", "Computer Vision", "Scikit-learn", "Pandas", "NumPy", "NLP"],
    links: { code: "https://github.com/yunusbutt676-commits/ai_smart_assistant" },
  },
];

// ------------------------- EXPERIENCE --------------------------
const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "Geniune Tech Softwares",
    period: "July 2023 – Present",
    points: [
      "Developed scalable Multi Stack Web Applications.",
      "MERN/MEAN/LARAVEL/PYTHON-DJANGO-FLASK-FASTAPI.",
      "AI/ML Web Integrations.",
      "Implemented secure RESTFUL APIs and optimized DB queries for performance.",
      "Collaborated with design & marketing teams for product launches.",
    ],
  },
  {
    role: "Front End Developer",
    company: "Shan Tech Softwares",
    period: "June 2022 – May 2023",
    points: [
      "Built responsive web interfaces with React and Tailwind.",
      "Integrated APIs with frontend and optimized user experience.",
    ],
  },
];

// ------------------------- EDUCATION --------------------------
const EDUCATION = [
  { degree: "BS Computer Science", school: "University of Lahore", period: "2018 – 2022" },
  { degree: "ICS", school: "PGC Muslim Town", period: "2015 – 2017" },
  { degree: "Matric", school: "Crescent Model School", period: "2005 – 2015" },
];

// ------------------------- LANGUAGES --------------------------
const LANGUAGES = ["English", "Punjabi", "Urdu"];

// ------------------------- BADGE COMPONENT --------------------------
const Badge = ({ name }) => (
  <span className="flex items-center gap-2 px-3 py-1 text-sm border rounded-full bg-gray-50 dark:bg-gray-700">
    {SKILL_ICONS[name] && (
      <span className="w-7 h-7 flex items-center justify-center 
                      drop-shadow-md brightness-125">
        {React.cloneElement(SKILL_ICONS[name], {
          className: `${SKILL_ICONS[name].props.className} w-7 h-7`
        })}
      </span>
    )}
    <span className="font-medium">{name}</span>
  </span>
);

// ------------------------- SECTIONS --------------------------
const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="scroll-mt-24 py-16" aria-label={title}>
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center gap-3 mb-8">
        <Icon className="h-8 w-8" />
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </section>
);

const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm font-medium hover:opacity-80 transition-opacity">
    {children}
  </a>
);

// ------------------------- MAIN COMPONENT --------------------------
export default function Portfolio() {

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 dark:from-gray-900 dark:via-gray-950 dark:to-black dark:text-gray-100 transition-colors duration-500">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/80 border-b dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">{PROFILE.name}</span>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#ai-ml">AI/ML</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#reviews">Testimonials</NavLink> 
              <NavLink href="#contact">Contact</NavLink>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-center" // center all content
          >
            <span className="inline-block mb-4 px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full">
              Open to Opportunities
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {PROFILE.title}
            </h1>
            <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-5xl mx-auto">
              {PROFILE.summary}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="#projects" className="px-4 py-2 bg-black text-white rounded-lg">View Projects</a>
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-lg flex items-center">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-lg flex items-center">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
              {/* View Online */}
              <a
                href="/CVS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition"
              >
                <Eye className="w-5 h-5" />
                View CV
              </a>

              {/* Download */}
              <a
                href="/CVS.pdf"
                download="Ghulam-Mustafa-CV.pdf"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>          
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-4 w-4" /> {PROFILE.location}
              </span>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Skills */}
      <Section id="skills" title="Skills" icon={Briefcase}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border rounded-xl shadow p-4 bg-white dark:bg-gray-800">
            <h3 className="font-semibold mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.frontend.map((s) => <Badge key={s} name={s} />)}
            </div>
          </div>
          <div className="border rounded-xl shadow p-4 bg-white dark:bg-gray-800">
            <h3 className="font-semibold mb-3">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.backend.map((s) => <Badge key={s} name={s} />)}
            </div>
          </div>
          <div className="border rounded-xl shadow p-4 bg-white dark:bg-gray-800">
            <h3 className="font-semibold mb-3">Database</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.database.map((s) => <Badge key={s} name={s} />)}
            </div>
          </div>
          <div className="border rounded-xl shadow p-4 bg-white dark:bg-gray-800">
            <h3 className="font-semibold mb-3">Tools & Testing</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.tools.map((s) => <Badge key={s} name={s} />)}
            </div>
          </div>
        </div>
      </Section>
      
      {/* AI/ML Skills */}
        <Section id="ai-ml" title="AI / ML Integration" icon={Sparkles}>
          <div className="flex gap-3 flex-wrap">
            {SKILLS.ai_ml.map((s) => (
              <Badge key={s} name={s} />
            ))}
          </div>
        </Section>

      <UpworkReviews />

      {/* Projects */}
      <Section id="projects" title="Featured Projects" icon={ExternalLink}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <motion.div
              key={p.name}
              whileHover={{ y: -4 }}
              className="border rounded-xl shadow bg-white dark:bg-gray-800 flex flex-col"
            >
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.stack.map((t) => <Badge key={t} name={t} />)}
                </div>
                <div className="mt-auto flex gap-2 pt-4">
                  <a href={p.links.code} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded text-sm flex items-center">
                    <Github className="mr-1 h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" icon={Calendar}>
        <div className="grid md:grid-cols-2 gap-6">
          {EXPERIENCE.map((e) => (
            <div key={e.role} className="border rounded-xl shadow bg-white dark:bg-gray-800 p-4">
              <h3 className="text-lg font-semibold">{e.role} — {e.company}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{e.period}</p>
              <ul className="mt-3 text-sm text-gray-600 dark:text-gray-300 space-y-2">
                {e.points.map((pt, i) => <li key={i}>• {pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education" icon={Briefcase}>
        <div className="grid md:grid-cols-3 gap-6">
          {EDUCATION.map((edu, i) => (
            <div key={i} className="border rounded-xl shadow bg-white dark:bg-gray-800 p-4">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-sm text-gray-500">{edu.school}</p>
              <p className="text-xs text-gray-400">{edu.period}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Languages */}
      <Section id="languages" title="Languages" icon={Globe}>
        <div className="flex gap-3 flex-wrap">
          {LANGUAGES.map((lang) => (
            <span key={lang} className="px-3 py-1 bg-gray-100 dark:bg-white-800 border rounded">{lang}</span>
          ))}
        </div>
      </Section>

      {/* Contact (WhatsApp + Links) */}
      <Section id="contact" title="Contact" icon={Mail}>
        <div className="border rounded-xl shadow bg-white dark:bg-gray-800 p-6 text-sm space-y-3">
          <h3 className="font-semibold text-lg mb-4">Let’s connect</h3>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
            <Github className="h-5 w-5" /> GitHub
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
          <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 hover:underline">
            <Mail className="h-5 w-5" /> {PROFILE.email}
          </a>
          <a href="https://wa.me/923045478602" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline text-green-600">
            <Phone className="h-5 w-5" /> WhatsApp
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:underline">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
