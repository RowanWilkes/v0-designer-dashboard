"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import {
  Sparkles,
  Palette,
  Layout,
  CheckSquare,
  Check,
  FileText,
  PenTool,
  Zap,
  Star,
  Database,
  Bitcoin as Button,
  Home,
  Grid,
  ImageIcon,
  Globe,
  Code,
  Package,
  FileBarChart,
  Crown,
  Settings,
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
                      <div className="bg-muted/40 border-b border-border px-4 py-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <svg
                            className="size-6 text-accent"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"
                              fill="currentColor"
                            />
                          </svg>
                          <span className="text-sm">
                            <span className="font-semibold text-foreground">troov</span>
                            <span className="font-normal text-foreground">studio</span>
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2 px-2 py-1 text-xs text-muted-foreground border border-border rounded-md bg-background">
                            <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                              />
                            </svg>
                            Fitness App Redesign
                            <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          <div className="relative">
                            <div className="absolute -top-1 -right-1 size-3 bg-red-500 rounded-full border-2 border-background" />
                            <svg
                              className="size-4 text-muted-foreground"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                              />
                            </svg>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="size-7 rounded-full bg-accent flex items-center justify-center text-white text-xs font-semibold">
                              EC
                            </div>
                            <div className="text-xs">
                              <div className="font-medium text-foreground">Emma Chen</div>
                              <div className="text-muted-foreground text-[10px]">Free Plan</div>
                            </div>
                            <svg
                              className="size-3 text-muted-foreground"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Full dashboard layout with sidebar and main content */}
                      <div className="flex">
                        <div className="w-56 border-r border-border bg-muted/10 p-3 space-y-5 relative pb-28">
                          <div className="space-y-1">
                            <button className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-accent bg-accent/10 rounded-lg">
                              <Home className="size-4" />
                              Home
                            </button>
                          </div>

                          <div className="space-y-1">
                            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-3 pb-1">
                              Navigation
                            </div>
                            <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
                              <Grid className="size-4" />
                              Overview
                            </button>
                            <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
                              <ImageIcon className="size-4" />
                              Mood Board
                            </button>
                            <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
                              <Palette className="size-4" />
                              Style Guide
                            </button>
                            <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
                              <Globe className="size-4" />
                              Sitemap
                            </button>
                            <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
                              <Code className="size-4" />
                              Technical
                            </button>
                          </div>

                          <div className="space-y-1">
                            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-3 pb-1">
                              Content & Assets
                            </div>
                            <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
                              <FileText className="size-4" />
                              Content
                            </button>
                            <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
                              <Package className="size-4" />
                              Assets
                            </button>
                          </div>

                          <div className="space-y-1">
                            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-3 pb-1">
                              Management
                            </div>
                            <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
                              <CheckSquare className="size-4" />
                              Tasks
                            </button>
                            <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
                              <FileBarChart className="size-4" />
                              Summary
                            </button>
                          </div>

                          <div className="absolute bottom-3 left-3 right-3 space-y-2">
                            <button className="w-full flex items-center justify-center gap-1.5 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold text-xs h-9 rounded-lg shadow-sm transition-colors">
                              <Crown className="size-4" />
                              Upgrade
                            </button>
                            <button className="w-full flex items-center justify-center gap-1.5 bg-muted hover:bg-muted/80 text-foreground font-medium text-xs h-9 rounded-lg transition-colors">
                              <Settings className="size-4" />
                              Admin Settings
                            </button>
                          </div>
                        </div>

                        <div className="flex-1 p-6 space-y-4 bg-background">
                          <div className="mb-4">
                            <h2 className="text-lg font-semibold text-foreground mb-1">Welcome back, Emma Chen!</h2>
                            <p className="text-xs text-muted-foreground">
                              Here's what's happening with your projects today
                            </p>
                          </div>

                          <div className="grid grid-cols-4 gap-3">
                            <Card className="bg-background border-border p-4 space-y-1">
                              <div className="flex items-center justify-between">
                                <p className="text-xs text-muted-foreground">Total Projects</p>
                                <div className="size-9 rounded-lg bg-accent/10 flex items-center justify-center">
                                  <svg
                                    className="size-4 text-accent"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <p className="text-2xl font-bold text-foreground">3</p>
                            </Card>
                            <Card className="bg-background border-border p-4 space-y-1">
                              <div className="flex items-center justify-between">
                                <p className="text-xs text-muted-foreground">Active Tasks</p>
                                <div className="size-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                  <svg
                                    className="size-4 text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <p className="text-2xl font-bold text-foreground">12</p>
                            </Card>
                            <Card className="bg-background border-border p-4 space-y-1">
                              <div className="flex items-center justify-between">
                                <p className="text-xs text-muted-foreground">Completion</p>
                                <div className="size-9 rounded-lg bg-purple-500/10 flex items-center justify-center">
                                  <svg
                                    className="size-4 text-purple-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <p className="text-2xl font-bold text-foreground">67%</p>
                            </Card>
                            <Card className="bg-background border-border p-4 space-y-1">
                              <div className="flex items-center justify-between">
                                <p className="text-xs text-muted-foreground">Plan Status</p>
                                <div className="size-9 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                                  <svg
                                    className="size-4 text-yellow-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <p className="text-2xl font-bold text-foreground">Free</p>
                            </Card>
                          </div>

                          <Card className="bg-accent/5 border-accent/20 p-5 space-y-3">
                            <div className="flex items-start gap-3">
                              <div className="size-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                                <svg
                                  className="size-5 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <h3 className="text-sm font-semibold text-foreground mb-1">
                                  Design Phase Complete! 🎨
                                </h3>
                                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                                  Great progress! Your mood board and style guide are complete. Continue with wireframes
                                  and content planning to finish your project specification.
                                </p>
                                <div className="flex items-center gap-2">
                                  <Button size="sm" className="h-8 text-xs bg-accent hover:bg-accent/90 text-white">
                                    <svg
                                      className="size-3 mr-1.5"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                      />
                                    </svg>
                                    View Tasks
                                  </Button>
                                  <Button size="sm" variant="outline" className="h-8 text-xs bg-transparent">
                                    Continue Planning
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </Card>

                          <div className="flex items-center justify-between pt-2">
                            <h3 className="text-sm font-semibold text-foreground">Recent Projects</h3>
                            <Button size="sm" variant="ghost" className="h-8 text-xs text-muted-foreground">
                              View All Projects
                            </Button>
                          </div>

                          <Card className="bg-background border-accent/30 p-4">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium text-foreground">Fitness App Redesign</h4>
                              <span className="px-2 py-0.5 bg-amber-500/10 text-amber-600 text-[10px] font-medium rounded-full">
                                In Progress
                              </span>
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
