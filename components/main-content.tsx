"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, TrendingUp, Award, CheckCircle, Star, Lightbulb } from "lucide-react"

export function MainContent() {
  const stats = [
    { label: "Years of Experience", value: "100+", icon: Award, color: "#0894b5" },
    { label: "Professionals Trained", value: "5000+", icon: Users, color: "#f48d03" },
    { label: "Success Rate", value: "95%", icon: TrendingUp, color: "#0894b5" },
    { label: "Client Satisfaction", value: "4.9/5", icon: Star, color: "#f48d03" },
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
              <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                NSRCEL - IIM Bangalore Incubated
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0894b5] leading-tight">
                Making Professionals Communicate Better
              </h1>
              <p className="text-lg sm:text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
                Transforming the way professionals communicate with proven systems that deliver results across corporate
                training, women's programs, and technical documentation services.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#0894b5] hover:bg-[#0894b5]/90 text-[#fffcf3] px-6 py-3">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="border-[#f48d03] text-[#f48d03] hover:bg-[#f48d03] hover:text-[#fffcf3] px-6 py-3 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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

          {/* Who We Are Section */}
          <Card className="bg-[#f5f2e8] border-[#e8e5db]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#0894b5] flex items-center">
                <Target className="w-6 h-6 mr-2" />
                Who We Are
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#2c2c2c] leading-relaxed">
                MindfulTalk.in is an NSRCEL - IIM Bangalore incubated enterprise committed to transforming the way
                professionals communicate. With a combined experience of 100+ years across education and IT, our core
                team empowers individuals and organizations with the tools and training needed for effective business
                communication.
              </p>
              <div className="bg-[#fffcf3] p-4 rounded-lg border border-[#e8e5db]">
                <h4 className="font-semibold text-[#0894b5] mb-2">Our Mission</h4>
                <p className="text-[#666666] text-sm">
                  We go beyond teaching English — we develop real business communication skills that improve clarity,
                  collaboration, and confidence.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Services Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0894b5] text-center">What We Do</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card
                    key={index}
                    className="bg-[#f5f2e8] border-[#e8e5db] h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center" style={{ color: service.color }}>
                        <IconComponent className="w-5 h-5 mr-2" />
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-[#2c2c2c] text-sm leading-relaxed">{service.description}</p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-[#0894b5] text-sm">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-[#666666]">
                              <CheckCircle className="w-3 h-3 text-[#f48d03] mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Why It Matters Section */}
          <Card className="bg-[#f5f2e8] border-[#e8e5db]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#0894b5] flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                Why It Matters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#2c2c2c] leading-relaxed">
                Poor communication is like a leaky pipe — it costs organizations productivity, morale, and revenue. Our
                training directly addresses these gaps, resulting in:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#f48d03] flex-shrink-0" />
                    <span className="text-[#2c2c2c]">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* How We Work Section */}
          <Card className="bg-[#f5f2e8] border-[#e8e5db]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#0894b5] flex items-center">
                <Users className="w-6 h-6 mr-2" />
                How We Work
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#2c2c2c] leading-relaxed">
                We offer personalized workshops (1–2 days), cohort-based programs (3–5 weeks), and technical writing
                services tailored to your needs. We also offer long-term support via communities and coaching.
              </p>
              <div className="bg-[#fffcf3] p-4 rounded-lg border border-[#e8e5db]">
                <h4 className="font-semibold text-[#0894b5] mb-2">Our Clients</h4>
                <p className="text-[#666666] text-sm">
                  We work with a range of professionals — from tech teams, project managers, and customer service reps
                  to entrepreneurs and individuals returning to the workforce. Our programs cater to both individuals
                  and enterprise teams.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#0894b5]/10 to-[#f48d03]/10 border border-[#e8e5db] rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#0894b5] mb-4">Ready to Transform Your Communication?</h2>
            <p className="text-[#666666] mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have improved their communication skills and advanced their careers
              with MindfulTalk.in
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#0894b5] hover:bg-[#0894b5]/90 text-[#fffcf3] px-8 py-3">
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="border-[#f48d03] text-[#f48d03] hover:bg-[#f48d03] hover:text-[#fffcf3] px-8 py-3 bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
