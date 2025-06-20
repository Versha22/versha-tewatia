
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "G.L. Bajaj Institute of Technology and Management",
      location: "Greater Noida",
      period: "2022 – 2026",
      gpa: "8.22 GPA"
    },
    {
      degree: "12th Grade",
      institution: "Taksh-Shila Model School",
      location: "Faridabad",
      period: "2022",
      gpa: "90.4%"
    },
    {
      degree: "10th Grade",
      institution: "Taksh-Shila Model School",
      location: "Faridabad",
      period: "2020",
      gpa: "91.4%"
    }
  ];

  const experience = [
    {
      position: "Software Development Engineer Intern",
      company: "Automation Anywhere",
      location: "Bangalore, India",
      period: "June 30, 2025 – December 29, 2025",
      status: "Upcoming / Ongoing",
      description: "Selected for a 6-month full-time Software Development Engineer Internship at Automation Anywhere, a global leader in Robotic Process Automation (RPA). The internship will focus on real-world software development challenges and cutting-edge automation technologies. Upon successful completion, the internship will convert into a full-time SDE role."
    }
  ];

  return (
    <div className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a B.Tech student at G.L. Bajaj Institute of Technology and Management with 
              a strong grip on web technologies like HTML, CSS, JavaScript, Python, and C++. 
              I enjoy solving algorithmic problems and have led successful tech projects in 
              fintech and healthcare through national-level hackathons.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              My passion lies in creating innovative solutions that bridge the gap between 
              technology and real-world problems. With experience in full-stack development 
              and a strong foundation in Data Structures and Algorithms, I strive to build 
              scalable, user-focused applications that make a meaningful impact.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">8.22</div>
                <div className="text-sm text-slate-400">Current GPA</div>
              </div>
              <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">2+</div>
                <div className="text-sm text-slate-400">Hackathon Finals</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Experience Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
              
              <div className="space-y-4">
                {experience.map((item, index) => (
                  <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-white text-lg">{item.position}</h4>
                        <span className="text-teal-400 font-medium text-sm">{item.period}</span>
                      </div>
                      <p className="text-slate-300 font-medium mb-1">{item.company}</p>
                      <p className="text-slate-400 text-sm mb-1">{item.location}</p>
                      <div className="mb-3">
                        <span className="px-2 py-1 text-xs bg-green-600/20 text-green-400 rounded-full border border-green-500/30">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Education Timeline</h3>
              
              <div className="space-y-4">
                {education.map((item, index) => (
                  <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-white text-lg">{item.degree}</h4>
                        <span className="text-blue-400 font-medium">{item.gpa}</span>
                      </div>
                      <p className="text-slate-300 font-medium">{item.institution}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-slate-400">{item.location}</span>
                        <span className="text-slate-400">{item.period}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
