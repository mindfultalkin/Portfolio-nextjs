"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function UnisolObjectionHandling() {
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
                                Handling Sales Objections – Unisol
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Post-Sales Journey | 60+ articles | 12 weeks
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We created this objection handling toolkit to equip Unisol’s sales team with the right strategies, insights, and conversation frameworks to close more deals and build long-term customer relationships. This guide focuses on common objections encountered across verticals (fiber optics OEM, trading, and projects) and maps them to practical, empathetic responses that align with customer priorities.<br/>It reinforces the need to not just sell products—but to understand buyer context, earn trust, and communicate value with confidence.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>their business model, past vendors, payment behavior</li>
                                <li>whether it’s for a tender, project, or resale</li>
                                <li>gauge real intent from verbal/non-verbal cues</li>
                                <li>Product-related (demos, samples, comparisons)</li>
                                <li>Budget & payment (price pushback, credit asks)</li>                                
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Unisol Objection Handling Workflow
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/training-content/unisol-objection-handling.pdf"
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
