import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Brain, Trophy, Sparkles } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const milestones = [
    {
      year: 2022,
      age: 9,
      icon: <Code2 className="w-6 h-6 text-sky-950" />,
      title: "Started Coding Journey",
      description:
        "Began my programming adventure at a young age, showing early interest in web development.",
    },
    {
      year: 2023,
      age: 10,
      icon: <Brain className="w-6 h-6 text-sky-950" />,
      title: "Explored New Languages",
      description:
        "Ventured into C and C++, facing challenges that would later shape my resilience.",
    },
    {
      year: 2024,
      age: 11,
      icon: <Trophy className="w-6 h-6 text-sky-950" />,
      title: "Major Achievement",
      description:
        "Successfully completed Programming Hero Batch 10, marking a significant milestone in my journey.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 lobster text-gray-900 flex items-center justify-center gap-3">
            <Sparkles className="text-sky-950" /> About Me
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg w-[400px]">
          I'm a 12-year-old developer born in January 2013, with a passion for creating websites. 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg shadow-gray-200/80 border border-gray-100 hover:border-blue-100 hover:shadow-blue-100/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                {milestone.icon}
                <span className="text-sm font-medium text-sky-950">
                  {milestone.year} • Age {milestone.age}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {milestone.title}
              </h3>
              <p className="text-gray-600">{milestone.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-lg shadow-gray-200/50"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              My Learning Journey
            </h3>
            <div className="prose prose-blue text-gray-600 space-y-4">
              <p>
              I dropped out of school at the age of 8 because, in my family, we don't follow the traditional education system
              </p>
              <p>
                My coding adventure began when I was just 9 years old, driven by
                curiosity and a desire to create. I first joined Programming
                Hero Batch 7, and while I faced challenges with the 8th
                milestone, it only fueled my determination to learn more.
              </p>
              <p>
                At age 10, I ventured into the world of C and C++ through the
                Phitron course. Though the concepts were challenging for me at
                that time, these experiences taught me valuable lessons about
                persistence and the learning process.
              </p>
              <p>
                The turning point came in June 2024, when I rejoined Programming
                Hero in Batch 10. This time, with more experience and
                determination, I successfully completed the entire course. This
                achievement marks not just the completion of a course, but my
                growth as a young developer.
              </p>
              <p className="font-medium text-gray-900">
                Today, at 12 years old, I continue to build and learn, excited
                about the endless possibilities in web development and the MERN
                stack.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
