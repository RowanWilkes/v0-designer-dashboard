"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { 
  Palette, 
  PenTool, 
  Layout, 
  FileText, 
  Database, 
  CheckSquare,
  ArrowRight
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Feature {
  id: string
  icon: LucideIcon
  title: string
  description: string
  image: string
}

const features: Feature[] = [
  {
    id: "moodboards",
    icon: Palette,
    title: "Visual Mood Boards",
    description: "Upload inspiration images, create color palettes, define typography, and add website references. Build the visual direction for your project with an intuitive drag-and-drop interface.",
    image: "/images/features/moodboard.jpg"
  },
  {
    id: "styleguides",
    icon: PenTool,
    title: "Complete Style Guides",
    description: "Define your design system with color palettes, typography scales, button styles, and UI components. Preview your styles live as you build them.",
    image: "/images/features/styleguide.jpg"
  },
  {
    id: "sitemaps",
    icon: Layout,
    title: "Interactive Sitemaps",
    description: "Build comprehensive site structures with our block library containing 35+ pre-designed page sections. Plan your entire website architecture visually.",
    image: "/images/features/sitemap.jpg"
  },
  {
    id: "technical",
    icon: FileText,
    title: "Technical Specifications",
    description: "Document hosting, platform, database, integrations, security, performance, and SEO requirements in organized sections that developers will love.",
    image: "/images/features/technical.jpg"
  },
  {
    id: "content",
    icon: Database,
    title: "Content & Asset Management",
    description: "Organize brand messaging, content guidelines, SEO strategy, competitor analysis, and all your project assets in one centralized location.",
    image: "/images/features/content.jpg"
  },
  {
    id: "tasks",
    icon: CheckSquare,
    title: "Task Management",
    description: "Track design tasks with priorities and categories, collaborate with your team, and export comprehensive project summaries as professional PDFs.",
    image: "/images/features/tasks.jpg"
  }
]

const TIMER_DURATION = 6000 // 6 seconds

export function FeaturesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const activeFeature = features[activeIndex]

  const goToFeature = useCallback((index: number) => {
    setActiveIndex(index)
    setProgress(0)
  }, [])

  // Auto-advance timer
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Advance to next feature
          setActiveIndex((current) => (current + 1) % features.length)
          return 0
        }
        return prev + (100 / (TIMER_DURATION / 50))
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance">
              Get to know<br />Troov Studio
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Replace scattered tools with Troov Studio, the only design planning platform built to help designers and clients collaborate seamlessly.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
              >
                Platform Overview
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div 
            className="grid lg:grid-cols-2 gap-8 lg:gap-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Feature List */}
            <div className="space-y-0">
              {features.map((feature, index) => {
                const Icon = feature.icon
                const isActive = index === activeIndex
                
                return (
                  <div key={feature.id} className="relative">
                    <button
                      onClick={() => goToFeature(index)}
                      className={`w-full text-left py-5 transition-all duration-300 ${
                        isActive ? "opacity-100" : "opacity-60 hover:opacity-80"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <Icon className={`size-5 mt-0.5 transition-colors ${
                            isActive ? "text-accent" : "text-muted-foreground"
                          }`} />
                          <div>
                            <h3 className={`text-lg font-medium transition-colors ${
                              isActive ? "text-foreground" : "text-muted-foreground"
                            }`}>
                              {feature.title}
                            </h3>
                            {isActive && (
                              <p className="text-muted-foreground mt-3 leading-relaxed text-sm max-w-md animate-fade-in">
                                {feature.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className={`size-9 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                          isActive 
                            ? "border-accent/30 bg-accent/5" 
                            : "border-border bg-transparent"
                        }`}>
                          <ArrowRight className={`size-4 transition-colors ${
                            isActive ? "text-accent" : "text-muted-foreground"
                          }`} />
                        </div>
                      </div>
                    </button>
                    
                    {/* Progress bar - only show on active item */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-border">
                      {isActive && (
                        <div 
                          className="h-full bg-accent transition-all duration-75 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Feature Preview Image */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="relative rounded-xl overflow-hidden border border-border shadow-xl bg-white">
                  {/* Browser Chrome */}
                  <div className="bg-muted/30 border-b border-border px-4 py-3 flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="size-2.5 rounded-full bg-red-400" />
                      <div className="size-2.5 rounded-full bg-yellow-400" />
                      <div className="size-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="bg-background rounded-md px-3 py-1 text-xs text-muted-foreground border border-border">
                        app.troovstudio.com
                      </div>
                    </div>
                  </div>
                  
                  {/* Feature Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {features.map((feature, index) => (
                      <div
                        key={feature.id}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          index === activeIndex ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover object-top"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
