import React, { useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Trophy,
  Award,
  Star,
  Download,
  Code,
  Coffee,
  Globe,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import intern from "./study-program.png";
import { FaGithub } from "react-icons/fa";
import { FaGraduationCap } from 'react-icons/fa'; // Import the icon

import { FaCode } from "react-icons/fa6";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setActiveSection] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const achievements = [
    {
      title: "Accenture Innovation Challenge 2022",
      status: "Semi Finalist",
      icon: <Trophy className="w-8 h-8 text-blue-400" />,
      description:
        "Led Team UMEED in developing innovative solutions for psychological medical conditions. Our project stood out among 1 lakh entries, making it to the top 16 teams nationwide. We created a comprehensive platform that addresses mental health challenges through technology, incorporating features like:",
      points: [
        "Anonymous peer support communities",
        "Professional counselor connection platform",
        "Crisis intervention protocols",
        "Resource library for mental health education",
      ],
    },
    {
      title: "Maharashtra Innovation Challenge 2023",
      status: "District Winner",
      icon: <Award className="w-8 h-8 text-purple-400" />,
      description:
        "Spearheaded a groundbreaking project focused on student mental health and suicide prevention. Our team developed a comprehensive solution that includes:",
      points: [
        "Early warning system using behavioral analysis",
        "Confidential reporting system for at-risk students",
        "Integration with college counseling services",
        "Mental health awareness campaign toolkit",
      ],
    },
    {
      title: "Tech Alchathon 2024",
      status: "Winner",
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      description:
        "Led frontend development in a team of three, creating an innovative solution for real-world asset management. Key contributions included:",
      points: [
        "Responsive dashboard for real-time asset tracking",
        "Interactive data visualization components",
        "User-friendly interface for asset management",
        "Mobile-first design approach",
      ],
    },
  ];

  const projects = [
    {
      title: "Umeed",
      icon: <Heart className="w-6 h-6 text-pink-400" />,
      description: "A Platform for psychological medical condition",
      details:
        "Worked with one team member to develop a web app using the ReactJS framework. Developed the home page, self help group page, solution page. Connected with MongoDB to store information of self-help cards.",
      githubLink: "https://github.com/BhaveshAnandpara/Umeed",
    },
    {
      title: "Cafe Management System",
      icon: <Coffee className="w-6 h-6 text-amber-400" />,
      description: "Web-based software application for cafe management",
      details:
        "Collaborated with two other members to create a system where customers can make orders by scanning QR codes. Developed interactive pages using ReactJs.",
      githubLink: "https://github.com/SHIVAMCHARDE/Cafe-management-System",
    },
    {
      title: "Bajaj Science Education Center",
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      description: "Official website development",
      details:
        "Created and integrated various components using React Hooks for efficient state management and data fetching from the backend using ReactJS.",
      githubLink: "https://www.bajajsciencecenter.co.in/",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf"; // File path relative to the `public` folder
    link.download = "Shivam_Charde_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-800 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-100">Shivam Charde</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                "About",
                "Education",
                "Skills",
                "Experience",
                "Projects",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={handleDownloadResume}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                "About",
                "Education",
                "Skills",
                "Experience",
                "Projects",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={handleDownloadResume}
                className="flex items-center space-x-2 w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-base font-medium transition-colors duration-200"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {/* Hero Section */}
        <section
          id="about"
          className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Shivam Charde
              </h1>
              <p className="text-xl mb-6">Web Developer | Software Developer</p>
              <div className="flex justify-center space-x-6">
                <motion.a
                  href="https://github.com/SHIVAMCHARDE"
                  className="hover:text-gray-300 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/shivamcharde/"
                  className="hover:text-gray-300 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:shivamcharde12@gmail.com"
                  className="hover:text-gray-300 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl font-bold text-gray-100 mb-8 flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaGraduationCap className="text-3xl" /> {/* Add the icon */}
              Education
            </motion.h2>
            <div className="space-y-8">
              <motion.div
                className="bg-gray-700 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-gray-100">
                  Bachelor of Technology in Computer Engineering
                </h3>
                <p className="text-gray-300">Bajaj Institute of Technology</p>
                <p className="text-gray-300"> 2024 • CGPA: 7.98</p>
              </motion.div>
              <motion.div
                className="bg-gray-700 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-100">
                  Higher Secondary School Certificate (HSC)
                </h3>
                <p className="text-gray-300">
                  Gandhi City Public School and Junior College
                </p>
                <p className="text-gray-300">2020 • Percentage: 74.46%</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
              className="text-3xl font-bold text-gray-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
             
            
            <div className="flex flex-row items-center gap-3">
             <FaCode className="text-3xl"  />
              Skills
              </div>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-100">
                  Languages
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p>JAVA, HTML, CSS, JavaScript, MongoDB</p>
                </div>
              </motion.div>
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-100">
                  Technologies & Frameworks
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p>React.js, Tailwind CSS</p>
                </div>
              </motion.div>
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-100">
                  Others
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p>Postman, Git & Github, Basics of Linux</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl font-bold text-gray-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Experience
            </motion.h2>
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-100 flex items-center  gap-2">
                <img src={intern} alt="Frontend Intern" className="w-10" />
                <p>Frontend Development Intern</p>
              </h3>
              <p className="text-gray-300">
                Virtuebyte Pvt Ltd, Pune • 01/2024 - 06/2024
              </p>

              <ul className="list-disc list-inside mt-4 text-gray-300">
                <li>
                  {" "}
                  Expertise in front-end technologies such as React.js, HTML,
                  Tailwind CSS, JavaScript
                </li>
                <li>
                  Participated in Tech Review meetings, software development,
                  testing, and code reviews
                </li>
                <li>
                  Worked on real-life client projects and training programs
                </li>
                <li>
                  {" "}
                  Collaborating with cross-functional teams to design, develop,
                  and implement new features, enhancing overall product
                  functionality and user satisfaction.
                </li>
                <li>
                  Contributed significantly to the development of web
                  applications, demonstrating strong technical skills and
                  problem-solving abilities.
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl font-bold text-gray-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Projects
            </motion.h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{project.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-100 flex items-center space-x-2">
                        <a
                          href={project.githubLink || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white"
                        >
                          <FaGithub className="w-6 h-6" />
                        </a>
                        <span>{project.title}</span>
                      </h3>
                      <p className="text-blue-400 font-medium mt-2">
                        {project.description}
                      </p>
                      <p className="text-gray-300 mt-2">{project.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl font-bold text-gray-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Achievements
            </motion.h2>
            <motion.div
              className="space-y-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
                  variants={fadeIn}
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{achievement.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-100">
                          {achievement.title}
                        </h3>
                        <p className="text-blue-400 font-medium">
                          {achievement.status}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>

                    <ul className="space-y-2">
                      {achievement.points.map((point, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start space-x-2 text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-blue-400 flex-shrink-0">•</span>
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl font-bold text-gray-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Contact
            </motion.h2>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-gray-300" size={20} />
                  <a
                    href="mailto:shivamcharde12@gmail.com"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    shivamcharde12@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <p className="text-gray-300">📱 +91 8767050834</p>
                </div>
                <div className="flex items-center space-x-3">
                  <p className="text-gray-300">📍 Wardha, Maharashtra, India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
