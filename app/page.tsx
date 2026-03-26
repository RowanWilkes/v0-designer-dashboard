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
  Database,
  Star,
  Download,
  Zap,
} from "lucide-react"
import { FeatureCarousel } from "@/components/feature-carousel"
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

            {/* Feature Carousel */}
            <div className={`max-w-5xl mx-auto -mb-32 relative z-20 ${mounted ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
              <FeatureCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section - Apollo spacing and styling */}
      <section className="py-24 lg:py-32 pt-48 lg:pt-56 bg-background">
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
              {/* Dashboard Preview - Now First (Left Side) */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#F8FAF9] to-white rounded-xl border border-border overflow-hidden shadow-lg">
                <div className="absolute inset-0">
                  {/* Dashboard Overview Preview */}
                  <div className="bg-white h-full p-6 space-y-5 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-border">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">E-commerce Website Redesign</h3>
                        <p className="text-xs text-muted-foreground mt-1">Client: Urban Collective</p>
                      </div>
                      <div className="flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-full text-xs font-medium">
                        <div className="size-2 bg-accent rounded-full animate-pulse"></div>
                        In Progress
                      </div>
                    </div>

                    {/* Key Metrics Grid - Enhanced with more details */}
                    <div className="grid grid-cols-4 gap-3">
                      <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg p-3 border border-accent/20">
                        <div className="text-xl font-bold text-foreground">32</div>
                        <div className="text-[10px] text-muted-foreground mt-1">Total Pages</div>
                        <div className="text-[9px] text-accent font-medium mt-1">+8 this week</div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                        <div className="text-xl font-bold text-foreground">8</div>
                        <div className="text-[10px] text-muted-foreground mt-1">Weeks Timeline</div>
                        <div className="text-[9px] text-blue-600 font-medium mt-1">4 weeks left</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                        <div className="text-xl font-bold text-foreground">$45k</div>
                        <div className="text-[10px] text-muted-foreground mt-1">Budget</div>
                        <div className="text-[9px] text-purple-600 font-medium mt-1">78% allocated</div>
                      </div>
                      <div className="bg-gradient-to-br from-orange-500/5 to-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                        <div className="text-xl font-bold text-foreground">5</div>
                        <div className="text-[10px] text-muted-foreground mt-1">Team Members</div>
                        <div className="text-[9px] text-orange-600 font-medium mt-1">3 active now</div>
                      </div>
                    </div>

                    {/* Project Progress with Multiple Tracks */}
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-foreground">Design Phase</span>
                          <span className="text-muted-foreground">68%</span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-accent to-emerald-500 rounded-full"
                            style={{ width: "68%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-foreground">Content Collection</span>
                          <span className="text-muted-foreground">45%</span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                        Deliverables Status
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="flex items-center gap-2 bg-accent/5 rounded px-2 py-1.5">
                          <div className="size-3 rounded bg-accent flex items-center justify-center flex-shrink-0">
                            <Check className="size-2 text-white" />
                          </div>
                          <span className="text-foreground">Wireframes</span>
                        </div>
                        <div className="flex items-center gap-2 bg-accent/5 rounded px-2 py-1.5">
                          <div className="size-3 rounded bg-accent flex items-center justify-center flex-shrink-0">
                            <Check className="size-2 text-white" />
                          </div>
                          <span className="text-foreground">Mood Board</span>
                        </div>
                        <div className="flex items-center gap-2 bg-blue-500/5 rounded px-2 py-1.5">
                          <div className="size-3 rounded border-2 border-blue-500 flex-shrink-0"></div>
                          <span className="text-foreground">Style Guide</span>
                        </div>
                        <div className="flex items-center gap-2 bg-muted/50 rounded px-2 py-1.5">
                          <div className="size-3 rounded border-2 border-muted-foreground/30 flex-shrink-0"></div>
                          <span className="text-muted-foreground">Final Mockups</span>
                        </div>
                      </div>
                    </div>

                    {/* Recent Activity Timeline */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                        Recent Updates
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 text-[11px]">
                          <div className="size-1.5 bg-accent rounded-full mt-1 flex-shrink-0"></div>
                          <div className="flex-1">
                            <span className="text-foreground font-medium">Hero section wireframes completed</span>
                            <span className="text-muted-foreground ml-2">2h ago</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-[11px]">
                          <div className="size-1.5 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                          <div className="flex-1">
                            <span className="text-foreground font-medium">Color palette approved by client</span>
                            <span className="text-muted-foreground ml-2">5h ago</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-[11px]">
                          <div className="size-1.5 bg-purple-500 rounded-full mt-1 flex-shrink-0"></div>
                          <div className="flex-1">
                            <span className="text-foreground font-medium">Typography system defined</span>
                            <span className="text-muted-foreground ml-2">Yesterday</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Text Content - Now Second (Right Side) */}
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
            </div>

            {/* Benefit 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden order-2 lg:order-1 shadow-lg">
                <div className="h-full p-8 space-y-6 overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">Style Guide</h3>
                      <p className="text-sm text-slate-500">Brand Identity System</p>
                    </div>
                    <div className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                      Complete
                    </div>
                  </div>

                  {/* Color Palette Section */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Color Palette</h4>
                    <div className="grid grid-cols-5 gap-2">
                      <div className="space-y-1">
                        <div className="h-12 bg-blue-600 rounded-lg shadow-sm"></div>
                        <p className="text-[10px] text-slate-500 text-center">#2563EB</p>
                      </div>
                      <div className="space-y-1">
                        <div className="h-12 bg-emerald-500 rounded-lg shadow-sm"></div>
                        <p className="text-[10px] text-slate-500 text-center">#10B981</p>
                      </div>
                      <div className="space-y-1">
                        <div className="h-12 bg-slate-900 rounded-lg shadow-sm"></div>
                        <p className="text-[10px] text-slate-500 text-center">#0F172A</p>
                      </div>
                      <div className="space-y-1">
                        <div className="h-12 bg-amber-400 rounded-lg shadow-sm"></div>
                        <p className="text-[10px] text-slate-500 text-center">#FBBF24</p>
                      </div>
                      <div className="space-y-1">
                        <div className="h-12 bg-slate-100 rounded-lg shadow-sm border border-slate-200"></div>
                        <p className="text-[10px] text-slate-500 text-center">#F1F5F9</p>
                      </div>
                    </div>
                  </div>

                  {/* Typography Section */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Typography</h4>
                    <div className="bg-white rounded-lg p-4 space-y-2 shadow-sm">
                      <p className="text-2xl font-bold text-slate-900">Heading Bold</p>
                      <p className="text-base font-medium text-slate-700">Body Medium Text</p>
                      <p className="text-sm text-slate-500">Caption Regular</p>
                    </div>
                  </div>

                  {/* Components Preview */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Components</h4>
                    <div className="flex flex-wrap gap-2">
                      <button className="px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg shadow-sm">
                        Primary
                      </button>
                      <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 text-xs font-medium rounded-lg shadow-sm">
                        Secondary
                      </button>
                      <div className="px-3 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                        Badge
                      </div>
                    </div>
                  </div>

                  {/* Spacing System */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Spacing Scale</h4>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-2 bg-blue-600 rounded"></div>
                        <span className="text-[10px] text-slate-500">8px</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-blue-600 rounded"></div>
                        <span className="text-[10px] text-slate-500">16px</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-blue-600 rounded"></div>
                        <span className="text-[10px] text-slate-500">24px</span>
                      </div>
                    </div>
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
              {/* CHANGE: Replace placeholder with engaging summary page preview */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 p-8 space-y-6 overflow-hidden">
                  {/* Header with Export Button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Project Summary</h3>
                      <p className="text-sm text-gray-500 mt-1">E-commerce Website Redesign</p>
                    </div>
                    <button className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2">
                      <Download className="size-4" />
                      Export PDF
                    </button>
                  </div>

                  {/* Project Overview Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="text-xs text-gray-500 mb-1">Status</div>
                      <div className="text-sm font-semibold text-emerald-600">Ready to Ship</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="text-xs text-gray-500 mb-1">Total Pages</div>
                      <div className="text-sm font-semibold text-gray-900">32 Designed</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="text-xs text-gray-500 mb-1">Components</div>
                      <div className="text-sm font-semibold text-gray-900">48 Specs</div>
                    </div>
                  </div>

                  {/* Technical Specifications Preview */}
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <FileText className="size-4 text-emerald-600" />
                      <h4 className="text-sm font-semibold text-gray-900">Technical Specifications</h4>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Breakpoints</span>
                        <span className="font-medium text-gray-900">Mobile, Tablet, Desktop</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Font System</span>
                        <span className="font-medium text-gray-900">Inter, 5 weights</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Color Palette</span>
                        <span className="font-medium text-gray-900">8 colors defined</span>
                      </div>
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckSquare className="size-4 text-emerald-600" />
                      <h4 className="text-sm font-semibold text-gray-900">Deliverables Included</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {["Wireframes", "Mockups", "Style Guide", "Component Specs", "Icon Library", "PDF Export"].map(
                        (item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="size-4 bg-emerald-100 rounded flex items-center justify-center">
                              <Check className="size-3 text-emerald-600" />
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Subtle Gradient Overlay at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                </div>
              </div>
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
                Your Project, Simplified in 3 Steps
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
