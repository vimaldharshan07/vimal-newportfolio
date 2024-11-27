import { Lock } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Projects Coming Soon</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Exciting projects are in development. Stay tuned for updates!
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl bg-gray-100 dark:bg-slate-800/50 backdrop-blur-sm"
            >
              <div className="aspect-video w-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                <Lock className="text-gray-400 dark:text-gray-500 w-12 h-12" />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-white text-lg font-semibold mb-2">Coming Soon</p>
                  <p className="text-gray-300 text-sm">Project under development</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}