
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, Code, Zap } from "lucide-react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-32 left-32 w-6 h-6 text-blue-400/30 animate-bounce delay-300" />
        <Sparkles className="absolute top-48 right-48 w-5 h-5 text-teal-400/40 animate-bounce delay-700" />
        <Zap className="absolute bottom-48 left-48 w-6 h-6 text-purple-400/30 animate-bounce delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-400/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-300">Available for opportunities</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 bg-300% animate-gradient-x">
                    Versha Tewatia
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-teal-400/20 blur-lg -z-10 rounded-lg"></div>
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl text-slate-300 space-y-2">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-300 text-lg">
                    Web Developer
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="px-3 py-1 rounded-full bg-teal-600/20 border border-teal-400/30 text-teal-300 text-lg">
                    Problem Solver
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="px-3 py-1 rounded-full bg-purple-600/20 border border-purple-400/30 text-purple-300 text-lg">
                    Hackathon Finalist
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              B.Tech student passionate about solving real-world problems through{" "}
              <span className="text-blue-400 font-medium">scalable</span>,{" "}
              <span className="text-teal-400 font-medium">user-focused</span> software solutions. 
              With expertise in full-stack development and a strong foundation in Data Structures & Algorithms, 
              I create impactful tech solutions that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                <span>View Projects</span>
                <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="group border-2 border-blue-400/50 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg backdrop-blur-sm bg-white/5 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
                size="lg"
              >
                <span>Contact Me</span>
                <Sparkles className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>

            {/* Social proof indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">5+</span>
                </div>
                <span className="text-sm">Projects Completed</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <span className="text-sm">Hackathons</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in delay-300">
            <div className="relative group">
              {/* Main profile circle - completely clean with no overlays */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-teal-400 to-purple-500 p-1 shadow-2xl shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-500 relative z-20">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/profile_pic/36a05dbb-9014-404b-8301-2423f8cee5b2.png" 
                    alt="Versha Tewatia - Profile Picture"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Animated glow rings - positioned much further outside */}
              <div className="absolute -inset-12 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full blur-2xl opacity-20 animate-pulse group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
              <div className="absolute -inset-16 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full blur-3xl opacity-15 animate-pulse delay-1000 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
              
              {/* Floating tech symbols - positioned far around the circle */}
              <div className="absolute -inset-20 pointer-events-none">
                <div className="absolute top-8 left-8 text-blue-400 animate-pulse text-2xl">⚛️</div>
                <div className="absolute top-12 right-12 text-teal-400 animate-pulse delay-300 text-2xl">🚀</div>
                <div className="absolute bottom-12 left-12 text-purple-400 animate-pulse delay-700 text-2xl">💡</div>
                <div className="absolute bottom-8 right-8 text-yellow-400 animate-pulse delay-500 text-2xl">⭐</div>
              </div>
              
              {/* Orbiting elements - positioned outside the photo area */}
              <div className="absolute inset-0 animate-spin -z-10" style={{ animationDuration: '20s' }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
              </div>
              <div className="absolute inset-0 animate-spin -z-10" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-2 h-2 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
