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
          {/* Header - Two column layout like reference */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Get to know<br />Troov Studio
            </h2>
            <div className="lg:max-w-md space-y-4 lg:pt-2">
              <p className="text-muted-foreground leading-relaxed">
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
            className="flex flex-col lg:flex-row gap-12 lg:gap-16"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Feature List - Left side */}
            <div className="lg:w-[380px] flex-shrink-0">
              {features.map((feature, index) => {
                const Icon = feature.icon
                const isActive = index === activeIndex
                
                return (
                  <div key={feature.id} className="relative">
                    <button
                      onClick={() => goToFeature(index)}
                      className="w-full text-left py-4 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Icon className={`size-5 transition-colors duration-200 ${
                            isActive ? "text-accent" : "text-muted-foreground/50"
                          }`} />
                          <span className={`text-base font-medium transition-colors duration-200 ${
                            isActive ? "text-foreground" : "text-muted-foreground/70"
                          }`}>
                            {feature.title}
                          </span>
                        </div>
                        <div className={`size-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                          isActive 
                            ? "bg-muted/80" 
                            : "bg-transparent"
                        }`}>
                          <ArrowRight className={`size-4 transition-colors duration-200 ${
                            isActive ? "text-foreground" : "text-muted-foreground/40"
                          }`} />
                        </div>
                      </div>
                      
                      {/* Description - only show when active */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        isActive ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                      }`}>
                        <p className="text-muted-foreground text-sm leading-relaxed pl-8">
                          {feature.description}
                        </p>
                      </div>
                    </button>
                    
                    {/* Thin progress bar at the bottom of each item */}
                    <div className="h-px bg-border/60">
                      {isActive && (
                        <div 
                          className="h-full bg-accent/70 transition-all duration-75 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Feature Preview Image - Right side */}
            <div className="flex-1 lg:pt-0">
              <div className="sticky top-24">
                <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-black/5 bg-white">
                  {/* Browser Chrome */}
                  <div className="bg-muted/20 border-b border-border/50 px-4 py-3 flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="size-2.5 rounded-full bg-muted-foreground/20" />
                      <div className="size-2.5 rounded-full bg-muted-foreground/20" />
                      <div className="size-2.5 rounded-full bg-muted-foreground/20" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="bg-background/80 rounded px-3 py-1 text-xs text-muted-foreground">
                        app.troovstudio.com
                      </div>
                    </div>
                  </div>
                  
                  {/* Feature Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted/5">
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
