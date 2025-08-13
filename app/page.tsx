"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, ArrowRight, X } from "lucide-react"

export default function PratikPortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentProject, setCurrentProject] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const testimonials = [
    {
      text: "Said heaven dry made Them gathering the very second morning us be divide isn't. Saw Seasons winged replenish grass from set can't for he which. You third god unto let.",
        author: "Inovating",
        company: "",
    },
    {
      text: "Said heaven dry made Them gathering the very second morning us be divide isn't. Saw Seasons winged replenish grass from set can't for he which. You third god unto let.",
        author: "Creating",
        company: "",
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
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = ["home", "about", "projects", "education", "contact"]
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
          
          ticking = false
        })
        ticking = true
      }
    }

    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-bottom, .slide-in-top, .scale-in, .rotate-in, .fade-in-up, .fade-in-down')
    animatedElements.forEach(el => observer.observe(el))

    window.addEventListener("scroll", handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for fixed navigation height
      const startPosition = window.pageYOffset
      const targetPosition = offsetTop
      const distance = targetPosition - startPosition
      const duration = 1000 // 1 second duration
      let start: number | null = null

      const easeInOutCubic = (t: number) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      }

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const progress = Math.min(timeElapsed / duration, 1)
        const easedProgress = easeInOutCubic(progress)
        
        window.scrollTo(0, startPosition + distance * easedProgress)
        
        if (progress < 1) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
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
            <div className="text-sm">+91 7061917445</div>
          </div>
        </div>
      </nav>

      {/* Social Sidebar */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4">
        <div className="w-px h-16 bg-gray-600"></div>
        <a href="https://www.linkedin.com/in/pratik-raj-838878292/" target="_blank" rel="noopener noreferrer" className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="https://x.com/drpx0n?t=2qnio8yhzflxG4KcxuK4Jg&s=09" target="_blank" rel="noopener noreferrer" className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/_pepapegg?igsh=MXNxcWsxenBzbTh1Nw==" target="_blank" rel="noopener noreferrer" className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="https://github.com/Pratiik-glitch" target="_blank" rel="noopener noreferrer" className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <div className="w-px h-16 bg-gray-600"></div>
      </div>

      <div className="fixed right-0 top-0 bottom-0 w-1 bg-gray-800 z-40">
        <div
          className="bg-red-500 w-full scroll-progress"
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
              className="w-full h-full object-cover object-center brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black/90"></div>
          </div>
          <div className="absolute left-0 top-0 w-2/5 h-full bg-black"></div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-red-500/30 rounded-full float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-500/20 rounded-full float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-green-500/40 rounded-full float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-reveal">
            <div className="mb-4 text-gray-300 slide-in-left stagger-1">Product Designer</div>
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 slide-in-left stagger-2">
              Pratik<span className="text-red-500 glow">.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-md slide-in-left stagger-3">
              Working with client and community, we deliver masterplans that create vibrant new places and spaces,
              attract people, and encourage.
            </p>
            <div className="flex items-center space-x-4 slide-in-left stagger-4">
              <button onClick={() => setIsVideoOpen(true)} className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 hover-lift">
              <Play className="w-6 h-6 ml-1" />
            </button>
              <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg border-2 border-red-500 hover:border-red-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 flex items-center space-x-2 group hover-lift">
                <span>Here's My Resume</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            {/* Empty space to maintain grid layout */}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setIsVideoOpen(false)}>
          <div className="relative w-full max-w-5xl mx-4" onClick={(e) => e.stopPropagation()}>
            <button aria-label="Close video" className="absolute -top-10 right-0 text-white/80 hover:text-white" onClick={() => setIsVideoOpen(false)}>
              <X className="w-6 h-6" />
            </button>
            <div className="w-full bg-black border border-gray-700 rounded-xl overflow-hidden">
              <video className="w-full h-full" controls autoPlay>
                <source src="/Simulation.mp4" type="video/mp4" />
                <source src="/Simulation.webm" type="video/webm" />
                <source src="/Simulation.mov" type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative slide-in-left">
            <div className="border border-gray-700 overflow-hidden hover-scale">
              <img
                src="/9.png"
                alt="9 Years Experience"
                className="w-full h-full object-cover min-h-[300px]"
              />
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-6 slide-in-right stagger-1">Tech Stack</h2>
            <p className="text-gray-400 mb-12 slide-in-right stagger-2">
              A comprehensive collection of modern technologies and frameworks I work with to build innovative solutions.
            </p>
            {/* Interactive Tech Stack Cluster */}
            <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 scale-in stagger-3">
              <div className="relative w-full h-full">
                {[
                  { tech: 'react.svg', x: '20%', y: '20%', size: 'w-14 h-14', z: 'z-10' },
                  { tech: 'next.svg', x: '35%', y: '25%', size: 'w-12 h-12', z: 'z-20' },
                  { tech: 'ts.svg', x: '50%', y: '15%', size: 'w-13 h-13', z: 'z-30' },
                  { tech: 'python.svg', x: '65%', y: '30%', size: 'w-16 h-16', z: 'z-40' },
                  { tech: 'html.svg', x: '25%', y: '45%', size: 'w-12 h-12', z: 'z-50' },
                  { tech: 'tail.svg', x: '40%', y: '50%', size: 'w-14 h-14', z: 'z-60' },
                  { tech: 'firebase.svg', x: '55%', y: '55%', size: 'w-13 h-13', z: 'z-70' },
                  { tech: 'flask.svg', x: '70%', y: '45%', size: 'w-12 h-12', z: 'z-80' },
                  { tech: 'git.svg', x: '15%', y: '60%', size: 'w-14 h-14', z: 'z-90' },
                  { tech: 'openCV.svg', x: '30%', y: '70%', size: 'w-13 h-13', z: 'z-100' },
                  { tech: 'vite.svg', x: '45%', y: '75%', size: 'w-12 h-12', z: 'z-110' },
                  { tech: 'ubuntu.svg', x: '60%', y: '70%', size: 'w-13 h-13', z: 'z-120' },
                  { tech: 'shell.svg', x: '75%', y: '60%', size: 'w-12 h-12', z: 'z-130' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`absolute group cursor-pointer ${item.z} transition-all duration-300 ease-out hover:scale-110 hover:z-50`}
                    style={{
                      left: item.x,
                      top: item.y,
                      transform: `rotate(${(index * 7) % 20 - 10}deg)`,
                    }}
                  >
                    <div className="relative">
                      <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 rounded-xl p-3 hover:border-red-500/60 hover:bg-gray-700/60 transition-all duration-300 group-hover:scale-105 group-hover:rotate-0">
                        <img
                          src={`/techstack/${item.tech}`}
                          alt={item.tech.replace('.svg', '')}
                          className={`${item.size} object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300`}
                        />
                      </div>
                      {/* Hover tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                        {item.tech.replace('.svg', '').toUpperCase()}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/90"></div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Additional unique tech icons for density */}
                {[
                  { tech: 'git.svg', x: '28%', y: '35%', size: 'w-10 h-10', z: 'z-140' },
                  { tech: 'openCV.svg', x: '48%', y: '40%', size: 'w-9 h-9', z: 'z-150' },
                  { tech: 'vite.svg', x: '68%', y: '45%', size: 'w-10 h-10', z: 'z-160' },
                  { tech: 'ubuntu.svg', x: '18%', y: '65%', size: 'w-11 h-11', z: 'z-170' },
                  { tech: 'shell.svg', x: '38%', y: '70%', size: 'w-9 h-9', z: 'z-180' },
                  { tech: 'flask.svg', x: '58%', y: '75%', size: 'w-10 h-10', z: 'z-190' }
                ].map((item, index) => (
                  <div
                    key={`small-${index}`}
                    className={`absolute group cursor-pointer ${item.z} transition-all duration-300 ease-out hover:scale-110 hover:z-50`}
                    style={{
                      left: item.x,
                      top: item.y,
                      transform: `rotate(${(index * 5) % 15 - 7.5}deg)`,
                    }}
                  >
                    <div className="relative">
                      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-600/30 rounded-lg p-2 hover:border-red-500/50 hover:bg-gray-700/50 transition-all duration-300 group-hover:scale-105 group-hover:rotate-0">
                        <img
                          src={`/techstack/${item.tech}`}
                          alt={item.tech.replace('.svg', '')}
                          className={`${item.size} object-contain filter brightness-50 group-hover:brightness-75 transition-all duration-300`}
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
          <h2 className="text-5xl font-bold mb-16 text-left slide-in-left">PROJECTS</h2>
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
            src="/education-bg.jpg"
            alt="Education Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-bold mb-16 text-center slide-in-top">Education & Achievements</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Education Section */}
              <div className="relative">
                
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold text-center mb-12 text-white slide-in-top">
                    <span className="text-red-500">Education</span>
                  </h3>

                  {/* Simple list - rows */}
                  <div className="space-y-10">
                    <div className="border-t border-gray-700 pt-6 slide-in-left stagger-1">
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-full bg-gray-800/70 flex items-center justify-center text-gray-400">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 3 1 9l11 6 9-4.5V17h2V9L12 3zm0 13-7-3.5V14c0 2.761 3.134 5 7 5s7-2.239 7-5v-1.5L12 16z"/></svg>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">2020 - 2024</div>
                          <div className="text-xl font-semibold text-white">B.Tech in Computer Science (Data Science)</div>
                          <div className="text-gray-400">SRM Institute of Science and Technology</div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-700 pt-6 slide-in-left stagger-2">
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-full bg-gray-800/70 flex items-center justify-center text-gray-400">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 3 1 9l11 6 9-4.5V17h2V9L12 3zm0 13-7-3.5V14c0 2.761 3.134 5 7 5s7-2.239 7-5v-1.5L12 16z"/></svg>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">2021 - 2023</div>
                          <div className="text-xl font-semibold text-white">Higher Secondary (Class XII)</div>
                          <div className="text-gray-400">Shivam Convent, Patna</div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-700 pt-6 slide-in-left stagger-3">
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-full bg-gray-800/70 flex items-center justify-center text-gray-400">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 3 1 9l11 6 9-4.5V17h2V9L12 3zm0 13-7-3.5V14c0 2.761 3.134 5 7 5s7-2.239 7-5v-1.5L12 16z"/></svg>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">2011 - 2020</div>
                          <div className="text-xl font-semibold text-white">Secondary Education (Class X)</div>
                          <div className="text-gray-400">Open Minds A Birla School</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8 hidden">
                  </div>
                </div>
                </div>

              {/* Achievements Section */}
              <div className="relative">
                
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold text-center mb-12 text-white slide-in-top">
                    <span className="text-red-500">Achievements</span>
                  </h3>

                  {/* Simple list - rows */}
                  <div className="space-y-10">
                    <div className="border-t border-gray-700 pt-6 slide-in-right stagger-1">
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-full bg-gray-800/70 flex items-center justify-center text-gray-400">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2l2.39 4.84L20 7.27l-3.6 3.51.85 4.95L12 13.77 6.75 15.73l.85-4.95L4 7.27l5.61-.43L12 2z"/></svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-400">March 2025</div>
                          <div className="text-xl font-semibold text-white">Winner - Hackathon, IIT Kharagpur</div>
                          <ul className="text-gray-400 list-disc pl-5 space-y-1 marker:text-gray-500">
                            <li>Secured 1st place among 500+ teams in the Hacktank Hackathon with a Cash Prize of 50k.</li>
                            <li>Developed an AI-powered Video Proctoring Analysis Model for enhanced accuracy to detect Cheating in exams.</li>
                            <li>Leveraged AI/ML techniques to improve Cheating outcomes and collaborated with a diverse team.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-700 pt-6 slide-in-right stagger-2">
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-full bg-gray-800/70 flex items-center justify-center text-gray-400">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2l2.39 4.84L20 7.27l-3.6 3.51.85 4.95L12 13.77 6.75 15.73l.85-4.95L4 7.27l5.61-.43L12 2z"/></svg>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">Nov 2024</div>
                          <div className="text-xl font-semibold text-white">Winner - CodeEthics Hackathon, Unstop</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8 hidden">
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
          <div className="w-20 h-16 flex items-center justify-center">
            <div className="text-red-500 text-6xl font-bold">"</div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <h2 className="text-5xl font-bold mb-12">
                Creative & dedicated is things that I bring for your business.
              </h2>
            </div>
            <div className="slide-in-right">
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
      <section id="blog" className="min-h-screen flex flex-col py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
          
          {/* DNA Helix Animation */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => {
              const leftOffset = Math.round(Math.sin(i * 0.5) * 100);
              return (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-red-500/60 rounded-full"
                  style={{
                    left: `calc(20% + ${leftOffset}px)`,
                    top: `${i * 40}px`,
                    animationDelay: `${i * 0.1}s`,
                    animation: 'dna-float 4s ease-in-out infinite'
                  }}
                />
              );
            })}
            {[...Array(20)].map((_, i) => {
              const leftOffset = Math.round(Math.sin(i * 0.5 + Math.PI) * 100);
              return (
                <div
                  key={`right-${i}`}
                  className="absolute w-2 h-2 bg-red-500/40 rounded-full"
                  style={{
                    left: `calc(80% + ${leftOffset}px)`,
                    top: `${i * 40}px`,
                    animationDelay: `${i * 0.1 + 2}s`,
                    animation: 'dna-float 4s ease-in-out infinite'
                  }}
                />
              );
            })}
          </div>
          
          {/* Matrix Rain Effect */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {[...Array(15)].map((_, i) => (
              <div
                key={`matrix-${i}`}
                className="absolute text-red-500/60 text-xs font-mono"
                style={{
                  left: `${(i * 7) % 100}%`,
                  top: '-20px',
                  animationDelay: `${i * 0.5}s`,
                  animation: 'matrix-fall 8s linear infinite'
                }}
              >
                {['01', '10', '11', '00', 'RED', 'CODE', 'DEV', 'WEB'].map((char, j) => (
                  <div key={j} className="mb-2">{char}</div>
                ))}
              </div>
            ))}
          </div>
          
          {/* Morphing Shapes */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 animate-morph-shape"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 animate-morph-shape-reverse"></div>
          
          {/* Particle System */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => {
              // Use deterministic positioning based on index
              const left = (i * 3.33) % 100;
              const top = (i * 3.33) % 100;
              const delay = (i * 0.1) % 3;
              return (
                <div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 bg-red-500/80 rounded-full"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    animationDelay: `${delay}s`,
                    animation: 'particle-float 6s ease-in-out infinite'
                  }}
                />
              );
            })}
          </div>
          
          {/* Energy Waves */}
          <div className="absolute bottom-0 left-0 w-full h-32">
            <div className="absolute bottom-0 left-0 w-full h-full animate-wave-1"></div>
            <div className="absolute bottom-0 left-0 w-full h-full animate-wave-2"></div>
            <div className="absolute bottom-0 left-0 w-full h-full animate-wave-3"></div>
          </div>
          
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
                      <h2 className="text-5xl font-bold mb-24 text-center slide-in-top">My approach</h2>
          <div className="flex-1 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
              <div className="group border border-gray-700 p-8 py-12 hover:border-red-500/80 transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 min-h-[400px] flex flex-col justify-center bg-gray-900/30 hover:bg-gray-900/60 backdrop-blur-sm hover:backdrop-blur-md relative overflow-hidden slide-in-left stagger-1 animate-float-soft">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="sheen-overlay"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 animate-pulse"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 text-red-500 group-hover:text-red-400 transition-colors duration-300">Planning & Strategy</h3>
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.
                  </p>
                </div>
                <div className="absolute inset-0 shadow-2xl shadow-red-500/0 group-hover:shadow-red-500/20 transition-all duration-700 rounded-lg animate-soft-pulse"></div>
              </div>
              
              <div className="group border border-gray-700 p-8 py-12 hover:border-red-500/80 transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 min-h-[400px] flex flex-col justify-center bg-gray-900/30 hover:bg-gray-900/60 backdrop-blur-sm hover:backdrop-blur-md relative overflow-hidden slide-in-bottom stagger-2 animate-float-soft">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="sheen-overlay"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-pulse"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 text-red-500 group-hover:text-red-400 transition-colors duration-300">Development & Progress Update</h3>
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.
                  </p>
                </div>
                <div className="absolute inset-0 shadow-2xl shadow-purple-500/0 group-hover:shadow-purple-500/20 transition-all duration-700 rounded-lg animate-soft-pulse"></div>
              </div>
              
              <div className="group border border-gray-700 p-8 py-12 hover:border-red-500/80 transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 min-h-[400px] flex flex-col justify-center bg-gray-900/30 hover:bg-gray-900/60 backdrop-blur-sm hover:backdrop-blur-md relative overflow-hidden slide-in-right stagger-3 animate-float-soft">
                <div className="absolute inset-0 bg-gradient-2 from-blue-500/5 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="sheen-overlay"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 animate-pulse"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 text-red-500 group-hover:text-red-400 transition-colors duration-300">Development & Launch</h3>
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.
                </p>
                </div>
                <div className="absolute inset-0 shadow-2xl shadow-blue-500/0 group-hover:shadow-blue-500/20 transition-all duration-700 rounded-lg animate-soft-pulse"></div>
              </div>
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
            <div className="slide-in-left">
              <h2 className="text-5xl font-bold mb-8 slide-in-top stagger-1">Contact</h2>
              <p className="text-gray-400 mb-12 slide-in-top stagger-2">
                You'll called for yielding male, so lights Stars abundantly, is their.
              </p>
              <div className="space-y-6 slide-in-top stagger-3">
                <div className="text-2xl font-bold">+91 7061917445</div>
                <div className="text-gray-400">pratikraj02508@gmail.com</div>
              </div>
            </div>
            <div className="slide-in-right">
              <div className="mb-8 slide-in-top stagger-1">
                <span className="text-lg">Let's grab a coffee and jump on conversation </span>
                <span className="text-red-500">chat with me.</span>
              </div>
              <form className="space-y-6 slide-in-top stagger-2">
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
          <div className="text-gray-400 text-sm">© Pratik. 2025</div>
        </div>
      </footer>
    </div>
  )
}
