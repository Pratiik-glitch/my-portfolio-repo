"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Facebook, Twitter, Instagram, ArrowRight } from "lucide-react"

export default function PratikPortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentProject, setCurrentProject] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

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
      year: "2024",
      client: "EdTech Solutions",
      background: "/video-proctoring-bg.png",
      githubUrl: "https://github.com/Pratiik-glitch/video_proctoring.git",
    },
    {
      title: "API Integration",
      description:
        "Comprehensive backend API development with seamless third-party integrations, robust authentication, and scalable microservices architecture.",
      year: "2024",
      client: "Enterprise Systems",
      background: "/api-integration-bg.png",
      githubUrl: "https://github.com/Pratiik-glitch/-api_integration.git",
    },
    {
      title: "Sustinlyze360",
      description:
        "Sustainability analytics platform providing comprehensive environmental impact assessment with data visualization and actionable insights for businesses.",
      year: "2024",
      client: "Green Analytics",
      background: "/sustinlyze-bg.png",
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
                { id: "partners", label: "PARTNERS" },
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
        <div className="absolute inset-0">
          <img
            src="/personal-photo.jpg"
            alt="Pratik Portrait"
            className="w-full h-full object-cover opacity-100 brightness-125 animate-pulse"
            style={{ animationDuration: "4s" }}
          />
          <div className="absolute inset-0 bg-black/20"></div>
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
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="border border-gray-700 p-16 text-center">
              <div className="text-8xl font-bold mb-4">
                9<span className="text-red-500">.</span>
              </div>
              <div className="text-gray-400">
                <div>Years</div>
                <div>Experience</div>
                <div>Working</div>
              </div>
              <div className="w-16 h-px bg-gray-600 mx-auto mt-8"></div>
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-6">Great Experience</h2>
            <p className="text-gray-400 mb-12">
              Fill appear won't may make moveth signs. Fourth. Good own. Green you're moveth us, lesser.
            </p>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span>WEB DESIGN</span>
                  <span>70%</span>
                </div>
                <div className="w-full bg-gray-800 h-1">
                  <div className="bg-red-500 h-1" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>FIGMA</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-800 h-1">
                  <div className="bg-red-500 h-1" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>WORDPRESS</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-800 h-1">
                  <div className="bg-red-500 h-1" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center py-20 relative overflow-hidden">
        <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
          <img
            src={projects[currentProject].background || "/placeholder.svg"}
            alt="Project Background"
            className="w-full h-full object-cover opacity-70 transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-black/25"></div>
        </div>
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
              <a
                href={projects[currentProject].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-500 hover:bg-red-600 px-8 py-3 text-sm font-medium transition-colors"
              >
                VIEW ON GITHUB
              </a>
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
            <div className="flex items-center space-x-4">
              <Twitter className="w-12 h-12 text-gray-400" />
              <div>
                <div className="text-gray-400 text-sm">{projects[currentProject].year}</div>
                <div className="text-2xl font-bold">{projects[currentProject].client}</div>
              </div>
            </div>
            <div className="text-gray-400 max-w-md">
              Innovative solutions built with modern technologies, focusing on user experience and scalable architecture
              for real-world applications.
            </div>
            <Twitter className="w-12 h-12 text-gray-400" />
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

      {/* Partners Section */}
      <section id="partners" className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-16">Our Partners</h2>
          {/* Add partners content here */}
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
