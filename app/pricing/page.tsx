import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
              <img src="/troov-studio-logo.png" alt="Troov Studio" className="h-12 object-contain" />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/#features"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </Link>
              <Link href="/pricing" className="text-sm font-medium text-foreground">
                Pricing
              </Link>
              <Link
                href="/login"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Log in
              </Link>
              <Button asChild size="lg" className="h-11 px-6">
                <Link href="/signup">Start Now</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
            Simple, transparent pricing
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground text-balance">
            Start free and upgrade as your project needs grow.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <Card className="p-8 space-y-8 hover:shadow-xl transition-shadow bg-card">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-foreground">Free</h3>
              <p className="text-muted-foreground">Perfect to get started:</p>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">1 project included</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">All 8 dashboard sections</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Mood boards & style guides</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">PDF export</span>
              </li>
            </ul>
            <Button className="w-full h-12 rounded-xl" asChild>
              <Link href="/signup">Start for free</Link>
            </Button>
          </Card>

          <Card className="p-8 space-y-8 hover:shadow-xl transition-shadow bg-card border-primary border-2 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
              Most Popular
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-foreground">Pro</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-foreground">$20</span>
                <span className="text-muted-foreground">/ mo</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Perfect for freelancers and agencies managing multiple client projects.
            </p>
            <Button className="w-full h-12 rounded-xl" asChild>
              <Link href="/signup">
                Start 14-day trial <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </Card>

          <Card className="p-8 space-y-8 hover:shadow-xl transition-shadow bg-card">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-foreground">Team</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-foreground">$49</span>
                <span className="text-muted-foreground">/ mo</span>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Everything in Pro</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Unlimited projects</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Team collaboration</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Priority support</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full h-12 rounded-xl bg-transparent" asChild>
              <Link href="/signup">Start Team trial</Link>
            </Button>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 lg:py-32 bg-muted/30">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-center">FAQs</h2>

          <div className="space-y-6">
            {[
              {
                q: "Can I change plans later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
              },
              {
                q: "Is there a free trial?",
                a: "The Starter plan is completely free forever. Pro and Team plans include a 14-day free trial.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and offer annual billing with a 20% discount.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Absolutely. Cancel your subscription at any time with no questions asked. No hidden fees.",
              },
            ].map((faq, i) => (
              <Card key={i} className="p-6 bg-card">
                <h3 className="font-semibold text-foreground mb-2 text-lg">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
              <img src="/troov-studio-logo.png" alt="Troov Studio" className="h-12 object-contain" />
            </Link>
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
              <Link href="/#features" className="hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms
              </Link>
            </nav>
          </div>
          <div className="text-center text-sm text-muted-foreground mt-8 pt-8 border-t border-border">
            © 2025 Troov Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
