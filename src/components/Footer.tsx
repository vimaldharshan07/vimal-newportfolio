import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-bold text-white mb-2">Let's create something amazing</h3>
            <p className="text-gray-400">Always open to new opportunities and collaborations</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/vimaldharshan07" className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/vimal-dharshan-18514b274" target="_blank"className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/vimaldharshan05?t=4BefrHfnW1cqg7Ca4aI1Zw&s=09" className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700/50 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made by <Heart size={16} className="mx-2 text-pink-500" /> vimal dharshan
          </p>
        </div>
      </div>
    </footer>
  );
}