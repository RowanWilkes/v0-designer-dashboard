"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Sparkles, Palette, Layout, CheckSquare, Check, FileText, PenTool, Zap, Star, Database } from "lucide-react"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section - Enhanced with green glow */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003A33] to-[#002724] opacity-80" />

        {/* Green glow effects */}
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

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
                Organize Your Web Design Projects in One Place
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
                  <span>Free for your first project</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-accent" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-accent" />
                  <span>Upgrade only when you need more</span>
                </div>
              </div>
            </div>

            {/* Dashboard Preview - Added green glow, removed animation */}
            <div className={`max-w-5xl mx-auto -mb-48 relative z-20 ${mounted ? "" : ""}`}>
              <div className="relative">
                <div className="absolute -inset-8 bg-accent/30 rounded-3xl blur-3xl" />
                <div className="absolute -inset-6 bg-accent/20 rounded-3xl blur-2xl" />
                <div className="absolute -inset-4 bg-accent/15 rounded-2xl blur-xl" />
                <Card className="relative overflow-hidden border border-white/15 shadow-sm">
                  <div className="bg-card/95 backdrop-blur p-3">
                    <div className="flex items-center gap-2 mb-3 px-2">
                      <div className="size-2.5 rounded-full bg-red-500/80" />
                      <div className="size-2.5 rounded-full bg-yellow-500/80" />
                      <div className="size-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="bg-background rounded-lg border border-border shadow-sm overflow-hidden">
                      {/* Dashboard Header with Troov branding and account details */}
                      <div className="bg-muted/40 border-b border-border px-6 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <svg className="size-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                          </svg>
                          <span className="font-semibold text-sm text-foreground">
                            troov<span className="font-normal">studio</span>
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-xs text-muted-foreground">Sarah Chen</div>
                          <div className="size-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-semibold">
                            SC
                          </div>
                        </div>
                      </div>

                      {/* Full dashboard layout with sidebar and main content */}
                      <div className="flex">
                        {/* Sidebar */}
                        <div className="w-56 border-r border-border bg-muted/20 p-4 space-y-6">
                          <div className="space-y-1">
                            <button className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-accent bg-accent/10 rounded-lg">
                              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                              </svg>
                              Home
                            </button>
                          </div>

                          <div className="space-y-2">
                            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-3">
                              Navigation
                            </div>
                            <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
                              <Palette className="size-4" />
                              Overview
                            </button>
                            <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
                              <Palette className="size-4" />
                              Mood Board
                            </button>
                            <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
                              <PenTool className="size-4" />
                              Style Guide
                            </button>
                            <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
                              <Layout className="size-4" />
                              Sitemap
                            </button>
                          </div>

                          <div className="space-y-2">
                            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-3">
                              Management
                            </div>
                            <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
                              <CheckSquare className="size-4" />
                              Tasks
                            </button>
                            <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
                              <FileText className="size-4" />
                              Summary
                            </button>
                          </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 p-6 space-y-4 bg-background">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="size-10 rounded-xl bg-gradient-to-br from-accent to-green-600 flex items-center justify-center shadow-sm">
                                <div className="size-5 rounded-md bg-white/90" />
                              </div>
                              <div>
                                <h2 className="font-semibold text-base text-foreground">Spring Campaign</h2>
                                <p className="text-xs text-muted-foreground">E-commerce redesign project</p>
                              </div>
                            </div>
                            <div className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                              Active
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-3">
                            <Card className="bg-accent/5 border-accent/20 p-4 space-y-2">
                              <div className="flex items-center justify-between">
                                <Palette className="size-5 text-accent" />
                                <span className="text-2xl font-bold text-foreground">8</span>
                              </div>
                              <p className="text-xs font-medium text-muted-foreground">Color Palettes</p>
                            </Card>
                            <Card className="bg-primary/5 border-primary/20 p-4 space-y-2">
                              <div className="flex items-center justify-between">
                                <Layout className="size-5 text-primary" />
                                <span className="text-2xl font-bold text-foreground">12</span>
                              </div>
                              <p className="text-xs font-medium text-muted-foreground">Wireframes</p>
                            </Card>
                            <Card className="bg-secondary/5 border-secondary/20 p-4 space-y-2">
                              <div className="flex items-center justify-between">
                                <CheckSquare className="size-5 text-secondary" />
                                <span className="text-2xl font-bold text-foreground">24</span>
                              </div>
                              <p className="text-xs font-medium text-muted-foreground">Tasks</p>
                            </Card>
                          </div>

                          <Card className="p-4 space-y-3 bg-muted/20 border-border">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-muted-foreground">Design Progress</span>
                                <span className="text-sm font-bold text-foreground">75%</span>
                              </div>
                              <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div className="h-full w-3/4 bg-gradient-to-r from-accent to-green-600 rounded-full" />
                              </div>
                            </div>
                          </Card>

                          <div className="grid grid-cols-2 gap-3 pt-2">
                            <Card className="p-3 space-y-1 bg-background border-border">
                              <div className="text-xs text-muted-foreground">Last Updated</div>
                              <div className="text-sm font-semibold text-foreground">2 hours ago</div>
                            </Card>
                            <Card className="p-3 space-y-1 bg-background border-border">
                              <div className="text-xs text-muted-foreground">Team Members</div>
                              <div className="flex -space-x-2">
                                <div className="size-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-background flex items-center justify-center text-white text-[10px] font-semibold">
                                  SC
                                </div>
                                <div className="size-6 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 border-2 border-background flex items-center justify-center text-white text-[10px] font-semibold">
                                  JD
                                </div>
                                <div className="size-6 rounded-full bg-gradient-to-br from-green-500 to-teal-500 border-2 border-background flex items-center justify-center text-white text-[10px] font-semibold">
                                  MK
                                </div>
                              </div>
                            </Card>
                          </div>
                        </div>
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
      <section className="py-24 lg:py-32 pt-56 lg:pt-64 bg-background">
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
      <section className="py-24 pb-24 lg:py-32 lg:pb-32 bg-accent/5">
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

      <SiteFooter />
    </div>
  )
}
