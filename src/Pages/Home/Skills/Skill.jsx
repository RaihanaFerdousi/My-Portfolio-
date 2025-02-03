import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe2, Database, Server, Braces, Languages } from 'lucide-react';

const technicalSkills = [
  {
    icon: <Code2 size={40} className="text-sky-900" />,
    category: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
    ]
  },
  {
    icon: <Server size={40} className="text-sky-900" />,
    category: "Backend",
    skills: [
      { name: "Node.js", level:40 },
      { name: "Express.js", level: 30 },
      { name: "REST APIs", level: 80 },
    ]
  },
  {
    icon: <Database size={40} className="text-sky-900" />,
    category: "Database",
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "Mongoose", level: 70 },
    ]
  },
  {
    icon: <Braces size={40} className="text-sky-900" />,
    category: "Other Tools",
    skills: [
      { name: "Git", level: 80 },
      { name: "npm", level: 85 },
      { name: "Webpack", level: 70 },
    ]
  }
];

const languages = [
  { name: "English", level: "Professional", flag: "🇺🇸" },
  { name: "French", level: "Intermediate", flag: "🇫🇷" },
  { name: "Bengali", level: "Native", flag: "🇧🇩" },
  { name: "Sign Language", level: "Intermediate", flag: "🤟" },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-20"
        >
          {/* Technical Skills */}
          <div>
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl lobster mb-6 text-gray-900">
                Technical Skills
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                My expertise spans across the entire MERN stack, enabling me to build complete web applications
                from frontend to backend.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technicalSkills.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-lg shadow-gray-200/80 border border-gray-100 hover:border-blue-100 hover:shadow-blue-100/30 transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {category.icon}
                    <h3 className="text-xl font-semibold text-gray-900">{category.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700">{skill.name}</span>
                          <span className="text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full rounded-full bg-gradient-to-r from-sky-900 to-blue-500 "
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 inline-flex items-center gap-3">
                <Languages className="inline text-sky-900" /> Languages
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                My multilingual abilities enable me to communicate effectively across different cultures and contexts.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {languages.map((language, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-lg shadow-gray-200/80 border border-gray-100 hover:border-blue-100 hover:shadow-blue-100/30 transition-all text-center"
                >
                  <div className="text-4xl mb-4">{language.flag}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{language.name}</h3>
                  <p className="text-gray-600">{language.level}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;