"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function CommunicationCoachBot() {
  const workflowSteps = [
    "Planning & Strategy",
    "Content Creation",
    "Technical Review",
    "Editorial Review",
    "Publishing & QA"
  ]

  return (
    <div className="min-h-screen bg-[#fffcf3] text-[#2c2c2c]">
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0894b5] leading-tight">
                Communication Coach Bot
              </h1>
              <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                A Low-Code/No-Code SaaS Platform for WhatsApp Microlearning
              </Badge>
              <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                We created this document to guide teams on deploying the Communication Coach Bot, a low-code/no-code SaaS platform for delivering microlearning content via WhatsApp. It is designed for organizations that need to continuously engage users — such as employees or customers — with structured learning experiences, onboarding flows, or product education.<br />The document includes setup instructions, workflow configuration, API integration with Meta’s WhatsApp platform, and message template documentation — enabling seamless deployment of WhatsApp-based learning journeys like Khan Academy’s BEAM program.
              </p>
              <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                <li>To simplify content delivery for microlearning via WhatsApp — particularly for large, distributed, or mobile-first audiences.</li>
                <li>Learning teams, tech teams, and content managers deploying WhatsApp-based learning experiences (e.g. Khan Academy BEAM).</li>
                <li>AWS EC2 + RDS, Meta Developer account, and WhatsApp Business number.</li>
                <li>Organizations delivering courses, compliance training, onboarding, or awareness content over WhatsApp.</li>
                <li>To provide a structured, easy-to-navigate resource that helps users quickly find the information they need.</li>
                <li>To ensure that all content is accurate, relevant, and up-to-date, enhancing the overall user experience.</li>
                <li>To demonstrate the value of well-organized documentation in improving user satisfaction and product adoption.</li>
              </ul>
            </div>
          </div>

          {/* Documentation Workflow Section */}
          <Card className="bg-[#f5f2e8] border-[#e8e5db]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#0894b5]">
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-[800px] w-full">
                <PDFViewer
                  url="/api-docs/communication-coach-bot.pdf"
                  scale={100}
                  showControls={true}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div >
  )
}
