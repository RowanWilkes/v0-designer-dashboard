"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Menu, X, Triangle, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF]/80 backdrop-blur-md border-b border-[#E5E5E5]">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Triangle className="size-5 text-[#0D0C0B] fill-[#0D0C0B]" />
            <span className="text-lg font-semibold text-[#0D0C0B]">troov studio</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-[#6B6B6B] hover:text-[#0D0C0B] transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-[#6B6B6B] hover:text-[#0D0C0B] transition-colors">
              Pricing
            </Link>
            <Link href="/login" className="text-sm text-[#6B6B6B] hover:text-[#0D0C0B] transition-colors">
              Sign In
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full px-5 h-9 text-sm font-medium transition-transform hover:scale-105">
              Get Started Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="size-5 text-[#0D0C0B]" />
            ) : (
              <Menu className="size-5 text-[#0D0C0B]" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFFFFF] border-b border-[#E5E5E5] px-6 py-4 space-y-4">
            <Link href="#features" className="block text-sm text-[#6B6B6B] hover:text-[#0D0C0B]">
              Features
            </Link>
            <Link href="#pricing" className="block text-sm text-[#6B6B6B] hover:text-[#0D0C0B]">
              Pricing
            </Link>
            <Link href="/login" className="block text-sm text-[#6B6B6B] hover:text-[#0D0C0B]">
              Sign In
            </Link>
            <Button className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full h-10 text-sm font-medium">
              Get Started Free
            </Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow */}
            <p className={`text-sm font-medium text-[#6B6B6B] ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
              Project Planning for Web Designers
            </p>

            {/* Headline */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D0C0B] leading-tight tracking-tight text-balance ${mounted ? "animate-fade-in-up-delay-1" : "opacity-0"}`}>
              Your design projects. Finally under control.
            </h1>

            {/* Subheadline */}
            <p className={`text-lg md:text-xl text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed ${mounted ? "animate-fade-in-up-delay-2" : "opacity-0"}`}>
              Troov Studio gives you a structured workspace to plan, track and deliver client projects — without the chaos.
            </p>

            {/* CTA Button */}
            <div className={mounted ? "animate-fade-in-up-delay-3" : "opacity-0"}>
              <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full px-8 h-12 text-base font-medium transition-transform hover:scale-105">
                Create Free Account
              </Button>
            </div>
          </div>

          {/* Dashboard Screenshot */}
          <div className={`mt-16 max-w-4xl mx-auto ${mounted ? "animate-fade-in-up-delay-4" : "opacity-0"}`}>
            <div className="bg-[#FFFFFF] rounded-xl border border-[#E5E5E5] shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden">
              {/* Browser Chrome */}
              <div className="bg-[#F5F5F5] px-4 py-3 flex items-center gap-3 border-b border-[#E5E5E5]">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-[#EF4444]" />
                  <div className="size-3 rounded-full bg-[#F59E0B]" />
                  <div className="size-3 rounded-full bg-[#22C55E]" />
                </div>
                <div className="flex-1 max-w-md mx-auto">
                  <div className="bg-[#FFFFFF] rounded-md px-4 py-1.5 text-xs text-[#6B6B6B] border border-[#E5E5E5]">
                    app.troovstudio.com/dashboard
                  </div>
                </div>
              </div>
              {/* Placeholder Content */}
              <div className="bg-[#F9FAFB] aspect-[16/9] flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="size-16 rounded-xl bg-[#E5E5E5] mx-auto flex items-center justify-center">
                    <Triangle className="size-8 text-[#6B6B6B]" />
                  </div>
                  <p className="text-sm text-[#6B6B6B]">Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-12 border-y border-[#E5E5E5] bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm text-[#6B6B6B] mb-8">
            Trusted by freelance designers and studios
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <span className="text-lg font-semibold text-[#D4D4D4]">Pixel Studio</span>
            <span className="text-lg font-semibold text-[#D4D4D4]">DesignCraft</span>
            <span className="text-lg font-semibold text-[#D4D4D4]">WebFlow Co</span>
            <span className="text-lg font-semibold text-[#D4D4D4]">Artisan Labs</span>
            <span className="text-lg font-semibold text-[#D4D4D4]">Creative Edge</span>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section id="features" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 space-y-24 lg:space-y-32">
          {/* Feature 1: Text Left, Screenshot Right */}
          <FeatureBlock
            title="Structured Project Sections"
            description="Break every project into dedicated phases. Discovery, Wireframes, Design, Handoff and more. Never miss a step."
            imagePosition="right"
          />

          {/* Feature 2: Screenshot Left, Text Right */}
          <FeatureBlock
            title="Progress Tracking"
            description="See exactly where every project stands with visual progress indicators across each phase."
            imagePosition="left"
          />

          {/* Feature 3: Text Left, Screenshot Right */}
          <FeatureBlock
            title="One-Click PDF Export"
            description="Generate a professional project summary or design brief PDF in one click. Ready to send to your client."
            imagePosition="right"
          />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 lg:py-28 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-[#0D0C0B] leading-relaxed mb-8">
            &ldquo;Troov Studio completely changed how I manage client projects. Everything is in one place.&rdquo;
          </blockquote>
          <p className="text-[#6B6B6B] text-base">
            — Alex M., Freelance Web Designer
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D0C0B] text-center mb-16">
            Simple pricing for every stage.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <PricingCard
              name="Free"
              price="$0"
              description="Perfect for getting started"
              features={[
                "1 active project",
                "Basic project sections",
                "PDF export",
                "Email support"
              ]}
              buttonText="Get Started"
              buttonVariant="outline"
            />

            {/* Pro Plan */}
            <PricingCard
              name="Pro"
              price="$19"
              description="For growing freelancers"
              features={[
                "Unlimited projects",
                "All project sections",
                "Custom branding",
                "Priority support"
              ]}
              buttonText="Get Started"
              buttonVariant="primary"
              isPopular
            />

            {/* Professional Plan */}
            <PricingCard
              name="Professional"
              price="$49"
              description="For studios and teams"
              features={[
                "Everything in Pro",
                "Team collaboration",
                "Client portals",
                "API access"
              ]}
              buttonText="Get Started"
              buttonVariant="outline"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-20 lg:py-28 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D0C0B] mb-6">
            Start planning better design projects today.
          </h2>
          <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full px-8 h-12 text-base font-medium transition-transform hover:scale-105 mb-4">
            Create Free Account
          </Button>
          <p className="text-sm text-[#6B6B6B]">
            Free to start. No credit card required.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            {/* Logo and Tagline */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Triangle className="size-5 text-[#0D0C0B] fill-[#0D0C0B]" />
                <span className="text-lg font-semibold text-[#0D0C0B]">troov studio</span>
              </Link>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                Project planning built for freelance web designers.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-sm font-semibold text-[#0D0C0B] mb-4">Product</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm text-[#6B6B6B] hover:text-[#0D0C0B]">Features</Link></li>
                <li><Link href="#" className="text-sm text-[#6B6B6B] hover:text-[#0D0C0B]">Pricing</Link></li>
                <li><Link href="#" className="text-sm text-[#6B6B6B] hover:text-[#0D0C0B]">Changelog</Link></li>
                <li><Link href="#" className="text-sm text-[#6B6B6B] hover:text-[#0D0C0B]">Roadmap</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-[#0D0C0B] mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm text-[#6B6B6B] hover:text-[#0D0C0B]">About</Link></li>
                <li><Link href="#" className="text-sm text-[#6B6B6B] hover:text-[#0D0C0B]">Blog</Link></li>
                <li><Link href="#" className="text-sm text-[#6B6B6B] hover:text-[#0D0C0B]">Careers</Link></li>
                <li><Link href="#" className="text-sm text-[#6B6B6B] hover:text-[#0D0C0B]">Contact</Link></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-sm font-semibold text-[#0D0C0B] mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm text-[#6B6B6B] hover:text-[#0D0C0B]">Documentation</Link></li>
                <li><Link href="#" className="text-sm text-[#6B6B6B] hover:text-[#0D0C0B]">Help Center</Link></li>
                <li><Link href="#" className="text-sm text-[#6B6B6B] hover:text-[#0D0C0B]">Templates</Link></li>
                <li><Link href="#" className="text-sm text-[#6B6B6B] hover:text-[#0D0C0B]">Guides</Link></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold text-[#0D0C0B] mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm text-[#6B6B6B] hover:text-[#0D0C0B]">Privacy</Link></li>
                <li><Link href="#" className="text-sm text-[#6B6B6B] hover:text-[#0D0C0B]">Terms</Link></li>
                <li><Link href="#" className="text-sm text-[#6B6B6B] hover:text-[#0D0C0B]">Security</Link></li>
                <li><Link href="#" className="text-sm text-[#6B6B6B] hover:text-[#0D0C0B]">Cookies</Link></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-[#E5E5E5]">
            <p className="text-sm text-[#6B6B6B] text-center">
              &copy; {new Date().getFullYear()} Troov Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Feature Block Component
function FeatureBlock({
  title,
  description,
  imagePosition,
}: {
  title: string
  description: string
  imagePosition: "left" | "right"
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const textContent = (
    <div className="space-y-4">
      <h3 className="text-2xl md:text-3xl font-bold text-[#0D0C0B]">{title}</h3>
      <p className="text-lg text-[#6B6B6B] leading-relaxed">{description}</p>
    </div>
  )

  const imageContent = (
    <div className="bg-[#FFFFFF] rounded-xl border border-[#E5E5E5] shadow-[0_2px_16px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="bg-[#F5F5F5] px-4 py-2 flex items-center gap-2 border-b border-[#E5E5E5]">
        <div className="size-2.5 rounded-full bg-[#EF4444]" />
        <div className="size-2.5 rounded-full bg-[#F59E0B]" />
        <div className="size-2.5 rounded-full bg-[#22C55E]" />
      </div>
      <div className="bg-[#F9FAFB] aspect-[4/3] flex items-center justify-center">
        <div className="text-center">
          <div className="size-12 rounded-lg bg-[#E5E5E5] mx-auto flex items-center justify-center mb-2">
            <Triangle className="size-6 text-[#6B6B6B]" />
          </div>
          <p className="text-xs text-[#6B6B6B]">Screenshot</p>
        </div>
      </div>
    </div>
  )

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {imagePosition === "left" ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </div>
  )
}

// Pricing Card Component
function PricingCard({
  name,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  isPopular,
}: {
  name: string
  price: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: "primary" | "outline"
  isPopular?: boolean
}) {
  return (
    <div
      className={`relative bg-[#FFFFFF] rounded-xl p-8 ${
        isPopular
          ? "border-2 border-[#22C55E] shadow-[0_4px_24px_rgba(34,197,94,0.15)]"
          : "border border-[#E5E5E5]"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-[#22C55E] text-white text-xs font-medium px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold text-[#0D0C0B] mb-2">{name}</h3>
        <div className="flex items-baseline justify-center gap-1 mb-2">
          <span className="text-4xl font-bold text-[#0D0C0B]">{price}</span>
          {price !== "$0" && <span className="text-[#6B6B6B]">/month</span>}
        </div>
        <p className="text-sm text-[#6B6B6B]">{description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="size-4 text-[#22C55E] flex-shrink-0" />
            <span className="text-sm text-[#6B6B6B]">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={`w-full h-11 rounded-lg font-medium transition-transform hover:scale-[1.02] ${
          buttonVariant === "primary"
            ? "bg-[#22C55E] hover:bg-[#16A34A] text-white"
            : "bg-[#FFFFFF] border border-[#E5E5E5] text-[#0D0C0B] hover:bg-[#F5F5F5]"
        }`}
      >
        {buttonText}
      </Button>
    </div>
  )
}
