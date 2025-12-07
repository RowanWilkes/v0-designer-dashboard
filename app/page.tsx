import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Palette, BookOpen, Sigma as Sitemap, Code, FileText, CheckSquare } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0F766E]/95 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
            <span className="text-lg font-bold text-white">troov</span>
            <span className="text-lg text-white/80">studio</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <button className="flex items-center gap-1 text-sm text-white hover:text-white/80">
              Platform
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <a href="#" className="text-sm text-white hover:text-white/80">
              Pricing
            </a>
            <button className="flex items-center gap-1 text-sm text-white hover:text-white/80">
              Resources
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm text-white hover:text-white/80">Sign in</button>
            <Button className="bg-primary hover:bg-primary/90">Get started for free</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground pb-[28rem] pt-20 lg:pb-[35rem]">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl pt-20 pb-16 lg:pt-32">
            <div className="relative z-10 mb-[3px]">
              <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
                DESIGNER DASHBOARD
              </p>
              <h1 className="mb-6 text-balance text-5xl font-bold leading-tight lg:text-6xl">
                Plan, organise, and document everything before building—from inspiration to technical specs. All in one
                dashboard.
              </h1>
              <div className="mb-12 flex flex-wrap items-center gap-6 text-sm lg:gap-12 lg:text-base">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary-foreground" />
                  <span>Free forever for your first project</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary-foreground" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary-foreground" />
                  <span>Upgrade only when you need more projects</span>
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative -mt-[22rem] lg:-mt-[30rem]">
              <Card className="overflow-hidden shadow-2xl">
                <div className="bg-white">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <div className="ml-4 flex items-center gap-2">
                      <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-700">troov</span>
                      <span className="text-sm text-gray-500">studio</span>
                    </div>
                    <div className="ml-auto flex items-center gap-4">
                      <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5">
                        <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                          />
                        </svg>
                        <span className="text-sm text-gray-700">E-commerce Redesign</span>
                        <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs font-semibold text-white">
                        SM
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="flex">
                    {/* Sidebar */}
                    <div className="w-64 border-r border-gray-200 bg-white p-6">
                      <div className="mb-6">
                        <div className="flex items-center gap-3 rounded-lg p-2 text-gray-700 hover:bg-gray-50">
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          <span className="font-medium">Home</span>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Navigation
                          </p>
                          <div className="space-y-1">
                            <div className="flex items-center gap-3 rounded-lg bg-primary/10 p-2 text-primary">
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                />
                              </svg>
                              <span className="font-medium">Overview</span>
                            </div>
                            <div className="flex items-center gap-3 rounded-lg p-2 text-gray-700 hover:bg-gray-50">
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span className="font-medium">Mood Board</span>
                            </div>
                            <div className="flex items-center gap-3 rounded-lg p-2 text-gray-700 hover:bg-gray-50">
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                />
                              </svg>
                              <span className="font-medium">Style Guide</span>
                            </div>
                            <div className="flex items-center gap-3 rounded-lg p-2 text-gray-700 hover:bg-gray-50">
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="font-medium">Sitemap</span>
                            </div>
                            <div className="flex items-center gap-3 rounded-lg p-2 text-gray-700 hover:bg-gray-50">
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                              </svg>
                              <span className="font-medium">Technical</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Content & Assets
                          </p>
                          <div className="space-y-1">
                            <div className="flex items-center gap-3 rounded-lg p-2 text-gray-700 hover:bg-gray-50">
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                              <span className="font-medium">Content</span>
                            </div>
                            <div className="flex items-center gap-3 rounded-lg p-2 text-gray-700 hover:bg-gray-50">
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                />
                              </svg>
                              <span className="font-medium">Assets</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Management
                          </p>
                          <div className="space-y-1">
                            <div className="flex items-center gap-3 rounded-lg p-2 text-gray-700 hover:bg-gray-50">
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                />
                              </svg>
                              <span className="font-medium">Tasks</span>
                            </div>
                            <div className="flex items-center gap-3 rounded-lg p-2 text-gray-700 hover:bg-gray-50">
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                              <span className="font-medium">Summary</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8">
                        <Button className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                          Upgrade
                        </Button>
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 overflow-auto bg-gray-50/50 p-8">
                      <div className="mb-6 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                          <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
                      </div>

                      <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-lg border border-gray-200 bg-white p-4">
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Project Name
                          </p>
                          <p className="text-lg font-semibold text-gray-900">E-commerce Redesign</p>
                        </div>
                        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-600">Timeline</p>
                          <p className="text-lg font-semibold text-blue-900">6 weeks</p>
                        </div>
                        <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-purple-600">
                            Target Audience
                          </p>
                          <p className="text-lg font-semibold text-purple-900">25-45 year olds</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h3 className="mb-3 text-sm font-semibold text-gray-700">Project Statistics</h3>
                        <div className="grid gap-4 md:grid-cols-3">
                          <div className="rounded-lg border border-gray-200 bg-white p-4">
                            <p className="text-3xl font-bold text-primary">12</p>
                            <p className="text-sm text-gray-600">Total Pages</p>
                          </div>
                          <div className="rounded-lg border border-gray-200 bg-white p-4">
                            <p className="text-3xl font-bold text-primary">8</p>
                            <p className="text-sm text-gray-600">Sections</p>
                          </div>
                          <div className="rounded-lg border border-gray-200 bg-white p-4">
                            <p className="text-3xl font-bold text-primary">4</p>
                            <p className="text-sm text-gray-600">Team Members</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h3 className="mb-3 text-sm font-semibold text-gray-700">Goals</h3>
                        <div className="space-y-2 rounded-lg border border-gray-200 bg-white p-4">
                          <div className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 text-primary" />
                            <p className="text-sm text-gray-700">Modern, clean interface with improved UX</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 text-primary" />
                            <p className="text-sm text-gray-700">Mobile-first responsive approach</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 text-primary" />
                            <p className="text-sm text-gray-700">Increase conversion rate by 25%</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <div className="rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-6">
                          <div className="mb-3 flex items-center gap-2">
                            <Check className="h-5 w-5 text-primary" />
                            <h3 className="text-lg font-semibold text-gray-900">Project Status</h3>
                          </div>
                          <p className="mb-3 text-2xl font-bold text-primary">Planning Phase - 65% Complete</p>
                          <div className="h-3 overflow-hidden rounded-full bg-white">
                            <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-primary to-primary/80" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">FEATURES</p>
            <h2 className="mb-6 text-balance text-4xl font-bold lg:text-5xl">Everything you need to plan & design</h2>
            <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
              All the tools modern designers need to go from concept to launch, in one unified platform.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Visual Mood Boards</h3>
              <p className="text-muted-foreground">
                Upload inspiration images, create color palettes, define typography, and add website references. Build
                the visual direction for your project.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Complete Style Guides</h3>
              <p className="text-muted-foreground">
                Define your design system with color palettes, typography scales, button styles, and UI components with
                live website previews.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Sitemap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Interactive Sitemaps</h3>
              <p className="text-muted-foreground">
                Build comprehensive site structures with our block library containing 35+ pre-designed page sections.
                Plan your entire website architecture.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Technical Specifications</h3>
              <p className="text-muted-foreground">
                Document hosting, platform, database, integrations, security, performance, and SEO requirements in
                organized sections.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Content & Asset Management</h3>
              <p className="text-muted-foreground">
                Organize brand messaging, content guidelines, SEO strategy, competitor analysis, and all your project
                assets in one place.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <CheckSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Task Management & Summary</h3>
              <p className="text-muted-foreground">
                Track design tasks with priorities and categories, then export comprehensive project summaries as
                professional PDFs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* PLAN FASTER Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <Card className="overflow-hidden shadow-xl">
                <div className="bg-white">
                  <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                  </div>
                  <div className="h-[600px] overflow-auto p-8">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10">
                        <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Overview</h3>
                    </div>

                    <div className="mb-6 grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/50 p-4">
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600">Timeline</p>
                        <p className="text-lg font-bold text-gray-900">6 Weeks</p>
                      </div>
                      <div className="rounded-lg bg-gradient-to-br from-purple-50 to-purple-100/50 p-4">
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-purple-600">Budget</p>
                        <p className="text-lg font-bold text-gray-900">$45,000</p>
                      </div>
                    </div>

                    <div className="mb-6 space-y-4">
                      <div>
                        <p className="mb-2 text-sm font-semibold text-gray-600">Project Name</p>
                        <p className="text-lg font-medium text-gray-900">E-commerce Redesign</p>
                      </div>

                      <div>
                        <p className="mb-2 text-sm font-semibold text-gray-600">Goals</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <p className="text-sm text-gray-700">Modern, clean interface with improved UX</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <p className="text-sm text-gray-700">Mobile-first responsive design approach</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <p className="text-sm text-gray-700">Increase conversion rate by 25%</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="mb-2 text-sm font-semibold text-gray-600">Target Audience</p>
                        <p className="rounded-lg bg-gray-50 p-3 text-sm text-gray-700">
                          25-45 year old professionals seeking premium quality products with seamless shopping
                          experience
                        </p>
                      </div>
                    </div>

                    <div className="mb-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-5">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <p className="font-semibold text-gray-900">Project Status</p>
                        </div>
                        <p className="text-lg font-bold text-primary">65%</p>
                      </div>
                      <div className="mb-2 h-2 overflow-hidden rounded-full bg-white/50">
                        <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-primary to-primary/80" />
                      </div>
                      <p className="text-sm text-gray-700">Planning Phase - On Track</p>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                        <p className="text-2xl font-bold text-gray-900">12</p>
                        <p className="text-xs text-gray-600">Pages</p>
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                        <p className="text-2xl font-bold text-gray-900">8</p>
                        <p className="text-xs text-gray-600">Sections</p>
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                        <p className="text-2xl font-bold text-gray-900">4</p>
                        <p className="text-xs text-gray-600">Team Members</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">PLAN FASTER</p>
              <h2 className="mb-6 text-balance text-4xl font-bold lg:text-5xl">
                Organize projects in minutes, not hours
              </h2>
              <p className="mb-8 text-balance text-lg text-muted-foreground">
                Stop juggling spreadsheets, design files, and scattered notes. Troov Studio brings all your design
                planning into one organized dashboard with dedicated sections for every aspect of your project.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-base text-gray-700">8 dedicated sections from overview to summary</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-base text-gray-700">Comprehensive project organization and tracking tools</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-base text-gray-700">Export professional PDF documentation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STAY ORGANIZED Section */}
      <section className="bg-muted/30 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">STAY ORGANIZED</p>
              <h2 className="mb-6 text-balance text-4xl font-bold lg:text-5xl">Everything in its place</h2>
              <p className="mb-8 text-balance text-lg text-muted-foreground">
                From mood boards to technical specs, content strategy to task management - every project element has a
                dedicated home. Find what you need instantly with organized sections and smart categorization.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-base text-gray-700">Categorized sections for every project phase</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-base text-gray-700">Visual mood boards with color & typography tools</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-base text-gray-700">Comprehensive project summaries with one click</p>
                </div>
              </div>
            </div>

            <div>
              <Card className="overflow-hidden shadow-xl">
                <div className="bg-white">
                  <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <div className="ml-4 flex items-center gap-2">
                      <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-700">troov</span>
                      <span className="text-sm text-gray-500">studio</span>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-48 border-r border-gray-200 bg-white p-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 rounded p-2 text-sm text-gray-600 hover:bg-gray-50">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span>Mood Board</span>
                        </div>
                        <div className="flex items-center gap-2 rounded bg-primary/10 p-2 text-sm text-primary">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                            />
                          </svg>
                          <span>Style Guide</span>
                        </div>
                        <div className="flex items-center gap-2 rounded p-2 text-sm text-gray-600 hover:bg-gray-50">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span>Sitemap</span>
                        </div>
                      </div>
                    </div>

                    <div className="h-[400px] flex-1 overflow-auto bg-gray-50/50 p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Style Guide</h3>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-600">
                            Primary Colors
                          </p>
                          <div className="flex gap-3">
                            <div>
                              <div className="h-16 w-16 rounded-lg bg-[#10B981] shadow-sm" />
                              <p className="mt-1 text-xs text-gray-600">#10B981</p>
                              <p className="text-xs text-gray-500">Primary</p>
                            </div>
                            <div>
                              <div className="h-16 w-16 rounded-lg bg-[#111827] shadow-sm" />
                              <p className="mt-1 text-xs text-gray-600">#111827</p>
                              <p className="text-xs text-gray-500">Dark</p>
                            </div>
                            <div>
                              <div className="h-16 w-16 rounded-lg border-2 border-gray-200 bg-white shadow-sm" />
                              <p className="mt-1 text-xs text-gray-600">#FFFFFF</p>
                              <p className="text-xs text-gray-500">Light</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-600">
                            Accent Colors
                          </p>
                          <div className="flex gap-3">
                            <div>
                              <div className="h-16 w-16 rounded-lg bg-[#3B82F6] shadow-sm" />
                              <p className="mt-1 text-xs text-gray-600">#3B82F6</p>
                              <p className="text-xs text-gray-500">Info</p>
                            </div>
                            <div>
                              <div className="h-16 w-16 rounded-lg bg-[#A855F7] shadow-sm" />
                              <p className="mt-1 text-xs text-gray-600">#A855F7</p>
                              <p className="text-xs text-gray-500">Accent</p>
                            </div>
                            <div>
                              <div className="h-16 w-16 rounded-lg bg-[#FBBF24] shadow-sm" />
                              <p className="mt-1 text-xs text-gray-600">#FBBF24</p>
                              <p className="text-xs text-gray-500">Warning</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-600">
                            Typography
                          </p>
                          <div className="space-y-2 rounded-lg border border-gray-200 bg-white p-3">
                            <div>
                              <p className="text-xs text-gray-500">Headings</p>
                              <p className="font-bold">Inter Bold</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Body</p>
                              <p>Inter Regular</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">SHIP CONFIDENTLY</p>
              <h2 className="mb-6 text-balance text-4xl font-bold lg:text-5xl">Hand off with clarity</h2>
              <p className="mb-8 text-balance text-lg text-muted-foreground">
                Generate professional project summaries that document every design decision. Developers, clients, and
                stakeholders get exactly what they need with comprehensive specifications and visual guidelines.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-base text-gray-700">Complete style guides with live previews</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-base text-gray-700">Detailed technical specifications & requirements</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-base text-gray-700">One-click PDF export for professional delivery</p>
                </div>
              </div>
            </div>

            <div className="flex h-[400px] items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5">
              <p className="text-muted-foreground">Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">HOW IT WORKS</p>
            <h2 className="mb-6 text-balance text-4xl font-bold lg:text-5xl">From concept to delivery in 8 sections</h2>
            <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
              Our organized dashboard guides you through every phase of design planning with dedicated sections for each
              step.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            <div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-4xl font-bold text-primary-foreground">
                01
              </div>
              <h3 className="mb-3 text-2xl font-bold">Define & Inspire</h3>
              <p className="text-muted-foreground">
                Start with Project Overview to set goals and deliverables. Build mood boards with inspiration images,
                colors, and typography to establish your visual direction.
              </p>
            </div>

            <div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-4xl font-bold text-primary-foreground">
                02
              </div>
              <h3 className="mb-3 text-2xl font-bold">Design & Structure</h3>
              <p className="text-muted-foreground">
                Create your Style Guide with complete design systems. Plan site structure with interactive sitemaps
                using 35+ pre-built blocks. Document technical specifications.
              </p>
            </div>

            <div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-4xl font-bold text-primary-foreground">
                03
              </div>
              <h3 className="mb-3 text-2xl font-bold">Organize & Deliver</h3>
              <p className="text-muted-foreground">
                Manage content strategy and assets. Track tasks by priority. Generate comprehensive project summaries
                and export professional PDFs ready for development handoff.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">TESTIMONIALS</p>
            <h2 className="mb-6 text-balance text-4xl font-bold lg:text-5xl">Loved by designers everywhere</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <p className="mb-6 text-lg text-muted-foreground">
                "Troov Studio transformed how I plan design projects. The organized sections and PDF export feature
                alone save me hours every week."
              </p>
              <div>
                <p className="font-semibold">Sarah Chen</p>
                <p className="text-sm text-muted-foreground">Freelance Designer</p>
                <p className="text-sm text-muted-foreground">Chen Creative</p>
              </div>
            </Card>

            <Card className="p-6">
              <p className="mb-6 text-lg text-muted-foreground">
                "Finally, a planning tool built specifically for designers. The mood board and style guide features are
                exactly what I needed."
              </p>
              <div>
                <p className="font-semibold">Marcus Rodriguez</p>
                <p className="text-sm text-muted-foreground">UI/UX Designer</p>
                <p className="text-sm text-muted-foreground">Digital Studio</p>
              </div>
            </Card>

            <Card className="p-6">
              <p className="mb-6 text-lg text-muted-foreground">
                "The project summary export has made client presentations so much easier. Everything is documented and
                professional."
              </p>
              <div>
                <p className="font-semibold">Emily Watson</p>
                <p className="text-sm text-muted-foreground">Brand Designer</p>
                <p className="text-sm text-muted-foreground">Watson Design Co</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
              <span className="text-lg font-bold">troov</span>
              <span className="text-lg text-muted-foreground">studio</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Troov Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
