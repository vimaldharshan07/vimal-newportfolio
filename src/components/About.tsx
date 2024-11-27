import { Code2, Rocket, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-800 text-lg leading-relaxed">
            I am a passionate and ambitious third-year Bachelor of Computer Science and Engineering student with a strong interest in full-stack development and cloud computing.
            My goal is to become a successful full-stack developer, creating dynamic, scalable, and user-focused applications that make a meaningful impact.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed">
            I am actively building my expertise in both front-end and back-end technologies, working with tools and frameworks like React, Node.js, Express.js, and MongoDB.
            Alongside my web development skills, I am also expanding my knowledge in cloud platforms and services, enabling me to design and deploy robust, cloud-native solutions.
            Driven by curiosity and a love for learning, I enjoy tackling challenging projects and continuously improving my technical and problem-solving skills.  
            </p>
            <p className="text-gray-800 text-lg leading-relaxed">
            I believe in blending creativity with technology to deliver seamless and efficient user experiences.
            With a strong commitment to growth and innovation, I aim to contribute to impactful projects and advance my career as a versatile and skilled full-stack developer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
              <Code2 className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Full Stack</h3>
              <p className="text-gray-600">End-to-end application development</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              <Rocket className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-gray-600">Optimized and scalable solutions</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg md:col-span-2">
              <Users className="text-pink-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">Effective team player and communicator</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}