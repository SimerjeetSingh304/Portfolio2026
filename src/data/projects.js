import ai_chat from "../assets/projects/ai_chat.png";
import object_detection from "../assets/projects/object_detection.png";
import ecommerce from "../assets/projects/ecommerce.png";
import cloudstream from "../assets/projects/cloudstream.png";
import taskflow from "../assets/projects/taskflow.png";
import weather from "../assets/projects/weather.png";

const projects = [
  {
    id: 1,
    name: "AI Chat Assistant",
    category: "Generative AI",
    description: "A sophisticated conversational platform utilizing LangChain and OpenAI GPT-4. Features real-time streaming and contextual memory.",
    tech: ["React", "FastAPI", "LangChain", "OpenAI"],
    image: ai_chat,
    github: "https://github.com/yourusername/ai-chat",
    live: "https://ai-chat.demo",
    featured: true,
  },
  {
    id: 2,
    name: "Vision Guard AI",
    category: "Computer Vision",
    description: "Real-time object detection and classification using YOLOv8, processing live video feeds with high precision.",
    tech: ["Python", "YOLOv8", "React", "OpenCV"],
    image: object_detection,
    github: "https://github.com/yourusername/vision-guard",
    live: "https://vision.demo",
    featured: true,
  },
  {
    id: 3,
    name: "Fashion E-Commerce",
    category: "Full Stack",
    description: "A premium digital storefront with secure Stripe integration, advanced filtering, and a custom administrative DASHBOARD.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    image: ecommerce,
    github: "https://github.com/yourusername/ecommerce",
    live: "https://shop.demo",
    featured: true,
  },
  {
    id: 4,
    name: "Cloud Stream Service",
    category: "Cloud Media",
    description: "High-performance video streaming architecture with optimized delivery and adaptive bitrate streaming support.",
    tech: ["React", "AWS S3", "CloudFront", "Node.js"],
    image: cloudstream,
    github: "https://github.com/yourusername/cloud-stream",
    live: "https://stream.demo",
    featured: true,
  },
  {
    id: 5,
    name: "TaskFlow Pro",
    category: "Productivity",
    description: "Collaborative project management tool with drag-and-drop task boards, real-time updates and team analytics.",
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    image: taskflow,
    github: "https://github.com/yourusername/taskflow",
    live: "https://taskflow.demo",
    featured: true,
  },
  {
    id: 6,
    name: "SkyCast Weather",
    category: "Data Viz",
    description: "Hyper-local weather forecasting with dynamic visualizations and air quality metrics using multiple weather APIs.",
    tech: ["React", "Chart.js", "WeatherAPI", "Tailwind"],
    image: weather,
    github: "https://github.com/yourusername/skycast",
    live: "https://weather.demo",
    featured: true,
  },
];

export default projects;
