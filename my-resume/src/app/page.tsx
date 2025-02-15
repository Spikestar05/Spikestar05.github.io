"use client"; // Only needed for App Router

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    // Smooth scrolling for navbar links
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId!);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-6">
      {/* Floating Navbar with Smooth Scrolling */}
      <motion.nav
        className="fixed top-0 left-0 w-full bg-gray-800 p-4 shadow-lg flex justify-center space-x-6 text-sm sm:text-lg"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
      >
        {["Education", "Skills", "Projects", "Experience", "Leadership", "Honors"].map((section) => (
          <a key={section} href={`#${section.toLowerCase()}`} className="text-blue-400 hover:underline">
            {section}
          </a>
        ))}
      </motion.nav>

      {/* Header */}
      <motion.div className="text-center mt-20" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl font-bold">Harshavarthan Mathapati</h1>
        <p className="text-lg text-gray-300 mt-2">📍 Dallas, TX | ✉️ harsha.mathapati12@gmail.com |
        <a href="http://linkedin.com/in/harshavarthan-mathapati/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
          🔗LinkedIn Profile
        </a>
        </p>
      </motion.div>

      {/* Sections */}
      <Section id="education" title="Education">
        <p className="text-lg font-semibold">The University of Texas at Dallas, Dallas, TX (May 2026)</p>
        <p>Bachelor of Science, Computer Science</p>
        <p><strong>Relevant Coursework:</strong> Data Structures & Algorithms, Programming in UNIX, Programming Paragdims, Computer Science I & II, Computer Architecture, Discrete Mathematics</p>
      </Section>

      <Section id="skills" title="Skills">
        <ul className="list-disc list-inside text-gray-300">
          <li>Programming: Java, C++, JavaScript, MIPS Assembly</li>
          <li>Data & Tools: Power BI, Git, VS Code</li>
          <li>Web Development: Next.js, React</li>
          <li>AI & Algorithms: Binary Trees, Linked Lists, Sorting Algorithms</li>
        </ul>
      </Section>

      <Section id="projects" title="Projects">
        <Project title="Custom Java Web Browser Simulation (Nov 2024)" github="https://github.com/Spikestar05/JavaWeb-Navigator"
          description={["Stack-based browser history for easy backtracking of visited pages.", "Queue-based reading list to manage pages in a FIFO order.", "Doubly-linked list for bookmarks, allowing seamless navigation between saved links.", "Binary search tree for sorted preferences, optimizing webpage retrieval.", "Implemented in Java, following clean coding standards and object-oriented principles."]} />
        <Project title="Interactive Animal Guessing Game (Apr 2024)" github="https://github.com/yourgithub/animal-guessing-game"
          description={["Created a binary tree-based guessing game that improves accuracy with user input.", "Implemented a learning mechanism using linked lists.", "Ensured a smooth user experience with input validation."]} />
        <Project title="Dynamic Word Search Solver (Mar 2024)" github="https://github.com/yourgithub/word-search-solver"
          description={["Built a solver that reads matrix input and identifies word locations.", "Implemented custom algorithms for searching in multiple directions.", "Used file handling and matrix manipulation for efficiency."]} />
      </Section>

      <Section id="experience" title="Work Experience">
        <Experience title="Student Assistant (May 2024 - Present)" company="The University of Texas at Dallas, Richardson, TX"
          description={["Resolved inquiries from students and faculty, ensuring high customer satisfaction.", "Coordinated facility-related tasks like vendor escorts and room inspections.", "Managed mail distribution, phone calls, and maintenance reporting."]} />
      </Section>

      <Section id="leadership" title="Leadership & Community Involvement">
        <Experience title="Drive-Train Captain (Sep 2022 - Feb 2023)" company="Round Table Robotics, Oak Creek, WI"
          description={["Designed and built a highly efficient and reliable drive-train system.", "Led maintenance and repairs during the competition season.", "Collaborated with other team captains to align with overall robot strategy.", "Contributed to a positive and productive team atmosphere.", "Helped the team achieve success in multiple competitions."]} />
        <p className="mt-2">
          <a href="https://www.1792rtr.com/team/kone%C2%B3" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> kone³ </a>
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=tXy0wyxKtRU" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">kone³ at the Wisconsin Regional 2023</a>
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=zkPCcSTMVNs" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Ben So-Low's gameplay video</a>
        </p>
      </Section>

      <Section id="honors" title="Honors & Awards">
        <ul className="list-disc list-inside text-gray-300">
          <li>Academic Excellence Scholarship, UT Dallas (Fall 2023)</li>
            <ul className="list-[circle] list-inside ml-5 marker:text-gray-900">
              <li>Awarded the Academic Excellence Scholarship in recognition of outstanding </li> <li className="pl">academic performance and potential.</li>
              <li>Demonstrates a strong commitment to academic excellence and the ability to maintain </li> <li className="pl"> high standards in a rigorous academic environment.</li>
              <li>Reflects a proven track record of scholastic dedication and exceptional intellectual ability.</li>
              <li>Distinguishes me as a top-performing student within the University of Texas at Dallas </li> <li className="pl"> community.</li>
            </ul>
          <li>Heartland Business Systems Scholarship, Oak Creek, WI (Spring 2023)</li>
          <li>Oak Creek Community Center Scholarship, Oak Creek, WI (Spring 2023)</li>
        </ul>
      </Section>
    </div>
  );
}

// Section Component
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <motion.div id={id} className="w-full max-w-2xl my-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <h2 className="text-2xl font-semibold border-b-2 border-blue-400 pb-2 mb-4">{title}</h2>
      {children}
    </motion.div>
  );
}

// Project Component
function Project({ title, github, description }: { title: string; github: string; description: string[] }) {
  return (
    <motion.div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4" whileHover={{ scale: 1.02 }}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
        🔗 GitHub Repository
      </a>
      <ul className="list-disc list-inside text-gray-300 mt-2">
        {description.map((point, index) => <li key={index}>{point}</li>)}
      </ul>
    </motion.div>
  );
}

// Experience Component
function Experience({ title, company, description }: { title: string; company: string; description: string[] }) {
  return (
    <motion.div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4" whileHover={{ scale: 1.02 }}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400">{company}</p>
      <ul className="list-disc list-inside text-gray-300 mt-2">
        {description.map((point, index) => <li key={index}>{point}</li>)}
      </ul>
    </motion.div>
  );
}
