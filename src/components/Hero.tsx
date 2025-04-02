import { ArrowDown, Code, Sparkles, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20" />
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {i % 3 === 0 ? (
              <Code className="text-indigo-500/20 dark:text-indigo-400/20" size={48} />
            ) : i % 3 === 1 ? (
              <Sparkles className="text-purple-500/20 dark:text-purple-400/20" size={48} />
            ) : (
              <Rocket className="text-pink-500/20 dark:text-pink-400/20" size={48} />
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-left">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Full Stack Developer
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">Vimal</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12">
            Crafting exceptional digital experiences with modern web technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-gray-800 dark:text-white font-medium hover:shadow-lg transition-all duration-300 border-2 border-gray-100 dark:border-slate-700"
            >
              Let's Talk
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl transform rotate-6 opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl transform -rotate-6 opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="relative h-full bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl">
              <div className="h-full flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <div className="h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-3/4"></div>
                  <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-1/2"></div>
                </div>
                <div className="flex items-center justify-center">
                  <Code className="w-20 h-20 text-indigo-500" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full w-2/3"></div>
                  <div className="h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400 dark:text-gray-500" size={24} />
      </div>
    </section>
  );
}
