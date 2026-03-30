import presentations from "../assets/projects/presentations.png";
import resume from "../assets/projects/resume.png";
import imagify from "../assets/projects/imagify.png";

const projects = [
  {
    id: 1,
    name: "AudienceAI",
    category: "SaaS & Real-time AI",
    description: "A premium, real-time presentation platform with AI-powered question clustering, live interactive polling, and stunning glassmorphic interfaces.",
    tech: ["React", "Node.js", "Socket.io", "OpenAI"],
    image: presentations,
    github: "https://github.com/SimerjeetSingh304/AudienceAI",
    live: "https://audienceai-1.onrender.com/",
    featured: true,
  },
  {
    id: 2,
    name: "AI Resume Optimizer",
    category: "AI Productivity",
    description: "An advanced Resume ATS score generator and optimizer that helps job seekers improve their visibility to recruiters.",
    tech: ["Next.js", "Google Gemini", "Tailwind CSS", "Clerk"],
    image: resume,
    github: "https://github.com/SimerjeetSingh304/ai-resume-optimizer",
    live: "https://ai-resume-brown.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    name: "Imagify",
    category: "AI Image Generation",
    description: "A state-of-the-art SaaS platform that transforms text prompts into stunning, high-quality images using advanced generative AI models.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: imagify,
    github: "https://github.com/SimerjeetSingh304/imagify",
    live: "https://imageapp-sigma.vercel.app/",
    featured: true,
  },
];

export default projects;
