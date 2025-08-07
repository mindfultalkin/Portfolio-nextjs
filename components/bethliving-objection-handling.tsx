"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function BethlivingObjectionHandling() {
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
                                Objection Handling Guide
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Objection Handling Guide | Steel Kitchens Manufacturing
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                This guide helps a kitchen showroom and field sales teams confidently respond to common customer objections around steel kitchens. In many households, customers are still influenced by wood as the “default” material—and this document helps your team shift those beliefs with logic, empathy, and storytelling.<br/>By combining product knowledge with real-life analogies and modular benefits, this guide empowers teams to turn resistance into curiosity—and eventually, into commitment.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                {/* <li>Most customers worry about rust, sound, aesthetics, or familiarity.</li> */}
                                <li>Highlight product features relevant to the concern</li>
                                <li>Highlight company's unique modularity and customization strengths</li>
                                {/* <li>Steel is precision-engineered, safe, eco-friendly, and durable</li> */}
                                {/* <li>Bethliving offers customizable finishes, sizes, and price points</li> */}
                                <li>Objections are an opportunity to build trust—not just counter arguments</li>
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Objection Handling Workflow
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/training-content/bethliving-objection-handling.pdf"
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
