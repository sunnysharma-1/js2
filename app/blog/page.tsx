"use client"

import { useMemo, useState } from "react"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "Top PCB Testing Methods Used by Indian EMS Companies",
    excerpt:
      "Printed Circuit Board (PCB) testing is a critical process in the electronics manufacturing industry, especially in India, where electronics manufacturing is growing rapidly. Learn about the essential testing methods used by professional EMS providers.",
    category: "PCB",
    date: "March 2025",
    readTime: "6 min read",
    image: "/pcb-testing-methods-electronics.jpg",
    author: "Nirav Patel",
    slug: "top-pcb-testing-methods-indian-ems",
  }

  const blogPosts = [
    {
      id: 2,
      title: "Why Box Build Assembly Is Critical for Industrial Automation Systems",
      excerpt:
        "Industrial automation is the backbone of many industries in India. Explore how box build assembly services support industrial automation systems with efficiency and precision.",
      category: "Box Build Assembly",
      date: "March 2025",
      readTime: "7 min read",
      // Updated image for Box Build blog
      image: "https://vectorbluehub.com/zdjecia/artykul/80/561/1920x1080/4/Box-Build__153_.JPG",
      author: "Nirav Patel",
      slug: "box-build-assembly-industrial-automation",
    },
    {
      id: 3,
      title: "Design for Manufacturability (DFM): Why It Matters in PCB Design",
      excerpt:
        "In today's electronics world, making products quickly and efficiently is crucial. Learn why DFM principles are essential for successful PCB design and manufacturing.",
      category: "PCB Design",
      date: "March 2025",
      readTime: "8 min read",
      image: "/pcb-design-manufacturability-dfm.jpg",
      author: "Nirav Patel",
      slug: "design-for-manufacturability-pcb",
    },
    {
      id: 4,
      title: "Key Considerations for Wire Harness Assembly for Medical Devices",
      excerpt:
        "Medical devices require sophisticated, compact, and efficient wire harness assemblies. Discover the key considerations and best practices for medical device wire harness manufacturing.",
      category: "Wire Harness",
      date: "February 2025",
      readTime: "7 min read",
      image: "/wire-harness-medical-devices-assembly.jpg",
      author: "Nirav Patel",
      slug: "wire-harness-assembly-medical-devices",
    },
    {
      id: 5,
      title: "Latest Trends in PCB Assembly Automation",
      excerpt:
        "Printed circuit boards power everything from industrial machinery to home appliances. Explore the latest automation technologies transforming the PCB manufacturing scene.",
      category: "PCB",
      date: "February 2025",
      readTime: "6 min read",
      image: "/pcb-assembly-automation-technology.jpg",
      author: "Nirav Patel",
      slug: "latest-trends-pcb-assembly-automation",
    },
    {
      id: 6,
      title: "Top Applications of Wire Harnesses in Industrial Machinery",
      excerpt:
        "Wire harnesses are essential components in virtually every industrial setting. Learn about the diverse applications and importance of quality wire harness design.",
      category: "Wire Harness",
      date: "February 2025",
      readTime: "6 min read",
      image: "/wire-harness-industrial-machinery-applications.jpg",
      author: "Nirav Patel",
      slug: "wire-harness-industrial-machinery-applications",
    },
    {
      id: 7,
      title: "Shielded vs Unshielded Cable Assemblies: Pros & Cons Explained",
      excerpt:
        "When choosing between shielded and unshielded cable assemblies, understanding the differences is crucial. Get detailed insights on pros and cons for various industrial applications.",
      category: "Cable Assembly",
      date: "February 2025",
      readTime: "7 min read",
      image: "/shielded-unshielded-cable-assemblies.jpg",
      author: "Nirav Patel",
      slug: "shielded-vs-unshielded-cable-assemblies",
    },
    {
      id: 8,
      title: "Low-Volume vs High-Volume PCB Assembly: Key Differences",
      excerpt:
        "Whether you're a startup creating prototypes or an established brand scaling up, choosing the right PCB assembly approach is critical for success.",
      category: "PCB",
      date: "January 2025",
      readTime: "8 min read",
      image: "/pcb-assembly-low-volume-high-volume.jpg",
      author: "Nirav Patel",
      slug: "low-volume-high-volume-pcb-assembly",
    },
    {
      id: 9,
      title: "Types of Wiring Harness: A Complete Guide for Modern Applications",
      excerpt:
        "Wiring harnesses are the unsung heroes of modern electrical systems. Understand the major types of wiring harness used in automotive, electronics, and industrial sectors.",
      category: "Wire Harness",
      date: "January 2025",
      readTime: "9 min read",
      image: "/types-wiring-harness-modern-applications.jpg",
      author: "Jayshree Instruments",
      slug: "types-wiring-harness-complete-guide",
    },
  ]

  const categories = ["All", "PCB", "Wire Harness", "Cable Assembly", "Box Build Assembly", "PCB Design"]

  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchTerm, setSearchTerm] = useState<string>("")

  const filteredPosts = useMemo(() => {
    const term = searchTerm.toLowerCase().trim()

    return blogPosts.filter((post) => {
      const matchCategory =
        selectedCategory === "All" ? true : post.category.toLowerCase() === selectedCategory.toLowerCase()

      const matchSearch =
        term.length === 0
          ? true
          : post.title.toLowerCase().includes(term) ||
            post.excerpt.toLowerCase().includes(term) ||
            post.author.toLowerCase().includes(term)

      return matchCategory && matchSearch
    })
  }, [blogPosts, selectedCategory, searchTerm])

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#0066CC]/10 to-[#00A896]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#00A896]/10 to-[#0066CC]/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#0066CC]/10 to-[#00A896]/10 rounded-full border border-[#0066CC]/20"
              >
                <span className="text-sm font-semibold text-[#0066CC]">📚 Knowledge Hub</span>
              </motion.div>

              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-balance leading-tight">
                Insights from the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#00A896]">
                  Electronics Manufacturing
                </span>{" "}
                World
              </h1>

              <p className="text-lg font-normal leading-relaxed text-gray-600 text-pretty">
                Stay ahead with expert articles, industry trends, technical guides, and manufacturing best practices
                from our team of specialists.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                {[
                  { number: "150+", label: "Articles" },
                  { number: "50K+", label: "Readers" },
                  { number: "Weekly", label: "Updates" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-[#0066CC] mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Search Bar (desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative max-w-md hidden lg:block"
              >
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search articles..."
                  className="pl-12 h-12 border-2 border-gray-200 focus:border-[#0066CC] rounded-xl"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </motion.div>
            </motion.div>

            {/* Right Content - Featured Article Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[500px]">
                {/* Main Featured Card */}
                <motion.div
                  className="absolute top-0 right-0 w-80 z-10"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Card className="overflow-hidden shadow-2xl border-2 border-white hover:shadow-3xl transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
                        alt="Featured article"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-[#0066CC] to-[#00A896]">Featured</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Mar 2025
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          6 min
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">
                        Top PCB Testing Methods Used by Indian EMS Companies
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        Printed Circuit Board (PCB) testing is a critical process in the electronics manufacturing
                        industry, especially in India, where electronics manufacturing is growing rapidly. Learn about
                        the essential testing methods used by professional EMS providers...
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Secondary Card */}
                <motion.div
                  className="absolute bottom-0 left-0 w-72 z-5"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Card className="overflow-hidden shadow-xl border border-gray-200">
                    <div className="relative h-40">
                      <Image
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
                        alt="Article"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        Box Build Assembly
                      </Badge>
                      <h3 className="font-semibold text-sm line-clamp-2">
                        Why Box Build Assembly Is Critical for Industrial Automation Systems
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Floating badges */}
                <motion.div
                  className="absolute top-20 left-10"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-gray-100">
                    <span className="text-sm font-semibold text-[#0066CC]">🔥 Trending</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-32 right-10"
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="bg-gradient-to-r from-[#0066CC] to-[#00A896] rounded-full px-4 py-2 shadow-lg">
                    <span className="text-sm font-semibold text-white">✨ New</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="border-b bg-white py-8">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Mobile search */}
            <div className="relative flex-1 max-w-md lg:hidden">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = category === selectedCategory
                return (
                  <Button
                    key={category}
                    variant={isActive ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={
                      isActive
                        ? "bg-gradient-to-r from-[#0066CC] to-[#00A896] text-white"
                        : "border-gray-200 text-gray-700"
                    }
                  >
                    {category}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Badge className="bg-gradient-to-r from-[#0066CC] to-[#00A896]">Featured Article</Badge>
          </div>
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="relative h-[300px] lg:h-full">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="flex flex-col justify-center p-8">
                <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h2 className="mb-4 text-3xl font-semibold leading-tight text-balance">{featuredPost.title}</h2>
                <p className="mb-6 text-muted-foreground font-normal leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">By {featuredPost.author}</span>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-[#0066CC] to-[#00A896] hover:opacity-90 font-medium"
                  >
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold">Latest Articles</h2>
            {searchTerm || selectedCategory !== "All" ? (
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold">{filteredPosts.length}</span> article
                {filteredPosts.length !== 1 ? "s" : ""}{" "}
                {selectedCategory !== "All" && (
                  <>
                    in <span className="font-semibold">{selectedCategory}</span>
                  </>
                )}
              </p>
            ) : null}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center text-sm text-muted-foreground">
              No articles found for your search/filter. Try changing the category or search keywords.
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="group overflow-hidden transition-shadow hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold leading-tight text-balance">{post.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground font-normal leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-normal">By {post.author}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-sm font-medium text-[#0066CC] hover:underline"
                      >
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Load More (static for now) */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-br from-[#0066CC] to-[#00A896] py-16 text-white md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-balance">Subscribe to Our Newsletter</h2>
            <p className="mb-8 text-lg text-pretty">
              Get the latest articles, industry insights, and manufacturing tips delivered directly to your inbox.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Input type="email" placeholder="Enter your email" className="bg-white text-slate-900 sm:w-80" />
              <Button size="lg" className="bg-white text-[#0066CC] hover:bg-slate-100">
                Subscribe
              </Button>
            </div>
            <p className="mt-4 text-sm opacity-90">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
