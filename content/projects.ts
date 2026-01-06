export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, shopping cart, and secure checkout. Built with modern web technologies for optimal performance.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://your-ecommerce-demo.vercel.app",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://your-task-app.vercel.app",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather dashboard that displays current conditions, forecasts, and weather maps for multiple locations worldwide.",
    technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://your-weather-app.vercel.app",
  },
  {
    title: "Portfolio CMS",
    description:
      "A headless CMS built for portfolio websites with an intuitive admin panel for managing projects, blog posts, and site content.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "tRPC"],
    githubUrl: "https://github.com/yourusername/portfolio-cms",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media managers to track engagement, growth, and post performance across multiple platforms.",
    technologies: ["Vue.js", "TypeScript", "Firebase", "D3.js"],
    githubUrl: "https://github.com/yourusername/social-dashboard",
    liveUrl: "https://your-social-dashboard.vercel.app",
  },
  {
    title: "Recipe Finder",
    description:
      "Discover and save recipes from around the world. Features include ingredient-based search, meal planning, and shopping lists.",
    technologies: ["React", "Redux", "Spoonacular API", "Material-UI"],
    githubUrl: "https://github.com/yourusername/recipe-finder",
    liveUrl: "https://your-recipe-app.vercel.app",
  },
];
