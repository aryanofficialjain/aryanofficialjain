"use client"

import { useState, useEffect } from "react"
import { ChevronRight,  GamepadIcon as Controller, ExternalLink, Gamepad2, Github, Instagram, Linkedin, Mail, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement; // Type assertion
  
    const formData = new FormData(form);
  
    const response = await fetch("https://formspree.io/f/mqapybnb", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
  
    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };


  const gameProjects = [
  {
    title: "Parinda",
    description: "A high-flying adventure where you navigate the skies, dodge obstacles, and soar to freedom!",
    image: "/assets/parinda.png",
    tech: ["Sprite Renderer", "UNITY", "C#"],
    demo: "https://aryanofficialjain.itch.io/parinda",
  },
  {
    title: "KHATA LAGA",
    description: "A fun and addictive casual game where you dodge obstacles and collect rewards to survive as long as possible!",
    image: "/assets/khatalaga.png",
    tech: ["GameManager", "C#", "UNITY"],
    demo: "https://aryanofficialjain.itch.io/katalaga",
  },
  {
    title: "NIGHT MARE",
    description: "An intense action-fighting game where you battle and destroy relentless enemies in a dark, eerie world.",
    image: "/assets/nightmare.png",
    tech: [
      "Unity",
      "C#",
      "UNITY AI",
      "OOPS",
      "Game Design",
      "Animation",
      "LOD",
      "Audio Manager",
      "Game Manager",
    ],
    demo: "https://aryanofficialjain.itch.io/papakipari",
  },
];


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      {/* Header */}
      <header className="border-b border-purple-900/50 sticky top-0 z-10 backdrop-blur-md bg-gray-900/80">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Controller className="h-6 w-6 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              @aryan<span className="text-green-400">official</span>jain
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`hover:text-purple-400 transition-colors ${
                  activeSection === item.toLowerCase() ? "text-purple-400" : ""
                }`}
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
              </a>
            ))}
            <Link
              href="/forgetful"
              className="hover:text-purple-400 transition-colors text-purple-400"
            >
              Forgetful Game
            </Link>
          </nav>
          <button className="md:hidden">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,41,170,0.2),transparent_60%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Aryan Jain
             </span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
             <b>Game Developer</b> <br/>  the guy you re looking for ....
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="#projects"
                className="bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-md transition-colors flex items-center gap-2"
              >
                View Projects <Controller className="h-5 w-5" />
              </Link>
              <Link
                href="#contact"
                className="border border-purple-700 text-purple-400 hover:bg-purple-900/30 px-6 py-3 rounded-md transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>

    
        <div className="absolute mt-1 bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent">
          
        </div>
      </section>

      

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 p-1 relative overflow-hidden">
                <div className="w-full h-full bg-gray-900 rounded-lg">
  <Image src="/assets/profile.jpg" alt="Profile Image" width={400} height={400} />
</div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-purple-900/30 pointer-events-none"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gray-900 p-3 rounded-lg border border-purple-500">
                  <Controller className="w-8 h-8 text-green-400" />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <span className="text-green-400">&gt;</span> About Me
              </h2>
              <div className="space-y-4  text-gray-300">
                <p>
               I’ve been coding since 9th grade, turning my childhood passion for games into real, playable experiences. Growing up, I always wondered why Indian games never felt like Tekken or GTA—now I’m building those types of immersive, culturally-rich games myself.
                </p>
                <p>
                Game development is my hobby, passion and dream. I’m working in Unity and started learning Unreal Engine to build games that tell indian stories. 

                </p>
               

                <br/>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
     <section id="skills" className="py-20">
  <div className="container mx-auto px-4">
    {/* Section Heading */}
    <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
      <span className="text-green-400">&gt;</span> Skills
    </h2>

    {/* Skills Grid - Centered */}
    <div className="flex justify-center">
      <div className="max-w-4xl w-full">
        <div className="bg-gray-800/50 p-8 rounded-lg border border-purple-900/50 hover:border-purple-500/50 transition-colors">
          <h3 className="text-2xl font-bold mb-6 text-purple-400 text-center">Game Development</h3>
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            {[
              "Unity",  "C# Programming", "LOD", "Unity 3D", "Particle System", "Post Processing", "Git", "Github", "Socket.IO", "Cinemachine", "AI & Pathfindind (NavMesh)", "OOPS",    
              "Rigging", "Game Design", "Animation", "Physics"
            ].map((skill) => (
              <div key={skill} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                <span className="text-sm text-left">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Projects Section */}
{/* Projects Section */}
<section id="projects" className="py-20 bg-gray-800/30">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
      <span className="text-green-400">&gt;</span> Projects
    </h2>



    {/* Game Projects */}
    <div>
      <h3 className="text-2xl font-bold mb-6 text-purple-400">Game Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gameProjects.map((project, index) => (
          <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-purple-900/50 hover:border-purple-500/50 transition-all hover:-translate-y-1">
            <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-bold mb-2 text-purple-400">{project.title}</h4>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-purple-900/50 text-purple-300 text-xs px-2 py-1 rounded">{tech}</span>
                ))}
              </div>
              <div className="flex gap-2">
                {project.demo && project.demo !== "#" && (
                  <a href={project.demo} target="_blank" className="text-green-400 hover:text-green-300 flex items-center gap-1 text-sm">
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                )}
                
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
          <span className="text-green-400">&gt;</span> Contact Me
        </h2>

        <div className="bg-gray-800/50 p-8 rounded-lg border border-purple-900/50">
          {submitted ? (
            <p className="text-green-400 text-center">
              ✅ Thank you! Your message has been sent.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Mail className="h-5 w-5" />
              </button>
            </form>
          )}
        </div>

        <div className="mt-12 flex justify-center gap-6">
          {/* GitHub */}
          <a href="https://github.com/aryanofficialjain/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Github className="h-6 w-6" />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/aryanofficialjain/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Instagram className="h-6 w-6" />
          </a>

          {/* YouTube */}
          <a href="https://www.youtube.com/@aryanofficialjain" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Youtube className="h-6 w-6" />
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/aryanofficialjain/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>

          {/* Twitter */}
          <a href="https://twitter.com/jaryanofficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Twitter className="h-6 w-6" />
          </a>

          {/* Game Icon */}
          <a href="https://aryanofficialjain.itch.io/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Gamepad2 className="h-6 w-6" />
          </a>

          {/* Email */}
          <a href="mailto:aryanofficialjain@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="py-6 border-t border-purple-900/50">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aryan Jain | Game & Web Developer</p>
          <p className="mt-2 text-sm">Social Media - @aryanofficialjain</p>
        </div>
      </footer>
    </div>
  )
}

