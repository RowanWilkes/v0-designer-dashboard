import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Book, Zap, Users, Settings, CreditCard, HelpCircle } from 'lucide-react'

export default function HelpPage() {
  const categories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics and set up your first project",
      articles: 12
    },
    {
      icon: Zap,
      title: "Features",
      description: "Deep dives into DesignFlow's powerful features",
      articles: 24
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working with teams and sharing projects",
      articles: 8
    },
    {
      icon: Settings,
      title: "Account & Settings",
      description: "Managing your account and preferences",
      articles: 15
    },
    {
      icon: CreditCard,
      title: "Billing & Plans",
      description: "Subscription, pricing, and payment info",
      articles: 10
    },
    {
      icon: HelpCircle,
      title: "Troubleshooting",
      description: "Solutions to common issues and problems",
      articles: 18
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
              How can we help?
            </h1>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
              <Input 
                placeholder="Search for help articles..." 
                className="h-14 pl-12 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Browse by category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, i) => (
                <Card key={i} className="p-6 space-y-4 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2 border-t border-border">
                    {category.articles} articles
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Still need help?</h2>
            <p className="text-lg text-muted-foreground">
              Our support team is here to help you succeed
            </p>
            <Button size="lg" className="h-12 px-8">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
