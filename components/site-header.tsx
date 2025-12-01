"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  Palette,
  Layout,
  Zap,
  Users,
  FileText,
  BarChart,
  BookOpen,
  FileCheck,
  Lightbulb,
  HelpCircle,
} from "lucide-react"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2.5 group">
            <img
              src={scrolled ? "/troov-studio-logo.png" : "/troov-studio-logo-white.png"}
              alt="Troov Studio"
              className="h-16 object-contain transition-all duration-300"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <div className="flex items-center gap-1">
              <div className="relative group">
                <button
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-500 flex items-center gap-1 ${scrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"}`}
                >
                  Platform <ChevronDown className="size-4" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-background border border-border rounded-2xl shadow-2xl p-8 w-[720px]">
                    <div className="grid grid-cols-3 gap-8">
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                          DESIGN TOOLS
                        </h4>
                        <div className="space-y-1">
                          <Link
                            href="/#features"
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group/item"
                          >
                            <Palette className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-foreground group-hover/item:text-accent">
                                Mood Boards
                              </div>
                              <div className="text-xs text-muted-foreground leading-relaxed">
                                Create color palettes and typography
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="/#features"
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group/item"
                          >
                            <Layout className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-foreground group-hover/item:text-accent">Wireframes</div>
                              <div className="text-xs text-muted-foreground leading-relaxed">
                                Plan layouts with drag-and-drop
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                          WORKFLOW
                        </h4>
                        <div className="space-y-1">
                          <Link
                            href="/#features"
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group/item"
                          >
                            <Zap className="size-5 text-accent mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-foreground group-hover/item:text-accent">
                                Task Manager
                              </div>
                              <div className="text-xs text-muted-foreground leading-relaxed">
                                Track progress and deliverables
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="/#features"
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group/item"
                          >
                            <FileText className="size-5 text-accent mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-foreground group-hover/item:text-accent">
                                Design Reports
                              </div>
                              <div className="text-xs text-muted-foreground leading-relaxed">
                                Export complete summaries
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                          PLATFORM
                        </h4>
                        <div className="space-y-1">
                          <Link
                            href="/dashboard"
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group/item"
                          >
                            <BarChart className="size-5 text-secondary mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-foreground group-hover/item:text-accent">Dashboard</div>
                              <div className="text-xs text-muted-foreground leading-relaxed">Access your workspace</div>
                            </div>
                          </Link>
                          <Link
                            href="/integrations"
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group/item"
                          >
                            <Zap className="size-5 text-secondary mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-foreground group-hover/item:text-accent">
                                Integrations
                              </div>
                              <div className="text-xs text-muted-foreground leading-relaxed">Connect your tools</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/#features"
                className={`px-4 py-2 text-sm font-medium transition-colors duration-500 ${scrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"}`}
              >
                Solutions
              </Link>

              <Link
                href="/pricing"
                className={`px-4 py-2 text-sm font-medium transition-colors duration-500 ${scrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"}`}
              >
                Pricing
              </Link>

              <div className="relative group">
                <button
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-500 flex items-center gap-1 ${scrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"}`}
                >
                  Resources <ChevronDown className="size-4" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-background border border-border rounded-2xl shadow-2xl p-8 w-[720px]">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                          LEARN
                        </h4>
                        <div className="space-y-1">
                          <Link
                            href="/blog"
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group/item"
                          >
                            <BookOpen className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-foreground group-hover/item:text-accent">Blog</div>
                              <div className="text-xs text-muted-foreground leading-relaxed">
                                Design tips and industry insights
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="/case-studies"
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group/item"
                          >
                            <FileCheck className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-foreground group-hover/item:text-accent">
                                Case Studies
                              </div>
                              <div className="text-xs text-muted-foreground leading-relaxed">
                                Real results from real designers
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="/templates"
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group/item"
                          >
                            <Lightbulb className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-foreground group-hover/item:text-accent">Templates</div>
                              <div className="text-xs text-muted-foreground leading-relaxed">
                                Pre-built project templates
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                          SUPPORT
                        </h4>
                        <div className="space-y-1">
                          <Link
                            href="/help"
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group/item"
                          >
                            <HelpCircle className="size-5 text-accent mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-foreground group-hover/item:text-accent">
                                Help Center
                              </div>
                              <div className="text-xs text-muted-foreground leading-relaxed">
                                Get answers to common questions
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="/docs"
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group/item"
                          >
                            <FileText className="size-5 text-accent mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-foreground group-hover/item:text-accent">
                                Documentation
                              </div>
                              <div className="text-xs text-muted-foreground leading-relaxed">
                                Complete platform guides
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="/community"
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group/item"
                          >
                            <Users className="size-5 text-accent mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-foreground group-hover/item:text-accent">Community</div>
                              <div className="text-xs text-muted-foreground leading-relaxed">
                                Connect with other designers
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 ml-6 pl-6 border-l border-white/20">
              <Link
                href="/login"
                className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${scrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"}`}
              >
                Sign in
              </Link>
              <Button
                asChild
                size="sm"
                className="h-10 px-6 bg-accent hover:bg-accent/90 text-white font-medium rounded-md shadow-sm"
              >
                <Link href="/signup">Get started for free</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
