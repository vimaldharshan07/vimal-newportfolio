import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const educationData = [
  {
    degree: "Bachelor of Computer Science Engineering",
    institution: "AVC College of Engineering",
    location: "Mannampandal",
    period: "2022 - 2026",
    cgpa: "7.59 CGPA",
    achievements: [
      "Attended more than 7 paper presentations",
      "Active participation in technical events",
      "Focused on web development and software engineering"
    ]
  },
  {
    degree: "Higher Secondary Education",
    institution: "Raj Matriculation School",
    location: "Mayiladuthurai",
    period: "2020 - 2021",
    percentage: "81%",
    achievements: [
      "Excellent academic performance",
      "Participated in extracurricular activities"
    ]
  },
  {
    degree: "Full Stack Development Certification",
    institution: "Meta (Coursera)",
    location: "Online",
    period: "Completed August 2024",
    achievements: [
      "Comprehensive training in full-stack development",
      "Hands-on experience with modern web technologies",
      "Built multiple web applications during the course"
    ]
  },
  {
    degree: "TCS iON Career Edge Certification",
    institution: "TCS iON",
    location: "Online",
    period: "2024",
    achievements: [
      "Professional communication skills",
      "Corporate etiquette and workplace readiness",
      "Industry-specific knowledge and best practices",
      "Gained insights into IT industry operations"
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Education & Certifications</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          My academic achievements and professional development journey
        </p>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-gray-800 dark:text-white">
                    {edu.degree.includes("Certification") ? (
                      <BookOpen className="text-indigo-500" />
                    ) : (
                      <GraduationCap className="text-indigo-500" />
                    )}
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {edu.location}
                    </span>
                    {(edu.cgpa || edu.percentage) && (
                      <span className="flex items-center gap-1">
                        <Award size={16} />
                        {edu.cgpa || edu.percentage}
                      </span>
                    )}
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-4 rounded-lg mb-4">
                    <p className="font-medium text-gray-700 dark:text-gray-300">
                      {edu.institution}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                        <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}