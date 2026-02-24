import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    title: "Task Tracker",
    description: "A simple yet powerful task management app using React and TypeScript.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    githubUrl: "https://github.com/yourusername/task-tracker",
  },
  {
    title: "Weather App",
    description: "Check weather in any city with live API integration.",
    tech: ["React", "API", "TailwindCSS"],
    githubUrl: "https://github.com/yourusername/weather-app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-white px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="border rounded-lg shadow hover:shadow-lg p-6 flex flex-col gap-4 transition">
            {project.imageUrl && (
              <Image src={project.imageUrl} alt={project.title} width={600} height={300} className="rounded"/>
            )}
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="text-sm px-2 py-1 bg-gray-200 rounded">{tech}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              {project.liveUrl && <a href={project.liveUrl} target="_blank" className="text-blue-600 hover:underline">Live</a>}
              <a href={project.githubUrl} target="_blank" className="text-blue-600 hover:underline">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
