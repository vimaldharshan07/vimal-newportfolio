import React, { useRef, useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
  
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_rp7ufc4',
        'template_nndio19',
        formRef.current,
        'mwGKJFxNs03NzWKNP'
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <Toaster position="top-right" />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-900/10 dark:via-purple-900/10 dark:to-pink-900/10" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Let's Connect</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="p-8 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-100 dark:border-slate-700">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <a 
                      href="mailto:vimaldharshan05@gmail.com" 
                      className="text-gray-800 dark:text-gray-200 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      vimaldharshan05@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">Mayiladuthurai, Tamil Nadu</p>
                  </div>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://github.com/vimaldharshan07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:shadow-lg transition-all"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vimal-dharshan-18514b274"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-lg transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="p-8 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-100 dark:border-slate-700">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 transition-all duration-300"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/30 dark:hover:shadow-indigo-900/30 transition-all duration-300 flex items-center justify-center disabled:opacity-70"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}