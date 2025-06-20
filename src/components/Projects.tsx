
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Myntra Virtual Shopping Experience",
      description: "Revolutionary e-commerce platform featuring AI Fashion Assistant (Maya), Virtual Trial Room, and Metaverse-based shopping experience.",
      features: ["AI Fashion Assistant (Maya)", "Virtual Trial Room", "Metaverse Shopping"],
      role: "Ideation, Design, Development",
      technologies: ["React", "AI/ML", "3D Modeling", "WebGL"],
      github: "https://github.com/Versha22/Myntra-Virtual-experience.git",
      demo: "https://github.com/Versha22/Myntra-Virtual-experience.git"
    },
    {
      title: "AI-Based Career Counseling Website",
      description: "Comprehensive platform providing career guidance through AI-powered chatbot and peer-mentor community features.",
      features: ["Career Guidance System", "AI Chatbot", "Peer-Mentor Community"],
      role: "Backend Logic, UX/UI Design",
      technologies: ["Python", "Django", "Natural Language Processing", "React"],
      github: "https://github.com/Versha22",
      demo: "https://github.com/Versha22"
    },
    {
      title: "Televad (Neuro Nest Hackathon)",
      description: "Rural healthcare web platform designed to bridge the healthcare gap in remote areas with innovative solutions.",
      features: ["Healthcare Platform", "Rural Focus", "Telemedicine"],
      role: "Team Lead, Frontend & UX",
      technologies: ["React", "Node.js", "MongoDB", "Healthcare APIs"],
      github: "https://github.com/Versha22",
      demo: "https://github.com/Versha22"
    }
  ];

  const handleButtonClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Showcasing innovative solutions built through hackathons and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="text-sm text-slate-400 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-sm font-semibold text-teal-400">Role: </span>
                  <span className="text-sm text-slate-400">{project.role}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 text-xs bg-slate-700 text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleButtonClick(project.github)}
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleButtonClick(project.demo)}
                    className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
