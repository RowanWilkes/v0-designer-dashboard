import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="relative overflow-visible">
      <div className="absolute inset-0 top-40 bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003A33] via-primary to-[#002724]"></div>
        
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-20 right-10 size-64" viewBox="0 0 200 200">
            <polygon points="100,10 150,90 50,90" fill="currentColor" className="text-accent" />
          </svg>
          <svg className="absolute bottom-20 left-10 size-96" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" className="text-secondary" />
          </svg>
          <svg className="absolute top-1/2 right-1/4 size-48" viewBox="0 0 200 200">
            <rect x="50" y="50" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
          </svg>
          <svg className="absolute top-10 left-1/3 w-64 h-64" viewBox="0 0 200 200">
            <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="1" className="text-white" />
            <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="1" className="text-white" />
          </svg>
        </div>
      </div>

      <div className="relative z-30 -mt-40">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-[#F8FAF9] text-foreground rounded-2xl p-12 lg:p-16 overflow-hidden shadow-sm border border-border">
              <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
                <svg className="size-96" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
                  <polygon points="100,20 180,180 20,180" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
                </svg>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
                <div className="space-y-6 flex-1">
                  <h2 className="text-5xl font-semibold leading-tight tracking-tight">
                    Transform your design workflow
                  </h2>
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="size-4 text-accent" />
                      <span>14-day free trial</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="size-4 text-accent" />
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="size-4 text-accent" />
                      <span>Cancel anytime</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 h-12 font-medium rounded-md shadow-sm">
                    Book a demo
                  </Button>
                  <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted px-8 h-12 font-medium rounded-md bg-transparent">
                    Start a trial
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-16 pt-32 relative z-10 text-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Platform</h4>
            <ul className="space-y-3">
              <li><Link href="/platform" className="text-sm hover:text-white transition-colors">Platform overview</Link></li>
              <li><Link href="/projects" className="text-sm hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/mood-board" className="text-sm hover:text-white transition-colors">Mood Board</Link></li>
              <li><Link href="/wireframes" className="text-sm hover:text-white transition-colors">Wireframes</Link></li>
              <li><Link href="/tasks" className="text-sm hover:text-white transition-colors">Task Management</Link></li>
              <li><Link href="/features" className="text-sm hover:text-white transition-colors">All features</Link></li>
              <li><Link href="/integrations" className="text-sm hover:text-white transition-colors">All integrations</Link></li>
              <li><Link href="/pricing" className="text-sm hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/security" className="text-sm hover:text-white transition-colors">Security + Compliance</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Features</h4>
            <ul className="space-y-3">
              <li><Link href="/features/color-palettes" className="text-sm hover:text-white transition-colors">Color Palettes</Link></li>
              <li><Link href="/features/typography" className="text-sm hover:text-white transition-colors">Typography</Link></li>
              <li><Link href="/features/wireframes" className="text-sm hover:text-white transition-colors">Wireframe Canvas</Link></li>
              <li><Link href="/features/assets" className="text-sm hover:text-white transition-colors">Asset Management</Link></li>
              <li><Link href="/features/collaboration" className="text-sm hover:text-white transition-colors">Team Collaboration</Link></li>
              <li><Link href="/features/export" className="text-sm hover:text-white transition-colors">Export & Share</Link></li>
              <li><Link href="/features/templates" className="text-sm hover:text-white transition-colors">Project Templates</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/solutions/agencies" className="text-sm hover:text-white transition-colors">Agencies</Link></li>
              <li><Link href="/solutions/freelancers" className="text-sm hover:text-white transition-colors">Freelancers</Link></li>
              <li><Link href="/solutions/teams" className="text-sm hover:text-white transition-colors">Design Teams</Link></li>
              <li><Link href="/solutions/studios" className="text-sm hover:text-white transition-colors">Studios</Link></li>
              <li><Link href="/solutions/startups" className="text-sm hover:text-white transition-colors">Startups</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Use cases</h4>
            <ul className="space-y-3">
              <li><Link href="/use-cases/web-design" className="text-sm hover:text-white transition-colors">Web Design</Link></li>
              <li><Link href="/use-cases/branding" className="text-sm hover:text-white transition-colors">Branding</Link></li>
              <li><Link href="/use-cases/ui-ux" className="text-sm hover:text-white transition-colors">UI/UX Projects</Link></li>
              <li><Link href="/use-cases/client-projects" className="text-sm hover:text-white transition-colors">Client Projects</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/getting-started" className="text-sm hover:text-white transition-colors">Getting Started Guide</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/guides" className="text-sm hover:text-white transition-colors">Guides</Link></li>
              <li><Link href="/documentation" className="text-sm hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/help" className="text-sm hover:text-white transition-colors">Help & Support</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-sm hover:text-white transition-colors">About</Link></li>
                <li><Link href="/careers" className="text-sm hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/support" className="text-sm hover:text-white transition-colors">Support</Link></li>
                <li><Link href="/partners" className="text-sm hover:text-white transition-colors">Partners</Link></li>
                <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Developers</h4>
              <ul className="space-y-3">
                <li><Link href="/api" className="text-sm hover:text-white transition-colors">API</Link></li>
                <li><Link href="/release-notes" className="text-sm hover:text-white transition-colors">Release notes</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-8 mt-16 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 text-white/60">
            <div className="size-8 rounded bg-white/10 flex items-center justify-center">
              <Sparkles className="size-4" />
            </div>
            <span className="text-xs font-medium">USERS<br/>LOVE US</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <div className="size-8 rounded bg-white/10 flex items-center justify-center">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/></svg>
            </div>
            <span className="text-xs font-medium">GDPR<br/>COMPLIANT</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <div className="size-8 rounded bg-white/10 flex items-center justify-center">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/></svg>
            </div>
            <span className="text-xs font-medium">SOC 2<br/>CERTIFIED</span>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <Button size="icon" variant="ghost" className="size-9 text-white/70 hover:text-white hover:bg-white/10" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/></svg>
              </a>
            </Button>
            <Button size="icon" variant="ghost" className="size-9 text-white/70 hover:text-white hover:bg-white/10" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </Button>
            <Button size="icon" variant="ghost" className="size-9 text-white/70 hover:text-white hover:bg-white/10" asChild>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </Button>
            <Button size="icon" variant="ghost" className="size-9 text-white/70 hover:text-white hover:bg-white/10" asChild>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s0 3.667.012 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.585-.072-4.85c-.06-1.17.256-1.805.421-2.227.224-.562.479-.96.899-1.382.419-.42.679-.819.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.071-1.646-.071-4.85s.016-3.585.071-4.85c.061-1.17.256-1.805.421-2.227.224-.562.479-.96.899-1.382.419-.419.824-.679 1.38-.896.165-.164.359-.36 1.065-.42 1.274-.045 1.65-.061 4.859-.061 3.211 0 3.586.016 4.859.071.165.061.359.256.42.421.569.224.96.479 1.379.899.419.42.69.824.9.138.165-.42.359-1.065.42-1.274.045-.164.071-.45.071-.646zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.388.244 1.388.244l-.045-.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.388.244 1.388.244l-.045-.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.388.244 1.388.244l-.045-.03"/></div>
          </div>
        </div>
      </div>
    </footer>
  )
}\
