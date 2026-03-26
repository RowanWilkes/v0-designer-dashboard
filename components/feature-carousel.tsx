"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Layout, Palette, ImageIcon, Globe, Code, FileText, CheckSquare, FileBarChart } from "lucide-react"
import Image from "next/image"

type Feature = {
  id: string
  label: string
  icon: React.ElementType
  image: string
  description: string
}

const features: Feature[] = [
  {
    id: "overview",
    label: "Overview",
    icon: Layout,
    image: "/images/features/overview.jpg",
    description: "Get a bird's eye view of your entire project with key metrics and progress tracking."
  },
  {
    id: "moodboard",
    label: "Mood Board",
    icon: ImageIcon,
    image: "/images/features/moodboard.jpg",
    description: "Collect and organize visual inspiration, colors, and design direction."
  },
  {
    id: "styleguide",
    label: "Style Guide",
    icon: Palette,
    image: "/images/features/styleguide.jpg",
    description: "Define your complete design system with typography, colors, and components."
  },
  {
    id: "sitemap",
    label: "Sitemap",
    icon: Globe,
    image: "/images/features/sitemap.jpg",
    description: "Plan and visualize your website structure with our interactive builder."
  },
  {
    id: "technical",
    label: "Technical",
    icon: Code,
    image: "/images/features/technical.jpg",
    description: "Document hosting, integrations, and technical requirements."
  },
  {
    id: "content",
    label: "Content",
    icon: FileText,
    image: "/images/features/content.jpg",
    description: "Organize all your project content and assets in one central location."
  },
  {
    id: "tasks",
    label: "Tasks",
    icon: CheckSquare,
    image: "/images/features/tasks.jpg",
    description: "Track project tasks with priorities, deadlines, and team assignments."
  },
  {
    id: "summary",
    label: "Summary",
    icon: FileBarChart,
    image: "/images/features/summary.jpg",
    description: "Export comprehensive project summaries as professional PDFs."
  }
]

const CYCLE_DURATION = 6000 // 6 seconds per feature

export function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % features.length)
    setProgress(0)
  }, [])

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length)
    setProgress(0)
  }, [])

  const goToIndex = useCallback((index: number) => {
    setActiveIndex(index)
    setProgress(0)
  }, [])

  // Auto-advance timer with progress tracking
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext()
          return 0
        }
        return prev + (100 / (CYCLE_DURATION / 50))
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isPaused, goToNext])

  const activeFeature = features[activeIndex]

  // Calculate visible tabs (show 5 at a time on larger screens)
  const visibleCount = 5
  const halfVisible = Math.floor(visibleCount / 2)
  let startIndex = activeIndex - halfVisible
  if (startIndex < 0) startIndex = 0
  if (startIndex + visibleCount > features.length) {
    startIndex = Math.max(0, features.length - visibleCount)
  }
  const visibleFeatures = features.slice(startIndex, startIndex + visibleCount)

  return (
    <div 
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Tab Navigation */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {/* Left Arrow with Progress Ring */}
        <button
          onClick={goToPrev}
          className="relative size-10 rounded-full bg-white border border-border flex items-center justify-center hover:border-accent/50 transition-colors shadow-sm"
          aria-label="Previous feature"
        >
          {/* Progress Ring SVG */}
          <svg 
            className="absolute inset-0 size-10 -rotate-90"
            viewBox="0 0 40 40"
          >
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-border"
            />
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * 18}`}
              strokeDashoffset={`${2 * Math.PI * 18 * (1 - progress / 100)}`}
              className="text-accent transition-all duration-100"
              strokeLinecap="round"
            />
          </svg>
          <ChevronLeft className="size-4 text-muted-foreground relative z-10" />
        </button>

        {/* Feature Tabs */}
        <div className="flex items-center gap-1 bg-white/80 backdrop-blur rounded-full px-2 py-1.5 border border-border shadow-sm">
          {visibleFeatures.map((feature) => {
            const Icon = feature.icon
            const isActive = feature.id === activeFeature.id
            const featureIndex = features.findIndex(f => f.id === feature.id)
            
            return (
              <button
                key={feature.id}
                onClick={() => goToIndex(featureIndex)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? "bg-accent text-white shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Icon className="size-4" />
                <span className="hidden sm:inline">{feature.label}</span>
              </button>
            )
          })}
        </div>

        {/* Right Arrow with Progress Ring */}
        <button
          onClick={goToNext}
          className="relative size-10 rounded-full bg-white border border-border flex items-center justify-center hover:border-accent/50 transition-colors shadow-sm"
          aria-label="Next feature"
        >
          {/* Progress Ring SVG */}
          <svg 
            className="absolute inset-0 size-10 -rotate-90"
            viewBox="0 0 40 40"
          >
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-border"
            />
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * 18}`}
              strokeDashoffset={`${2 * Math.PI * 18 * (1 - progress / 100)}`}
              className="text-accent transition-all duration-100"
              strokeLinecap="round"
            />
          </svg>
          <ChevronRight className="size-4 text-muted-foreground relative z-10" />
        </button>
      </div>

      {/* Feature Preview Card */}
      <div className="relative">
        <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl" />
        <div className="absolute -inset-2 bg-accent/10 rounded-2xl blur-xl" />
        
        <div className="relative bg-white rounded-xl border border-border shadow-lg overflow-hidden">
          {/* Browser Chrome */}
          <div className="bg-muted/40 border-b border-border px-4 py-3 flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="size-3 rounded-full bg-red-500/80" />
              <div className="size-3 rounded-full bg-yellow-500/80" />
              <div className="size-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2 px-4 py-1 text-xs text-muted-foreground bg-background rounded-md border border-border">
                <Globe className="size-3" />
                troovstudio.com/dashboard/{activeFeature.id}
              </div>
            </div>
          </div>

          {/* Feature Image */}
          <div className="relative aspect-[16/9] bg-gradient-to-br from-muted/30 to-muted/10">
            <Image
              src={activeFeature.image}
              alt={`${activeFeature.label} feature preview`}
              fill
              className="object-cover object-top"
              priority
            />
            
            {/* Feature Description Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-accent flex items-center justify-center">
                  <activeFeature.icon className="size-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{activeFeature.label}</h3>
                  <p className="text-sm text-white/80">{activeFeature.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {features.map((feature, index) => (
          <button
            key={feature.id}
            onClick={() => goToIndex(index)}
            className={`size-2 rounded-full transition-all duration-200 ${
              index === activeIndex 
                ? "bg-accent w-6" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to ${feature.label}`}
          />
        ))}
      </div>
    </div>
  )
}
