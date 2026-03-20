import ai_chat from "../assets/projects/ai_chat.png";
import object_detection from "../assets/projects/object_detection.png";
import ecommerce from "../assets/projects/ecommerce.png";

const projects = [
  {
    id: 1,
    name: "AI Chat Assistant",
    category: "Generative AI",
    description:
      "A sophisticated conversational platform utilizing LangChain and OpenAI GPT-4. Features real-time streaming, contextual memory, and a sleek glassmorphism interface.",
    tech: ["React", "fastapi", "LangChain", "OpenAI", "TailwindCSS"],
    image: ai_chat,
    github: "https://github.com/yourusername/ai-chat-assistant",
    live: "https://ai-chat-demo.vercel.app",
    featured: true,
  },
  {
    id: 2,
    name: "Object Detection Dashboard",
    category: "Computer Vision",
    description:
      "Real-time visual intelligence system using YOLOv8. Processes live video feeds with high precision bounding boxes and instantaneous confidence scoring.",
    tech: ["Python", "YOLOv8", "React", "OpenCV", "WebSockets"],
    image: object_detection,
    github: "https://github.com/yourusername/object-detection",
    live: "https://vision-dashboard.vercel.app",
    featured: true,
  },
  {
    id: 3,
    name: "Luxury E-Commerce Platform",
    category: "Full Stack Web",
    description:
      "A premium digital storefront with a focus on high-end boutique aesthetics. Includes secure Stripe integration and an advanced administrative inventory suite.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Framer Motion"],
    image: ecommerce,
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://luxury-shop.vercel.app",
    featured: true,
  },
];

export default projects;
