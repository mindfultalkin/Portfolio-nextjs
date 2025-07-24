"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, TrendingUp, Award, CheckCircle, Star, Lightbulb, TrendingDown } from "lucide-react"
import Image from "next/image"

export function MainContent() {
  const stats = [
    { label: "Competitive Advantage", value: "100+", icon: Award, color: "#0894b5" },
    { label: "User Satisfaction", value: "4.9/5", icon: Star, color: "#0894b5" },
    { label: "Reduced Customer Support", value: "95%", icon: TrendingDown, color: "#f48d03" },
  ]

  const services = [
    {
      title: "Corporate Business Communication",
      description:
        "From writing impactful emails to delivering powerful presentations, we help professionals articulate ideas, solve problems collaboratively, and influence effectively.",
      features: ["Email Writing", "Presentation Skills", "Meeting Facilitation", "Negotiation Training"],
      icon: Users,
      color: "#0894b5",
    },
    {
      title: "Programs for Women",
      description:
        "Targeted coaching for early- and mid-career women focusing on assertiveness, networking, emotional intelligence, transitions, and leadership presence.",
      features: ["Leadership Presence", "Assertiveness Training", "Networking Skills", "Career Transitions"],
      icon: Target,
      color: "#f48d03",
    },
    {
      title: "Technical Documentation Services",
      description:
        "We specialize in technical writing for SaaS, software, and product-based businesses — from user manuals to release notes and SOPs.",
      features: ["User Manuals", "API Documentation", "SOPs", "Release Notes"],
      icon: Lightbulb,
      color: "#0894b5",
    },
  ]

  const benefits = [
    "Increased revenue and customer satisfaction",
    "Reduced attrition and rework",
    "Stronger leadership and employee engagement",
    "Improved team collaboration and productivity",
  ]

  return (
    <div className="min-h-screen bg-[#fffcf3] text-[#2c2c2c]">
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0894b5] leading-tight">
                Technical Documenation
              </h1>
              {/* <p className="text-lg sm:text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
                Clear user-focused documentation to simplify complex systems.
              </p> */}
              <h2 className="text-2xl sm:text-3xl lg:text-2xl text-[#0894b5] leading-tight">
                Guiding Users From The First Click
              </h2>
              <p className="text-lg sm:text-1 text-[#666666] mx-auto leading-relaxed">
                User-focused documentation simplifies complex systems by making information clear, accessible, and easy to navigate, enhancing overall user experience.
              </p>
              <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                Stay Ahead with Documentation
              </Badge>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card
                  key={index}
                  className="bg-[#f5f2e8] border-[#e8e5db] text-center hover:shadow-md transition-shadow duration-300"
                >
                  <CardContent className="p-4">
                    <IconComponent className="w-8 h-8 mx-auto mb-2" style={{ color: stat.color }} />
                    <div className="text-2xl font-bold mb-1" style={{ color: stat.color }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#666666]">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Content Strategy Framework Section */}
          <Card className="bg-[#f5f2e8] border-[#e8e5db]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#0894b5] flex items-center">
                Content Strategy Framework
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-1 text-[#666666] mx-auto leading-relaxed">
                A comprehensive approach to organizing technical and support content based on user intent and business needs.
              </p>
              <div className="relative w-full max-w-4xl mx-auto" style={{ maxHeight: '600px' }}>
                <Image
                  src="/content-strategy-framework.png"
                  alt="Content Strategy Framework"
                  width={1200}
                  height={800}
                  className="max-w-[820px] h-auto object-contain mx-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  priority
                />
              </div>
            </CardContent>
            <CardHeader>
              <CardTitle className="text-2xl text-[#0894b5] flex items-center">
                Mindfultalk.in recommends documentation to improve satisfaction and usage.
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-[#fffcf3] p-4 rounded-lg border border-[#e8e5db]">
                <h4 className="font-semibold text-[#0894b5] mb-2">Customer facing:</h4>
                <ul className="list-disc list-inside text-[#666666] text-1">
                  <li>Explainer videos</li>
                  <li>User manuals</li>
                  <li>Product technical documentation</li>
                  <li>Third party integration documentation</li>
                  <li>API documentation</li>
                  <li>FAQs</li>
                  <li>Glossary of terms</li>
                  <li>Customer onboarding documentation</li>
                </ul>
              </div>
              <div className="bg-[#fffcf3] p-4 rounded-lg border border-[#e8e5db]">
                <h4 className="font-semibold text-[#0894b5] mb-2">Internal:</h4>
                <ul className="list-disc list-inside text-[#666666] text-1">
                  <li>User journey</li>
                  <li>Product requirements specifications</li>
                </ul>
              </div>
              <p className="text-1 text-[#666666] mx-auto leading-relaxed">
                Each product or company may choose to create some or all of these documents based on their business needs and the document maturity stage—determined by the product’s complexity, user base, and growth strategy.
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          {/* <div className="text-center bg-gradient-to-r from-[#0894b5]/10 to-[#f48d03]/10 border border-[#e8e5db] rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#0894b5] mb-4">Explore Our Work</h2>
            <p className="text-[#666666] mb-6 max-w-2xl mx-auto">
              Get a glimpse of the quality and clarity we bring to every project. Browse our sample documentation to see how we simplify complex ideas for users.
            </p>
            <div className="flex flex-wrap justify-center gap-4">              
              <Button
                className="bg-[#0894b5] hover:bg-[#0894b5]/90 text-[#fffcf3] px-8 py-3"
                onClick={() => window.location.href = 'C:/Users/diksh/Mindfultalk/git/New/Portfolio/components/knowledge-base-docusaurus.tsx'}
              >
                View Docusaurus Example
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
