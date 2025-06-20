
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "End-to-end web application development using modern technologies like React, Node.js, and databases.",
      icon: "🌐",
      features: ["React & Node.js", "Database Design", "API Development", "Responsive Design"]
    },
    {
      title: "UI/UX-Focused Website Design",
      description: "Creating beautiful, user-friendly interfaces that provide excellent user experience across all devices.",
      icon: "🎨",
      features: ["Modern UI Design", "User Experience", "Mobile-First", "Accessibility"]
    },
    {
      title: "Problem-Solving & Algorithm Implementation",
      description: "Efficient algorithm design and implementation for complex computational problems and optimization.",
      icon: "🧠",
      features: ["Data Structures", "Algorithm Design", "Code Optimization", "Technical Problem Solving"]
    },
    {
      title: "Project Prototyping for Hackathons",
      description: "Rapid prototyping and MVP development for hackathons and startup ideas with quick turnaround.",
      icon: "⚡",
      features: ["Rapid Prototyping", "MVP Development", "Team Leadership", "Innovation"]
    }
  ];

  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Services I Offer</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{service.icon}</div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">What's Included:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-400">
                        <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
