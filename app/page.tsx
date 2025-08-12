"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Facebook, Twitter, Instagram, ArrowRight } from "lucide-react"

export default function PratikPortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentProject, setCurrentProject] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const testimonials = [
    {
      text: "Said heaven dry made Them gathering the very second morning us be divide isn't. Saw Seasons winged replenish grass from set can't for he which. You third god unto let.",
      author: "Dwight Schrute",
      company: "The Office",
    },
    {
      text: "Said heaven dry made Them gathering the very second morning us be divide isn't. Saw Seasons winged replenish grass from set can't for he which. You third god unto let.",
      author: "Paul & Amanda",
      company: "Envato Studio",
    },
  ]

  const projects = [
    {
      title: "Video Proctoring",
      description:
        "Advanced surveillance system for online examination monitoring with real-time face detection, eye tracking, and behavioral analysis to ensure academic integrity.",
      client: "EdTech Solutions",
      background: "/video-proctoring-dashboard.png",
      githubUrl: "https://github.com/Pratiik-glitch/video_proctoring.git",
    },
    {
      title: "API Integration",
      description:
        "Comprehensive backend API development with seamless third-party integrations, robust authentication, and scalable microservices architecture.",
      client: "Enterprise Systems",
      background: "/mobile-leaderboard-app.jpg",
      githubUrl: "https://github.com/Pratiik-glitch/-api_integration.git",
    },
    {
      title: "Sustinlyze360",
      description:
        "Sustainability analytics platform providing comprehensive environmental impact assessment with data visualization and actionable insights for businesses.",
      client: "Green Analytics",
      background: "/system-metrics-radar.png",
      githubUrl: "https://github.com/Pratiik-glitch/Sustinlyze360.git",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "education", "testimonials", "blog", "contact"]
      const scrollPosition = window.scrollY + 100

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Pratik</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "HOME" },
                { id: "about", label: "ABOUT" },
                { id: "projects", label: "PROJECTS" },
                { id: "education", label: "EDUCATION" },
                { id: "testimonials", label: "TESTIMONIALS" },

                { id: "blog", label: "BLOG" },
                { id: "contact", label: "CONTACT" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? "text-red-500" : "text-white hover:text-red-500"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="text-sm">+7 (212) 674-25-10</div>
          </div>
        </div>
      </nav>

      {/* Social Sidebar */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4">
        <div className="w-px h-16 bg-gray-600"></div>
        <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
        <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
        <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
        <div className="w-px h-16 bg-gray-600"></div>
      </div>

      <div className="fixed right-0 top-0 bottom-0 w-1 bg-gray-800 z-40">
        <div
          className="bg-red-500 w-full transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background image positioned on the right side */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-3/5 h-full">
            <img
              src="/personal-photo.jpg"
              alt="Pratik Portrait"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/70"></div>
          </div>
          <div className="absolute left-0 top-0 w-2/5 h-full bg-black"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="mb-4 text-gray-300">Product Designer</div>
            <h1 className="text-6xl lg:text-8xl font-bold mb-6">
              Pratik<span className="text-red-500">.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-md">
              Working with client and community, we deliver masterplans that create vibrant new places and spaces,
              attract people, and encourage.
            </p>
            <button className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110">
              <Play className="w-6 h-6 ml-1" />
            </button>
          </div>
          <div className="hidden lg:block">
            {/* Empty space to maintain grid layout */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="border border-gray-700 overflow-hidden">
              <img
                src="/9.png"
                alt="9 Years Experience"
                className="w-full h-full object-cover min-h-[300px]"
              />
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-6">Great Experience</h2>
            <p className="text-gray-400 mb-12">
              Fill appear won't may make moveth signs. Fourth. Good own. Green you're moveth us, lesser.
            </p>
            {/* Dense Tech Stack Collage */}
            <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8">
              <div className="relative w-full h-full">
                {[
                  { tech: 'react.svg', x: '15%', y: '15%', size: 'w-12 h-12', z: 'z-10' },
                  { tech: 'next.svg', x: '25%', y: '20%', size: 'w-10 h-10', z: 'z-20' },
                  { tech: 'ts.svg', x: '35%', y: '25%', size: 'w-11 h-11', z: 'z-30' },
                  { tech: 'python.svg', x: '45%', y: '15%', size: 'w-14 h-14', z: 'z-40' },
                  { tech: 'html.svg', x: '55%', y: '30%', size: 'w-10 h-10', z: 'z-50' },
                  { tech: 'tail.svg', x: '65%', y: '20%', size: 'w-12 h-12', z: 'z-60' },
                  { tech: 'firebase.svg', x: '75%', y: '35%', size: 'w-11 h-11', z: 'z-70' },
                  { tech: 'flask.svg', x: '20%', y: '45%', size: 'w-10 h-10', z: 'z-80' },
                  { tech: 'git.svg', x: '30%', y: '55%', size: 'w-12 h-12', z: 'z-90' },
                  { tech: 'openCV.svg', x: '40%', y: '50%', size: 'w-11 h-11', z: 'z-100' },
                  { tech: 'vite.svg', x: '50%', y: '60%', size: 'w-10 h-10', z: 'z-110' },
                  { tech: 'ubuntu.svg', x: '60%', y: '55%', size: 'w-11 h-11', z: 'z-120' },
                  { tech: 'shell.svg', x: '70%', y: '50%', size: 'w-10 h-10', z: 'z-130' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`absolute group cursor-pointer ${item.z}`}
                    style={{
                      left: item.x,
                      top: item.y,
                      transform: `rotate(${Math.random() * 20 - 10}deg)`,
                    }}
                  >
                    <div className="relative">
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 hover:border-red-400 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30">
                        <img
                          src={`/techstack/${item.tech}`}
                          alt={item.tech.replace('.svg', '')}
                          className={`${item.size} object-contain filter brightness-100 group-hover:brightness-125 transition-all duration-300`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Additional smaller icons for density */}
                {[
                  { tech: 'react.svg', x: '25%', y: '35%', size: 'w-8 h-8', z: 'z-140' },
                  { tech: 'next.svg', x: '45%', y: '40%', size: 'w-7 h-7', z: 'z-150' },
                  { tech: 'ts.svg', x: '65%', y: '45%', size: 'w-8 h-8', z: 'z-160' },
                  { tech: 'python.svg', x: '15%', y: '65%', size: 'w-9 h-9', z: 'z-170' },
                  { tech: 'html.svg', x: '35%', y: '70%', size: 'w-7 h-7', z: 'z-180' },
                  { tech: 'tail.svg', x: '55%', y: '75%', size: 'w-8 h-8', z: 'z-190' },
                  { tech: 'firebase.svg', x: '75%', y: '70%', size: 'w-7 h-7', z: 'z-200' }
                ].map((item, index) => (
                  <div
                    key={`small-${index}`}
                    className={`absolute group cursor-pointer ${item.z}`}
                    style={{
                      left: item.x,
                      top: item.y,
                      transform: `rotate(${Math.random() * 15 - 7.5}deg)`,
                    }}
                  >
                    <div className="relative">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-md p-1.5 hover:border-red-400/50 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                        <img
                          src={`/techstack/${item.tech}`}
                          alt={item.tech.replace('.svg', '')}
                          className={`${item.size} object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center py-20 relative overflow-hidden">
        {/* Background removed as requested */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="transition-all duration-700 ease-in-out">
              <h2 className="text-6xl font-bold mb-6 transition-all duration-500">
                {projects[currentProject].title}
                <span className="text-red-500">.</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-md transition-all duration-500">
                {projects[currentProject].description}
              </p>
              <div className="relative inline-block group">
                <a
                  href={projects[currentProject].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-500 hover:bg-red-600 px-8 py-3 text-sm font-medium transition-all duration-300 relative z-10"
                >
                  VIEW ON GITHUB
                </a>
                <div className="absolute -top-72 left-1/2 transform -translate-x-1/2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out scale-95 group-hover:scale-100 pointer-events-none">
                  <div className="bg-black/95 border-2 border-gray-500 rounded-xl p-3 backdrop-blur-md shadow-2xl w-64 h-64 flex flex-col">
                    <img
                      src={projects[currentProject].background || "/placeholder.svg"}
                      alt={`${projects[currentProject].title} Preview`}
                      className="w-full h-44 object-cover rounded-lg border border-gray-600 flex-shrink-0"
                      loading="lazy"
                    />
                                         <div className="flex-1 flex flex-col justify-center text-center">
                       <div className="text-sm font-medium text-white">{projects[currentProject].title}</div>
                     </div>
                  </div>
                  {/* Arrow pointing down */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                    <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-500"></div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 mt-12">
                {projects.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                      index === currentProject ? "bg-red-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                    }`}
                    onClick={() => setCurrentProject(index)}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={prevProject}
                className="w-12 h-12 border border-gray-600 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextProject}
                className="w-12 h-12 border border-gray-600 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
                     <div className="mt-20 flex items-center justify-between transition-all duration-500">
             <div className="flex-1">
               <div className="h-1 bg-red-500 rounded-full"></div>
             </div>
             <div className="text-gray-400 max-w-md ml-8">
               Innovative solutions built with modern technologies, focusing on user experience and scalable architecture
               for real-world applications.
             </div>
           </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="absolute inset-0">
          <img
            src="/testimonials-bg.jpg"
            alt="Education Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">Education & Experience</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-red-500">Education</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-red-500 pl-6">
                  <div className="text-gray-400 text-sm">2020 - 2024</div>
                  <h4 className="text-xl font-bold">Bachelor of Technology</h4>
                  <p className="text-gray-400">Computer Science & Engineering</p>
                </div>
                <div className="border-l-2 border-gray-600 pl-6">
                  <div className="text-gray-400 text-sm">2018 - 2020</div>
                  <h4 className="text-xl font-bold">Higher Secondary</h4>
                  <p className="text-gray-400">Science Stream</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-8 text-red-500">Experience</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-red-500 pl-6">
                  <div className="text-gray-400 text-sm">2024 - Present</div>
                  <h4 className="text-xl font-bold">Full Stack Developer</h4>
                  <p className="text-gray-400">Freelance & Project Development</p>
                </div>
                <div className="border-l-2 border-gray-600 pl-6">
                  <div className="text-gray-400 text-sm">2023 - 2024</div>
                  <h4 className="text-xl font-bold">Software Development Intern</h4>
                  <p className="text-gray-400">EdTech Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="min-h-screen flex items-center py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/testimonials-bg.jpg" alt="Keyboard Background" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="absolute left-1/4 top-1/3 z-20">
          <img src="/red-quotes.png" alt="Quotation Marks" className="w-16 h-12 opacity-90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-12">
                Creative & dedicated is things that pratik studio brings for your business.
              </h2>
            </div>
            <div>
              <div className="mb-8">
                <p className="text-lg text-gray-300 mb-6">"{testimonials[currentTestimonial].text}"</p>
                <div className="font-bold text-xl">{testimonials[currentTestimonial].author}</div>
                <div className="text-gray-400">{testimonials[currentTestimonial].company}</div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 border border-gray-600 flex items-center justify-center hover:border-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 border border-gray-600 flex items-center justify-center hover:border-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Blog Section */}
      <section id="blog" className="min-h-screen flex items-center py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/modern-workspace.png" alt="Blog Background" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16">Recent news</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="border border-gray-700 p-8">
              <div className="text-gray-400 text-sm mb-4">December 10, 2020</div>
              <h3 className="text-3xl font-bold mb-4">Secrets of the Serpents</h3>
              <p className="text-gray-400 mb-6">
                Beast creature days. This response is important for our ability to learn from mistakes, but it also
                gives rise to ...
              </p>
              <button className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/contact-bg.jpg" alt="Contact Background" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-bold mb-8">Contact</h2>
              <p className="text-gray-400 mb-12">
                You'll called for yielding male, so lights Stars abundantly, is their.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">27 Queen St, New York</h3>
                  <div className="text-2xl font-bold text-gray-300">USA</div>
                </div>
                <div className="text-2xl font-bold">+7 (212) 674-25-10</div>
                <div className="text-gray-400">pratik.design@gmail.com</div>
              </div>
            </div>
            <div>
              <div className="mb-8">
                <span className="text-lg">Let's grab a coffee and jump on conversation </span>
                <span className="text-red-500">chat with me.</span>
              </div>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-gray-600 py-3 focus:border-white outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-gray-600 py-3 focus:border-white outline-none transition-colors"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-600 py-3 focus:border-white outline-none transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 px-8 py-3 text-sm font-medium transition-colors"
                >
                  CONTACT ME
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-gray-400 text-sm">© Pratik. 2020</div>
        </div>
      </footer>
    </div>
  )
}
