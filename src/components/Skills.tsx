
export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "C/C++", "HTML", "CSS"]
    },
    {
      title: "Web Technologies",
      skills: ["React", "Node.js", "Express", "Django", "REST APIs"]
    },
    {
      title: "Database & Tools",
      skills: ["SQL", "MongoDB", "Git", "DBMS", "Linux"]
    },
    {
      title: "Core Computer Science",
      skills: ["Data Structures", "Algorithms", "Operating Systems", "Computer Networks"]
    }
  ];

  const allSkills = [
    "HTML", "CSS", "JavaScript", "Python", "C/C++", "SQL", "DBMS", 
    "Operating Systems", "DSA", "Computer Networks", "Problem Solving",
    "React", "Node.js", "MongoDB", "Git", "Linux"
  ];

  return (
    <div className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Technical expertise across multiple domains of software development
          </p>
        </div>

        {/* Skills Grid by Category */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="bg-slate-700/50 rounded-lg p-3 text-center text-slate-300 hover:bg-slate-700 transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Tags Cloud */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">All Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {allSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-400/30 rounded-full text-white hover:from-blue-600/40 hover:to-teal-600/40 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
