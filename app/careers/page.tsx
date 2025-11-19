"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Briefcase, Users, Heart, TrendingUp, Target, Award, CheckCircle2, MapPin, Clock, X, Upload } from 'lucide-react'

export default function CareersPage() {
  const openPositions = [
    {
      title: "PCB Design Engineer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3-5 years",
      category: "Technical",
      description:
        "We're looking for experienced PCB design engineers to join our growing team. Design cutting-edge circuit boards for innovative products.",
      skills: ["Altium Designer", "Signal Integrity", "Manufacturing Design", "Schematic Capture"],
    },
    {
      title: "Manufacturing Technician",
      department: "Production",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "2-4 years",
      category: "Technical",
      description:
        "Join our manufacturing team and help produce high-quality electronics. Work with automated assembly lines and quality control systems.",
      skills: ["SMT Assembly", "Quality Assurance", "Troubleshooting", "Documentation"],
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "5+ years",
      category: "Non-Technical",
      description:
        "Lead cross-functional teams to deliver projects on time and within budget. Manage client relationships and oversee production timelines.",
      skills: ["Project Management", "Client Relations", "Supply Chain", "Budget Planning"],
    },
    {
      title: "Quality Assurance Engineer",
      department: "Quality",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "2-3 years",
      category: "Technical",
      description:
        "Ensure our products meet the highest quality standards. Develop testing procedures and oversee quality control processes.",
      skills: ["IPC Standards", "Testing Equipment", "Data Analysis", "Compliance"],
    },
    {
      title: "Sales Engineer",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      experience: "3-7 years",
      category: "Non-Technical",
      description:
        "Support our sales team by providing technical expertise to clients. Identify opportunities and build long-term customer relationships.",
      skills: ["Electronics Knowledge", "Sales Strategy", "Communication", "Client Support"],
    },
    {
      title: "Electronics Technician",
      department: "Technical Support",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "1-3 years",
      category: "Technical",
      description:
        "Provide technical support and troubleshooting for our products. Assist customers with installation and optimization.",
      skills: ["Troubleshooting", "Customer Service", "Technical Knowledge", "Documentation"],
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive, innovative environment.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continuous learning opportunities, training programs, and clear advancement paths.",
    },
    {
      icon: Target,
      title: "Flexible Work",
      description: "Flexible schedules and remote work options where applicable.",
    },
    {
      icon: Award,
      title: "Performance Incentives",
      description: "Competitive bonuses and rewards for outstanding performance.",
    },
    {
      icon: Briefcase,
      title: "Professional Development",
      description: "Certifications, workshops, and industry conference attendance.",
    },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We encourage creative thinking and continuous improvement in everything we do.",
    },
    {
      title: "Quality",
      description: "Excellence is non-negotiable. We maintain the highest standards in all aspects.",
    },
    {
      title: "Integrity",
      description: "We build trust through honest communication and ethical practices.",
    },
    {
      title: "Collaboration",
      description: "Together, we achieve more. Teamwork and cooperation drive our success.",
    },
  ]

  const [selectedDepartment, setSelectedDepartment] = useState<string>("All")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [search, setSearch] = useState<string>("")
  const [isApplicationOpen, setIsApplicationOpen] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: "", position: "", cv: null as File | null })

  const departments = useMemo(
    () => ["All", ...Array.from(new Set(openPositions.map((p) => p.department)))],
    [openPositions]
  )

  const filteredPositions = useMemo(
    () =>
      openPositions.filter((position) => {
        const matchesDept = selectedDepartment === "All" || position.department === selectedDepartment
        const matchesCategory = selectedCategory === "All" || position.category === selectedCategory
        const haystack = `${position.title} ${position.location} ${position.department} ${position.description}`.toLowerCase()
        const matchesSearch = haystack.includes(search.toLowerCase())
        return matchesDept && matchesCategory && matchesSearch
      }),
    [openPositions, selectedDepartment, selectedCategory, search]
  )

  const handleApplyClick = (positionTitle: string) => {
    setSelectedPosition(positionTitle)
    setFormData({ name: "", position: positionTitle, cv: null })
    setIsApplicationOpen(true)
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, cv: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Application submitted:", formData)
    alert(`Application submitted! We'll review your CV and get back to you soon.`)
    setIsApplicationOpen(false)
    setFormData({ name: "", position: "", cv: null })
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 opacity-60">
          <div className="h-full w-full bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:py-28 lg:px-8">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="z-10 max-w-xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/70 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-md">
              <Briefcase className="h-4 w-4 text-blue-600" />
              <span>Careers at Electronics Hero</span>
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Build your next
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                chapter with us
              </span>
            </h1>

            <p className="max-w-xl text-base text-slate-700 sm:text-lg">
              Join a team that designs, builds, and ships real hardware to customers worldwide. Work on meaningful
              electronics, grow your skills, and see your work come to life.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#open-positions">
                <Button className="gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-6 text-base font-semibold text-white shadow-lg hover:from-blue-700 hover:to-indigo-700">
                  Explore opportunities
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <Link href="/contact">
                {/* <Button
                  variant="outline"
                  className="rounded-full border-blue-600 bg-white px-7 py-6 text-base text-blue-700 hover:bg-blue-50"
                >
                  Share your CV
                </Button> */}
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-indigo-500" />
                <span>Cross-functional teams · Engineering, Ops, Sales</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-purple-500" />
                <span>Merit-based growth & recognition</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="z-10 flex-1"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-400/40 via-indigo-400/30 to-purple-400/40 blur-3xl" />
              <Card className="relative overflow-hidden rounded-3xl border-slate-200 bg-white shadow-2xl">
                <div className="grid gap-0 sm:grid-cols-5">
                  <div className="relative sm:col-span-3">
                    <div className="relative h-64 sm:h-full">
                      <Image
                        src="https://img.freepik.com/premium-photo/technician-team-working-electronics-repair-shop_53876-70409.jpg"
                        alt="Team working at Electronics Hero"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                    </div>
                    <div className="absolute bottom-4 left-4 rounded-full bg-slate-900/80 px-3 py-1.5 text-xs text-white shadow-md">
                      <span className="font-medium">On the floor · Real builds, real impact</span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between border-t border-slate-200 bg-slate-50 p-4 sm:col-span-2 sm:border-l sm:border-t-0">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Team size</span>
                        <span className="font-semibold text-slate-900">150+</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Locations</span>
                        <span className="font-semibold text-slate-900">Bangalore · Remote</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Active roles</span>
                        <span className="font-semibold text-slate-900">{openPositions.length}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 rounded-2xl bg-blue-50 p-3 text-xs text-slate-800 ring-1 ring-blue-200">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" />
                      <p>Work on end-to-end product life cycles — from idea to shipped hardware.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why join
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Electronics Hero
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg max-w-3xl mx-auto">
              We focus on doing great work, learning fast, and keeping the environment transparent, human, and
              collaborative.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Card className="h-full border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg">
                    <CardContent className="p-7">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-slate-900">{benefit.title}</h3>
                      <p className="text-sm text-slate-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* VALUES + LIFE AT EH */}
      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row">
          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                core values
              </span>
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              These principles guide how we work together, how we treat customers, and how we build products.
            </p>

            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm hover:border-blue-400"
                >
                  <h3 className="text-base font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Life at Electronics Hero */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <Card className="overflow-hidden border-slate-200 bg-white shadow-sm">
              <div className="grid gap-0 md:grid-cols-2">
                <div className="relative h-60 md:h-full">
                  <Image
                    src="https://laiblogstorage.blob.core.windows.net/posts/_638155443138816303.jpeg"
                    alt="Life at Electronics Hero"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-xs font-medium text-white drop-shadow">
                    Team stand-ups, builds & demos
                  </div>
                </div>
                <CardContent className="space-y-4 p-6 text-sm text-slate-700">
                  <h3 className="text-base font-semibold text-slate-900">Life at Electronics Hero</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                      <span>Hands-on work with real boards, harnesses, and hardware builds.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                      <span>Transparent goals with regular 1:1s and feedback loops.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                      <span>Celebrations for milestones, launches, and team wins.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                      <span>Learning budget for courses, certifications, and conferences.</span>
                    </li>
                  </ul>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="open-positions" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Open{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                positions
              </span>
            </h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg max-w-3xl mx-auto">
              Browse current openings or reach out if your profile doesn&apos;t fit perfectly — we&apos;d still love to
              hear from you.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex flex-wrap gap-2">
              {["All", "Technical", "Non-Technical"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-blue-400 hover:text-blue-700"
                  }`}
                >
                  {category}
                </button>
              ))}
              
              {departments
                .filter((d) => d !== "All")
                .map((dept) => {
                  const isActive = selectedDepartment === dept
                  return (
                    <button
                      key={dept}
                      onClick={() => setSelectedDepartment(dept)}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                        isActive
                          ? "bg-blue-600 text-white shadow-sm"
                          : "bg-white text-slate-700 border border-slate-200 hover:border-blue-400 hover:text-blue-700"
                      }`}
                    >
                      {dept}
                    </button>
                  )
                })}
            </div>

            <div className="w-full sm:w-auto">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm">
                <input
                  type="text"
                  placeholder="Search by role, location…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>
          </motion.div>

          {/* Positions list */}
          <div className="space-y-6">
            {filteredPositions.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-600">
                No roles match your filters right now. Try clearing the filters or{" "}
                <Link href="/contact" className="font-semibold text-blue-600 underline underline-offset-4">
                  send us your CV
                </Link>
                .
              </div>
            )}

            {filteredPositions.map((position, index) => (
              <motion.div
                key={`${position.title}-${index}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="cursor-pointer border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg">
                  <CardContent className="p-7">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-semibold text-slate-900">{position.title}</h3>
                          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                            {position.type}
                          </span>
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              position.category === "Technical"
                                ? "bg-purple-50 text-purple-700"
                                : "bg-green-50 text-green-700"
                            }`}
                          >
                            {position.category}
                          </span>
                        </div>

                        <p className="mb-4 text-sm text-slate-600">{position.description}</p>

                        <div className="mb-4 flex flex-wrap gap-4 text-xs text-slate-600">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4" />
                            <span>{position.department}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {position.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => handleApplyClick(position.title)}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-blue-700 hover:to-indigo-700 md:w-auto"
                      >
                        Apply now
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SIMPLE HIRING PROCESS */}
      <section className="bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
              hiring process
            </span>
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            We move fast but keep things human and transparent at every step.
          </p>

          <div className="mt-10 grid gap-6 text-left sm:grid-cols-2 md:grid-cols-4">
            {[
              { step: "01", title: "Apply", text: "Share your CV and a short note about what you'd like to work on." },
              { step: "02", title: "Talk", text: "Intro call to understand your experience, goals, and fit." },
              { step: "03", title: "Task", text: "Role-specific assignment or technical discussion where relevant." },
              {
                step: "04",
                title: "Offer",
                text: "We share a clear offer, expectations, and growth plan before you join.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-900/40 p-4 text-sm"
              >
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs font-semibold text-white">
                  {item.step}
                </div>
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-xs text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to join{" "}
            <span className="underline decoration-white/50 decoration-2 underline-offset-4">
              Electronics Hero
            </span>
            ?
          </h2>
          <p className="mt-4 text-base text-indigo-100 sm:text-lg">
            Send us your resume and portfolio. We review every application carefully and reach out to candidates whose
            profiles match current or upcoming roles.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleApplyClick("")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-6 text-base font-semibold text-blue-700 hover:bg-slate-100"
            >
              Send your application
              <ArrowRight className="h-5 w-5" />
            </button>
            <a href="#open-positions">
              <Button
                variant="outline"
                className="rounded-full border-white/70 bg-transparent px-7 py-6 text-base text-white hover:bg-white/10"
              >
                View open roles
              </Button>
            </a>
          </div>
        </div>
      </section>

      {isApplicationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-md rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-200 p-6">
              <h2 className="text-2xl font-bold text-slate-900">Apply Now</h2>
              <button
                onClick={() => setIsApplicationOpen(false)}
                className="text-slate-500 hover:text-slate-700"
                title="Close"
                aria-label="Close application form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 p-6">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-900">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  required
                />
              </div>

              {/* Position */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-900">Position</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleFormChange}
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  required
                >
                  <option value="">Select a position</option>
                  {openPositions.map((pos) => (
                    <option key={pos.title} value={pos.title}>
                      {pos.title} - {pos.category}
                    </option>
                  ))}
                </select>
              </div>

              {/* CV Upload */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-900">Upload CV</label>
                <div className="relative">
                  <input
                    type="file"
                    name="cv"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="cv-upload"
                    required
                  />
                  <label
                    htmlFor="cv-upload"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-blue-300 bg-blue-50 px-4 py-6 text-center transition hover:border-blue-500 hover:bg-blue-100"
                  >
                    <Upload className="h-5 w-5 text-blue-600" />
                    <div className="text-sm">
                      <p className="font-medium text-blue-700">
                        {formData.cv ? formData.cv.name : "Click to upload CV"}
                      </p>
                      <p className="text-xs text-blue-600">PDF, DOC, or DOCX</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 font-semibold text-white transition hover:from-blue-700 hover:to-indigo-700"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </main>
  )
}
