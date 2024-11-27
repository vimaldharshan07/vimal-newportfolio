import { Code2, Database, Globe, Terminal } from 'lucide-react';

const skillCategories = [
  {
    name: 'Frontend',
    icon: <Code2 size={32} />,
    skills: ['React.js', 'Next.js', 'HTML/CSS', 'Bootstrap', 'Tailwind CSS', 'Figma'],
    color: 'from-blue-500 to-indigo-500'
  },
  {
    name: 'Backend',
    icon: <Database size={32} />,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs','sql'],
    color: 'from-emerald-500 to-green-500'
  },
  {
    name: 'DevOps',
    icon: <Terminal size={32} />,
    skills: ['Docker', 'AWS', 'Git', 'Linux'],
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Tools & Others',
    icon: <Globe size={32} />,
    skills: ['VS Code', 'Postman', 'excel','canva','prompting'],
    color: 'from-violet-500 to-purple-500'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Skills & Expertise</span>
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and development toolkit
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="skill-card p-6 rounded-xl card-gradient">
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center p-2 rounded-lg bg-white/50 hover:bg-white/80 transition-colors"
                  >
                    <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${category.color} mr-2`} />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}