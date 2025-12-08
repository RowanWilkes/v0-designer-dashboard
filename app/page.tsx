"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import {
  Sparkles,
  Palette,
  Layers,
  Layout,
  CheckSquare,
  Check,
  FileText,
  PenTool,
  Zap,
  Star,
  Database,
  Home,
  Grid,
  ImageIcon,
  Globe,
  Code,
  Package,
  FileBarChart,
  Crown,
  Settings,
  Folder,
  TrendingUp,
  Users,
  Upload,
  Clock,
  Calendar,
} from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

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
                    {/* Fix for closing tag */}
                    <div className="bg-background rounded-lg border border-border shadow-sm overflow-hidden">
                      <div className="bg-muted/40 border-b border-border px-4 py-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/images/troovstudio-logo.png"
                            alt="Troov Studio"
                            width={120}
                            height={32}
                            className="h-6 w-auto"
                          />
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2 px-2 py-1 text-xs text-muted-foreground border border-border rounded-md bg-background">
                            <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7l-10-5z"
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

                        <div className="flex-1 p-6 space-y-5 bg-background overflow-y-auto max-h-[600px]">
                          <div className="mb-3">
                            <h2 className="text-lg font-semibold text-foreground mb-1">Welcome back, Emma Chen!</h2>
                            <p className="text-xs text-muted-foreground">
                              Here's what's happening with your projects today
                            </p>
                          </div>

                          {/* Stats Grid */}
                          <div className="grid grid-cols-4 gap-3">
                            <Card className="bg-background border-border p-4 space-y-2">
                              <div className="flex items-center justify-between">
                                <p className="text-xs text-muted-foreground">Total Projects</p>
                                <div className="size-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                  <Folder className="size-4 text-emerald-600" />
                                </div>
                              </div>
                              <p className="text-2xl font-bold text-foreground">3</p>
                              <p className="text-[10px] text-muted-foreground">+1 this month</p>
                            </Card>
                            <Card className="bg-background border-border p-4 space-y-2">
                              <div className="flex items-center justify-between">
                                <p className="text-xs text-muted-foreground">Active Tasks</p>
                                <div className="size-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                  <CheckSquare className="size-4 text-blue-600" />
                                </div>
                              </div>
                              <p className="text-2xl font-bold text-foreground">12</p>
                              <p className="text-[10px] text-muted-foreground">3 due this week</p>
                            </Card>
                            <Card className="bg-background border-border p-4 space-y-2">
                              <div className="flex items-center justify-between">
                                <p className="text-xs text-muted-foreground">Completion</p>
                                <div className="size-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                                  <TrendingUp className="size-4 text-purple-600" />
                                </div>
                              </div>
                              <p className="text-2xl font-bold text-foreground">67%</p>
                              <p className="text-[10px] text-emerald-600">+12% from last week</p>
                            </Card>
                            <Card className="bg-background border-border p-4 space-y-2">
                              <div className="flex items-center justify-between">
                                <p className="text-xs text-muted-foreground">Team Members</p>
                                <div className="size-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                                  <Users className="size-4 text-amber-600" />
                                </div>
                              </div>
                              <p className="text-2xl font-bold text-foreground">4</p>
                              <p className="text-[10px] text-muted-foreground">2 active now</p>
                            </Card>
                          </div>

                          {/* Quick Actions */}
                          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 p-4">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <div className="size-8 rounded-lg bg-accent flex items-center justify-center">
                                  <Zap className="size-4 text-white" />
                                </div>
                                <h3 className="text-sm font-semibold text-foreground">Quick Actions</h3>
                              </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                              <button className="p-3 bg-background hover:bg-accent/10 border border-border hover:border-accent/30 rounded-lg transition-colors text-left">
                                <FileText className="size-4 text-accent mb-1.5" />
                                <p className="text-[11px] font-medium text-foreground">New Project</p>
                              </button>
                              <button className="p-3 bg-background hover:bg-accent/10 border border-border hover:border-accent/30 rounded-lg transition-colors text-left">
                                <Upload className="size-4 text-accent mb-1.5" />
                                <p className="text-[11px] font-medium text-foreground">Upload Assets</p>
                              </button>
                              <button className="p-3 bg-background hover:bg-accent/10 border border-border hover:border-accent/30 rounded-lg transition-colors text-left">
                                <Users className="size-4 text-accent mb-1.5" />
                                <p className="text-[11px] font-medium text-foreground">Invite Team</p>
                              </button>
                            </div>
                          </Card>

                          {/* Two Column Layout */}
                          <div className="grid grid-cols-2 gap-4">
                            {/* Recent Activity */}
                            <Card className="bg-background border-border p-4 space-y-3">
                              <div className="flex items-center gap-2 mb-2">
                                <Clock className="size-4 text-muted-foreground" />
                                <h3 className="text-sm font-semibold text-foreground">Recent Activity</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="flex gap-2.5">
                                  <div className="size-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                                  <div className="flex-1">
                                    <p className="text-[11px] text-foreground font-medium">Style guide updated</p>
                                    <p className="text-[10px] text-muted-foreground">Fitness App • 2 hours ago</p>
                                  </div>
                                </div>
                                <div className="flex gap-2.5">
                                  <div className="size-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                                  <div className="flex-1">
                                    <p className="text-[11px] text-foreground font-medium">3 new wireframes added</p>
                                    <p className="text-[10px] text-muted-foreground">E-commerce Site • 4 hours ago</p>
                                  </div>
                                </div>
                                <div className="flex gap-2.5">
                                  <div className="size-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></div>
                                  <div className="flex-1">
                                    <p className="text-[11px] text-foreground font-medium">Mood board completed</p>
                                    <p className="text-[10px] text-muted-foreground">Portfolio Site • Yesterday</p>
                                  </div>
                                </div>
                                <div className="flex gap-2.5">
                                  <div className="size-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></div>
                                  <div className="flex-1">
                                    <p className="text-[11px] text-foreground font-medium">Project created</p>
                                    <p className="text-[10px] text-muted-foreground">Fitness App • 3 days ago</p>
                                  </div>
                                </div>
                              </div>
                            </Card>

                            {/* Upcoming Deadlines */}
                            <Card className="bg-background border-border p-4 space-y-3">
                              <div className="flex items-center gap-2 mb-2">
                                <Calendar className="size-4 text-muted-foreground" />
                                <h3 className="text-sm font-semibold text-foreground">Upcoming Deadlines</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="flex items-start justify-between gap-2 p-2.5 rounded-lg bg-red-500/5 border border-red-500/10">
                                  <div className="flex-1">
                                    <p className="text-[11px] text-foreground font-medium">Wireframes review</p>
                                    <p className="text-[10px] text-muted-foreground">Fitness App Redesign</p>
                                  </div>
                                  <span className="text-[10px] font-medium text-red-600 bg-red-50 px-1.5 py-0.5 rounded">
                                    Today
                                  </span>
                                </div>
                                <div className="flex items-start justify-between gap-2 p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/10">
                                  <div className="flex-1">
                                    <p className="text-[11px] text-foreground font-medium">Client presentation</p>
                                    <p className="text-[10px] text-muted-foreground">E-commerce Site</p>
                                  </div>
                                  <span className="text-[10px] font-medium text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
                                    Fri
                                  </span>
                                </div>
                                <div className="flex items-start justify-between gap-2 p-2.5 rounded-lg bg-blue-500/5 border border-blue-500/10">
                                  <div className="flex-1">
                                    <p className="text-[11px] text-foreground font-medium">Final delivery</p>
                                    <p className="text-[10px] text-muted-foreground">Portfolio Site</p>
                                  </div>
                                  <span className="text-[10px] font-medium text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                                    Dec 15
                                  </span>
                                </div>
                              </div>
                            </Card>
                          </div>

                          {/* Active Projects */}
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-sm font-semibold text-foreground">Active Projects</h3>
                              <button className="text-[11px] text-accent hover:text-accent/80 font-medium">
                                View All →
                              </button>
                            </div>
                            <div className="space-y-2.5">
                              <Card className="bg-background border-accent/30 p-3.5 hover:border-accent/50 transition-colors">
                                <div className="flex items-start justify-between mb-2">
                                  <div>
                                    <h4 className="text-sm font-medium text-foreground">Fitness App Redesign</h4>
                                    <p className="text-[10px] text-muted-foreground mt-0.5">
                                      Mobile App • Started Nov 28
                                    </p>
                                  </div>
                                  <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 text-[10px] font-medium rounded-full">
                                    67% Complete
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="h-1.5 flex-1 bg-muted rounded-full overflow-hidden">
                                    <div className="h-full bg-accent rounded-full" style={{ width: "67%" }}></div>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-1.5">
                                    <div className="flex -space-x-1.5">
                                      <div className="size-5 rounded-full bg-accent text-white text-[9px] font-medium flex items-center justify-center ring-2 ring-background">
                                        EC
                                      </div>
                                      <div className="size-5 rounded-full bg-blue-500 text-white text-[9px] font-medium flex items-center justify-center ring-2 ring-background">
                                        JD
                                      </div>
                                    </div>
                                    <span className="text-[10px] text-muted-foreground ml-1">2 members</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                                      <CheckSquare className="size-3" />
                                      <span>8/12 tasks</span>
                                    </div>
                                  </div>
                                </div>
                              </Card>

                              {/* Updated Project Card */}
                              <Card className="bg-background border-accent/30 p-3.5 hover:border-accent/50 transition-colors">
                                <div className="flex items-start justify-between mb-2">
                                  <div>
                                    <h4 className="text-sm font-medium text-foreground">E-commerce Redesign</h4>
                                    <p className="text-[10px] text-muted-foreground mt-0.5">Web App • Started Nov 15</p>
                                  </div>
                                  <span className="px-2 py-0.5 bg-blue-500/10 text-blue-600 text-[10px] font-medium rounded-full">
                                    45% Complete
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="h-1.5 flex-1 bg-muted rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "45%" }}></div>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-1.5">
                                    <div className="flex -space-x-1.5">
                                      <div className="size-5 rounded-full bg-purple-500 text-white text-[9px] font-medium flex items-center justify-center ring-2 ring-background">
                                        MK
                                      </div>
                                      <div className="size-5 rounded-full bg-amber-500 text-white text-[9px] font-medium flex items-center justify-center ring-2 ring-background">
                                        AL
                                      </div>
                                      <div className="size-5 rounded-full bg-rose-500 text-white text-[9px] font-medium flex items-center justify-center ring-2 ring-background">
                                        ST
                                      </div>
                                    </div>
                                    <span className="text-[10px] text-muted-foreground ml-1">3 members</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                                      <CheckSquare className="size-3" />
                                      <span>6/15 tasks</span>
                                    </div>
                                  </div>
                                </div>
                              </Card>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
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

                {/* Dashboard Features Showcase Section */}
                <section className="py-24 lg:py-32 bg-muted/30">
                  <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                      <div className="text-center space-y-4 mb-20">
                        <p className="text-sm font-semibold text-accent uppercase tracking-wider">Dashboard</p>
                        <h2 className="text-5xl font-semibold text-foreground tracking-tight">Explore the dashboard</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                          Every section designed to streamline your workflow and keep your projects organized.
                        </p>
                      </div>

                      <div className="space-y-32">
                        {/* Feature 1: Overview Page */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                          <div className="space-y-6">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                              <Layout className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-semibold text-foreground">Project Overview</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              Get a bird's eye view of your entire project. Track progress across all phases, monitor
                              deliverables status, manage team members, and see key metrics at a glance. Everything you
                              need to stay on top of your project.
                            </p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">
                                  Real-time progress tracking across all project phases
                                </span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">
                                  Team member management and activity monitoring
                                </span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">Budget allocation and timeline overview</span>
                              </li>
                            </ul>
                          </div>
                          <Card className="bg-card border-border shadow-lg overflow-hidden">
                            <img
                              src="/project-overview-browser-mockup.jpg"
                              alt="Project Overview Dashboard"
                              className="w-full h-auto"
                            />
                          </Card>
                        </div>

                        {/* Feature 2: Style Guide Page */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                          <Card className="bg-card border-border shadow-lg overflow-hidden lg:order-1">
                            <img
                              src="/comprehensive-style-guide-page-showing-color-palet.jpg"
                              alt="Style Guide Dashboard"
                              className="w-full h-auto"
                            />
                          </Card>
                          <div className="space-y-6 lg:order-2">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                              <Palette className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-semibold text-foreground">Style Guide</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              Create comprehensive design systems with live previews. Define color palettes, typography
                              scales, spacing systems, and component styles. See your design decisions come to life with
                              interactive website previews.
                            </p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">
                                  Complete design system with color and typography tools
                                </span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">
                                  Live website preview with your design tokens
                                </span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">
                                  Export-ready specifications for developers
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Feature 3: Sitemap Page */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                          <div className="space-y-6">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                              <Layers className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-semibold text-foreground">Interactive Sitemap</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              Map out your entire website architecture with our visual sitemap builder. Drag and drop to
                              organize pages, add descriptions, and plan your site structure. Build comprehensive
                              navigation hierarchies with ease.
                            </p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">
                                  Visual site structure with drag-and-drop organization
                                </span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">35+ pre-designed page sections and blocks</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">Page descriptions and navigation planning</span>
                              </li>
                            </ul>
                          </div>
                          <Card className="bg-card border-border shadow-lg overflow-hidden">
                            <img
                              src="/interactive-sitemap-builder-interface-with-hierarc.jpg"
                              alt="Interactive Sitemap Builder"
                              className="w-full h-auto"
                            />
                          </Card>
                        </div>

                        {/* Feature 4: Summary Page */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                          <Card className="bg-card border-border shadow-lg overflow-hidden lg:order-1">
                            <img
                              src="/professional-project-summary-document-with-export-.jpg"
                              alt="Project Summary Document"
                              className="w-full h-auto"
                            />
                          </Card>
                          <div className="space-y-6 lg:order-2">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                              <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-semibold text-foreground">Project Summary</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              Generate professional project summaries with one click. Automatically compile all your
                              design decisions, specifications, and guidelines into a comprehensive document ready for
                              handoff to developers and stakeholders.
                            </p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">
                                  Auto-generated comprehensive project documentation
                                </span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">
                                  One-click PDF export for professional delivery
                                </span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">
                                  Complete specs, checklists, and visual guidelines
                                </span>
                              </li>
                            </ul>
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
                          Our organized dashboard guides you through every phase of design planning with dedicated
                          sections for each step.
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
                        <h2 className="text-5xl font-semibold text-foreground tracking-tight">
                          Loved by designers everywhere
                        </h2>
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
            </div>
          </div>
        </section>
      </section>

      <SiteFooter />
    </div>
  )
}
