"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Sparkles,
  Palette,
  Layout,
  CheckSquare,
  Check,
  ArrowRight,
  FileText,
  PenTool,
  Zap,
  Star,
  Database,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section - Enhanced with green glow and more geometric patterns */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003A33] to-[#002724] opacity-80" />

        {/* Green glow effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

        <div className="absolute inset-0 opacity-[0.12]">
          {/* Large hexagonal shapes - right side cluster */}
          <svg className="absolute top-20 right-32 w-80 h-80" viewBox="0 0 100 100">
            <polygon
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              className="text-accent"
            />
          </svg>
          <svg className="absolute top-48 right-16 w-[28rem] h-[28rem]" viewBox="0 0 100 100">
            <polygon
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-accent"
            />
          </svg>
          <svg className="absolute top-72 right-40 w-64 h-64" viewBox="0 0 100 100">
            <polygon
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-accent"
            />
          </svg>

          {/* Connecting diagonal lines - increased density */}
          <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 1000 800">
            <line x1="600" y1="200" x2="800" y2="400" stroke="currentColor" strokeWidth="0.6" className="text-accent" />
            <line x1="700" y1="100" x2="900" y2="300" stroke="currentColor" strokeWidth="0.6" className="text-accent" />
            <line x1="750" y1="450" x2="650" y2="600" stroke="currentColor" strokeWidth="0.6" className="text-accent" />
            <line x1="850" y1="300" x2="750" y2="500" stroke="currentColor" strokeWidth="0.6" className="text-accent" />
            <line x1="550" y1="350" x2="750" y2="450" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
            <line x1="800" y1="150" x2="900" y2="400" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
            <line x1="650" y1="500" x2="550" y2="650" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
            <line x1="700" y1="250" x2="800" y2="350" stroke="currentColor" strokeWidth="0.4" className="text-accent" />
          </svg>

          {/* Additional horizontal and vertical grid lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 800">
            <line
              x1="0"
              y1="250"
              x2="1000"
              y2="250"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-accent"
              opacity="0.6"
            />
            <line
              x1="0"
              y1="550"
              x2="1000"
              y2="550"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-accent"
              opacity="0.6"
            />
            <line
              x1="750"
              y1="0"
              x2="750"
              y2="800"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-accent"
              opacity="0.6"
            />
            <line
              x1="250"
              y1="0"
              x2="250"
              y2="800"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-accent"
              opacity="0.5"
            />
          </svg>

          {/* Bottom right geometric cluster - expanded */}
          <svg className="absolute bottom-32 right-48 w-72 h-72" viewBox="0 0 100 100">
            <polygon
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              className="text-accent"
            />
          </svg>
          <svg className="absolute bottom-56 right-24 w-56 h-56" viewBox="0 0 100 100">
            <polygon
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-accent"
            />
          </svg>

          {/* Pentagon shapes for variety - added more */}
          <svg className="absolute top-1/3 right-1/3 w-48 h-48" viewBox="0 0 100 100">
            <polygon
              points="50,5 95,35 80,85 20,85 5,35"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              className="text-accent"
            />
          </svg>
          <svg className="absolute top-1/4 right-1/2 w-40 h-40" viewBox="0 0 100 100">
            <polygon
              points="50,5 95,35 80,85 20,85 5,35"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-accent"
            />
          </svg>

          {/* Left side shapes - increased density */}
          <svg className="absolute top-40 left-32 w-64 h-64 opacity-60" viewBox="0 0 100 100">
            <polygon
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              className="text-accent"
            />
          </svg>
          <svg className="absolute bottom-48 left-40 w-56 h-56 opacity-50" viewBox="0 0 100 100">
            <polygon
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              className="text-accent"
            />
          </svg>
          <svg className="absolute bottom-24 left-64 w-72 h-72 opacity-40" viewBox="0 0 100 100">
            <polygon
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-accent"
            />
          </svg>

          {/* Top left corner shapes */}
          <svg className="absolute top-16 left-16 w-48 h-48 opacity-50" viewBox="0 0 100 100">
            <polygon
              points="50,5 95,35 80,85 20,85 5,35"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              className="text-accent"
            />
          </svg>

          {/* Center decorative elements */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-30"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-accent"
            />
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-accent"
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent/15 border border-accent/30 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
              >
                <Sparkles className="size-4 text-accent" />
                <span className="text-xs font-semibold text-white tracking-wide">
                  NEW: AI-powered design suggestions
                </span>
              </div>

              <h1
                className={`text-[64px] leading-[1.1] font-semibold text-white tracking-tight max-w-4xl mx-auto ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
              >
                Design Project Planning Made Simple
              </h1>

              <p
                className={`text-lg leading-relaxed text-white/85 max-w-2xl mx-auto ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
              >
                Plan, organize, and document your design projects from concept to delivery. Everything you need for mood
                boards, style guides, sitemaps, and project specifications in one platform.
              </p>

              <div className="flex items-center justify-center gap-6 text-sm text-white/75 pt-2">
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-accent" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-accent" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-accent" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            {/* Dashboard Preview - Minimal shadow, clean borders */}
            <div className={`max-w-5xl mx-auto ${mounted ? "animate-float" : ""}`}>
              <div className="relative">
                <div className="absolute -inset-3 bg-accent/5 rounded-2xl blur-xl" />
                <Card className="relative overflow-hidden border border-white/15 shadow-sm">
                  <div className="bg-card/95 backdrop-blur p-3">
                    <div className="flex items-center gap-2 mb-3 px-2">
                      <div className="size-2.5 rounded-full bg-red-500/80" />
                      <div className="size-2.5 rounded-full bg-yellow-500/80" />
                      <div className="size-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="bg-background rounded-lg border border-border shadow-sm overflow-hidden">
                      <div className="bg-muted/40 border-b border-border px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2.5">
                            <div className="size-7 rounded-lg bg-primary flex items-center justify-center">
                              <div className="size-3 rounded-sm bg-primary-foreground/90" />
                            </div>
                            <span className="font-semibold text-sm text-foreground">Spring Campaign</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 space-y-4 bg-background">
                        <div className="grid grid-cols-3 gap-3">
                          <Card className="bg-accent/5 border-accent/20 p-4 space-y-1.5">
                            <div className="flex items-center justify-between">
                              <Palette className="size-5 text-accent" />
                              <span className="text-xl font-bold text-foreground">8</span>
                            </div>
                            <p className="text-xs font-medium text-muted-foreground">Color Palettes</p>
                          </Card>
                          <Card className="bg-primary/5 border-primary/20 p-4 space-y-1.5">
                            <div className="flex items-center justify-between">
                              <Layout className="size-5 text-primary" />
                              <span className="text-xl font-bold text-foreground">12</span>
                            </div>
                            <p className="text-xs font-medium text-muted-foreground">Wireframes</p>
                          </Card>
                          <Card className="bg-secondary/5 border-secondary/20 p-4 space-y-1.5">
                            <div className="flex items-center justify-between">
                              <CheckSquare className="size-5 text-secondary" />
                              <span className="text-xl font-bold text-foreground">24</span>
                            </div>
                            <p className="text-xs font-medium text-muted-foreground">Tasks</p>
                          </Card>
                        </div>

                        <Card className="p-4 space-y-3 bg-muted/20 border-border">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-medium text-muted-foreground">Design Progress</span>
                              <span className="text-xs font-bold text-foreground">75%</span>
                            </div>
                            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                              <div className="h-full w-3/4 bg-accent rounded-full" />
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section - Apollo spacing and styling */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">Features</p>
              <h2 className="text-5xl font-semibold text-foreground tracking-tight">
                Everything you need to plan & design
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                All the tools modern designers need to go from concept to launch, in one unified platform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Palette,
                  title: "Visual Mood Boards",
                  desc: "Upload inspiration images, create color palettes, define typography, and add website references. Build the visual direction for your project.",
                },
                {
                  icon: PenTool,
                  title: "Complete Style Guides",
                  desc: "Define your design system with color palettes, typography scales, button styles, and UI components with live website previews.",
                },
                {
                  icon: Layout,
                  title: "Interactive Sitemaps",
                  desc: "Build comprehensive site structures with our block library containing 35+ pre-designed page sections. Plan your entire website architecture.",
                },
                {
                  icon: FileText,
                  title: "Technical Specifications",
                  desc: "Document hosting, platform, database, integrations, security, performance, and SEO requirements in organized sections.",
                },
                {
                  icon: Database,
                  title: "Content & Asset Management",
                  desc: "Organize brand messaging, content guidelines, SEO strategy, competitor analysis, and all your project assets in one place.",
                },
                {
                  icon: CheckSquare,
                  title: "Task Management & Summary",
                  desc: "Track design tasks with priorities and categories, then export comprehensive project summaries as professional PDFs.",
                },
              ].map((feature, i) => (
                <Card
                  key={i}
                  className="p-8 space-y-4 hover:border-accent/40 transition-all duration-200 bg-white border-border shadow-sm"
                >
                  <div className="size-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <feature.icon className="size-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Clean neutrals background */}
      <section className="py-24 lg:py-32 bg-[#F8FAF9]">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-32">
            {/* Benefit 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-sm font-semibold text-accent uppercase tracking-wider">Plan Faster</p>
                <h2 className="text-5xl font-semibold text-foreground tracking-tight leading-tight">
                  Organize projects in minutes, not hours
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Stop juggling spreadsheets, design files, and scattered notes. Troov Studio brings all your design
                  planning into one organized dashboard with dedicated sections for every aspect of your project.
                </p>
                <ul className="space-y-4">
                  {[
                    "8 dedicated sections from overview to summary",
                    "Pre-built templates and 35+ website blocks",
                    "Export professional PDF documentation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="size-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] bg-white rounded-xl border border-border overflow-hidden shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="size-16 mx-auto bg-accent/10 rounded-lg flex items-center justify-center">
                      <Palette className="size-8 text-accent/50" />
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">Image Placeholder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/3] bg-white rounded-xl border border-border overflow-hidden order-2 lg:order-1 shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="size-16 mx-auto bg-accent/10 rounded-lg flex items-center justify-center">
                      <Layout className="size-8 text-accent/50" />
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">Image Placeholder</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <p className="text-sm font-semibold text-accent uppercase tracking-wider">Stay Organized</p>
                <h2 className="text-5xl font-semibold text-foreground tracking-tight leading-tight">
                  Everything in its place
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From mood boards to technical specs, content strategy to task management - every project element has a
                  dedicated home. Find what you need instantly with organized sections and smart categorization.
                </p>
                <ul className="space-y-4">
                  {[
                    "Categorized sections for every project phase",
                    "Visual mood boards with color & typography tools",
                    "Comprehensive project summaries with one click",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="size-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-sm font-semibold text-accent uppercase tracking-wider">Ship Confidently</p>
                <h2 className="text-5xl font-semibold text-foreground tracking-tight leading-tight">
                  Hand off with clarity
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Generate professional project summaries that document every design decision. Developers, clients, and
                  stakeholders get exactly what they need with comprehensive specifications and visual guidelines.
                </p>
                <ul className="space-y-4">
                  {[
                    "Complete style guides with live previews",
                    "Detailed technical specifications & requirements",
                    "One-click PDF export for professional delivery",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="size-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] bg-white rounded-xl border border-border overflow-hidden shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="size-16 mx-auto bg-accent/10 rounded-lg flex items-center justify-center">
                      <PenTool className="size-8 text-accent/50" />
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">Image Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">How It Works</p>
              <h2 className="text-5xl font-semibold text-foreground tracking-tight">
                From concept to delivery in 8 sections
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our organized dashboard guides you through every phase of design planning with dedicated sections for
                each step.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "01",
                  title: "Define & Inspire",
                  desc: "Start with Project Overview to set goals and deliverables. Build mood boards with inspiration images, colors, and typography to establish your visual direction.",
                  icon: Sparkles,
                },
                {
                  number: "02",
                  title: "Design & Structure",
                  desc: "Create your Style Guide with complete design systems. Plan site structure with interactive sitemaps using 35+ pre-built blocks. Document technical specifications.",
                  icon: Layout,
                },
                {
                  number: "03",
                  title: "Organize & Deliver",
                  desc: "Manage content strategy and assets. Track tasks by priority. Generate comprehensive project summaries and export professional PDFs ready for development handoff.",
                  icon: Zap,
                },
              ].map((step, i) => (
                <div key={i} className="relative">
                  {i < 2 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-px bg-border -translate-x-1/2" />
                  )}
                  <Card className="relative p-8 space-y-4 bg-white hover:border-accent/40 transition-all duration-200 border-border shadow-sm">
                    <div className="flex items-start justify-between">
                      <div className="size-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <step.icon className="size-6 text-accent" />
                      </div>
                      <span className="text-5xl font-bold text-muted/15">{step.number}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Subtle accent green background */}
      <section className="py-24 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">Testimonials</p>
              <h2 className="text-5xl font-semibold text-foreground tracking-tight">Loved by designers everywhere</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Troov Studio transformed how I plan design projects. The organized sections and PDF export feature alone save me hours every week.",
                  author: "Sarah Chen",
                  role: "Freelance Designer",
                  company: "Chen Creative",
                },
                {
                  quote:
                    "Finally, a planning tool built specifically for designers. The mood board and style guide features are exactly what I needed.",
                  author: "Marcus Rodriguez",
                  role: "UI/UX Designer",
                  company: "Digital Studio",
                },
                {
                  quote:
                    "The project summary export has made client presentations so much easier. Everything is documented and professional.",
                  author: "Emily Watson",
                  role: "Brand Designer",
                  company: "Watson Design Co",
                },
              ].map((testimonial, i) => (
                <Card
                  key={i}
                  className="p-8 space-y-6 bg-white hover:border-accent/40 transition-all duration-200 border-border shadow-sm"
                >
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="size-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed">"{testimonial.quote}"</p>
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-5xl font-semibold text-foreground tracking-tight">Trusted by designers worldwide</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join designers who have streamlined their project planning with Troov Studio.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: "1,200+", label: "Active Designers" },
                { value: "5,000+", label: "Projects Planned" },
                { value: "3x", label: "Faster Planning" },
                { value: "4.9/5", label: "User Rating" },
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-2">
                  <p className="text-5xl lg:text-6xl font-bold text-accent">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 lg:py-32 bg-[#F8FAF9]">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">Integrations</p>
              <h2 className="text-5xl font-semibold text-foreground tracking-tight">Export & integrate seamlessly</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Export your design summaries as PDFs or integrate with your favorite project management tools.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "Figma",
                "Sketch",
                "Adobe XD",
                "Notion",
                "Slack",
                "Trello",
                "Asana",
                "Monday",
                "ClickUp",
                "Airtable",
                "Webflow",
                "Framer",
              ].map((tool, i) => (
                <Card
                  key={i}
                  className="p-6 flex items-center justify-center aspect-square bg-white hover:border-accent/40 transition-all duration-200 border-border shadow-sm"
                >
                  <div className="text-center space-y-2">
                    <div className="size-12 mx-auto bg-accent/10 rounded-lg flex items-center justify-center">
                      <Database className="size-6 text-accent/50" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{tool}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Accent green button */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 lg:p-16 text-center space-y-8 bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/20 shadow-sm">
              <div className="space-y-4">
                <h2 className="text-5xl font-semibold text-foreground tracking-tight">
                  Ready to transform your workflow?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Start planning better designs today. No credit card required.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white rounded-md px-8 h-12 font-medium"
                  >
                    Start Free Trial
                    <ArrowRight className="size-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border hover:bg-muted rounded-md px-8 h-12 font-medium bg-transparent"
                  >
                    View Pricing
                  </Button>
                </Link>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-accent" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-accent" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-accent" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
